import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as p,a as e,d as a,b as n,e as t}from"./app-23957fcb.js";const s={},c=t('<h1 id="简单聊聊缓存雪崩、穿透、击穿" tabindex="-1"><a class="header-anchor" href="#简单聊聊缓存雪崩、穿透、击穿" aria-hidden="true">#</a> 简单聊聊缓存雪崩、穿透、击穿</h1><p>大家好，我是二哥呀。作为后端开发，我想缓存是大家再熟悉不过的东西了。</p><p>本文会介绍<strong>出现缓存雪崩、穿透和击穿的业务背景、解决方案和对业务可靠性处理</strong>。事先说明，最佳解决方案一定需要结合实际业务调整，不同业务的处理不完全相同</p><p>其实我在网上也看过不少关于缓存雪崩、穿透、击穿介绍，不知道是不是大家所做业务的不同，发现有不少小伙伴有以下疑问，比如：</p><ul><li>加随机时间过期后，如果访问时间刚好就是加了随机时间后的数据，这样岂不是白加了随机时间？</li><li>热点数据不过期，那岂不是有越来越多的脏数据？</li></ul><p>就以上问题，我都会在文中一一解释，以下说的缓存都指 Redis。</p><p>我争取把这一高频面试题讲明白，如果大家看后能在这块内容和面试官面前谈笑风生，那你就是最靓的仔。</p><p>下面，我就开始进入正题啦。</p><h2 id="_1-缓存雪崩" tabindex="-1"><a class="header-anchor" href="#_1-缓存雪崩" aria-hidden="true">#</a> 1. 缓存雪崩</h2><p>即缓存同一时间大面积的失效，这个时候来了一大波请求，都怼到数据库上，最后数据库处理不过来崩了。</p><h3 id="_1-1-业务场景举例" tabindex="-1"><a class="header-anchor" href="#_1-1-业务场景举例" aria-hidden="true">#</a> 1.1 业务场景举例</h3><p>APP 首页有大量热点数据，在某大型活动期间，针对不同时间段需要展示不同的首页数据。</p><p>比如在 0 点时需要替换新的首页数据，此时旧首页数据过期，新首页数据刚开始加载。</p><p>而 0 点正在有个小活动开始，大批请求涌入。因为新数据刚开始加载，请求多数没有命中缓存，请求到了数据库，最后就把数据库打挂了。</p><h3 id="_1-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_1-2-解决方案" aria-hidden="true">#</a> 1.2 解决方案</h3><p><strong>再强调一下，所谓的解决方案是需要根据实际业务调整，不同业务的处理不完全相同</strong></p><h4 id="_1-2-1-方法一" tabindex="-1"><a class="header-anchor" href="#_1-2-1-方法一" aria-hidden="true">#</a> 1.2.1 方法一</h4><p>常见方式就是给过期时间加个随机时间。</p><p>注意这个随机时间不是几秒哈，可以长达几分钟。因为如果数据量很大，按照上述例子，加上 Redis 是单线程处理数据的。那么几秒的缓冲不一定能够保证新数据都被加载完成。</p><p>所以过期时间宁愿设置长一点，也好过短一点。反正最后都是会过期掉，最终效果是一样的。</p><p>而且过期时间范围加大，key 会更加分散，这样也是一定程度缩短 Redis 在过期 key 时候的阻塞时间。</p><p>而至于文章开头说的：「如果访问时间刚好就是加了随机时间后的数据，这样岂不是白加了随机时间」。</p><p>现在你结合上例活动的例子，它还会是一个问题吗？结合业务，一定要结合业务。</p><h4 id="_1-2-2-方法二" tabindex="-1"><a class="header-anchor" href="#_1-2-2-方法二" aria-hidden="true">#</a> 1.2.2 方法二</h4><p>加互斥锁，但这个方案会导致吞吐量明显下降。所以还是要看实际业务，像上述例子就不合适用</p><h4 id="_1-2-3-方法三" tabindex="-1"><a class="header-anchor" href="#_1-2-3-方法三" aria-hidden="true">#</a> 1.2.3 方法三</h4><p>热点数据不设置过期。不过期的话，正常业务请求自然就不会打到数据库了。</p><p>那新的问题又来了，不过期有脏数据，怎么办？</p><p>很简单，活动整体结束后再删除嘛。</p><p>那像上述例子，可以怎么处理呢？—— 选择方法一；或者提前把 0 点需要的新数据加载进 Redis，不必等到 0 点才去加载，这样也是可以的</p><h2 id="_2-缓存击穿" tabindex="-1"><a class="header-anchor" href="#_2-缓存击穿" aria-hidden="true">#</a> 2. 缓存击穿</h2><p>缓存击穿是指一个热点 key 过期或被删除后，导致线上原本能命中该热点 key 的请求，瞬间大量地打到数据库上，最终导致数据库被击垮。</p><p>有种千里之堤，溃于蚁穴的感觉。</p><h3 id="_2-1-业务场景举例" tabindex="-1"><a class="header-anchor" href="#_2-1-业务场景举例" aria-hidden="true">#</a> 2.1 业务场景举例</h3><p>出现情况一般是误操作，比如设置错了过期时间、误删除导致的。</p><blockquote><p>谁还没误操作过呢，删库跑路了解一下。反正我误删过测试库的数据，幸好人没事，狗头保命。</p></blockquote><h3 id="_2-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-2-解决方案" aria-hidden="true">#</a> 2.2 解决方案</h3><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h3><p>代码问题，该 review 的 review。</p><p>热点数据到底要不要过期，什么时候过期要明确</p><p>既然是热点数据，大概率是核心流程。那么该保证的核心功能还是需要保证的，减少犯错机会。万一出问题，那就是用户的一波输出了。</p><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h3><p>线上误操作的事情，该加强权限管理的加强，特别是线上权限，一定需要审核，以防手抖。</p><h2 id="_3-缓存穿透" tabindex="-1"><a class="header-anchor" href="#_3-缓存穿透" aria-hidden="true">#</a> 3. 缓存穿透</h2><p>缓存穿透是指：客户端请求缓存和数据库中不存在的数据，导致所有的请求都打到数据库上。如果请求很多，数据库依旧会挂得明明白白。</p><h3 id="_3-1-业务场景举例" tabindex="-1"><a class="header-anchor" href="#_3-1-业务场景举例" aria-hidden="true">#</a> 3.1 业务场景举例</h3><ul><li>数据库主键 id 都是正数，然后客户端发起了 <code>id = -1</code> 的查询</li><li>一个查询接口，有一个状态字段 status，其实 0 表示开始、1 表示结束。结果有请求一直发 <code>status=3</code> 的请求过来</li></ul><h3 id="_3-2-解决方案" tabindex="-1"><a class="header-anchor" href="#_3-2-解决方案" aria-hidden="true">#</a> 3.2 解决方案</h3><h4 id="_3-2-1-方法一" tabindex="-1"><a class="header-anchor" href="#_3-2-1-方法一" aria-hidden="true">#</a> 3.2.1 方法一</h4><p>做好参数校验，对于不合理的参数要及时 return 结束</p><p>这点非常重点，做任何业务都一样，对于后端来说，要有<strong>互不信任原则</strong>。</p><p>简单来说，就是不要信任来自前端、客户端和上游服务的请求数据，该做的校验还是要做。</p><p>因为我们永远都不知道用户会写什么奇奇怪怪的数据；又或者即使你和对接的开发约定好了要怎么传参数，但你保不准他就没遵守呢；退一步来说，万一接口被破解呢。</p><p>你要保护好自己，不然到时出问题时，你和老大说，因为谁谁不遵守约定传参导致，或者因为没想到用户会这么填，你看看你老大会这么说（狗头.jpg）</p><h4 id="_3-2-2-方法二" tabindex="-1"><a class="header-anchor" href="#_3-2-2-方法二" aria-hidden="true">#</a> 3.2.2 方法二</h4><p>对于查不到数据的 key，也将其短暂缓存起来。</p><p>比如 30s。这样能避免大量相同请求瞬间打到数据库上，减轻压力。</p><p>但是后面肯定要去看为什么会有这样的数据，从根本上解决问题，该方法只是缓解问题而已。</p><p>如果发现就是某些 ip 在请求，并且这些数据非法，那可以在网关层限制这些 ip 访问</p><h4 id="_3-2-3-方法三" tabindex="-1"><a class="header-anchor" href="#_3-2-3-方法三" aria-hidden="true">#</a> 3.2.3 方法三</h4><p>提供一个能迅速判断请求是否有效的拦截机制，比如布隆过滤器，Redis 本身就具有这个功能。</p><p>让它维护所有合法的 key，如果请求参数不合法，则直接返回。否则就从缓存或数据库中获取。</p><p>关于布隆过滤器可以看我之前写的文章：xxx</p><h2 id="_4-业务可靠性处理" tabindex="-1"><a class="header-anchor" href="#_4-业务可靠性处理" aria-hidden="true">#</a> 4. 业务可靠性处理</h2><p>如开头所说，缓存指 Redis。</p><ul><li>提高 Redis 可用性：Redis 要么用集群架构，要么用主从 + 哨兵。保证 Redis 的可用性。</li></ul><p>没有哨兵的主从不能自动故障转移，所以只有主从，万一高峰期或者在关键的活动时间节点挂了。</p><p>那么等出现线上告警、定位问题、沟通信息、等运维解决，一套操作下来，估计黄花菜都凉了。</p><ul><li>减少对缓存的依赖</li></ul><p>对于热点数据，是不是可以考虑加上本地缓存，比如：Guava、Ehcache，更简单点，hashMap、List 什么也可以。</p><p>减少对 Redis 压力的同时，还能提高性能，一举两得。</p><ul><li>业务降级</li></ul><p>从保护下游（接口或数据库）的角度考虑，针对大流量场景是不是可以做下限流。这样即使缓存崩了，也不至于把下游全部拖垮。</p><p>以及该降级的功能是不是可以降级，提前写好降级开关和降级逻辑，关键时候全靠它稳住。</p><hr>',75),o={href:"https://mp.weixin.qq.com/s/juUzaf1TQYMuJFbw7Y3SXg",target:"_blank",rel:"noopener noreferrer"},l=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function u(_,b){const r=i("ExternalLinkIcon");return d(),p("div",null,[c,e("blockquote",null,[e("p",null,[a("作者：七淅，转载链接："),e("a",o,[a("https://mp.weixin.qq.com/s/juUzaf1TQYMuJFbw7Y3SXg"),n(r)])])]),l])}const g=h(s,[["render",u],["__file","xuebeng-chuantou-jichuan.html.vue"]]);export{g as default};
