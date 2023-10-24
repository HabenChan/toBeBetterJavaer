const e=JSON.parse('{"key":"v-617d67b6","path":"/sidebar/sanfene/collection.html","title":"Java面试题之Java集合框架篇（Java容器篇），30道Java集合框架八股文（7千字38张手绘图），面渣逆袭必看👍","lang":"zh-CN","frontmatter":{"title":"Java面试题之Java集合框架篇（Java容器篇），30道Java集合框架八股文（7千字38张手绘图），面渣逆袭必看👍","shortTitle":"面渣逆袭-Java集合框架","author":"三分恶","category":["面渣逆袭"],"tag":["面渣逆袭"],"description":"下载次数超 1 万次，7200 字 38 张手绘图，详解 30 道 Java 集合框架面试高频题（让天下没有难背的八股），面渣背会这些 Java 容器八股文，这次吊打面试官，我觉得稳了（手动 dog）。","head":[["meta",{"name":"keywords","content":"Java,集合框架,Java容器,List,Map,Set,面试题,八股文,java"}],["meta",{"property":"og:url","content":"https://javabetter.cn/sidebar/sanfene/collection.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Java面试题之Java集合框架篇（Java容器篇），30道Java集合框架八股文（7千字38张手绘图），面渣逆袭必看👍"}],["meta",{"property":"og:description","content":"下载次数超 1 万次，7200 字 38 张手绘图，详解 30 道 Java 集合框架面试高频题（让天下没有难背的八股），面渣背会这些 Java 容器八股文，这次吊打面试官，我觉得稳了（手动 dog）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:26:49.000Z"}],["meta",{"property":"article:author","content":"三分恶"}],["meta",{"property":"article:tag","content":"面渣逆袭"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:26:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java面试题之Java集合框架篇（Java容器篇），30道Java集合框架八股文（7千字38张手绘图），面渣逆袭必看👍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:26:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三分恶\\"}]}"]]},"headers":[{"level":2,"title":"引言","slug":"引言","link":"#引言","children":[{"level":3,"title":"1.说说有哪些常见集合？","slug":"_1-说说有哪些常见集合","link":"#_1-说说有哪些常见集合","children":[]}]},{"level":2,"title":"List","slug":"list","link":"#list","children":[{"level":3,"title":"2.ArrayList和LinkedList有什么区别？","slug":"_2-arraylist和linkedlist有什么区别","link":"#_2-arraylist和linkedlist有什么区别","children":[]},{"level":3,"title":"3.ArrayList的扩容机制了解吗？","slug":"_3-arraylist的扩容机制了解吗","link":"#_3-arraylist的扩容机制了解吗","children":[]},{"level":3,"title":"4.ArrayList怎么序列化的知道吗？ 为什么用transient修饰数组？","slug":"_4-arraylist怎么序列化的知道吗-为什么用transient修饰数组","link":"#_4-arraylist怎么序列化的知道吗-为什么用transient修饰数组","children":[]},{"level":3,"title":"5.快速失败(fail-fast)和安全失败(fail-safe)了解吗？","slug":"_5-快速失败-fail-fast-和安全失败-fail-safe-了解吗","link":"#_5-快速失败-fail-fast-和安全失败-fail-safe-了解吗","children":[]},{"level":3,"title":"6.有哪几种实现ArrayList线程安全的方法？","slug":"_6-有哪几种实现arraylist线程安全的方法","link":"#_6-有哪几种实现arraylist线程安全的方法","children":[]},{"level":3,"title":"7.CopyOnWriteArrayList了解多少？","slug":"_7-copyonwritearraylist了解多少","link":"#_7-copyonwritearraylist了解多少","children":[]}]},{"level":2,"title":"Map","slug":"map","link":"#map","children":[{"level":3,"title":"8.能说一下HashMap的数据结构吗？","slug":"_8-能说一下hashmap的数据结构吗","link":"#_8-能说一下hashmap的数据结构吗","children":[]},{"level":3,"title":"9.你对红黑树了解多少？为什么不用二叉树/平衡树呢？","slug":"_9-你对红黑树了解多少-为什么不用二叉树-平衡树呢","link":"#_9-你对红黑树了解多少-为什么不用二叉树-平衡树呢","children":[]},{"level":3,"title":"10.红黑树怎么保持平衡的知道吗？","slug":"_10-红黑树怎么保持平衡的知道吗","link":"#_10-红黑树怎么保持平衡的知道吗","children":[]},{"level":3,"title":"11.HashMap的put流程知道吗？","slug":"_11-hashmap的put流程知道吗","link":"#_11-hashmap的put流程知道吗","children":[]},{"level":3,"title":"12.HashMap怎么查找元素的呢？","slug":"_12-hashmap怎么查找元素的呢","link":"#_12-hashmap怎么查找元素的呢","children":[]},{"level":3,"title":"13.HashMap的哈希/扰动函数是怎么设计的?","slug":"_13-hashmap的哈希-扰动函数是怎么设计的","link":"#_13-hashmap的哈希-扰动函数是怎么设计的","children":[]},{"level":3,"title":"14.为什么哈希/扰动函数能降hash碰撞？","slug":"_14-为什么哈希-扰动函数能降hash碰撞","link":"#_14-为什么哈希-扰动函数能降hash碰撞","children":[]},{"level":3,"title":"15.为什么HashMap的容量是2的倍数呢？","slug":"_15-为什么hashmap的容量是2的倍数呢","link":"#_15-为什么hashmap的容量是2的倍数呢","children":[]},{"level":3,"title":"16.如果初始化HashMap，传一个17的值new HashMap<>，它会怎么处理？","slug":"_16-如果初始化hashmap-传一个17的值new-hashmap-它会怎么处理","link":"#_16-如果初始化hashmap-传一个17的值new-hashmap-它会怎么处理","children":[]},{"level":3,"title":"17.你还知道哪些哈希函数的构造方法呢？","slug":"_17-你还知道哪些哈希函数的构造方法呢","link":"#_17-你还知道哪些哈希函数的构造方法呢","children":[]},{"level":3,"title":"18.解决哈希冲突有哪些方法呢？","slug":"_18-解决哈希冲突有哪些方法呢","link":"#_18-解决哈希冲突有哪些方法呢","children":[]},{"level":3,"title":"19.为什么HashMap链表转红黑树的阈值为8呢？","slug":"_19-为什么hashmap链表转红黑树的阈值为8呢","link":"#_19-为什么hashmap链表转红黑树的阈值为8呢","children":[]},{"level":3,"title":"20.扩容在什么时候呢？为什么扩容因子是0.75？","slug":"_20-扩容在什么时候呢-为什么扩容因子是0-75","link":"#_20-扩容在什么时候呢-为什么扩容因子是0-75","children":[]},{"level":3,"title":"21.那扩容机制了解吗？","slug":"_21-那扩容机制了解吗","link":"#_21-那扩容机制了解吗","children":[]},{"level":3,"title":"22.jdk1.8对HashMap主要做了哪些优化呢？为什么？","slug":"_22-jdk1-8对hashmap主要做了哪些优化呢-为什么","link":"#_22-jdk1-8对hashmap主要做了哪些优化呢-为什么","children":[]},{"level":3,"title":"23.你能自己设计实现一个HashMap吗？","slug":"_23-你能自己设计实现一个hashmap吗","link":"#_23-你能自己设计实现一个hashmap吗","children":[]},{"level":3,"title":"24.HashMap 是线程安全的吗？多线程下会有什么问题？","slug":"_24-hashmap-是线程安全的吗-多线程下会有什么问题","link":"#_24-hashmap-是线程安全的吗-多线程下会有什么问题","children":[]},{"level":3,"title":"25.有什么办法能解决HashMap线程不安全的问题呢？","slug":"_25-有什么办法能解决hashmap线程不安全的问题呢","link":"#_25-有什么办法能解决hashmap线程不安全的问题呢","children":[]},{"level":3,"title":"26.能具体说一下ConcurrentHashmap的实现吗？","slug":"_26-能具体说一下concurrenthashmap的实现吗","link":"#_26-能具体说一下concurrenthashmap的实现吗","children":[]},{"level":3,"title":"27.HashMap 内部节点是有序的吗？","slug":"_27-hashmap-内部节点是有序的吗","link":"#_27-hashmap-内部节点是有序的吗","children":[]},{"level":3,"title":"28.讲讲 LinkedHashMap 怎么实现有序的？","slug":"_28-讲讲-linkedhashmap-怎么实现有序的","link":"#_28-讲讲-linkedhashmap-怎么实现有序的","children":[]},{"level":3,"title":"29.讲讲 TreeMap 怎么实现有序的？","slug":"_29-讲讲-treemap-怎么实现有序的","link":"#_29-讲讲-treemap-怎么实现有序的","children":[]}]},{"level":2,"title":"Set","slug":"set","link":"#set","children":[{"level":3,"title":"30.讲讲HashSet的底层实现？","slug":"_30-讲讲hashset的底层实现","link":"#_30-讲讲hashset的底层实现","children":[]}]}],"git":{"createdTime":1646801254000,"updatedTime":1695043609000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":17},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":4}]},"readingTime":{"minutes":28.28,"words":8484},"filePathRelative":"sidebar/sanfene/collection.md","localizedDate":"2022年3月9日","excerpt":"<p>7200 字 38 张手绘图，详解 30 道 Java 集合框架面试高频题（让天下没有难背的八股），面渣背会这些 Java 容器八股文，这次吊打面试官，我觉得稳了（手动 dog）。整理：沉默王二，戳<a href=\\"https://mp.weixin.qq.com/s/ptbM0EqlnCWeWm9VdSCDLg\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">转载链接</a>，作者：三分恶，戳<a href=\\"https://mp.weixin.qq.com/s/SHkQ7LEOT0itt4bXMoDBPw\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">原文链接</a>。</p>"}');export{e as data};
