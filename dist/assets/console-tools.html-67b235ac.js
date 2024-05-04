import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as p,a,d as t,b as s,e}from"./app-23957fcb.js";const d={},l=e(`<h1 id="第十四节-jvm-性能监控之命令行篇" tabindex="-1"><a class="header-anchor" href="#第十四节-jvm-性能监控之命令行篇" aria-hidden="true">#</a> 第十四节：JVM 性能监控之命令行篇</h1><p>记得 2014 年我在写大宗期货交易平台的时候，遇到了一些棘手的问题，可能是因为我的并发编程知识掌握的不够扎实，导致出现了内存泄漏的问题。</p><p>当时排查了好久，用的工具就是 JDK 自带的 jconsole，之前也没有过类似的性能监控经验，就导致在查找问题的时候非常痛苦，至今印象深刻。</p><p>那今天我们就从工具篇出发，来看看这些命令行工具的具体使用方法，以及如何排查问题。</p><h2 id="jdk-性能监控工具" tabindex="-1"><a class="header-anchor" href="#jdk-性能监控工具" aria-hidden="true">#</a> JDK 性能监控工具</h2><p>除了我们的老朋友 java 和 javac 命令，在 Java 的 bin 目录下，还有很多其他的命令行工具，比如说用于性能监控的 jps、jstat、jinfo、jmap、jstack、jcmd 等等。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106163547.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我用的 macOS，Windows 用户看到的可能是带有 .exe 结尾的，但是功能都是一样的，我就不再刻意去截图了。</p><p>接下来，我来给大家一一介绍一下这些工具的用途，认个脸熟。</p><h3 id="jps-查看虚拟机进程" tabindex="-1"><a class="header-anchor" href="#jps-查看虚拟机进程" aria-hidden="true">#</a> jps：查看虚拟机进程</h3><p>jps（Java Virtual Machine Process Status Tool）类似 Linux 下的 ps，用于快速查看哪些 Java 应用正在运行，以及它们的进程 ID，这对于进一步使用其他 JVM 工具进行诊断是必要的。</p><p>jps 命令格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jps [ options ] [ hostid ] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>jps 命令示例：</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106165017.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,15),r={href:"https://paicoding.com/",target:"_blank",rel:"noopener noreferrer"},u=e(`<p>②、pid 是什么？pid 是进程 ID，是操作系统分配给进程的唯一标识符，可以用来查看进程的详细信息。</p><p>通常情况下，我们关闭一个进程可以通过右上角的 X 号来完成，但有了 pid，我们可以直接在命令行通过 kill 命令来关闭进程，比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kill -9 pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>意思是强制关闭 pid 对应的进程，新手可千万别在生产环境下乱 kill 哈（😂）。</p><p>再来看一下 jps 的常用选项：</p><table><thead><tr><th>选项列表</th><th>描述</th></tr></thead><tbody><tr><td>-q</td><td>只输出进程 ID，忽略主类信息</td></tr><tr><td>-l</td><td>输出主类全名，或者执行 JAR 包则输出路径</td></tr><tr><td>-m</td><td>输出虚拟机进程启动时传递给主类 main() 方法的参数</td></tr><tr><td>-v</td><td>输出虚拟机进程启动时的 JVM 参数</td></tr></tbody></table><h3 id="jstat-查看-jvm-运行时信息" tabindex="-1"><a class="header-anchor" href="#jstat-查看-jvm-运行时信息" aria-hidden="true">#</a> jstat：查看 JVM 运行时信息</h3>`,7),g={href:"https://javabetter.cn/jvm/neicun-jiegou.html",target:"_blank",rel:"noopener noreferrer"},m=e(`<p>jstat 命令格式为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jstat [ option vmid [interval[s|ms] [count]] ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项 option 主要分为三类：类加载、垃圾收集、运行期编译状况。</p><p>①、<code>-class</code>：监视类装载、卸载数量、总空间以及类装载所耗费的时间。</p><p>如下命令 <code>jstat -class -t 75952 1000 2</code> 会输出进程 75952 的类装载信息，每秒统计一次，一共输出两次。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106170039.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Loaded：加载的类的数量。</li><li>Bytes：所有加载类占用的空间大小。</li><li>Unloaded：卸载的类的数量。</li><li>Time：类加载器所花费的时间。</li></ul>`,7),h=a("code",null,"-gc",-1),v={href:"https://javabetter.cn/jvm/whereis-the-object.html",target:"_blank",rel:"noopener noreferrer"},b=e(`<p>如下命令 <code>jstat -gc 75952 1000 2</code> 会输出进程 75952 的 GC 信息，每秒统计一次，一共输出两次。结果比较多，我就截断折叠了一下，方便大家查看。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106171134.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>S0C, S1C, S0U, S1U：Survivor 区的大小和使用情况，一个 From 一个 To，C 为当前大小（Current），U 为已使用大小（Used）。</li><li>EC, EU：Eden 区的大小和使用情况。</li><li>OC, OU：老年代（Old）的大小和使用情况。</li><li>MC, MU：元空间（Metaspace）的大小和使用情况。</li><li>GC，GCC：GC 表示垃圾回收器进行 Minor GC（年轻代垃圾回收）的累计次数和总时间；GCC 表示垃圾回收器进行 Major GC（老年代垃圾回收，也称为 Full GC）的累计次数和总时间。</li></ul><p>③、<code>-compiler</code>：监视 JIT 编译器编译过的方法、耗时等信息。</p><ul><li>Compiled：编译的方法数量。</li><li>Failed：编译失败的方法数量。</li><li>Invalid：失效的编译方法数量。</li><li>Time：编译所花费的时间。</li></ul><p>如下命令 <code>jstat -compiler 75952 1000 2</code> 会输出进程 75952 的编译信息，每秒统计一次，一共输出两次。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106172207.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>好，我们再来总结一下 jstat 的主要选项，见下表：</p><table><thead><tr><th><strong>选项列表</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>-class</td><td>监视类加载、卸载数量、总空间以及类装载所耗费时长</td></tr><tr><td>-gc</td><td>监视 Java 堆情况，包括 Eden 区、2 个 Survivor 区、老年代、元空间等，容量、已用空间、垃圾收集时间合计等信息</td></tr><tr><td>-gccapacity</td><td>监视内容与-gc 基本一致，但输出主要关注 Java 堆各个区域使用到的最大、最小空间</td></tr><tr><td>-gcutil</td><td>监视内容与-gc 基本相同，但输出主要关注已使用空间占总空间的百分比</td></tr><tr><td>-gccause</td><td>与 -gcutil 功能一样，但是会额外输出导致上一次垃圾收集产生的原因</td></tr><tr><td>-gcnew</td><td>监视新生代垃圾收集情况</td></tr><tr><td>-gcnewcapacity</td><td>监视内容与 -gcnew 基本相同，输出主要关注使用到的最大、最小空间</td></tr><tr><td>-gcold</td><td>监视老年代垃圾收集情况</td></tr><tr><td>-gcoldcapacity</td><td>监视内容与 -gcold 基本相同，输出主要关注使用到的最大、最小空间</td></tr><tr><td>-compiler</td><td>输出即时编译器编译过的方法、耗时等信息</td></tr><tr><td>-printcompilation</td><td>输出已经被即时编译的方法</td></tr></tbody></table><h3 id="jinfo-查看虚拟机配置" tabindex="-1"><a class="header-anchor" href="#jinfo-查看虚拟机配置" aria-hidden="true">#</a> jinfo：查看虚拟机配置</h3><p>jinfo（Configuration Info for Java）用于在补重启应用的情况下，调整虚拟机的各项参数，或者输出 Java 进程的详细信息。</p><p>jinfo 命令格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jinfo [ option ] pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如下命令 <code>jinfo -flags 88952</code> 会输出进程 88952 的 JVM 参数信息。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106174007.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>不过很遗憾的是，我的 macOS 系统上，jinfo 命令无法执行成功，后来经过各种实验找到了解决办法。</p><p>可能的原因是，我的 macOS 上装了太多的 JDK 版本，导致 Intellij IDEA 中编译的 JDK 和 jinfo 的版本不一致。</p><p>那怎么解决呢？</p><p>尝试方案 1：用相同的 JDK 版本编译运行 Java 程序，并使用相同的 JDK 的 jinfo 来查看。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106182926.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>结果依然报错，可能的原因是 JDK 版本过旧。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106183019.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>尝试方案 2： 用 JDK 11 来测试，代码用 JDK 11 编译和运行。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106183211.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后用 JDK 11 的 jinfo 来查看，成功了。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106183617.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再试一下 <code>jinfo -flags 10025</code> 命令，也 OK。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106183731.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,28),k={href:"https://javabetter.cn/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},f=a("h3",{id:"jmap-导出堆快照",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#jmap-导出堆快照","aria-hidden":"true"},"#"),t(" jmap：导出堆快照")],-1),j={href:"https://javabetter.cn/jvm/neicun-jiegou.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://javabetter.cn/jvm/gc-collector.html",target:"_blank",rel:"noopener noreferrer"},x=e(`<p>jmap 命令格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jmap [ option ] vmid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如下命令 <code>jmap -histo 10025</code> 会输出进程 10025 的堆内存中所有对象的数量和占用内存大小的汇总信息，按照内存使用量排序。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106185906.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如下命令 <code>jmap -dump:format=b,file=heap.hprof 10025</code> 会输出进程 10025 的堆快照信息，保存到文件 heap.hprof 中。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106184317.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>简单解释一下这条命令：</p><ul><li>format：文件格式，这里是 b，表示二进制格式。</li><li>file：文件名。</li></ul><p>那么，我们可以用什么工具来打开这个文件呢？后面会讲。我们先来看一下 jmap 的主要选项:</p><table><thead><tr><th><strong>选项</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>-dump</td><td>生成 Java 堆转储快照。</td></tr><tr><td>-finalizerinfo</td><td>显示在 F-Queue 中等待 Finalizer 线程执行 finalize 方法的对象。Linux 平台</td></tr><tr><td>-heap</td><td>显示 Java 堆详细信息，比如：用了哪种回收器、参数配置、分代情况。Linux 平台</td></tr><tr><td>-histo</td><td>显示堆中对象统计信息，包括类、实例数量、合计容量</td></tr><tr><td>-F</td><td>当虚拟机进程对 -dump 选项没有响应式，可以强制生成快照。Linux 平台</td></tr></tbody></table><h3 id="jstack-跟踪java堆栈" tabindex="-1"><a class="header-anchor" href="#jstack-跟踪java堆栈" aria-hidden="true">#</a> jstack：跟踪Java堆栈</h3><p>jstack 用于打印出 JVM 中某个进程或远程调试服务的线程堆栈信息（一般称为 threaddump 或者 javacore 文件）。它常用于诊断应用程序中的线程问题，比如线程死锁、死循环或长时间等待。</p><p>jstack 命令格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jstack [ option ] vmid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如下 <code>jstack -l 10025</code> 会输出进程 10025 的线程堆栈信息，包括锁信息。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106191343.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>jstack 工具主要选项：</p><table><thead><tr><th><strong>选项</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>-F</td><td>当正常输出的请求不被响应时，强制输出线程堆栈</td></tr><tr><td>-l</td><td>除了堆栈外，显示关于锁的附加信息</td></tr><tr><td>-m</td><td>如果调用的是本地方法的话，可以显示 c/c++的堆栈</td></tr></tbody></table><p>我们来通过一个线程死锁的问题，来看一下 jstack 的使用方法。</p><p>首先，我们编写一个死锁的程序：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">DeadLockDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> lock1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> lock2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lock1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;线程1获取到了锁1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lock2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;线程1获取到了锁2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lock2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;线程2获取到了锁2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lock1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;线程2获取到了锁1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),_={href:"https://javabetter.cn/thread/thread-bring-some-problem.html#%E6%B4%BB%E8%B7%83%E6%80%A7%E9%97%AE%E9%A2%98",target:"_blank",rel:"noopener noreferrer"},J=e(`<p>运行这段代码，果然卡住了。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106192010.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>运行 <code>jstack pid</code> 命令，可以看到死锁的线程信息。诚不欺我！</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106192123.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="jcmd-多功能命令" tabindex="-1"><a class="header-anchor" href="#jcmd-多功能命令" aria-hidden="true">#</a> jcmd：多功能命令</h3><p>jcmd 是一个多功能命令，可以用于收集堆转储、生成 JVM 和 Java 应用程序的性能数据，以及动态更改某些 Java 运行时参数。jcmd 提供的功能比其他单一命令，如 jstack, jmap, jstat 都要强大。</p><p>例如，使用 <code>jcmd -l</code> 列出当前的所有 Java 应用，和 jps 类似：</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106205012.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>例如，使用 <code>jcmd 10025 help</code> 查看进程 10025 支持的命令：</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106210117.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>例如，使用 <code>jcmd 10025 VM.flags</code> 查看进程 10025 的 JVM 参数，相当于 <code>jinfo -flags 10025</code>：</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106210235.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>例如，使用 <code>jcmd 10025 Thread.print</code> 查看进程 10025 的线程信息，相当于 <code>jstack 10025</code>：</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106210358.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>jmcd 命令格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> jcmd &lt;pid | main class&gt; &lt;command ... | PerfCounter.print | -f  file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>jmcd 的主要选项：</p><table><thead><tr><th>选项</th><th>描述</th><th>补充</th></tr></thead><tbody><tr><td>help</td><td>打印帮助信息，示例：jcmd help []</td><td>无</td></tr><tr><td>ManagementAgent.stop</td><td>停止 JMX Agent</td><td>无</td></tr><tr><td>ManagementAgent.start_local</td><td>开启本地 JMX Agent</td><td>无</td></tr><tr><td>ManagementAgent.start</td><td>开启 JMX Agent</td><td>无</td></tr><tr><td>Thread.print</td><td>参数-l 打印 java.util.concurrent 锁信息，相当于：jstack</td><td>无</td></tr><tr><td>PerfCounter.print</td><td>相当于：jstat -J-Djstat.showUnsupported=true -snap</td><td>无</td></tr><tr><td>GC.class_histogram</td><td>相当于：jmap -histo</td><td>无</td></tr><tr><td>GC.heap_dump</td><td>相当于：jmap -dump:format=b,file=xxx.bin</td><td>无</td></tr><tr><td>GC.run_finalization</td><td>相当于：System.runFinalization()</td><td>无</td></tr><tr><td>GC.run</td><td>相当于：System.gc()</td><td>无</td></tr><tr><td>VM.uptime</td><td>参数-date 打印当前时间，VM 启动到现在的时候，以秒为单位显示</td><td>无</td></tr><tr><td>VM.flags</td><td>参数-all 输出全部，相当于：jinfo -flags , jinfo -flag</td><td>无</td></tr><tr><td>VM.system_properties</td><td>相当于：jinfo -sysprops</td><td>无</td></tr><tr><td>VM.command_line</td><td>相当于：jinfo -sysprops</td><td>grep command</td></tr><tr><td>VM.version</td><td>相当于：jinfo -sysprops</td><td>grep version</td></tr></tbody></table><h2 id="操作系统工具" tabindex="-1"><a class="header-anchor" href="#操作系统工具" aria-hidden="true">#</a> 操作系统工具</h2><p>除了 JDK 自带的命令行，我们很多时候还要使用操作系统为我们提供的命令行工具，来完成性能监控的监测。</p><p>比如说 top、vmstat、iostat、netstat 等等。</p><h3 id="top-显示系统整体资源使用情况" tabindex="-1"><a class="header-anchor" href="#top-显示系统整体资源使用情况" aria-hidden="true">#</a> top：显示系统整体资源使用情况</h3><p>top 命令用于实时显示系统中各个进程的资源占用情况，如 CPU 和内存使用率。常用于快速查看哪些进程占用了较高的资源。</p><p>该命令的输出结果是实时变化的，可以使用 <code>ctrl + c</code> 来退出。下图是我的 macOS 上输出的结果：</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106210830.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>top 命令的输出可以分为两个部分：前半部分是系统统计信息，后半部分是进程信息。</p><h4 id="统计信息" tabindex="-1"><a class="header-anchor" href="#统计信息" aria-hidden="true">#</a> 统计信息</h4><p>统计信息是针对整个系统的，主要包括系统负载、CPU 使用率、内存使用情况、虚拟内存使用情况、网络和硬盘使用情况等。</p><ul><li>第 1 行是进程和线程信息，分别表示总进程数、正在运行的进程数、睡眠的进程数、线程数。</li><li>第 2 行是负载均衡和 CPU 使用率信息，<code>Load Avg: 4.02, 3.89, 3.29</code>：这表示过去 1 分钟、5 分钟和 15 分钟的平均系统负载。负载大于 3 意味着系统相对繁忙；<code>CPU usage: 6.97% user, 3.54% sys, 89.47% idle</code>：用户占用了 6.97% 的 CPU，系统占用了 3.54%，还有 89.47% 的 CPU 处于空闲。</li><li>第 3 行是共享库（Shared Libraries）内存使用的信息。这一行的数据主要涉及到操作系统加载的共享库（如动态链接库或共享对象文件）。</li><li>第 4 行是内存区域（Memory Regions）的使用信息。内存区域是指操作系统为应用程序和进程分配的内存块。每个内存区域都有特定的用途和属性，比如代码、数据、堆、栈等。这一行的数据提供了系统内存使用的更详细的视图。</li><li>第 5 行是内存使用情况，<code>PhysMem: 30G used (3018M wired), 1547M unused</code>：内存总共使用了 30GB，还有大约 1547MB 的内存未使用；</li><li>第 6 行是虚拟内存的信息，虚拟内存是计算机内存管理的一种技术，它为每个程序提供一种“虚拟”的地址空间，这些地址空间对于每个程序来说都是连续的，但实际上可能分散在物理内存和磁盘的交换空间（swap space）上。</li><li>第 7 行是网络和硬盘信息，<code>Networks: packets: 22655692/19G in, 19180791/11G out</code>：网络接收了 19GB 的数据包；发送了约 11GB 的数据包；<code>Disks: 14866544/288G read, 15176739/251G written</code>：硬盘读取 14866544 次；写入了约 15176739 次。</li></ul><h4 id="进程信息" tabindex="-1"><a class="header-anchor" href="#进程信息" aria-hidden="true">#</a> 进程信息</h4><p>在进程信息区中，显示了系统各个进程的资源使用情况。主要字段的含义：</p><ul><li>PID：进程 id</li><li>COMMAND：命令名/命令行</li><li>%CPU：进程占用的 CPU 使用率</li><li>TIME：进程使用的 CPU 时间总计，单位 1/100 秒</li><li>MEM：进程使用的物理内存和虚拟内存大小，单位 KB</li></ul><p>Windows 用户可以使用 tasklist 命令来查看进程信息。</p><h3 id="vmstat-监控内存和-cpu" tabindex="-1"><a class="header-anchor" href="#vmstat-监控内存和-cpu" aria-hidden="true">#</a> vmstat：监控内存和 CPU</h3><p>vmstat 是 Linux 上的一款功能比较齐全的性能监测工具。它可以统计 CPU、内存、swap 的使用情况。</p><p>一般 vmstat 工具的使用是通过两个数字参数来完成的，第一个参数是采样的时间间隔数，单位是秒，第二个参数是采样的次数，如:</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106213508.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>vmstat 1 3</code> 命令表示每秒采样一次，共三次。</p><p>输出的各个列的含义：</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106214547.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>vmstat 的用法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vmstat [options] [delay [count]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vmstat 的主要选项：</p><ul><li><code>[options]</code>：提供不同的输出选项，例如 -a 显示活跃和非活跃内存，-d 显示磁盘统计，-s 显示内存统计等。</li><li><code>[delay]</code>：在连续模式下，两次报告之间的延迟时间（秒）。</li><li><code>[count]</code>：要显示的报告数量。</li></ul><h3 id="iostat-监控-io-使用" tabindex="-1"><a class="header-anchor" href="#iostat-监控-io-使用" aria-hidden="true">#</a> iostat：监控 IO 使用</h3><p>iostat 用于统计 CPU 使用信息和磁盘的 IO 信息。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106214958.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>基本用法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>iostat [options] [interval [count]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>[options]</code>：提供不同的输出选项。例如，-c 显示 CPU 使用情况，-d 显示磁盘使用情况，-x 显示扩展统计信息等。</li><li><code>[interval]</code>：报告之间的延迟时间（秒）。</li><li><code>[count]</code>：显示报告的次数。</li></ul><p><code>iostat</code> 的输出包括两个主要部分：</p><ol><li><p><strong>CPU 使用情况</strong>：</p><ul><li><code>user</code>：用户程序使用的 CPU 时间百分比。</li><li><code>system</code>：系统（内核）级程序使用的 CPU 时间百分比。</li><li><code>idle</code>：CPU 空闲时间百分比。</li></ul></li><li><p><strong>磁盘 I/O 统计</strong>：</p><ul><li><code>tps</code>（Transfers Per Second）：每秒传输次数。</li><li><code>kB_read/s</code>：每秒读取的千字节数。</li><li><code>kB_wrtn/s</code>：每秒写入的千字节数。</li><li><code>kB_read</code> 和 <code>kB_wrtn</code>：分别是读取和写入的总千字节数。</li></ul><p>如果使用 <code>-x</code> 选项，会显示更详细的统计信息，例如：</p><ul><li><code>%util</code>：表示磁盘的繁忙程度。</li><li><code>await</code>：I/O 请求的平均等待时间（毫秒）。</li><li><code>svctm</code>：服务时间，即完成一个 I/O 请求所需的平均时间。</li></ul></li></ol><p>使用示例如下：</p><p>①、查看 CPU 和所有磁盘设备的基本 I/O 统计信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iostat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>②、查看磁盘 I/O 统计信息，每 2 秒更新一次：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iostat <span class="token parameter variable">-dx</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>③、只查看 CPU 使用情况：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iostat <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="netstat-监控网络使用" tabindex="-1"><a class="header-anchor" href="#netstat-监控网络使用" aria-hidden="true">#</a> netstat：监控网络使用</h3><p><code>netstat</code>（network statistics）用于监控和显示网络相关信息。基本用法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>[options]</code>：提供不同的输出选项。常见的选项包括 <code>-a</code>（显示所有连接和侦听端口），<code>-t</code>（显示 TCP 连接），<code>-u</code>（显示 UDP 连接），<code>-n</code>（以数字形式显示地址和端口号），<code>-r</code>（显示路由表）等。</li></ul><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/console-tools-20240106220045.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>netstat</code> 的输出通常包括以下几个方面的信息：</p><p>①、<strong>网络连接</strong>：显示活动的或监听的套接字连接，包括服务名、本地地址和端口、远程地址和端口、连接状态等。</p><p>②、<strong>路由表</strong>：显示网络路由表，包括目的地址、网关、子网掩码、使用的接口等。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>今天我们介绍了 JDK 自带的性能监控工具，以及操作系统提供的一些命令行工具。</p><p>这些工具在排查问题时非常有用，希望大家一定要掌握，以备不时之需。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,71),C={href:"https://mp.weixin.qq.com/s/b2ET5uDD-w74d-CnVLinwg",target:"_blank",rel:"noopener noreferrer"},w=a("hr",null,null,-1),M={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},z={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},P=a("p",null,[t("微信搜 "),a("strong",null,"沉默王二"),t(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),a("strong",null,"222"),t(" 即可免费领取。")],-1),U=a("figure",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1);function D(S,V){const n=i("ExternalLinkIcon");return c(),p("div",null,[l,a("p",null,[t("①、注意看第三个进程正是我本地运行着的"),a("a",r,[t("技术派"),s(n)]),t("实战项目，一个前后端分离的 Spring Boot+React 的社区项目，帮助不少球友拿到了心仪的校招 Offer。")]),u,a("p",null,[t("jstat（Java Virtual Machine Statistics Monitoring Tool）用于监控 JVM 的各种"),a("a",g,[t("运行时状态"),s(n)]),t("信息，提供有关垃圾回收、类加载、JIT 编译等运行数据。")]),m,a("p",null,[t("②、"),h,t("：监视 "),a("a",v,[t("Java 堆"),s(n)]),t("状况，包括 Eden 区、2 个 Survivor 区、老年代等容量、已用空间、GC 时间合计等信息。")]),b,a("p",null,[t("之所以把这个问题的解决思路同步上来，也是希望能给"),a("a",k,[t("球友们"),s(n)]),t("提供一些日常遇到开发问题时的解决思路。")]),f,a("p",null,[t("jmap 命令用于生成堆转储快照（一般称为 heap dump 或 dump 文件）。堆转储包含了 "),a("a",j,[t("JVM 堆"),s(n)]),t("中所有对象的信息，包括类、属性、引用等。这对于分析内存泄漏和优化内存使用非常有帮助。")]),a("p",null,[t("当然了，jmap 的作用不局限于此，它还可以查看堆的空间使用率、当前用的是哪种"),a("a",y,[t("垃圾收集器"),s(n)]),t("等。")]),x,a("p",null,[t("我们创建了两个线程，每个线程都试图按照不同的顺序获取两个"),a("a",_,[t("锁（lock1 和 lock2）"),s(n)]),t("。这种锁的获取顺序不一致很容易导致死锁。")]),J,a("ul",null,[a("li",null,[t("星球嘉宾三分恶："),a("a",C,[t("JVM性能监控命令行篇"),s(n)])])]),w,a("p",null,[t("GitHub 上标星 10000+ 的开源知识库《"),a("a",M,[t("二哥的 Java 进阶之路"),s(n)]),t("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),a("a",z,[t("太赞了，GitHub 上标星 10000+ 的 Java 教程"),s(n)])]),P,U])}const G=o(d,[["render",D],["__file","console-tools.html.vue"]]);export{G as default};
