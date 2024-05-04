import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as i,a,d as n,b as e,e as t}from"./app-23957fcb.js";const r={},c=t(`<h1 id="java-hashmap精选面试题" tabindex="-1"><a class="header-anchor" href="#java-hashmap精选面试题" aria-hidden="true">#</a> Java HashMap精选面试题</h1><p>对于 Java 求职者来说，HashMap 可谓是重中之重，是面试的必考点。然而 HashMap 的知识点非常多，复习起来花费精力很大。</p><h3 id="_01、hashmap的底层数据结构是什么" tabindex="-1"><a class="header-anchor" href="#_01、hashmap的底层数据结构是什么" aria-hidden="true">#</a> 01、HashMap的底层数据结构是什么？</h3><p>JDK 7 中，HashMap 由“数组+链表”组成，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的。</p><p>在 JDK 8 中，HashMap 由“数组+链表+红黑树”组成。链表过长，会严重影响 HashMap 的性能，而红黑树搜索的时间复杂度是 O(logn)，而链表是糟糕的 O(n)。因此，JDK 8 对数据结构做了进一步的优化，引入了红黑树，链表和红黑树在达到一定条件会进行转换：</p><ul><li>当链表超过 8 且数据总量超过 64 时会转红黑树。</li><li>将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树，以减少搜索时间。</li></ul><p>链表长度超过 8 体现在 putVal 方法中的这段代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//链表长度大于8转换为红黑树进行处理</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>binCount <span class="token operator">&gt;=</span> <span class="token constant">TREEIFY_THRESHOLD</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// -1 for 1st</span>
    <span class="token function">treeifyBin</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>table 长度为 64 体现在 treeifyBin 方法中的这段代码：：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">treeifyBin</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab<span class="token punctuation">,</span> <span class="token keyword">int</span> hash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">,</span> index<span class="token punctuation">;</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tab <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token punctuation">(</span>n <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token constant">MIN_TREEIFY_CAPACITY</span><span class="token punctuation">)</span>
        <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MIN_TREEIFY_CAPACITY 的值正好为 64。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">MIN_TREEIFY_CAPACITY</span> <span class="token operator">=</span> <span class="token number">64</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>JDK 8 中 HashMap 的结构示意图：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/hashmap-interview-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_02、为什么链表改为红黑树的阈值是-8" tabindex="-1"><a class="header-anchor" href="#_02、为什么链表改为红黑树的阈值是-8" aria-hidden="true">#</a> 02、为什么链表改为红黑树的阈值是 8?</h3><p>因为泊松分布，我们来看作者在源码中的注释：</p>`,16),h=a("br",null,null,-1),u=a("br",null,null,-1),d=a("br",null,null,-1),k=a("br",null,null,-1),_=a("br",null,null,-1),b=a("br",null,null,-1),g=a("br",null,null,-1),m={href:"http://en.wikipedia.org/wiki/Poisson_distribution",target:"_blank",rel:"noopener noreferrer"},v=a("br",null,null,-1),f=a("br",null,null,-1),y=a("br",null,null,-1),w=a("br",null,null,-1),x=a("br",null,null,-1),H=a("br",null,null,-1),M=a("br",null,null,-1),j=a("br",null,null,-1),I=a("br",null,null,-1),z=a("br",null,null,-1),C=a("br",null,null,-1),J=a("br",null,null,-1),E=a("br",null,null,-1),T=a("br",null,null,-1),q=a("br",null,null,-1),K=a("br",null,null,-1),A=a("br",null,null,-1),B=a("br",null,null,-1),D=a("br",null,null,-1),N=a("br",null,null,-1),S=a("br",null,null,-1),V=a("br",null,null,-1),Y=a("br",null,null,-1),F=a("br",null,null,-1),O=t('<p>翻译过来大概的意思是：理想情况下使用随机的哈希码，容器中节点分布在 hash 桶中的频率遵循泊松分布，按照泊松分布的计算公式计算出了桶中元素个数和概率的对照表，可以看到链表中元素个数为 8 时的概率已经非常小，再多的就更少了，所以原作者在选择链表元素个数时选择了 8，是根据概率统计而选择的。</p><h3 id="_03、解决hash冲突的办法有哪些-hashmap用的哪种" tabindex="-1"><a class="header-anchor" href="#_03、解决hash冲突的办法有哪些-hashmap用的哪种" aria-hidden="true">#</a> 03、解决hash冲突的办法有哪些？HashMap用的哪种？</h3><p>解决Hash冲突方法有：</p><ul><li>开放定址法：也称为再散列法，基本思想就是，如果p=H(key)出现冲突时，则以p为基础，再次hash，p1=H(p),如果p1再次出现冲突，则以p1为基础，以此类推，直到找到一个不冲突的哈希地址pi。因此开放定址法所需要的hash表的长度要大于等于所需要存放的元素，而且因为存在再次hash，所以只能在删除的节点上做标记，而不能真正删除节点。</li><li>再哈希法：双重散列，多重散列，提供多个不同的hash函数，当R1=H1(key1)发生冲突时，再计算R2=H2(key1)，直到没有冲突为止。这样做虽然不易产生堆集，但增加了计算的时间。</li><li>链地址法：拉链法，将哈希值相同的元素构成一个同义词的单链表，并将单链表的头指针存放在哈希表的第i个单元中，查找、插入和删除主要在同义词链表中进行。链表法适用于经常进行插入和删除的情况。</li><li>建立公共溢出区：将哈希表分为公共表和溢出表，当溢出发生时，将所有溢出数据统一放到溢出区。</li></ul><p>HashMap中采用的是链地址法 。</p><h3 id="_04、为什么在解决-hash-冲突的时候-不直接用红黑树-而选择先用链表-再转红黑树" tabindex="-1"><a class="header-anchor" href="#_04、为什么在解决-hash-冲突的时候-不直接用红黑树-而选择先用链表-再转红黑树" aria-hidden="true">#</a> 04、为什么在解决 hash 冲突的时候，不直接用红黑树？而选择先用链表，再转红黑树?</h3><p>因为红黑树需要进行左旋，右旋，变色这些操作来保持平衡，而单链表不需要。</p><p>当元素小于 8 个的时候，此时做查询操作，链表结构已经能保证查询性能。当元素大于 8 个的时候， 红黑树搜索时间复杂度是 O(logn)，而链表是 O(n)，此时需要红黑树来加快查询速度，但是新增节点的效率变慢了。</p><p>因此，如果一开始就用红黑树结构，元素太少，新增效率又比较慢，无疑这是浪费性能的。</p><h3 id="_05、hashmap默认加载因子是多少-为什么是-0-75-不是-0-6-或者-0-8" tabindex="-1"><a class="header-anchor" href="#_05、hashmap默认加载因子是多少-为什么是-0-75-不是-0-6-或者-0-8" aria-hidden="true">#</a> 05、HashMap默认加载因子是多少？为什么是 0.75，不是 0.6 或者 0.8 ？</h3><p>作为一般规则，默认负载因子（0.75）在时间和空间成本上提供了很好的折衷。</p>',11),P={href:"https://mp.weixin.qq.com/s/a3qfatEWizKK1CpYaxVBbA",target:"_blank",rel:"noopener noreferrer"},R=a("h3",{id:"_06、hashmap-中-key-的存储索引是怎么计算的",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_06、hashmap-中-key-的存储索引是怎么计算的","aria-hidden":"true"},"#"),n(" 06、HashMap 中 key 的存储索引是怎么计算的？")],-1),L=a("p",null,"首先根据key的值计算出hashcode的值，然后根据hashcode计算出hash值，最后通过hash&（length-1）计算得到存储的位置。",-1),X={href:"https://mp.weixin.qq.com/s/aS2dg4Dj1Efwujmv-6YTBg",target:"_blank",rel:"noopener noreferrer"},G=t(`<h3 id="_07、jdk-8-为什么要-hashcode-异或其右移十六位的值" tabindex="-1"><a class="header-anchor" href="#_07、jdk-8-为什么要-hashcode-异或其右移十六位的值" aria-hidden="true">#</a> 07、JDK 8 为什么要 hashcode 异或其右移十六位的值？</h3><p>因为在JDK 7 中扰动了 4 次，计算 hash 值的性能会稍差一点点。</p><p>从速度、功效、质量来考虑，JDK 8 优化了高位运算的算法，通过hashCode()的高16位异或低16位实现：<code>(h = k.hashCode()) ^ (h &gt;&gt;&gt; 16)</code>。</p><p>这么做可以在数组 table 的 length 比较小的时候，也能保证考虑到高低Bit都参与到Hash的计算中，同时不会有太大的开销。</p><h3 id="_08、为什么-hash-值要与length-1相与" tabindex="-1"><a class="header-anchor" href="#_08、为什么-hash-值要与length-1相与" aria-hidden="true">#</a> 08、为什么 hash 值要与length-1相与？</h3><ul><li>把 hash 值对数组长度取模运算，模运算的消耗很大，没有位运算快。</li><li>当 length 总是 2 的n次方时，<code>h&amp; (length-1) </code>运算等价于对length取模，也就是 h%length，但是 &amp; 比 % 具有更高的效率。</li></ul><h3 id="_09、hashmap数组的长度为什么是-2-的幂次方" tabindex="-1"><a class="header-anchor" href="#_09、hashmap数组的长度为什么是-2-的幂次方" aria-hidden="true">#</a> 09、HashMap数组的长度为什么是 2 的幂次方？</h3><p>2 的 N 次幂有助于减少碰撞的几率。如果 length 为2的幂次方，则 length-1 转化为二进制必定是11111……的形式，在与h的二进制与操作效率会非常的快，而且空间不浪费。我们来举个例子，看下图：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/hashmap-interview-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当 length =15时，6 和 7 的结果一样，这样表示他们在 table 存储的位置是相同的，也就是产生了碰撞，6、7就会在一个位置形成链表，4和5的结果也是一样，这样就会导致查询速度降低。</p><p>如果我们进一步分析，还会发现空间浪费非常大，以 length=15 为例，在 1、3、5、7、9、11、13、15 这八处没有存放数据。因为hash值在与14（即 1110）进行&amp;运算时，得到的结果最后一位永远都是0，即 0001、0011、0101、0111、1001、1011、1101、1111位置处是不可能存储数据的。</p><p><strong>再补充数组容量计算的小奥秘。</strong></p><p>HashMap 构造函数允许用户传入的容量不是 2 的 n 次方，因为它可以自动地将传入的容量转换为 2 的 n 次方。会取大于或等于这个数的 且最近的2次幂作为 table 数组的初始容量，使用tableSizeFor(int)方法，如 tableSizeFor(10) = 16（2 的 4 次幂），tableSizeFor(20) = 32（2 的 5 次幂），也就是说 table 数组的长度总是 2 的次幂。JDK 8 源码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">tableSizeFor</span><span class="token punctuation">(</span><span class="token keyword">int</span> cap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> cap <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">2</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">4</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">16</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;=</span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token constant">MAXIMUM_CAPACITY</span> <span class="token operator">:</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让cap-1再赋值给n的目的是另找到的目标值大于或等于原值。例如二进制1000，十进制数值为8。如果不对它减1而直接操作，将得到答案10000，即16。显然不是结果。减1后二进制为111，再进行操作则会得到原来的数值1000，即8。</p><h3 id="_10、hashmap-的put方法流程" tabindex="-1"><a class="header-anchor" href="#_10、hashmap-的put方法流程" aria-hidden="true">#</a> 10、HashMap 的put方法流程？</h3><p>以JDK 8为例，简要流程如下：</p><p>1、首先根据 key 的值计算 hash 值，找到该元素在数组中存储的下标；</p><p>2、如果数组是空的，则调用 resize 进行初始化；</p><p>3、如果没有哈希冲突直接放在对应的数组下标里；</p><p>4、如果冲突了，且 key 已经存在，就覆盖掉 value；</p><p>5、如果冲突后，发现该节点是红黑树，就将这个节点挂在树上；</p><p>6、如果冲突后是链表，判断该链表是否大于 8 ，如果大于 8 并且数组容量小于 64，就进行扩容；如果链表节点大于 8 并且数组的容量大于 64，则将这个结构转换为红黑树；否则，链表插入键值对，若 key 存在，就覆盖掉 value。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/hashmap-interview-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_11、hashmap-的扩容方式" tabindex="-1"><a class="header-anchor" href="#_11、hashmap-的扩容方式" aria-hidden="true">#</a> 11、HashMap 的扩容方式？</h3><p>HashMap 在容量超过负载因子所定义的容量之后，就会扩容。</p>`,26),U={href:"https://mp.weixin.qq.com/s/0KSpdBJMfXSVH63XadVdmw",target:"_blank",rel:"noopener noreferrer"},W=t('<h3 id="_12、一般用什么作为hashmap的key" tabindex="-1"><a class="header-anchor" href="#_12、一般用什么作为hashmap的key" aria-hidden="true">#</a> 12、一般用什么作为HashMap的key?</h3><p>一般用Integer、String 这种不可变类当作 HashMap 的 key，String 最为常见。</p><ul><li>因为字符串是不可变的，所以在它创建的时候 hashcode 就被缓存了，不需要重新计算。</li><li>因为获取对象的时候要用到 equals() 和 hashCode() 方法，那么键对象正确的重写这两个方法是非常重要的。Integer、String 这些类已经很规范的重写了 hashCode() 以及 equals() 方法。</li></ul><h3 id="_13、hashmap为什么线程不安全" tabindex="-1"><a class="header-anchor" href="#_13、hashmap为什么线程不安全" aria-hidden="true">#</a> 13、HashMap为什么线程不安全？</h3><ul><li>JDK 7 时多线程下扩容会造成死循环。</li><li>多线程的put可能导致元素的丢失。</li><li>put和get并发时，可能导致get为null。</li></ul>',5),Q={href:"https://mp.weixin.qq.com/s/qk_neCdzM3aB6pVWVTHhNw",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://zhuanlan.zhihu.com/p/362214327",target:"_blank",rel:"noopener noreferrer"},$=a("hr",null,null,-1),aa={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},na={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},sa=a("p",null,[n("微信搜 "),a("strong",null,"沉默王二"),n(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),a("strong",null,"222"),n(" 即可免费领取。")],-1),ea=a("figure",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1);function ta(oa,pa){const s=p("ExternalLinkIcon");return l(),i("div",null,[c,a("blockquote",null,[a("p",null,[n("Because TreeNodes are about twice the size of regular nodes, we"),h,n(" use them only when bins contain enough nodes to warrant use"),u,n(" (see TREEIFY_THRESHOLD). And when they become too small (due to"),d,n(" removal or resizing) they are converted back to plain bins. In"),k,n(" usages with well-distributed user hashCodes, tree bins are"),_,n(" rarely used. Ideally, under random hashCodes, the frequency of"),b,n(" nodes in bins follows a Poisson distribution"),g,n(" ("),a("a",m,[n("http://en.wikipedia.org/wiki/Poisson_distribution"),e(s)]),n(") with a"),v,n(" parameter of about 0.5 on average for the default resizing"),f,n(" threshold of 0.75, although with a large variance because of"),y,n(" resizing granularity. Ignoring variance, the expected"),w,n(" occurrences of list size k are (exp(-0.5) pow(0.5, k) /"),x,n(" factorial(k)). The first values are:"),H,n(" 0: 0.60653066"),M,j,n(" 1: 0.30326533"),I,z,n(" 2: 0.07581633"),C,J,n(" 3: 0.01263606"),E,T,n(" 4: 0.00157952"),q,K,n(" 5: 0.00015795"),A,B,n(" 6: 0.00001316"),D,N,n(" 7: 0.00000094"),S,V,n(" 8: 0.00000006"),Y,F,n(" more: less than 1 in ten million")])]),O,a("p",null,[a("a",P,[n("详情参照这篇"),e(s)])]),R,L,a("p",null,[a("a",X,[n("详情参照这篇"),e(s)])]),G,a("p",null,[a("a",U,[n("详情参照这篇"),e(s)])]),W,a("p",null,[a("a",Q,[n("详情参照这篇"),e(s)])]),a("blockquote",null,[a("p",null,[n("参考链接："),a("a",Z,[n("https://zhuanlan.zhihu.com/p/362214327"),e(s)])])]),$,a("p",null,[n("GitHub 上标星 10000+ 的开源知识库《"),a("a",aa,[n("二哥的 Java 进阶之路"),e(s)]),n("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),a("a",na,[n("太赞了，GitHub 上标星 10000+ 的 Java 教程"),e(s)])]),sa,ea])}const ra=o(r,[["render",ta],["__file","java-hashmap-13.html.vue"]]);export{ra as default};
