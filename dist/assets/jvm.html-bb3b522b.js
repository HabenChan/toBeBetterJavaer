import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as s,a as e,d as t,b as n,e as o}from"./app-23957fcb.js";const h={},c=e("h1",{id:"jvm学习路线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jvm学习路线","aria-hidden":"true"},"#"),t(" JVM学习路线")],-1),d=e("p",null,"2020 年的时候，通读了一遍周志明老师的《深入理解 Java 虚拟机：JVM 高级特性与最佳实践》第三版，读完之后受益匪浅，这让我对 Java 虚拟机有了一个更完整的认识。毫无疑问，《深入理解 Java 虚拟机》是 JVM 书籍中最好的一本书了，国产技术书的天花板。",-1),p=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/jvm-7036a048-4034-4965-92a6-e35d0211ba71.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),b=e("p",null,"如果觉得这本书太厚了，可以阅读进阶之路上的这篇文章，对 JVM 会有一个系统的梳理。",-1),_={href:"https://javabetter.cn/jvm/zongjie.html",target:"_blank",rel:"noopener noreferrer"},u=o('<p>在金三银四/金九银十的跳槽季中，很多小伙伴都会忍不住蠢蠢欲动，其中 JVM 更是面试中不可或缺的一部分，所以我花了几天的时间整理了一条 JVM 的学习路线，希望能帮助到大家。</p><h2 id="一、为什么要学习-jvm" tabindex="-1"><a class="header-anchor" href="#一、为什么要学习-jvm" aria-hidden="true">#</a> 一、为什么要学习 JVM？</h2><p>曾经我对 JVM 也是感到非常的头痛，完全搞不懂该怎么入门，只是听说《深入理解 Java 虚拟机》这本书很吊，但真读起来，却需要极大的耐心和定力，否则很快就会在读完第一章 JVM 的简史后放弃。</p><p>那首先，我们就要搞清楚，为什么要学习 JVM ？</p><p>第一，当然是面试要考，这一点毫无疑问，尤其是对于要参加校招的应届生来说，JVM 是绕不过去的，必须得学。</p><p>第二，如果你想成为公司不可或缺的顶梁柱，那 JVM 你得学，因为一般情况下，遇到的问题基本上 Google 下就能解决了，可一旦遇到 JVM 性能调优，就必须得有能查 OOM 的原因、能看懂字节码的老鸟出马了。</p><p>应用程序一旦上线，出问题是板上钉钉的事，除了数据库、网络、代码逻辑上的问题，剩下的就有内存溢出啊，频繁 GC 导致的性能瓶颈啊等棘手问题。</p><p>遇到这种问题，你就必须得能看懂 GC 日志，明白什么是老年代、永久代、元数据区等，这些都是 Java 虚拟机方面的知识。</p><p>明白了学习 JVM 的重要性，那我们就开搞吧！</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/jvm-4cbbdc72-3bdd-4b14-9d8d-ecd7764afb11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="二、jvm-学习路线图" tabindex="-1"><a class="header-anchor" href="#二、jvm-学习路线图" aria-hidden="true">#</a> 二、JVM 学习路线图</h2><p>这是我最近整理的一张关于 JVM 的思维导图，大的方向可以分为三个部分：字节码与类的加载、内存与垃圾回收、性能监控和调优。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/jvm-b4ec034b-9f20-40b9-a2a3-e77afffd2abf.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>字节码与类的加载包括：</p><ul><li>类的加载机制（类的加载过程、类加载器、双亲委派模型）</li><li>字节码（类文件结构、字节码指令、字节码执行引擎、实战字节码）</li></ul><p>内存与垃圾回收包括：</p><ul><li>JVM 内存结构</li><li>垃圾回收算法</li><li>垃圾回收机制</li><li>垃圾收集器</li></ul><p>性能监控和调优包括：</p><ul><li>调优指标</li><li>调优对象</li><li>调优工具</li><li>JIT 优化</li></ul><p>有理论知识，有动手实战，基本上可以把 JVM 这块学的非常扎实了。</p><h2 id="三、硬核-jvm-学习资料" tabindex="-1"><a class="header-anchor" href="#三、硬核-jvm-学习资料" aria-hidden="true">#</a> 三、硬核 JVM 学习资料</h2><h3 id="_1-java进阶之路" tabindex="-1"><a class="header-anchor" href="#_1-java进阶之路" aria-hidden="true">#</a> <strong>1）Java进阶之路</strong></h3><p>学 Java，怎么能少得了《二哥的Java进阶之路》，网址我贴下面了哈：</p>',23),g={href:"https://javabetter.cn/jvm/",target:"_blank",rel:"noopener noreferrer"},v=o('<p>我按照前面的思维导图整理了 19 篇文章，全部都是硬核级别的，跟着学就对了。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/jvm-20240116142803.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-视频" tabindex="-1"><a class="header-anchor" href="#_2-视频" aria-hidden="true">#</a> <strong>2）视频</strong></h3><p>懂的都懂，看视频到 B 站。先推荐宋红康老师的 JVM 全套教程，200多万的播放量，还是非常受欢迎的。全套课程分为：</p><ul><li>内存与垃圾回收篇</li><li>字节码与类的加载篇</li><li>性能监控和调优篇</li></ul><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/jvm-59c829ce-7fe3-45a5-b074-35dacb08941e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',6),m={href:"https://www.bilibili.com/video/BV1PJ411n7xZ",target:"_blank",rel:"noopener noreferrer"},f=o('<p>友情提示，对于找工作面试的小伙伴，看 p01-p203、p266-301 就够了！</p><p>还有黑马的这份 JVM 视频教程，1 万+的点赞量，确实很牛逼了。</p><ul><li><ol><li>JVM 内存结构的组成、各部分功能作用，学会利用内存诊断工具排查内存相关问题；</li></ol></li><li><ol start="2"><li>JVM 的招牌功能-垃圾回收机制是如何工作的，如何进行垃圾回收调优；</li></ol></li><li><ol start="3"><li>Java 程序从编译为字节码到加载到运行的全流程，各个阶段的优化处理；</li></ol></li><li><ol start="4"><li>了解 Java 内存模型相关知识，见识多线程并发读写共享数据时的问题和 Java 的解决方案。</li></ol></li></ul><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/jvm-20230410211836.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',4),j={href:"https://www.bilibili.com/video/BV1yE411Z7AP",target:"_blank",rel:"noopener noreferrer"},J=o('<p>再推荐一个狂神说的，40多万的播放量，算是一个面向 JVM 面试的突击版。像一些常见的 JVM 面试题，视频里都有讲到，比如说：</p><ul><li>什么是 JVM？</li><li>说一说类加载器？</li><li>栈和堆的区别是什么？</li><li>JDK 8 和之前发生了什么变化？</li><li>新生代和老年代是干嘛的？</li><li>From区和 To区什么区别？</li><li>如何排查 OOM？</li><li>说说垃圾回收算法</li><li>说说 JVM 内存结构</li></ul><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/jvm-be0910d8-7669-46cb-b8b9-2399162e723d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',3),x={href:"https://www.bilibili.com/video/BV1iJ411d7jS",target:"_blank",rel:"noopener noreferrer"},k=e("h3",{id:"_3-书籍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-书籍","aria-hidden":"true"},"#"),t(),e("strong",null,"3）书籍")],-1),V={href:"https://book.douban.com/subject/34907497/",target:"_blank",rel:"noopener noreferrer"},M=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/jvm-3f6065c5-2fbf-4107-804e-393b32a4f9ab.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),w=e("p",null,"这是一部从工作原理和工程实践两个维度深入剖析JVM的著作，是计算机领域公认的经典。",-1),y=e("p",null,"全书分为五个部分，第一部分为走近 Java，主要是对 JVM 的发展历史进行了介绍，其中第二部分自动内存管理和第三部分虚拟机执行子系统需要重点掌握，这两部分的内容也是最多的。",-1),z={href:"https://javabetter.cn/xuexiluxian/java/thread.html",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,"可以配合 GitHub 上这个开源的阅读笔记学习：",-1),O={href:"https://github.com/TangBean/understanding-the-jvm",target:"_blank",rel:"noopener noreferrer"},q=e("h3",{id:"_4-开源电子书",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-开源电子书","aria-hidden":"true"},"#"),t(),e("strong",null,"4）开源电子书")],-1),E={href:"https://doocs.github.io/jvm/",target:"_blank",rel:"noopener noreferrer"},P=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/jvm-f2e2e5c4-c193-4af5-b1bc-fea8df2006af.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),F={href:"https://github.com/doocs/jvm",target:"_blank",rel:"noopener noreferrer"},G=e("p",null,[t("考虑到有些小伙伴可能需要 PDF 版本，我都整理好了，需要的小伙伴请扫描下方的二维码关注作者的原创公众号「"),e("strong",null,"沉默王二"),t("」回复关键字「"),e("strong",null,"java"),t("」就可以拉取到了。")],-1),T=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"扫码关注后回复「java」关键字",tabindex:"0",loading:"lazy"}),e("figcaption",null,"扫码关注后回复「java」关键字")],-1),D=e("p",null,"再推荐一份 GitHub 上开源的 Java 虚拟机知识点总结：",-1),I={href:"https://github.com/heibaiying/Full-Stack-Notes/blob/master/notes/Java_%E8%99%9A%E6%8B%9F%E6%9C%BA.md",target:"_blank",rel:"noopener noreferrer"},H=e("p",null,"为了方便大家的学习，我也将其整理成了 PDF，内容包含了 Java 内存区域、垃圾收集算法、经典垃圾收集器、虚拟机类加载机制、程序编译和代码优化，手绘图也非常的漂亮。",-1),N=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/jvm-2beabbe4-2ddd-4180-8690-1bc3224e6b41.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),S=e("p",null,[t("需要的小伙伴可以微信搜索「"),e("strong",null,"沉默王二"),t("」回复关键字「"),e("strong",null,"java"),t("」就可以拉取到了。")],-1),C=e("h3",{id:"_5-付费专栏",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-付费专栏","aria-hidden":"true"},"#"),t(),e("strong",null,"5）付费专栏")],-1),A={href:"https://javabetter.cn/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},Z=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/readme-20240116133019.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),K={href:"https://javabetter.cn/zhishixingqiu/paicoding.html",target:"_blank",rel:"noopener noreferrer"},L=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/jvm-20230410213258.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),X={href:"http://gk.link/a/11htX",target:"_blank",rel:"noopener noreferrer"},Q=e("a",{href:"http://gk.link/a/11htX",target:"_blank"},[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/jvm-20230410212606.png"})],-1),R=e("h2",{id:"四、jvm-八股文",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#四、jvm-八股文","aria-hidden":"true"},"#"),t(" 四、JVM 八股文")],-1),U={href:"https://javabetter.cn/sidebar/sanfene/jvm.html",target:"_blank",rel:"noopener noreferrer"},W=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/jvm-a11893df-e518-4bdc-a166-884b168a8cf0.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Y=e("p",null,"为了方便大家的阅读和背诵，我已经将其整理到了《二哥的Java进阶之路》上，面渣逆袭 Java 虚拟机篇：",-1),$={href:"https://javabetter.cn/sidebar/sanfene/jvm.html",target:"_blank",rel:"noopener noreferrer"},ee=e("p",null,"Java 虚拟机八股文（背诵版）：",-1),te={href:"https://javabetter.cn/interview/java-jvm-baguwen.html",target:"_blank",rel:"noopener noreferrer"},ae=e("p",null,"诚实点说，如果能把这两份八股文背会/理解的话，简历上就真的敢写“精通”Java 虚拟机了。",-1),ne=e("h2",{id:"五、学习-jvm-的一点小心得",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#五、学习-jvm-的一点小心得","aria-hidden":"true"},"#"),t(" 五、学习 JVM 的一点小心得")],-1),oe=e("p",null,"和 C++ 相比，Java 的内存管理机制可以说是一大特色，Java 开发不再需要自己去写代码手动释放内存，甚至你想自己干，JVM 都不给你这个机会，虚拟机完全掌握了 Java 内存的控制权。",-1),re=e("p",null,"这看起来挺美好的，但并不意味着Java 开发就可以随意写代码，随意使用内存，从我多年的使用体验来看，内存溢出和内存泄露还是会时不时发生的，尤其是初学阶段，尤其在开启多线程的情况下。",-1),le=e("p",null,"一旦出现内存溢出或者内存泄露，排查问题还是挺困难的，所以知道逊尼基到底是怎么管理内存的就变得十分重要了。",-1),ie={href:"https://javabetter.cn/jvm/gc.html",target:"_blank",rel:"noopener noreferrer"},se={href:"https://javabetter.cn/jvm/whereis-the-object.html",target:"_blank",rel:"noopener noreferrer"},he={href:"https://javabetter.cn/jvm/neicun-jiegou.html",target:"_blank",rel:"noopener noreferrer"},ce=e("li",null,"这些废弃了的对象会不会造成内存泄露（OOM，OutOfMemoryError）？于是我们就需要了解每个分区的 OOM。",-1),de=e("li",null,"这些废弃了对象什么时候被回收？于是我们就需要了解垃圾回收算法，比如说清除算法、复制算法、标记整理算法和分代收集算法。",-1),pe=e("p",null,"知道了一个对象在内存中的生和死，我们还需要知道类是如何在内存中变成对象的？对象的方法是如何执行的？",-1),be={href:"https://javabetter.cn/jvm/class-file-jiegou.html",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://javabetter.cn/jvm/class-load.html",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://javabetter.cn/jvm/how-jvm-run-zijiema-zhiling.html",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://javabetter.cn/jvm/zijiema-zhiling.html",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://javabetter.cn/jvm/problem-tools.html",target:"_blank",rel:"noopener noreferrer"},me={href:"https://javabetter.cn/jvm/jit.html",target:"_blank",rel:"noopener noreferrer"},fe=e("p",null,"JVM 相关的知识已经成为面试必考的科目了，但老实讲，JVM 相关的知识还真的不太好用在项目中，或者说不太好在项目中体现出来。",-1),je=e("p",null,"那这里给大家推荐一个实战项目，基于 Spring Boot 的在线 Java IDE，可以远程执行 Java 代码并将程序的运行结果反馈出来。涉及了 Java 类文件的结构、Java 类加载器和 Java 类的热替换等 JVM 相关的技术。",-1),Je={href:"https://github.com/TangBean/OnlineExecutor",target:"_blank",rel:"noopener noreferrer"},xe=e("p",null,"听我这么一说，是不是一下子就清晰多了！",-1),ke=e("p",null,[e("strong",null,"Java 虚拟机虽然难学，但如果你能坚持学下去，内功自然而然就提升了一大截"),t("。")],-1),Ve=e("p",null,"另外，需要 Java 学习资料的话，可以直接戳我整理的这个 GitHub/码云仓库——📚Java程序员必读书单整理，附下载地址，助力每一个Java程序员构建属于自己的知识体系。包括但不限于Java、设计模式、计算机网络、操作系统、数据库、数据结构与算法、大数据、架构、面试等等。",-1),Me={href:"https://github.com/itwanger/JavaBooks",target:"_blank",rel:"noopener noreferrer"},we={href:"https://gitee.com/itwanger/JavaBooks",target:"_blank",rel:"noopener noreferrer"},ye=e("p",null,"给大家截图展示一下里面都有哪些优质的 PDF：",-1),ze=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/java-books.jpg",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Be=e("hr",null,null,-1),Oe={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},qe={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},Ee=e("p",null,[t("微信搜 "),e("strong",null,"沉默王二"),t(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"222"),t(" 即可免费领取。")],-1),Pe=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function Fe(Ge,Te){const a=l("ExternalLinkIcon");return i(),s("div",null,[c,d,p,b,e("p",null,[e("a",_,[t("JVM 核心知识点总结"),n(a)])]),u,e("blockquote",null,[e("p",null,[e("a",g,[t("https://javabetter.cn/jvm/"),n(a)])])]),v,e("blockquote",null,[e("p",null,[t("视频地址："),e("a",m,[t("https://www.bilibili.com/video/BV1PJ411n7xZ"),n(a)])])]),f,e("blockquote",null,[e("p",null,[t("视频地址："),e("a",j,[t("https://www.bilibili.com/video/BV1yE411Z7AP"),n(a)])])]),J,e("blockquote",null,[e("p",null,[t("视频地址："),e("a",x,[t("https://www.bilibili.com/video/BV1iJ411d7jS"),n(a)])])]),k,e("p",null,[t("纸质书只推荐一本周志明老师的神书《"),e("a",V,[t("深入理解 Java 虚拟机"),n(a)]),t("》，基本上学习 JVM 的小伙伴人手一本。")]),M,w,y,e("p",null,[t("第四部分程序编译与代码优化中需要重点掌握的是 JIT 部分，第五部分高效并发最好和"),e("a",z,[t("Java 并发编程"),n(a)]),t("（我前面也做了学习路线的总结）这块内容结合起来学习。")]),B,e("blockquote",null,[e("p",null,[e("a",O,[t("https://github.com/TangBean/understanding-the-jvm"),n(a)])])]),q,e("p",null,[t("推荐 doocs 社区的 "),e("a",E,[t("JVM 底层原理最全知识总结"),n(a)]),t("，算是《深入理解 Java 虚拟机》这本书的一个精简知识点梳理。")]),P,e("blockquote",null,[e("p",null,[t("GitHub 地址："),e("a",F,[t("https://github.com/doocs/jvm"),n(a)])])]),G,T,D,e("blockquote",null,[e("p",null,[e("a",I,[t("https://github.com/heibaiying/Full-Stack-Notes/blob/master/notes/Java_虚拟机.md"),n(a)])])]),H,N,S,C,e("p",null,[t("第一版的《二哥的JVM进阶之路》已经发布了，暂时只对《"),e("a",A,[t("二哥编程星球（戳链接有优惠券）"),n(a)]),t("》的用户开放，如果你需要这份 PDF 并且想享受更多服务的话，可以扫码加入。")]),Z,e("p",null,[t("除此之外，还有一份"),e("a",K,[t("技术派"),n(a)]),t("团队楼仔编写的 JVM 手册。这是 PDF 的大致内容，想要加入星球的用户，可以提前感受一下。")]),L,e("p",null,[t("郑雨迪老师在极客时间上开了一门《深入拆解Java虚拟机》的付费专栏，质量还是挺高的，喜欢的小伙伴可以戳"),e("a",X,[t("链接"),n(a)]),t("去购买，反正我自己感觉质量还不错。")]),Q,R,e("p",null,[t("这里给大家推荐两份 Java 虚拟机方面的八股文，一份来自读者"),e("a",U,[t("三分恶"),n(a)]),t("，一份来自读者小牛，先截图给大家看一下 Java 虚拟机的理解版八股文，图文并茂，非常容易消化和吸收。")]),W,Y,e("blockquote",null,[e("p",null,[e("a",$,[t("https://javabetter.cn/sidebar/sanfene/jvm.html"),n(a)])])]),ee,e("blockquote",null,[e("p",null,[e("a",te,[t("https://javabetter.cn/interview/java-jvm-baguwen.html"),n(a)])])]),ae,ne,oe,re,le,e("p",null,[e("a",ie,[t("JVM 的垃圾回收"),n(a)]),t("，其实就是收拾那些不再使用的 Java 对象，把他们曾经占用的内存重新释放出来。所以我们要搞清楚：")]),e("ul",null,[e("li",null,[e("a",se,[t("对象是如何创建的"),n(a)]),t("？对象是如何被访问的？到底哪些对象是废弃的？于是我们就需要搞清楚对象的生和死。")]),e("li",null,[t("这些废弃了的对象到底放在哪？于是就需要了解"),e("a",he,[t("JVM 的内存结构"),n(a)]),t("：方法区、堆、程序计数器、虚拟机栈和本地方法栈。")]),ce,de]),pe,e("p",null,[t("于是我们开始学习 Java 虚拟机的执行过程，学习"),e("a",be,[t("字节码文件"),n(a)]),t("（ .class 文件），学习"),e("a",_e,[t("类的加载机制"),n(a)]),t("，学习"),e("a",ue,[t("虚拟机栈的栈帧结构"),n(a)]),t("，学习方法的调用过程，学习"),e("a",ge,[t("字节码指令"),n(a)]),t("等等。")]),e("p",null,[t("为了监控虚拟机和故障排查，我们需要学习"),e("a",ve,[t("常用的 JDK 命令行工具"),n(a)]),t("，掌握必要的线上问题排查方法；此外，还需要了解 JIT (Just In Time)并不是简单的将热点代码编译成机器码就收工的，它还会对代码的执行进行优化（"),e("a",me,[t("方法内联和逃逸分析"),n(a)]),t("）。")]),fe,je,e("blockquote",null,[e("p",null,[e("a",Je,[t("https://github.com/TangBean/OnlineExecutor"),n(a)])])]),xe,ke,Ve,e("ul",null,[e("li",null,[t("GitHub 地址："),e("a",Me,[t("https://github.com/itwanger/JavaBooks"),n(a)])]),e("li",null,[t("码云地址："),e("a",we,[t("https://gitee.com/itwanger/JavaBooks"),n(a)])])]),ye,ze,Be,e("p",null,[t("GitHub 上标星 10000+ 的开源知识库《"),e("a",Oe,[t("二哥的 Java 进阶之路"),n(a)]),t("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),e("a",qe,[t("太赞了，GitHub 上标星 10000+ 的 Java 教程"),n(a)])]),Ee,Pe])}const He=r(h,[["render",Fe],["__file","jvm.html.vue"]]);export{He as default};
