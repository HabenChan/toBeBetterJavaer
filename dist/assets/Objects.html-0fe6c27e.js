import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as s,d as n,b as t,e}from"./app-a425eb61.js";const u={},i=s("h1",{id:"_9-4-objects工具类",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_9-4-objects工具类","aria-hidden":"true"},"#"),n(" 9.4 Objects工具类")],-1),r={href:"https://javabetter.cn/exception/npe.html",target:"_blank",rel:"noopener noreferrer"},k=e(`<h3 id="对象判空" tabindex="-1"><a class="header-anchor" href="#对象判空" aria-hidden="true">#</a> 对象判空</h3><p>在 Java 中，万物皆对象，对象的判空可以说无处不在。Objects 的 <code>isNull</code> 方法用于判断对象是否为空，而 <code>nonNull</code> 方法判断对象是否不为空。例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> integer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">isNull</span><span class="token punctuation">(</span>integer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;对象为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">nonNull</span><span class="token punctuation">(</span>integer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;对象不为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象为空时抛异常" tabindex="-1"><a class="header-anchor" href="#对象为空时抛异常" aria-hidden="true">#</a> 对象为空时抛异常</h3>`,4),d={href:"https://javabetter.cn/exception/npe.html",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"requireNonNull",-1),v=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> integer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>integer1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>integer1<span class="token punctuation">,</span> <span class="token string">&quot;参数不能为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>integer1<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;参数不能为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断两个对象是否相等" tabindex="-1"><a class="header-anchor" href="#判断两个对象是否相等" aria-hidden="true">#</a> 判断两个对象是否相等</h3><p>我们经常需要判断两个对象是否相等，Objects 给我们提供了 <code>equals</code> 方法，能非常方便的实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> integer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> integer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>integer1<span class="token punctuation">,</span> integer2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但使用这个方法有坑，比如例子改成：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> integer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Long</span> integer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Long</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>integer1<span class="token punctuation">,</span> integer2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不过，需要注意的是，虽然 <code>Objects.equals()</code> 方法本身是用来避免坑的，因为它可以处理 null 值的比较，而不会抛出空指针异常。然而，这并不意味着它没有任何潜在问题。实际上，<code>Objects.equals()</code> 方法的一个潜在问题是依赖于被比较对象的 <code>equals()</code> 方法实现。</p><p>当两个对象的类没有正确实现 <code>equals()</code> 方法时，<code>Objects.equals()</code> 方法可能会产生不符合预期的结果。举个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObjectsDemo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Person</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>person1<span class="token punctuation">,</span> person2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，我们创建了一个名为 Person 的类，但是没有重写 <code>equals()</code> 方法。然后我们创建了两个具有相同属性的 Person 对象，并使用 <code>Objects.equals()</code> 方法比较它们。尽管这两个对象的属性是相同的，但输出结果却是 false。这是因为 <code>Objects.equals()</code> 方法依赖于对象的 <code>equals()</code> 方法，而在这个例子中，Person 类没有正确地实现 <code>equals()</code> 方法，所以默认情况下会使用 Object 类的 <code>equals()</code> 方法，它只比较对象引用是否相同。</p><p>为了解决这个问题，我们需要在 Person 类中重写 <code>equals()</code> 方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> obj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>
    <span class="token keyword">return</span> age <span class="token operator">==</span> person<span class="token punctuation">.</span>age <span class="token operator">&amp;&amp;</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，当我们使用 <code>Objects.equals()</code> 方法比较两个具有相同属性的 Person 对象时，输出将是 true，符合我们的预期。</p><h3 id="获取对象的hashcode" tabindex="-1"><a class="header-anchor" href="#获取对象的hashcode" aria-hidden="true">#</a> 获取对象的hashCode</h3><p>如果你想获取某个对象的 hashCode，可以使用 Objects 的 <code>hashCode</code> 方法。例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">867758096</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="比较两个对象" tabindex="-1"><a class="header-anchor" href="#比较两个对象" aria-hidden="true">#</a> 比较两个对象</h3>`,23),b=s("code",null,"compare()",-1),g={href:"https://javabetter.cn/basic-extra-meal/comparable-omparator.html",target:"_blank",rel:"noopener noreferrer"},h=s("code",null,"compare()",-1),j=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ObjectsCompareDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PersonCompare</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersonCompare</span><span class="token punctuation">(</span><span class="token string">&quot;itwanger&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PersonCompare</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersonCompare</span><span class="token punctuation">(</span><span class="token string">&quot;chenqingyang&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PersonCompare</span><span class="token punctuation">&gt;</span></span> ageComparator <span class="token operator">=</span> <span class="token class-name">Comparator</span><span class="token punctuation">.</span><span class="token function">comparingInt</span><span class="token punctuation">(</span>p <span class="token operator">-&gt;</span> p<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> ageComparisonResult <span class="token operator">=</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>person1<span class="token punctuation">,</span> person2<span class="token punctuation">,</span> ageComparator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年龄排序: &quot;</span> <span class="token operator">+</span> ageComparisonResult<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：1（表示 person1 的 age 在 person2 之后）</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PersonCompare</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token class-name">PersonCompare</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="比较两个数组" tabindex="-1"><a class="header-anchor" href="#比较两个数组" aria-hidden="true">#</a> 比较两个数组</h3>`,2),q=s("code",null,"deepEquals()",-1),f={href:"https://javabetter.cn/array/array.html",target:"_blank",rel:"noopener noreferrer"},y=s("code",null,"equals()",-1),_=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">deepEquals</span><span class="token punctuation">(</span>array1<span class="token punctuation">,</span> array2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：true（因为 array1 和 array2 的内容相同）</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">deepEquals</span><span class="token punctuation">(</span>array1<span class="token punctuation">,</span> array3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：false（因为 array1 和 array3 的内容不同）</span>

<span class="token comment">// 对于非数组对象，deepEquals() 的行为与 equals() 相同</span>
<span class="token class-name">String</span> string1 <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> string2 <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> string3 <span class="token operator">=</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">deepEquals</span><span class="token punctuation">(</span>string1<span class="token punctuation">,</span> string2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：true（因为 string1 和 string2 相同）</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">deepEquals</span><span class="token punctuation">(</span>string1<span class="token punctuation">,</span> string3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：false（因为 string1 和 string3 不同）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),w={href:"https://javabetter.cn/array/double-array.html",target:"_blank",rel:"noopener noreferrer"},O=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nestedArray1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nestedArray2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nestedArray3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;E&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">deepEquals</span><span class="token punctuation">(</span>nestedArray1<span class="token punctuation">,</span> nestedArray2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：true (因为嵌套数组元素相同)</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">deepEquals</span><span class="token punctuation">(</span>nestedArray1<span class="token punctuation">,</span> nestedArray3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：false (因为嵌套数组元素不同)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>除了上面提到的这些方法，Objects 还提供了一些其他的方法，比如说 toString，感兴趣的话可以试一下。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/common-tool/Objects-83489814-9784-4274-841a-27ee75c046ac.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>总之，Objects 类提供的这些方法在许多情况下还是非常有用得，可以简化代码并减少出错的可能性。</p><hr>`,6),x={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},S={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},C=s("p",null,[n("微信搜 "),s("strong",null,"沉默王二"),n(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),s("strong",null,"222"),n(" 即可免费领取。")],-1),P=s("figure",null,[s("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1);function N(I,E){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,s("p",null,[n("Java 的 Objects 类是一个实用工具类，包含了一系列静态方法，用于处理对象。它位于 java.util 包中，自 Java 7 引入。Objects 类的主要目的是降低代码中的"),s("a",r,[n("空指针异常"),t(a)]),n(" (NullPointerException) 风险，同时提供一些非常实用的方法供我们使用。")]),k,s("p",null,[n("如果我们想在对象为空时，抛出"),s("a",d,[n("空指针异常"),t(a)]),n("，可以使用 Objects 的 "),m,n(" 方法。例如：")]),v,s("p",null,[b,n(" 方法用于比较两个对象，通常用于自定义排序。它需要一个"),s("a",g,[n("比较器 (Comparator) "),t(a)]),n("作为参数。如果比较器为 null，则使用自然顺序。以下是一个 "),h,n(" 方法的示例：")]),j,s("p",null,[q,n(" 用于比较两个"),s("a",f,[n("数组类型"),t(a)]),n("的对象，当对象是非数组的话，行为和 "),y,n(" 一致。")]),_,s("p",null,[n("再来个"),s("a",w,[n("二维数组"),t(a)]),n("的：")]),O,s("p",null,[n("GitHub 上标星 9300+ 的开源知识库《"),s("a",x,[n("二哥的 Java 进阶之路"),t(a)]),n("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),s("a",S,[n("太赞了，GitHub 上标星 9300+ 的 Java 教程"),t(a)])]),C,P])}const B=p(u,[["render",N],["__file","Objects.html.vue"]]);export{B as default};
