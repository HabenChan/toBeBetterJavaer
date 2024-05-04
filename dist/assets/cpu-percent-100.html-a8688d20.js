import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as n,d as a,b as e,e as t}from"./app-23957fcb.js";const l={},r=n("h1",{id:"第十八节-cpu-100-排查优化实战",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第十八节-cpu-100-排查优化实战","aria-hidden":"true"},"#"),a(" 第十八节：CPU 100%排查优化实战")],-1),u={href:"https://javabetter.cn/jvm/oom.html",target:"_blank",rel:"noopener noreferrer"},d=t('<p>收到运维同学的报警，说某些服务器负载非常高，让我们开发定位问题。拿到问题后先去服务器上看了看，发现运行的只有我们的 Java 应用程序。于是先用 <code>ps</code> 命令拿到了应用的 <code>PID</code>。</p><blockquote><p>ps：查看进程的命令；PID：进程 ID。<code>ps -ef | grep java</code> 可以查看所有的 Java 进程。前面也曾讲过。</p></blockquote><p>接着使用 <code>top -Hp pid</code> 将这个进程的线程显示出来。输入大写 P 可以将线程按照 CPU 使用比例排序，于是得到以下结果。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-e9b35104-fce9-40ea-ae91-8bbb7fd8aa96.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>果然，某些线程的 CPU 使用率非常高，99.9% 可不是非常高嘛（😂）。</p>',5),k=n("code",null,"jstack pid > pid.log",-1),v=n("code",null,"dump",-1),g={href:"https://javabetter.cn/jvm/console-tools.html",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,[a("我在上面 99.9% 的线程中随机选了一个 "),n("code",null,"pid=194283"),a(" 的，转换为 16 进制（2f6eb）后在线程快照中查询：")],-1),m=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-f8b051d5-f28d-481e-a0b2-e97151797e3b.jpg",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),f=n("blockquote",null,[n("p",null,"线程快照中线程 ID 都是16进制的。")],-1),h=n("code",null,"Disruptor",-1),j={href:"https://javabetter.cn/jvm/oom.html",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,"真没想到，再来一次！",-1),y={href:"http://fastthread.io/",target:"_blank",rel:"noopener noreferrer"},w=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-d6c9bc1c-9600-47f2-9ff1-d0c9bd8ef849.jpg",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),x=n("p",null,"其中有一项展示了所有消耗 CPU 的线程，我仔细看了下，发现几乎都和上面的堆栈一样。",-1),E=n("p",null,[a("也就是说，都是 "),n("code",null,"Disruptor"),a(" 队列的堆栈，都在执行 "),n("code",null,"java.lang.Thread.yield"),a("。")],-1),P=n("code",null,"yield",-1),D=n("code",null,"CPU",-1),C={href:"https://javabetter.cn/thread/wangzhe-thread.html",target:"_blank",rel:"noopener noreferrer"},U=t(`<p>根据刚才的线程快照发现，处于 <code>RUNNABLE</code> 状态并且都在执行 <code>yield</code> 的线程大概有 30几个。</p><p>初步判断，大量线程执行 <code>yield</code> 之后，在互相竞争导致 CPU 使用率增高，通过对堆栈的分析可以发现，确实和 <code>Disruptor</code> 有关。</p><p>好家伙，又是它。</p><p>既然如此，我们来大致看一下 <code>Disruptor</code> 的使用方式吧。看有多少球友使用过。</p><p>第一步，在 pom.xml 文件中引入 <code>Disruptor</code> 的依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.lmax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>disruptor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.4.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，定义事件 LongEvent：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">LongEvent</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> value<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">long</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;LongEvent{value=&quot;</span> <span class="token operator">+</span> value <span class="token operator">+</span> <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，定义事件工厂：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 定义事件工厂</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">LongEventFactory</span> <span class="token keyword">implements</span> <span class="token class-name">EventFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LongEvent</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">LongEvent</span> <span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">LongEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四步，定义事件处理器：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 定义事件处理器</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">LongEventHandler</span> <span class="token keyword">implements</span> <span class="token class-name">EventHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LongEvent</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token class-name">LongEvent</span> event<span class="token punctuation">,</span> <span class="token keyword">long</span> sequence<span class="token punctuation">,</span> <span class="token keyword">boolean</span> endOfBatch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Event: &quot;</span> <span class="token operator">+</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第五步，定义事件发布者：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指定 Ring Buffer 的大小</span>
    <span class="token keyword">int</span> bufferSize <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>

    <span class="token comment">// 构建 Disruptor</span>
    <span class="token class-name">Disruptor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LongEvent</span><span class="token punctuation">&gt;</span></span> disruptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Disruptor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">LongEventFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            bufferSize<span class="token punctuation">,</span>
            <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">defaultThreadFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 连接事件处理器</span>
    disruptor<span class="token punctuation">.</span><span class="token function">handleEventsWith</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LongEventHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 启动 Disruptor</span>
    disruptor<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 获取 Ring Buffer</span>
    <span class="token class-name">RingBuffer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LongEvent</span><span class="token punctuation">&gt;</span></span> ringBuffer <span class="token operator">=</span> disruptor<span class="token punctuation">.</span><span class="token function">getRingBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 生产事件</span>
    <span class="token class-name">ByteBuffer</span> bb <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">long</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> l <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> l<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        bb<span class="token punctuation">.</span><span class="token function">putLong</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> l<span class="token punctuation">)</span><span class="token punctuation">;</span>
        ringBuffer<span class="token punctuation">.</span><span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> sequence<span class="token punctuation">,</span> buffer<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> event<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>buffer<span class="token punctuation">.</span><span class="token function">getLong</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> bb<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 关闭 Disruptor</span>
    disruptor<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单解释下：</p><ul><li>LongEvent：这是要通过 Disruptor 传递的数据或事件。</li><li>LongEventFactory：用于创建事件对象的工厂类。</li><li>LongEventHandler：事件处理器，定义了如何处理事件。</li><li>Disruptor 构建：创建了一个 Disruptor 实例，指定了事件工厂、缓冲区大小和线程工厂。</li><li>事件发布：示例中演示了如何发布事件到 Ring Buffer。</li></ul><p>大家可以运行看一下输出结果。</p><h2 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题" aria-hidden="true">#</a> 解决问题</h2><p>我查了下代码，发现每一个业务场景在内部都会使用 2 个 <code>Disruptor</code> 队列来解耦。</p><p>假设现在有 7 个业务，那就等于创建了 <code>2*7=14</code> 个 <code>Disruptor</code> 队列，同时每个队列有一个消费者，也就是总共有 14 个消费者（生产环境更多）。</p><p>同时发现配置的消费等待策略为 <code>YieldingWaitStrategy</code>，这种等待策略会执行 yield 来让出 CPU。代码如下：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-49840c0d-2c10-4bcb-80c6-1df7553ddb6c.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>初步来看，和等待策略有很大的关系。</p><h3 id="本地模拟" tabindex="-1"><a class="header-anchor" href="#本地模拟" aria-hidden="true">#</a> 本地模拟</h3><p>为了验证，我在本地创建了 15 个 <code>Disruptor</code> 队列，同时结合监控观察 CPU 的使用情况。</p><p>注意看代码 YieldingWaitStrategy：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-7f3b2fa6-6505-4b67-9f42-0170a236832b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>以及事件处理器：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-d597089d-54e0-49ef-a0f9-41798e84de48.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>创建了 15 个 <code>Disruptor</code> 队列，同时每个队列都用线程池来往 <code>Disruptor队列</code> 里面发送 100W 条数据。消费程序仅仅只是打印一下。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-97b88b4d-2d81-47ab-9beb-830ac122c282.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>跑了一段时间，发现 CPU 使用率确实很高。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-c0ee1da2-29af-4581-b0d8-97f6250401e7.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>同时 <code>dump</code> 线程发现和生产环境中的现象也是一致的：消费线程都处于 <code>RUNNABLE</code> 状态，同时都在执行 <code>yield</code>。</p><p>通过查询 <code>Disruptor</code> 官方文档发现：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-de904a90-8b59-4333-82f5-9ec94a6525a0.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>YieldingWaitStrategy 是一种充分压榨 CPU 的策略，使用<code>自旋 + yield</code>的方式来提高性能。当消费线程（Event Handler threads）的数量小于 CPU 核心数时推荐使用该策略。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-3faf6f7e-0d2c-4cfe-8e3a-07e15601485d.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,38),B=n("code",null,"BlockingWaitStrategy",-1),L={href:"https://javabetter.cn/thread/lock.html",target:"_blank",rel:"noopener noreferrer"},z=t('<p>于是我将等待策略调整为 <code>BlockingWaitStrategy</code>。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-12912ce3-a702-4bb2-a19b-816c22f7d43a.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>运行后的结果如下：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-b4aad83e-af9d-48fc-bcd0-ad2a42588179.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>和刚才的结果对比，发现 CPU 的使用率有明显的降低；同时 dump 线程后，发现大部分线程都处于 waiting 状态。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-56dc1513-8f10-422f-bb2a-ae5dcfb8413f.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="优化解决" tabindex="-1"><a class="header-anchor" href="#优化解决" aria-hidden="true">#</a> 优化解决</h3><p>看样子，将等待策略换为 <code>BlockingWaitStrategy</code> 可以减缓 CPU 的使用，不过我留意到官方对 <code>YieldingWaitStrategy</code> 的描述是这样的：<br> 当消费线程（Event Handler threads）的数量小于 CPU 核心数时推荐使用该策略。</p><p>而现在的使用场景是，消费线程数已经大大的超过了核心 CPU 数，因为我的使用方式是一个 <code>Disruptor</code> 队列一个消费者，所以我将队列调整为 1 个又试了试(策略依然是 <code>YieldingWaitStrategy</code>)。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-b1cbc2c2-828a-46e8-ba14-86cd0fa660c6.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>查看运行效果：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/cpu-percent-100-f8fb7682-a61a-407d-923c-890a16bce109.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>跑了一分钟，发现 CPU 的使用率一直都比较平稳。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>排查到此，可以得出结论了，想要根本解决这个问题需要将我们现有的业务拆分；现在是一个应用里同时处理了 N 个业务，每个业务都会使用好几个 <code>Disruptor</code> 队列。</p><p>由于在一台服务器上运行，所以就会导致 CPU 的使用率居高不下。</p><p>由于是老系统，所以我们的调整方式如下：</p><ul><li>先将等待策略调整为 <code>BlockingWaitStrategy</code>，可以有效降低 CPU 的使用率（业务上也还能接受）。</li><li>第二步就需要将应用拆分，一个应用处理一种业务类型；然后分别部署，这样可以互相隔离互不影响。</li></ul><p>当然还有一些其他的优化，比如说这次 dump 发现应用程序创建了 800+ 个线程。创建线程池的方式也是核心线程数和最大线程数一样，就导致一些空闲的线程得不到回收。应该将创建线程池的方式调整一下，将线程数降下来，尽量物尽其用。</p><p>好，生产环境中，一般也就是会遇到 OOM 和 CPU 这两个问题，那也希望这种排查思路能够给大家一些启发~</p>',20),S={href:"https://github.com/crossoverJie/JCSprout/tree/master/src/main/java/com/crossoverjie/disruptor",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/crossoverJie/JCSprout/blob/master/docs/jvm/cpu-percent-100.md",target:"_blank",rel:"noopener noreferrer"},I=n("hr",null,null,-1),O={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},W={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},q=n("p",null,[a("微信搜 "),n("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"222"),a(" 即可免费领取。")],-1),H=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function N(R,F){const s=o("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[a("前面给大家讲过一次 "),n("a",u,[a("OOM 的优化排查实战"),e(s)]),a("，今天再给大家讲一个 CPU 100% 优化排查实战。")]),d,n("p",null,[a("为了方便问题定位，我立马使用 "),k,a(" 将线程栈 "),v,a(" 到日志文件中。关于 "),n("a",g,[a("jstack"),e(s)]),a(" 命令，我们前面刚刚讲过。")]),b,m,f,n("p",null,[a("发现这是 "),h,a(" 的一个堆栈，好家伙，这不前面刚遇到过嘛，老熟人啊， "),n("a",j,[a("强如 Disruptor 也发生内存溢出？"),e(s)])]),_,n("p",null,[a("为了更加直观的查看线程的状态，我将快照信息上传到了专门的分析平台上："),n("a",y,[a("http://fastthread.io/"),e(s)]),a("，估计有球友用过。")]),w,x,E,n("p",null,[a("众所周知，"),P,a(" 方法会暗示当前线程让出 "),D,a(" 资源，让其他线程来竞争（"),n("a",C,[a("多线程"),e(s)]),a("的时候我们讲过 yield，相信大家还有印象）。")]),U,n("p",null,[a("同时查到其他的等待策略，比如说 "),B,a(" （也是默认的策略），使用的是"),n("a",L,[a("锁"),e(s)]),a("的机制，对 CPU 的使用率不高。")]),z,n("blockquote",null,[n("ul",null,[n("li",null,[a("演示代码已上传至 GitHub："),n("a",S,[a("https://github.com/crossoverJie/JCSprout"),e(s)])]),n("li",null,[a("参考链接：crossoverJie 的"),n("a",J,[a("CPU 100% 排查"),e(s)])])])]),I,n("p",null,[a("GitHub 上标星 10000+ 的开源知识库《"),n("a",O,[a("二哥的 Java 进阶之路"),e(s)]),a("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),n("a",W,[a("太赞了，GitHub 上标星 10000+ 的 Java 教程"),e(s)])]),q,H])}const T=p(l,[["render",N],["__file","cpu-percent-100.html.vue"]]);export{T as default};
