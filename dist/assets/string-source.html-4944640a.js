const t=JSON.parse('{"key":"v-251ef072","path":"/string/string-source.html","title":"深入解读String类源码及其应用技巧","lang":"zh-CN","frontmatter":{"title":"深入解读String类源码及其应用技巧","shortTitle":"解读String类源码","category":["Java核心"],"tag":["数组&字符串"],"description":"本文将对Java String类的源码进行深入分析，帮助你理解字符串在Java中的实现原理、操作方式和性能优化策略。通过详细解读String源码，我们将揭示字符串类的内部机制，掌握如何高效地进行字符串操作，以及在实际编程中如何应用这些知识来提高代码质量和性能。","head":[["meta",{"name":"keywords","content":"Java, String类, 源码, 源码解析, 字符串操作,String"}],["meta",{"property":"og:url","content":"https://javabetter.cn/string/string-source.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"深入解读String类源码及其应用技巧"}],["meta",{"property":"og:description","content":"本文将对Java String类的源码进行深入分析，帮助你理解字符串在Java中的实现原理、操作方式和性能优化策略。通过详细解读String源码，我们将揭示字符串类的内部机制，掌握如何高效地进行字符串操作，以及在实际编程中如何应用这些知识来提高代码质量和性能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-07T09:16:09.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"数组&字符串"}],["meta",{"property":"article:modified_time","content":"2023-10-07T09:16:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入解读String类源码及其应用技巧\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-07T09:16:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"String 类的声明","slug":"string-类的声明","link":"#string-类的声明","children":[]},{"level":3,"title":"String 类的底层实现","slug":"string-类的底层实现","link":"#string-类的底层实现","children":[]},{"level":3,"title":"String 类的 hashCode 方法","slug":"string-类的-hashcode-方法","link":"#string-类的-hashcode-方法","children":[]},{"level":3,"title":"String 类的 substring 方法","slug":"string-类的-substring-方法","link":"#string-类的-substring-方法","children":[]},{"level":3,"title":"String 类的 indexOf 方法","slug":"string-类的-indexof-方法","link":"#string-类的-indexof-方法","children":[]},{"level":3,"title":"String 类的其他方法","slug":"string-类的其他方法","link":"#string-类的其他方法","children":[]}],"git":{"createdTime":1681052836000,"updatedTime":1696670169000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":6},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":15.45,"words":4636},"filePathRelative":"string/string-source.md","localizedDate":"2023年4月9日","excerpt":"<h1> 4.4 解读String类源码</h1>\\n<p>我正坐在沙发上津津有味地读刘欣大佬的《码农翻身》——Java 帝国这一章，门铃响了。起身打开门一看，是三妹，她从学校回来了。</p>\\n<p>“三妹，你回来的真及时，今天我们打算讲 Java 中的字符串呢。”等三妹换鞋的时候我说。</p>\\n<p>“哦，可以呀，哥。听说字符串的细节特别多，什么<a href=\\"https://javabetter.cn/string/constant-pool.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">字符串常量池</a>了、字符串不可变性了、<a href=\\"https://javabetter.cn/string/join.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">字符串拼接</a>了、字符串长度限制了等等，你最好慢慢讲，否则我可能一时半会消化不了。”三妹的态度显得很诚恳。</p>"}');export{t as data};
