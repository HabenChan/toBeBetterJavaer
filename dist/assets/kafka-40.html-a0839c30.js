import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as l,c as s,a as e,d as a,b as o,e as i}from"./app-23957fcb.js";const d={},c={href:"https://t.zsxq.com/6iuzn6I",target:"_blank",rel:"noopener noreferrer"},k=i('<p>发车🚗</p><p>Kafka最初是由Linkedin公司开发的，是一个分布式的、可扩展的、容错的、支持分区的（Partition）、多副本的（replica）、基于Zookeeper框架的发布-订阅消息系统，Kafka适合离线和在线消息消费。它是分布式应用系统中的重要组件之一，也被广泛应用于大数据处理。Kafka是用Scala语言开发，它的Java版本称为Jafka。Linkedin于2010年将该系统贡献给了Apache基金会并成为顶级开源项目之一。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-baogwdkafkamsgczhs-6c5e6ab3-ff41-4b91-a083-5f8df6d925bd.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>希望这40道面试题作为大家学习 kafka 的路线图，由浅入深，最大程度上覆盖整个 Kafka 的问答内容（预习＋复习一步到位）</strong></p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-baogwdkafkamsgczhs-58771e78-0829-4ae8-ac93-50e83be044dc.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="_1、kafka-的设计" tabindex="-1"><a class="header-anchor" href="#_1、kafka-的设计" aria-hidden="true">#</a> 1、Kafka 的设计</h2><p>Kafka 将消息以 topic 为单位进行归纳，发布消息的程序称为 <strong>Producer</strong>，消费消息的程序称为 <strong>Consumer</strong>。它是以集群的方式运行，可以由一个或多个服务组成，每个服务叫做一个 <strong>Broker</strong>，Producer 通过网络将消息发送到 kafka 集群，集群向消费者提供消息，broker 在中间起到一个代理保存消息的中转站。</p><p><strong>Kafka 中重要的组件</strong></p><p><em>1）Producer</em>：消息生产者，发布消息到Kafka集群的终端或服务</p><p><em>2）Broker</em>：一个 Kafka 节点就是一个 Broker，多个Broker可组成一个Kafka 集群。</p><blockquote><p>如果某个 Topic 下有 n 个Partition 且集群有 n 个Broker，那么每个 Broker会存储该 Topic 下的一个 Partition</p><p>如果某个 Topic 下有 n 个Partition 且集群中有 m+n 个Broker，那么只有 n 个Broker会存储该Topic下的一个 Partition</p><p>如果某个 Topic 下有 n 个Partition 且集群中的Broker数量小于 n，那么一个 Broker 会存储该 Topic 下的一个或多个 Partition，这种情况尽量避免，会导致集群数据不均衡</p></blockquote><p><em>3）Topic</em>：消息主题，每条发布到Kafka集群的消息都会归集于此，Kafka是面向Topic 的</p><p><em>4）Partition</em>：Partition 是Topic在物理上的分区，一个Topic可以分为多个Partition，每个Partition是一个有序的不可变的记录序列。单一主题中的分区有序，但无法保证主题中所有分区的消息有序。</p><p><em>5）Consumer</em>：从Kafka集群中消费消息的终端或服务</p><p><em>6）Consumer Group</em>：每个Consumer都属于一个Consumer Group，每条消息只能被Consumer Group中的一个Consumer消费，但可以被多个Consumer Group消费。</p><p><em>7）Replica</em>：Partition 的副本，用来保障Partition的高可用性。</p><p><em>8）Controller：</em> Kafka 集群中的其中一个服务器，用来进行Leader election以及各种 Failover 操作。</p><p><em>9）Zookeeper</em>：Kafka 通过Zookeeper来存储集群中的 meta 消息</p><h2 id="_2、kafka-性能高原因" tabindex="-1"><a class="header-anchor" href="#_2、kafka-性能高原因" aria-hidden="true">#</a> 2、Kafka 性能高原因</h2><ol><li>利用了 PageCache 缓存</li><li>磁盘顺序写</li><li>零拷贝技术</li><li>pull 拉模式</li></ol><h2 id="_3、kafka-文件高效存储设计原理" tabindex="-1"><a class="header-anchor" href="#_3、kafka-文件高效存储设计原理" aria-hidden="true">#</a> 3、Kafka 文件高效存储设计原理</h2><ol><li>Kafka把Topic中一个Partition大文件分成多个小文件段，通过多个小文件段，就容易定期清除或删除已经消费完成的文件，减少磁盘占用</li><li>通过索引信息可以快速定位Message和确定response的最大大小</li><li>通过将索引元数据全部映射到 memory，可以避免 Segment 文件的磁盘I/O操作</li><li>通过索引文件稀疏存储，可以大幅降低索引文件元数据占用空间大小</li></ol><h2 id="_4、kafka-的优缺点" tabindex="-1"><a class="header-anchor" href="#_4、kafka-的优缺点" aria-hidden="true">#</a> 4、Kafka 的优缺点</h2><p><strong>优点</strong></p><ul><li>高性能、高吞吐量、低延迟：Kafka 生产和消费消息的速度都达到每秒10万级</li><li>高可用：所有消息持久化存储到磁盘，并支持数据备份防止数据丢失</li><li>高并发：支持数千个客户端同时读写</li><li>容错性：允许集群中节点失败（若副本数量为n，则允许 n-1 个节点失败）</li><li>高扩展性：Kafka 集群支持热伸缩，无须停机</li></ul><p><strong>缺点</strong></p><ul><li>没有完整的监控工具集</li><li>不支持通配符主题选择</li></ul><h2 id="_5、kafka-的应用场景" tabindex="-1"><a class="header-anchor" href="#_5、kafka-的应用场景" aria-hidden="true">#</a> 5、Kafka 的应用场景</h2><ol><li><strong>日志聚合</strong>：可收集各种服务的日志写入kafka的消息队列进行存储</li><li><strong>消息系统</strong>：广泛用于消息中间件</li><li><strong>系统解耦</strong>：在重要操作完成后，发送消息，由别的服务系统来完成其他操作</li><li><strong>流量削峰</strong>：一般用于秒杀或抢购活动中，来缓冲网站短时间内高流量带来的压力</li><li><strong>异步处理</strong>：通过异步处理机制，可以把一个消息放入队列中，但不立即处理它，在需要的时候再进行处理</li></ol><h2 id="_6、kafka-中分区的概念" tabindex="-1"><a class="header-anchor" href="#_6、kafka-中分区的概念" aria-hidden="true">#</a> 6、Kafka 中分区的概念</h2><p>主题是一个逻辑上的概念，还可以细分为多个分区，一个分区只属于单个主题，很多时候也会把分区称为主题分区（Topic-Partition）。同一主题下的不同分区包含的消息是不同的，分区在存储层面可以看做一个可追加的<code>日志文件</code> ，消息在被追加到分区日志文件的时候都会分配一个特定的偏移量（offset）。offset 是消息在分区中的唯一标识，kafka 通过它来保证消息在分区内的顺序性，不过 offset 并不跨越分区，也就是说，kafka保证的是分区有序而不是主题有序。</p><p>在分区中又引入了多副本（replica）的概念，通过增加副本数量可以提高容灾能力。同一分区的不同副本中保存的是相同的消息。副本之间是一主多从的关系，其中主副本负责读写，从副本只负责消息同步。副本处于不同的 broker 中，当主副本出现异常，便会在从副本中提升一个为主副本。</p><h2 id="_7、kafka-中分区的原则" tabindex="-1"><a class="header-anchor" href="#_7、kafka-中分区的原则" aria-hidden="true">#</a> 7、Kafka 中分区的原则</h2><ol><li>指明Partition的情况下，直接将指明的值作为Partition值</li><li>没有指明Partition值但有 key 的情况下，将 key 的 Hash 值与 topic 的Partition值进行取余得到Partition值</li><li>既没有Partition值又没有 key 值的情况下，第一次调用时随机生成一个整数（后面每次调用在这个整数上自增），将这个值与Topic可用的Partition总数取余得到Parittion值，也就是常说的 round-robin 算法</li></ol><h2 id="_8、kafka-为什么要把消息分区" tabindex="-1"><a class="header-anchor" href="#_8、kafka-为什么要把消息分区" aria-hidden="true">#</a> 8、Kafka 为什么要把消息分区</h2><ol><li>方便在集群中扩展，每个 Partition 可用通过调整以适应它所在的机器，而一个Topic又可以有多个Partition组成，因此整个集群就可以适应任意大小的数据了</li><li>可以提高并发，因为可以以Partition为单位进行读写</li></ol><h2 id="_9、kafka-中生产者运行流程" tabindex="-1"><a class="header-anchor" href="#_9、kafka-中生产者运行流程" aria-hidden="true">#</a> 9、Kafka 中生产者运行流程</h2><ol><li>一条消息发过来首先会被封装成一个 ProducerRecord 对象</li><li>对该对象进行序列化处理（可以使用默认，也可以自定义序列化）</li><li>对消息进行分区处理，分区的时候需要获取集群的元数据，决定这个消息会被发送到哪个主题的哪个分区</li><li>分好区的消息不会直接发送到服务端，而是放入生产者的缓存区，多条消息会被封装成一个批次（Batch），默认一个批次的大小是 16KB</li><li>Sender 线程启动以后会从缓存里面去获取可以发送的批次</li><li>Sender 线程把一个一个批次发送到服务端</li></ol><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-baogwdkafkamsgczhs-5ebd5e06-08cb-4c2d-9a84-b1fd15505f0a.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_10、kafka-中的消息封装" tabindex="-1"><a class="header-anchor" href="#_10、kafka-中的消息封装" aria-hidden="true">#</a> 10、Kafka 中的消息封装</h2><p>在Kafka 中 Producer 可以 Batch的方式推送数据达到提高效率的作用。Kafka Producer 可以将消息在内存中累积到一定数量后作为一个 Batch 发送请求。Batch 的数量大小可以通过 Producer 的参数进行控制，可以从三个维度进行控制</p><ul><li>累计的消息的数量（如500条）</li><li>累计的时间间隔（如100ms）</li><li>累计的数据大小（如64KB）</li></ul><p>通过增加 Batch 的大小，可以减少网络请求和磁盘I/O的频次，具体参数配置需要在效率和时效性做一个权衡。</p><h2 id="_11、kafka-消息的消费模式" tabindex="-1"><a class="header-anchor" href="#_11、kafka-消息的消费模式" aria-hidden="true">#</a> 11、Kafka 消息的消费模式</h2><blockquote><p>Kafka采用大部分消息系统遵循的传统模式：Producer将消息推送到Broker，Consumer从Broker获取消息。</p></blockquote><p>如果采用 <strong>Push</strong> 模式，则Consumer难以处理不同速率的上游推送消息。</p><p>采用 Pull 模式的好处是Consumer可以自主决定是否批量的从Broker拉取数据。Pull模式有个缺点是，如果Broker没有可供消费的消息，将导致Consumer不断在循环中轮询，直到新消息到达。为了避免这点，Kafka有个参数可以让Consumer阻塞直到新消息到达。</p><h2 id="_12、kafka-如何实现负载均衡与故障转移" tabindex="-1"><a class="header-anchor" href="#_12、kafka-如何实现负载均衡与故障转移" aria-hidden="true">#</a> 12、Kafka 如何实现负载均衡与故障转移</h2><blockquote><p>负载均衡是指让系统的负载根据一定的规则均衡地分配在所有参与工作的服务器上，从而最大限度保证系统整体运行效率与稳定性</p></blockquote><p><strong>负载均衡</strong></p><p>Kakfa 的负载均衡就是每个 <strong>Broker</strong> 都有均等的机会为 Kafka 的客户端（生产者与消费者）提供服务，可以负载分散到所有集群中的机器上。Kafka 通过智能化的分区领导者选举来实现负载均衡，提供智能化的 Leader 选举算法，可在集群的所有机器上均匀分散各个Partition的Leader，从而整体上实现负载均衡。</p><p><strong>故障转移</strong></p><p>Kafka 的故障转移是通过使用<strong>会话机制</strong>实现的，每台 Kafka 服务器启动后会以会话的形式把自己注册到 Zookeeper 服务器上。一旦服务器运转出现问题，就会导致与Zookeeper 的会话不能维持从而超时断连，此时Kafka集群会选举出另一台服务器来完全替代这台服务器继续提供服务。</p><h2 id="_13、kafka-中-zookeeper-的作用" tabindex="-1"><a class="header-anchor" href="#_13、kafka-中-zookeeper-的作用" aria-hidden="true">#</a> 13、Kafka 中 Zookeeper 的作用</h2><p>Kafka 是一个使用 Zookeeper 构建的分布式系统。Kafka 的各 Broker 在启动时都要在Zookeeper上注册，由Zookeeper统一协调管理。如果任何节点失败，可通过Zookeeper从先前提交的偏移量中恢复，因为它会做周期性提交偏移量工作。同一个Topic的消息会被分成多个分区并将其分布在多个Broker上，这些分区信息及与Broker的对应关系也是Zookeeper在维护。</p><h2 id="_14、kafka-提供了哪些系统工具" tabindex="-1"><a class="header-anchor" href="#_14、kafka-提供了哪些系统工具" aria-hidden="true">#</a> 14、Kafka 提供了哪些系统工具</h2><ul><li><strong>Kafka 迁移工具</strong>：它有助于将代理从一个版本迁移到另一个版本</li><li><strong>Mirror Maker</strong>：Mirror Maker 工具有助于将一个 Kafka 集群的镜像提供给另一个</li><li><strong>消费者检查</strong>：对于指定的主题集和消费者组，可显示主题、分区、所有者</li></ul><h2 id="_15、kafka-中消费者与消费者组的关系与负载均衡实现" tabindex="-1"><a class="header-anchor" href="#_15、kafka-中消费者与消费者组的关系与负载均衡实现" aria-hidden="true">#</a> 15、Kafka 中消费者与消费者组的关系与负载均衡实现</h2><p>Consumer Group 是Kafka独有的可扩展且具有容错性的消费者机制。一个组内可以有多个Consumer，它们共享一个全局唯一的Group ID。组内的所有Consumer协调在一起来消费订阅主题（Topic）内的所有分区（Partition）。当然，每个Partition只能由同一个Consumer Group内的一个Consumer 来消费。消费组内的消费者可以使用多线程的方式实现，消费者的数量通常不超过分区的数量，且二者最好保持整数倍的关系，这样不会造成有空闲的消费者。</p><blockquote><p>Consumer 订阅的是Topic的Partition，而不是Message。所以在同一时间点上，订阅到同一个分区的Consumer必然属于不同的Consumer Group</p></blockquote><p>Consumer Group与Consumer的关系是动态维护的，当一个Consumer进程挂掉或者是卡住时，该Consumer所订阅的Partition会被重新分配到改组内的其他Consumer上，当一个Consumer加入到一个Consumer Group中时，同样会从其他的Consumer中分配出一个或者多个Partition到这个新加入的Consumer。</p><p><strong>负载均衡</strong></p>',63),p={href:"http://Group.id",target:"_blank",rel:"noopener noreferrer"},h=i('<p>为了维持Consumer与Consumer Group之间的关系，Consumer 会周期性地发送 hearbeat 到 coodinator（协调者），如果有 hearbeat 超时或未收到 hearbeat，coordinator 会认为该Consumer已经退出，那么它所订阅的Partition会分配到同一组内的其他Consumer上，这个过程称为 rebalance（再平衡）</p><h2 id="_16、kafka-中消息偏移的作用" tabindex="-1"><a class="header-anchor" href="#_16、kafka-中消息偏移的作用" aria-hidden="true">#</a> 16、Kafka 中消息偏移的作用</h2><p>生产过程中给分区中的消息提供一个顺序ID号，称之为偏移量，偏移量的主要作用为了唯一地区别分区中的每条消息。Kafka的存储文件都是按照offset.kafka来命名</p><h2 id="_17、-生产过程中何时会发生queuefullexpection以及如何处理" tabindex="-1"><a class="header-anchor" href="#_17、-生产过程中何时会发生queuefullexpection以及如何处理" aria-hidden="true">#</a> 17、 生产过程中何时会发生QueueFullExpection以及如何处理</h2><p><strong>何时发生</strong></p><p>当生产者试图发送消息的速度快于Broker可以处理的速度时，通常会发生 <strong>QueueFullException</strong></p><p><strong>如何解决</strong></p><p>首先先进行判断生产者是否能够降低生产速率，如果生产者不能阻止这种情况，为了处理增加的负载，用户需要添加足够的 Broker。或者选择生产阻塞，设置<code>Queue.enQueueTimeout.ms</code> 为 -1，通过这样处理，如果队列已满的情况，生产者将组织而不是删除消息。或者容忍这种异常，进行消息丢弃。</p><h2 id="_18、consumer-如何消费指定分区消息" tabindex="-1"><a class="header-anchor" href="#_18、consumer-如何消费指定分区消息" aria-hidden="true">#</a> 18、Consumer 如何消费指定分区消息</h2><p>Cosumer 消费消息时，想Broker 发出 <code>fetch</code> 请求去消费特定分区的消息，Consumer 可以通过指定消息在日志中的偏移量 offset，就可以从这个位置开始消息消息，Consumer 拥有了 offset 的控制权，也可以向后回滚去重新消费之前的消息。</p><p>也可以使用 <code>seek(Long topicPartition)</code> 来指定消费的位置。</p><h2 id="_19、replica、leader-和-follower-三者的概念" tabindex="-1"><a class="header-anchor" href="#_19、replica、leader-和-follower-三者的概念" aria-hidden="true">#</a> 19、Replica、Leader 和 Follower 三者的概念</h2><blockquote><p>Kafka 中的 Partition 是有序消息日志，为了实现高可用性，需要采用备份机制，将相同的数据复制到多个Broker上，而这些备份日志就是 Replica，目的是为了 <strong>防止数据丢失</strong>。</p><p>所有Partition 的副本默认情况下都会均匀地分布到所有 Broker 上,一旦领导者副本所在的Broker宕机，Kafka 会从追随者副本中选举出新的领导者继续提供服务。</p></blockquote><p><strong>Leader：</strong> 副本中的领导者。负责对外提供服务，与客户端进行交互。生产者总是向 Leader副本些消息，消费者总是从 Leader 读消息</p><p><strong>Follower：</strong> 副本中的追随者。被动地追随 Leader，不能与外界进行交付。只是向Leader发送消息，请求Leader把最新生产的消息发给它，进而保持同步。</p><h2 id="_20、replica-的重要性" tabindex="-1"><a class="header-anchor" href="#_20、replica-的重要性" aria-hidden="true">#</a> 20、Replica 的重要性</h2><p>Replica 可以确保发布的消息不会丢失，保证了Kafka的高可用性。并且可以在发生任何机器错误、程序错误或软件升级、扩容时都能生产使用。</p><h2 id="_21、kafka-中的-geo-replication-是什么" tabindex="-1"><a class="header-anchor" href="#_21、kafka-中的-geo-replication-是什么" aria-hidden="true">#</a> 21、Kafka 中的 Geo-Replication 是什么</h2><p>Kafka官方提供了MirrorMaker组件，作为跨集群的流数据同步方案。借助MirrorMaker，消息可以跨多个数据中心或云区域进行复制。您可以在主动/被动场景中将其用于备份和恢复，或者在主动/主动方案中将数据放置得更靠近用户，或支持数据本地化要求。</p><p>它的实现原理比较简单，就是通过从源集群消费消息，然后将消息生产到目标集群，即普通的消息生产和消费。用户只要通过简单的Consumer配置和Producer配置，然后启动Mirror，就可以实现集群之间的准实时的数据同步.</p><h2 id="_22、kafka-中-ar、isr、osr-三者的概念" tabindex="-1"><a class="header-anchor" href="#_22、kafka-中-ar、isr、osr-三者的概念" aria-hidden="true">#</a> 22、Kafka 中 AR、ISR、OSR 三者的概念</h2><ul><li><code>AR</code>：分区中所有副本称为 AR</li><li><code>ISR</code>：所有与主副本保持一定程度同步的副本（包括主副本）称为 ISR</li><li><code>OSR</code>：与主副本滞后过多的副本组成 OSR</li></ul><h2 id="_23、分区副本什么情况下会从-isr-中剔出" tabindex="-1"><a class="header-anchor" href="#_23、分区副本什么情况下会从-isr-中剔出" aria-hidden="true">#</a> 23、分区副本什么情况下会从 ISR 中剔出</h2><p>Leader 会维护一个与自己基本保持同步的Replica列表，该列表称为ISR，每个Partition都会有一个ISR，而且是由Leader动态维护。所谓动态维护，就是说如果一个Follower比一个Leader落后太多，或者超过一定时间未发起数据复制请求，则Leader将其从ISR中移除。当ISR中所有Replica都向Leader发送ACK（Acknowledgement确认）时，Leader才commit。</p><h2 id="_24、分区副本中的-leader-如果宕机但-isr-却为空该如何处理" tabindex="-1"><a class="header-anchor" href="#_24、分区副本中的-leader-如果宕机但-isr-却为空该如何处理" aria-hidden="true">#</a> 24、分区副本中的 Leader 如果宕机但 ISR 却为空该如何处理</h2><p>可以通过配置<code>unclean.leader.election</code> ：</p><ul><li><strong>true</strong>：允许 OSR 成为 Leader，但是 OSR 的消息较为滞后，可能会出现消息不一致的问题</li><li><strong>false</strong>：会一直等待旧 leader 恢复正常，降低了可用性</li></ul><h2 id="_25、如何判断一个-broker-是否还有效" tabindex="-1"><a class="header-anchor" href="#_25、如何判断一个-broker-是否还有效" aria-hidden="true">#</a> 25、如何判断一个 Broker 是否还有效</h2><ol><li>Broker必须可以维护和ZooKeeper的连接，Zookeeper通过心跳机制检查每个结点的连接。</li><li>如果Broker是个Follower，它必须能及时同步Leader的写操作，延时不能太久。</li></ol><h2 id="_26、kafka-可接收的消息最大默认多少字节-如何修改" tabindex="-1"><a class="header-anchor" href="#_26、kafka-可接收的消息最大默认多少字节-如何修改" aria-hidden="true">#</a> 26、Kafka 可接收的消息最大默认多少字节，如何修改</h2><p>Kafka可以接收的最大消息默认为<strong>1000000</strong>字节，如果想调整它的大小，可在Broker中修改配置参数：<code>Message.max.bytes</code>的值</p><blockquote><p>但要注意的是，修改这个值，还要同时注意其他对应的参数值是正确的，否则就可能引发一些系统异常。首先这个值要比消费端的fetch.Message.max.bytes（默认值1MB，表示消费者能读取的最大消息的字节数）参数值要小才是正确的设置，否则Broker就会因为消费端无法使用这个消息而挂起。</p></blockquote><h2 id="_27、kafka-的-ack-机制" tabindex="-1"><a class="header-anchor" href="#_27、kafka-的-ack-机制" aria-hidden="true">#</a> 27、Kafka 的 ACK 机制</h2><blockquote><p>Kafka的Producer有三种ack机制，参数值有0、1 和 -1</p></blockquote><ul><li><strong>0：</strong> 相当于异步操作，Producer 不需要Leader给予回复，发送完就认为成功，继续发送下一条（批）Message。<strong>此机制具有最低延迟，但是持久性可靠性也最差，当服务器发生故障时，很可能发生数据丢失。</strong></li><li><strong>1：</strong> Kafka 默认的设置。表示 Producer 要 Leader 确认已成功接收数据才发送下一条（批）Message。不过 Leader 宕机，Follower 尚未复制的情况下，数据就会丢失。<strong>此机制提供了较好的持久性和较低的延迟性。</strong></li><li><strong>-1：</strong> Leader 接收到消息之后，还必须要求ISR列表里跟Leader保持同步的那些Follower都确认消息已同步，Producer 才发送下一条（批）Message。<strong>此机制持久性可靠性最好，但延时性最差。</strong></li></ul><h2 id="_28、kafka-的-consumer-如何消费数据" tabindex="-1"><a class="header-anchor" href="#_28、kafka-的-consumer-如何消费数据" aria-hidden="true">#</a> 28、Kafka 的 consumer 如何消费数据</h2><p>在Kafka中，Producers将消息推送给Broker端，在Consumer和Broker建立连接之后，会主动去 Pull（或者说Fetch）消息。这种模式有些优点，首先Consumer端可以根据自己的消费能力适时的去fetch消息并处理，且可以控制消息消费的进度（offset）；此外，消费者可以控制每次消费的数，实现批量消费。</p><h2 id="_29、kafka-提供的api有哪些" tabindex="-1"><a class="header-anchor" href="#_29、kafka-提供的api有哪些" aria-hidden="true">#</a> 29、Kafka 提供的API有哪些</h2><p>Kafka 提供了两套 Consumer API，分为 <strong>High-level API</strong> 和 <strong>Sample API</strong></p><p><strong>Sample API</strong></p><p>这是一个底层API，它维持了一个与单一 Broker 的连接，并且这个API 是完全无状态的，每次请求都需要指定 offset 值，因此这套 API 也是最灵活的。</p><p><strong>High-level API</strong></p><p>该API封装了对集群中一系列Broker的访问，可以透明地消费下一个Topic，它自己维护了已消费消息的状态，即每次消费的都会下一个消息。High-level API 还支持以组的形式消费Topic，如果 Consumers 有同一个组名，那么Kafka就相当于一个队列消息服务，而各个 Consumer 均衡地消费相应Partition中的数据。若Consumers有不同的组名，那么此时Kafka就相当于一个广播服务，会把Topic中的所有消息广播到每个Consumer</p><h2 id="_30、kafka-的topic中-partition-数据是怎么存储到磁盘的" tabindex="-1"><a class="header-anchor" href="#_30、kafka-的topic中-partition-数据是怎么存储到磁盘的" aria-hidden="true">#</a> 30、Kafka 的Topic中 Partition 数据是怎么存储到磁盘的</h2><p>Topic 中的多个 Partition 以文件夹的形式保存到 Broker，每个分区序号从0递增，且消息有序。Partition 文件下有多个Segment（xxx.index，xxx.log），Segment文件里的大小和配置文件大小一致。默认为1GB，但可以根据实际需要修改。如果大小大于1GB时，会滚动一个新的Segment并且以上一个Segment最后一条消息的偏移量命名。</p><h2 id="_31、kafka-创建topic后如何将分区放置到不同的-broker-中" tabindex="-1"><a class="header-anchor" href="#_31、kafka-创建topic后如何将分区放置到不同的-broker-中" aria-hidden="true">#</a> 31、Kafka 创建Topic后如何将分区放置到不同的 Broker 中</h2><p>Kafka创建Topic将分区放置到不同的Broker时遵循以下规则：</p><ol><li>副本因子不能大于Broker的个数。</li><li>第一个分区（编号为0）的第一个副本放置位置是随机从Broker List中选择的。</li><li>其他分区的第一个副本放置位置相对于第0个分区依次往后移。也就是如果有3个Broker，3个分区，假设第一个分区放在第二个Broker上，那么第二个分区将会放在第三个Broker上；第三个分区将会放在第一个Broker上，更多Broker与更多分区依此类推。剩余的副本相对于第一个副本放置位置其实是由<code>nextReplicaShift</code>决定的，而这个数也是随机产生的。</li></ol><h2 id="_32、kafka-的日志保留期与数据清理策略" tabindex="-1"><a class="header-anchor" href="#_32、kafka-的日志保留期与数据清理策略" aria-hidden="true">#</a> 32、Kafka 的日志保留期与数据清理策略</h2><p><strong>概念</strong></p><p>保留期内保留了Kafka群集中的所有已发布消息，超过保期的数据将被按清理策略进行清理。默认保留时间是7天，如果想修改时间，在<code>server.properties</code>里更改参数<code>log.retention.hours/minutes/ms</code> 的值便可。</p><p><strong>清理策略</strong></p><ul><li><strong>删除：</strong> <code>log.cleanup.policy=delete</code> 表示启用删除策略，这也是默认策略。一开始只是标记为delete，文件无法被索引。只有过了<code>log.Segment.delete.delay.ms</code>这个参数设置的时间，才会真正被删除。</li><li><strong>压缩：</strong> <code>log.cleanup.policy=compact</code> 表示启用压缩策略，将数据压缩，只保留每个Key最后一个版本的数据。首先在Broker的配置中设置<code>log.cleaner.enable=true</code> 启用 cleaner，这个默认是关闭的。</li></ul><h2 id="_33、kafka-日志存储的message是什么格式" tabindex="-1"><a class="header-anchor" href="#_33、kafka-日志存储的message是什么格式" aria-hidden="true">#</a> 33、Kafka 日志存储的Message是什么格式</h2><p>Kafka一个Message由<strong>固定长度的header</strong>和<strong>一个变长的消息体body</strong>组成。将Message存储在日志时采用不同于Producer发送的消息格式。每个日志文件都是一个log entries（日志项）序列：</p><ol><li>每一个log entry包含一个四字节整型数（Message长度，值为1+4+N）。</li><li>1个字节的magic，magic表示本次发布Kafka服务程序协议版本号。</li><li>4个字节的CRC32值，CRC32用于校验Message。</li><li>最终是N个字节的消息数据。每条消息都有一个当前Partition下唯一的64位offset。</li></ol><blockquote><p>Kafka没有限定单个消息的大小，但一般推荐消息大小不要超过1MB，通常一般消息大小都在1～10KB之间。</p></blockquote><h2 id="_34、kafka-是否支持多租户隔离" tabindex="-1"><a class="header-anchor" href="#_34、kafka-是否支持多租户隔离" aria-hidden="true">#</a> 34、Kafka 是否支持多租户隔离</h2><blockquote><p>多租户技术（multi-tenancy technology）是一种软件架构技术，它是实现如何在多用户的环境下共用相同的系统或程序组件，并且仍可确保各用户间数据的隔离性。</p></blockquote><p><strong>解决方案</strong></p><p>通过配置哪个主题可以生产或消费数据来启用多租户，也有对配额的操作支持。管理员可以对请求定义和强制配额，以控制客户端使用的Broker资源。</p><h2 id="_35、kafka-的日志分段策略与刷新策略" tabindex="-1"><a class="header-anchor" href="#_35、kafka-的日志分段策略与刷新策略" aria-hidden="true">#</a> 35、Kafka 的日志分段策略与刷新策略</h2><p><strong>日志分段（Segment）策略</strong></p><ol><li><code>log.roll.hours/ms</code>：日志滚动的周期时间，到达指定周期时间时，强制生成一个新的Segment，默认值168h（7day）。</li><li><code>log.Segment.bytes</code>：每个Segment的最大容量。到达指定容量时，将强制生成一个新的Segment。默认值1GB（-1代表不限制）。</li><li><code>log.retention.check.interval.ms</code>：日志片段文件检查的周期时间。默认值60000ms。</li></ol><p><strong>日志刷新策略</strong></p><p>Kafka的日志实际上是开始是在缓存中的，然后根据实际参数配置的策略定期一批一批写入到日志文件中，以提高吞吐量。</p><ol><li><code>log.flush.interval.Messages</code>：消息达到多少条时将数据写入到日志文件。默认值为10000。</li><li><code>log.flush.interval.ms</code>：当达到该时间时，强制执行一次flush。默认值为null。</li><li><code>log.flush.scheduler.interval.ms</code>：周期性检查，是否需要将信息flush。默认为很大的值。</li></ol><h2 id="_36、kafka-中如何进行主从同步" tabindex="-1"><a class="header-anchor" href="#_36、kafka-中如何进行主从同步" aria-hidden="true">#</a> 36、Kafka 中如何进行主从同步</h2><blockquote><p>Kafka动态维护了一个同步状态的副本的集合（a set of In-SyncReplicas），简称ISR，在这个集合中的结点都是和Leader保持高度一致的，任何一条消息只有被这个集合中的每个结点读取并追加到日志中，才会向外部通知“这个消息已经被提交”。</p></blockquote><p>kafka 通过配置 <code>producer.type</code> 来确定是异步还是同步，默认是同步</p><p><strong>同步复制</strong></p><p>Producer 会先通过Zookeeper识别到Leader，然后向 Leader 发送消息，Leader 收到消息后写入到本地 log文件。这个时候Follower 再向 Leader Pull 消息，Pull 回来的消息会写入的本地 log 中，写入完成后会向 Leader 发送 Ack 回执，等到 Leader 收到所有 Follower 的回执之后，才会向 Producer 回传 Ack。</p><p><strong>异步复制</strong></p><p>Kafka 中 Producer 异步发送消息是基于同步发送消息的接口来实现的，异步发送消息的实现很简单，客户端消息发送过来以后，会先放入一个 <code>BlackingQueue</code> 队列中然后就返回了。Producer 再开启一个线程 <code>ProducerSendTread</code> 不断从队列中取出消息，然后调用同步发送消息的接口将消息发送给 Broker。</p><blockquote><p>Producer的这种在内存缓存消息，当累计达到阀值时批量发送请求，小数据I/O太多，会拖慢整体的网络延迟，批量延迟发送事实上提升了网络效率。但是如果在达到阀值前，Producer不可用了，缓存的数据将会丢失。</p></blockquote><h2 id="_37、kafka-中什么情况下会出现消息丢失-不一致的问题" tabindex="-1"><a class="header-anchor" href="#_37、kafka-中什么情况下会出现消息丢失-不一致的问题" aria-hidden="true">#</a> 37、Kafka 中什么情况下会出现消息丢失/不一致的问题</h2><p><strong>消息发送时</strong></p><p>消息发送有两种方式：<code>同步 - sync</code> 和 <code>异步 - async</code>。默认是同步的方式，可以通过 producer.type 属性进行配置，kafka 也可以通过配置 acks 属性来确认消息的生产</p><ul><li><code>0</code>：表示不进行消息接收是否成功的确认</li><li><code>1</code>：表示当 leader 接收成功时的确认</li><li><code>-1</code>：表示 leader 和 follower 都接收成功的确认</li></ul><p>当 acks = 0 时，不和 Kafka 进行消息接收确认，可能会因为网络异常，缓冲区满的问题，导致消息丢失</p><p>当 acks = 1 时，只有 leader 同步成功而 follower 尚未完成同步，如果 leader 挂了，就会造成数据丢失</p><p><strong>消息消费时</strong></p><p>Kafka 有两个消息消费的 consumer 接口，分别是 <code>low-level</code> 和 <code>hign-level</code></p><ol><li><code>low-level</code>：消费者自己维护 offset 等值，可以实现对 kafka 的完全控制</li><li><code>high-level</code>：封装了对 partition 和 offset，使用简单</li></ol><p>如果使用高级接口，可能存在一个消费者提取了一个消息后便提交了 offset，那么还没来得及消费就已经挂了，下次消费时的数据就是 offset + 1 的位置，那么原先 offset 的数据就丢失了。</p><h2 id="_38、kafka-作为流处理平台的特点" tabindex="-1"><a class="header-anchor" href="#_38、kafka-作为流处理平台的特点" aria-hidden="true">#</a> 38、Kafka 作为流处理平台的特点</h2><blockquote><p>流处理就是连续、实时、并发和以逐条记录的方式处理数据的意思。Kafka 是一个分布式流处理平台，它的高吞吐量、低延时、高可靠性、容错性、高可扩展性都使得Kafka非常适合作为流式平台。</p></blockquote><ol><li>它是一个简单的、轻量级的Java类库，能够被集成到任何Java应用中</li><li>除了Kafka之外没有任何其他的依赖，利用Kafka的分区模型支持水平扩容和保证顺序性</li><li>支持本地状态容错，可以执行非常快速有效的有状态操作</li><li>支持 eexactly-once 语义</li><li>支持一次处理一条记录，实现 ms 级的延迟</li></ol><h2 id="_39、消费者故障-出现活锁问题如何解决" tabindex="-1"><a class="header-anchor" href="#_39、消费者故障-出现活锁问题如何解决" aria-hidden="true">#</a> 39、消费者故障，出现活锁问题如何解决</h2><p><strong>活锁的概念</strong>：消费者持续的维持心跳，但没有进行消息处理。</p><p>为了预防消费者在这种情况一直持有分区，通常会利用 <code>max.poll.interval.ms</code>活跃检测机制，如果调用 Poll 的频率大于最大间隔，那么消费者将会主动离开消费组，以便其他消费者接管该分区</p><h2 id="_40、kafa-中如何保证顺序消费" tabindex="-1"><a class="header-anchor" href="#_40、kafa-中如何保证顺序消费" aria-hidden="true">#</a> 40、Kafa 中如何保证顺序消费</h2><p>Kafka 的消费单元是 Partition，同一个 Partition 使用 offset 作为唯一标识保证顺序性，但这只是保证了在 Partition 内部的顺序性而不是 Topic 中的顺序，因此我们需要将所有消息发往统一 Partition 才能保证消息顺序消费，那么可以在发送的时候指定 MessageKey，同一个 key 的消息会发到同一个 Partition 中。</p>',93),f={href:"https://mp.weixin.qq.com/s/1Mcm_vAq6Qv_pP-y0lPf0g",target:"_blank",rel:"noopener noreferrer"},u=e("hr",null,null,-1),g={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},m={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[a("微信搜 "),e("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"222"),a(" 即可免费领取。")],-1),b=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function K(P,x){const r=n("ExternalLinkIcon");return l(),s("div",null,[e("p",null,[a("今天给球友们分享一篇读者菜农投稿的文章：40 道精选 Kafka 面试题👍，已收录在《Java 面试指南》的《精选面试题篇》中，专栏托管在语雀平台上（更方便你沉浸式阅读和做笔记），访问地址和密码："),e("a",c,[a("https://t.zsxq.com/6iuzn6I"),o(r)])]),k,e("p",null,[a("当启动一个Consumer时，会指定它要加入的Group，使用的配置项是："),e("a",p,[a("Group.id"),o(r)])]),h,e("blockquote",null,[e("p",null,[a("参考链接："),e("a",f,[a("https://mp.weixin.qq.com/s/1Mcm_vAq6Qv_pP-y0lPf0g"),o(r)]),a("，出处：菜农曰，整理：沉默王二")])]),u,e("p",null,[a("GitHub 上标星 10000+ 的开源知识库《"),e("a",g,[a("二哥的 Java 进阶之路"),o(r)]),a("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),e("a",m,[a("太赞了，GitHub 上标星 10000+ 的 Java 教程"),o(r)])]),_,b])}const v=t(d,[["render",K],["__file","kafka-40.html.vue"]]);export{v as default};
