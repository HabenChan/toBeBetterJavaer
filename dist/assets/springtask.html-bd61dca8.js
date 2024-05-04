const e=JSON.parse('{"key":"v-a4a685a0","path":"/springboot/springtask.html","title":"Spring Boot 整合 Spring Task 实现定时任务","lang":"zh-CN","frontmatter":{"category":["Java企业级开发"],"tag":["Spring Boot"],"title":"Spring Boot 整合 Spring Task 实现定时任务","description":"定时任务的应用场景其实蛮常见的： 数据备份 订单未支付则自动取消 定时爬取数据 定时推送信息 定时发布文章 定时生成报表 等等（想不到其他场景了，就只能等等来凑，等等也算是一种定时的场景吧！） Timer JDK 1.3 就开始支持的一种定时任务的实现方式。内部通过 TaskQueue 的类来存放定时任务，用起来比较简单，但缺陷比较多，比如说一个 Timer 就会起一个线程，任务多了性能就非常差，再比如说如果执行任务期间某个 TimerTask 耗时比较久，就会影响其他任务的调度。","head":[["meta",{"property":"og:url","content":"https://javabetter.cn/springboot/springtask.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Spring Boot 整合 Spring Task 实现定时任务"}],["meta",{"property":"og:description","content":"定时任务的应用场景其实蛮常见的： 数据备份 订单未支付则自动取消 定时爬取数据 定时推送信息 定时发布文章 定时生成报表 等等（想不到其他场景了，就只能等等来凑，等等也算是一种定时的场景吧！） Timer JDK 1.3 就开始支持的一种定时任务的实现方式。内部通过 TaskQueue 的类来存放定时任务，用起来比较简单，但缺陷比较多，比如说一个 Timer 就会起一个线程，任务多了性能就非常差，再比如说如果执行任务期间某个 TimerTask 耗时比较久，就会影响其他任务的调度。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-13T11:49:02.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:modified_time","content":"2023-07-13T11:49:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Boot 整合 Spring Task 实现定时任务\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-13T11:49:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"Timer","slug":"timer","link":"#timer","children":[]},{"level":3,"title":"ScheduledThreadPoolExecutor","slug":"scheduledthreadpoolexecutor","link":"#scheduledthreadpoolexecutor","children":[]},{"level":3,"title":"关于 Spring Task","slug":"关于-spring-task","link":"#关于-spring-task","children":[]},{"level":3,"title":"关于 Cron 表达式","slug":"关于-cron-表达式","link":"#关于-cron-表达式","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":3,"title":"源码路径","slug":"源码路径","link":"#源码路径","children":[]}],"git":{"createdTime":1653035404000,"updatedTime":1689248942000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":6},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":7.74,"words":2323},"filePathRelative":"springboot/springtask.md","localizedDate":"2022年5月20日","excerpt":"<p>定时任务的应用场景其实蛮常见的：</p>\\n<ul>\\n<li>数据备份</li>\\n<li>订单未支付则自动取消</li>\\n<li>定时爬取数据</li>\\n<li>定时推送信息</li>\\n<li>定时发布文章</li>\\n<li>定时生成报表</li>\\n<li>等等（想不到其他场景了，就只能等等来凑，等等也算是一种定时的场景吧！）</li>\\n</ul>\\n<h3> Timer</h3>\\n<p>JDK 1.3 就开始支持的一种定时任务的实现方式。内部通过 TaskQueue 的类来存放定时任务，用起来比较简单，但缺陷比较多，比如说一个 Timer 就会起一个线程，任务多了性能就非常差，再比如说如果执行任务期间某个 TimerTask 耗时比较久，就会影响其他任务的调度。</p>","autoDesc":true}');export{e as data};
