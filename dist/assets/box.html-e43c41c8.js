import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as s,d as n,b as e,e as p}from"./app-a425eb61.js";const i={},u=s("h1",{id:"_13-3-深入剖析java中的拆箱和装箱",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_13-3-深入剖析java中的拆箱和装箱","aria-hidden":"true"},"#"),n(" 13.3 深入剖析Java中的拆箱和装箱")],-1),r={href:"https://javabetter.cn/basic-grammar/basic-data-type.html",target:"_blank",rel:"noopener noreferrer"},k=p(`<p>“是的，三妹。基本类型和包装类型的区别主要有以下 4 点，我来带你学习一下。”我回答说。我们家的斜对面刚好是一所小学，所以时不时还能听到朗朗的读书声，让人心情非常愉快。</p><p>“三妹，你准备好了吗？我们开始吧。”</p><p>“第一，<strong>包装类型可以为 null，而基本类型不可以</strong>。别小看这一点区别，它使得包装类型可以应用于 POJO 中，而基本类型则不行。”</p><p>“POJO 是什么呢？”遇到不会的就问，三妹在这一点上还是非常兢兢业业的。</p><p>“POJO 的英文全称是 Plain Ordinary Java Object，翻译一下就是，简单无规则的 Java 对象，只有字段以及对应的 setter 和 getter 方法。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Writer</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和 POJO 类似的，还有数据传输对象 DTO（Data Transfer Object，泛指用于展示层与服务层之间的数据传输对象）、视图对象 VO（View Object，把某个页面的数据封装起来）、持久化对象 PO（Persistant Object，可以看成是与数据库中的表映射的 Java 对象）。</p><p>“那为什么 POJO 的字段必须要用包装类型呢？”三妹问。</p>`,8),d={href:"https://javabetter.cn/pdf/ali-java-shouce.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://javabetter.cn/exception/npe.html",target:"_blank",rel:"noopener noreferrer"},m=p(`<p>“什么是自动拆箱呢？”</p><p>“自动拆箱指的是，将包装类型转为基本类型，比如说把 Integer 对象转换成 int 值；对应的，把基本类型转为包装类型，则称为自动装箱。”</p><p>“哦。”</p><p>“那接下来，我们来看第二点不同。<strong>包装类型可用于泛型，而基本类型不可以</strong>，否则就会出现编译错误。”一边说着，我一边在 Intellij IDEA 中噼里啪啦地敲了起来。</p><p>“三妹，你瞧，编译器提示错误了。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 提示 Syntax error, insert &quot;Dimensions&quot; to complete ReferenceType</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>“为什么呢？”三妹及时地问道。</p>`,7),b={href:"https://javabetter.cn/basic-extra-meal/generic.html",target:"_blank",rel:"noopener noreferrer"},g=s("p",null,[n("“那，接下来，我们来说第三点，"),s("strong",null,"基本类型比包装类型更高效"),n("。”我喝了一口茶继续说道。")],-1),h={href:"https://app.diagrams.net/",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"draw.io",-1),y=p(`<figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/box-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>很显然，相比较于基本类型而言，包装类型需要占用更多的内存空间，不仅要存储对象，还要存储引用。假如没有基本类型的话，对于数值这类经常使用到的数据来说，每次都要通过 new 一个包装类型就显得非常笨重。</p><p>“三妹，你想知道程序运行时，数据都存储在什么地方吗？”</p><p>“嗯嗯，哥，你说说呗。”</p><p>“通常来说，有 4 个地方可以用来存储数据。”</p><p>1）寄存器。这是最快的存储区，因为它位于 CPU 内部，用来暂时存放参与运算的数据和运算结果。</p><p>2）栈。位于 RAM（Random Access Memory，也叫主存，与 CPU 直接交换数据的内部存储器）中，速度仅次于寄存器。但是，在分配内存的时候，存放在栈中的数据大小与生存周期必须在编译时是确定的，缺乏灵活性。基本数据类型的值和对象的引用通常存储在这块区域。</p><p>3）堆。也位于 RAM 区，可以动态分配内存大小，编译器不必知道要从堆里分配多少存储空间，生存周期也不必事先告诉编译器，Java 的垃圾收集器会自动收走不再使用的数据，因此可以得到更大的灵活性。但是，运行时动态分配内存和销毁对象都需要占用时间，所以效率比栈低一些。new 创建的对象都会存储在这块区域。</p><p>4）磁盘。如果数据完全存储在程序之外，就可以不受程序的限制，在程序没有运行时也可以存在。像文件、数据库，就是通过持久化的方式，让对象存放在磁盘上。当需要的时候，再反序列化成程序可以识别的对象。</p><p>“能明白吗？三妹？”</p><p>“这节讲完后，我再好好消化一下。”</p><p>“那好，我们来说第四点，<strong>两个包装类型的值可以相同，但却不相等</strong>。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> chenmo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> wanger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>chenmo <span class="token operator">==</span> wanger<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>chenmo<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>wanger <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“两个包装类型在使用“==”进行判断的时候，判断的是其指向的地址是否相等，由于是两个对象，所以地址是不同的。”</p><p>“而 <code>chenmo.equals(wanger)</code> 的输出结果为 true，是因为 <code>equals()</code> 方法内部比较的是两个 int 值是否相等。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Integer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然 chenmo 和 wanger 的值都是 10，但他们并不相等。换句话说就是：将“==”操作符应用于包装类型比较的时候，其结果很可能会和预期的不符。</p><p>“三妹，瞧，<code>((Integer)obj).intValue()</code> 这段代码就是用来自动拆箱的。下面，我们来详细地说一说自动装箱和自动拆箱。”</p><p>既然有基本类型和包装类型，肯定有些时候要在它们之间进行转换。把基本类型转换成包装类型的过程叫做装箱（boxing）。反之，把包装类型转换成基本类型的过程叫做拆箱（unboxing）。</p><p>在 Java 1.5 之前，开发人员要手动进行装拆箱，比如说：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> chenmo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 手动装箱</span>
<span class="token keyword">int</span> wanger <span class="token operator">=</span> chenmo<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 手动拆箱</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Java 1.5 为了减少开发人员的工作，提供了自动装箱与自动拆箱的功能。这下就方便了。</p><div class="language-jav line-numbers-mode" data-ext="jav"><pre class="language-jav"><code>Integer chenmo  = 10;  // 自动装箱
int wanger = chenmo;     // 自动拆箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>来看一下反编译后的代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> chenmo <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> wanger <span class="token operator">=</span> chenmo<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说，自动装箱是通过 <code>Integer.valueOf()</code> 完成的；自动拆箱是通过 <code>Integer.intValue()</code> 完成的。</p><p>“嗯，三妹，给你出一道面试题吧。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 1）基本类型和包装类型</span>
<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> b <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2）两个包装类型</span>
<span class="token class-name">Integer</span> c <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> d <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c <span class="token operator">==</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3）</span>
c <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
d <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c <span class="token operator">==</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“给你 3 分钟时间，你先思考下，我去抽根华子，等我回来，然后再来分析一下为什么。”</p><p>。。。。。。</p><p>“嗯，哥，你过来吧，我说一说我的想法。”</p><p>第一段代码，基本类型和包装类型进行 == 比较，这时候 b 会自动拆箱，直接和 a 比较值，所以结果为 true。</p><p>第二段代码，两个包装类型都被赋值为了 100，这时候会进行自动装箱，按照你之前说的，将“==”操作符应用于包装类型比较的时候，其结果很可能会和预期的不符，我想结果可能为 false。</p><p>第三段代码，两个包装类型重新被赋值为了 200，这时候仍然会进行自动装箱，我想结果仍然为 false。</p><p>“嗯嗯，三妹，你分析的很有逻辑，但第二段代码的结果为 true，是不是感到很奇怪？”</p><p>“为什么会这样呀？”三妹急切地问。</p><p>“你说的没错，自动装箱是通过 <code>Integer.valueOf()</code> 完成的，我们来看看这个方法的源码就明白为什么了。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>high<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),f={href:"https://javabetter.cn/basic-extra-meal/int-cache.html",target:"_blank",rel:"noopener noreferrer"},_=p(`<p>“难道说是 Integer 的缓存类？”三妹做出了自己的判断。</p><p>“是的，来看一下 IntegerCache 的源码吧。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">IntegerCache</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> high<span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Integer</span> cache<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token comment">// high value may be configured by property</span>
        <span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>integerCacheHighPropValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        i <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">127</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        h <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token operator">-</span>low<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        high <span class="token operator">=</span> h<span class="token punctuation">;</span>

        cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">(</span>high <span class="token operator">-</span> low<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> low<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> cache<span class="token punctuation">.</span>length<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span>
            cache<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// range [-128, 127] must be interned (JLS7 5.1.7)</span>
        <span class="token keyword">assert</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>high <span class="token operator">&gt;=</span> <span class="token number">127</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大致瞟一下这段代码你就全明白了。-128 到 127 之间的数会从 IntegerCache 中取，然后比较，所以第二段代码（100 在这个范围之内）的结果是 true，而第三段代码（200 不在这个范围之内，所以 new 出来了两个 Integer 对象）的结果是 false。</p><p>“三妹，看完上面的分析之后，我希望你记住一点：<strong>当需要进行自动装箱时，如果数字在 -128 至 127 之间时，会直接使用缓存中的对象，而不是重新创建一个对象</strong>。”</p><p>“自动装拆箱是一个很好的功能，大大节省了我们开发人员的精力，但也会引发一些麻烦，比如下面这段代码，性能就很差。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">long</span> t1 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Long</span> sum <span class="token operator">=</span> <span class="token number">0L</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">long</span> t2 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>t2<span class="token operator">-</span>t1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“知道为什么吗？三妹。”</p><p>“难道是因为 sum 被声明成了包装类型 Long 而不是基本类型 long。”三妹若有所思。</p><p>“是滴，由于 sum 是个 Long 型，而 i 为 int 类型，<code>sum += i</code> 在执行的时候，会先把 i 强转为 long 型，然后再把 sum 拆箱为 long 型进行相加操作，之后再自动装箱为 Long 型赋值给 sum。”</p><p>“三妹，你可以试一下，把 sum 换成 long 型比较一下它们运行的时间。”</p><p>。。。。。。</p><p>“哇，sum 为 Long 型的时候，足足运行了 5825 毫秒；sum 为 long 型的时候，只需要 679 毫秒。”</p><p>“好了，三妹，今天的主题就先讲到这吧。我再去来根华子。”</p><hr>`,15),j={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},I={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},x=s("p",null,[n("微信搜 "),s("strong",null,"沉默王二"),n(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),s("strong",null,"222"),n(" 即可免费领取。")],-1),O=s("figure",null,[s("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1);function J(V,L){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,s("p",null,[n("“哥，听说 Java 的每个"),s("a",r,[n("基本类型"),e(a)]),n("都对应了一个包装类型，比如说 int 的包装类型为 Integer，double 的包装类型为 Double，是这样吗？”从三妹这句话当中，能听得出来，她已经提前预习这块内容了。")]),k,s("p",null,[n("“《"),s("a",d,[n("阿里巴巴 Java 开发手册"),e(a)]),n("》上有详细的说明，你看。”我打开 PDF，并翻到了对应的内容，指着屏幕念道。")]),s("blockquote",null,[s("p",null,[n("数据库的查询结果可能是 null，如果使用基本类型的话，因为要自动拆箱，就会抛出 "),s("a",v,[n("NullPointerException 的异常"),e(a)]),n("。")])]),m,s("p",null,[n("“因为"),s("a",b,[n("泛型"),e(a)]),n("在编译时会进行类型擦除，最后只保留原始类型，而原始类型只能是 Object 类及其子类——基本类型是个例外。”")]),g,s("p",null,[n("“作为局部变量时，基本类型在栈中直接存储的具体数值，而包装类型则存储的是堆中的引用。”我一边说着，一边打开 "),s("a",h,[w,e(a)]),n(" 画起了图。")]),y,s("p",null,[n("是不是看到了一个之前从来没见过的类——"),s("a",f,[n("IntegerCache"),e(a)]),n("？")]),_,s("p",null,[n("GitHub 上标星 9300+ 的开源知识库《"),s("a",j,[n("二哥的 Java 进阶之路"),e(a)]),n("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),s("a",I,[n("太赞了，GitHub 上标星 9300+ 的 Java 教程"),e(a)])]),x,O])}const C=t(i,[["render",J],["__file","box.html.vue"]]);export{C as default};
