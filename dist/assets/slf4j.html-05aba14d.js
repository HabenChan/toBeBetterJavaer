const e=JSON.parse('{"key":"v-19392480","path":"/gongju/slf4j.html","title":"SLF4J：阿里巴巴强制使用的日志门面担当","lang":"zh-CN","frontmatter":{"title":"SLF4J：阿里巴巴强制使用的日志门面担当","category":["Java企业级开发"],"tag":["辅助工具/轮子"],"description":"我在读嵩山版的阿里巴巴开发手册（没有的小伙伴，记着找我要）的时候，就发现了一条「强制」性质的日志规约： 应用中不可以直接使用日志系统（Log4j、Logback）中的 API，而应该使用日志框架中的 API，比如说 SLF4J，使用门面模式的日志框架，有利于维护和统一各个类的日志处理方式。 （为什么我把这段文字手敲了下来呢，因为我发现阿里巴巴开发手册上的有语病，瞧下面红色标出的部分）","head":[["meta",{"property":"og:url","content":"https://javabetter.cn/gongju/slf4j.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"SLF4J：阿里巴巴强制使用的日志门面担当"}],["meta",{"property":"og:description","content":"我在读嵩山版的阿里巴巴开发手册（没有的小伙伴，记着找我要）的时候，就发现了一条「强制」性质的日志规约： 应用中不可以直接使用日志系统（Log4j、Logback）中的 API，而应该使用日志框架中的 API，比如说 SLF4J，使用门面模式的日志框架，有利于维护和统一各个类的日志处理方式。 （为什么我把这段文字手敲了下来呢，因为我发现阿里巴巴开发手册上的有语病，瞧下面红色标出的部分）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"辅助工具/轮子"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SLF4J：阿里巴巴强制使用的日志门面担当\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"01、SLF4J 是什么","slug":"_01、slf4j-是什么","link":"#_01、slf4j-是什么","children":[]},{"level":3,"title":"02、SLF4J 解决了什么痛点","slug":"_02、slf4j-解决了什么痛点","link":"#_02、slf4j-解决了什么痛点","children":[]},{"level":3,"title":"03、SLF4J 比 Log4J 强在哪","slug":"_03、slf4j-比-log4j-强在哪","link":"#_03、slf4j-比-log4j-强在哪","children":[]},{"level":3,"title":"04、总结","slug":"_04、总结","link":"#_04、总结","children":[]}],"git":{"createdTime":1647487083000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":8},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":9.88,"words":2963},"filePathRelative":"gongju/slf4j.md","localizedDate":"2022年3月17日","excerpt":"<p>我在读嵩山版的阿里巴巴开发手册（没有的小伙伴，记着找我要）的时候，就发现了一条「<strong>强制</strong>」性质的日志规约：</p>\\n<blockquote>\\n<p>应用中不可以直接使用日志系统（Log4j、Logback）中的 API，而应该使用日志框架中的 API，比如说 SLF4J，使用门面模式的日志框架，有利于维护和统一各个类的日志处理方式。</p>\\n</blockquote>\\n<p>（为什么我把这段文字手敲了下来呢，因为我发现阿里巴巴开发手册上的有语病，瞧下面红色标出的部分）</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/slf4j-94ba034a-c6e6-46e0-bff3-b658bf35945f.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{e as data};
