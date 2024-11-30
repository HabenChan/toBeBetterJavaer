import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as l,e as i}from"./app-6YIHwASX.js";const s={},t=i(`<h3 id="java-语言具有哪些特点" tabindex="-1"><a class="header-anchor" href="#java-语言具有哪些特点"><span>Java 语言具有哪些特点？</span></a></h3><ul><li>Java 为纯面向对象的语言。它能够直接反应现实生活中的对象。</li><li>具有平台无关性。Java 利用 Java 虚拟机运行字节码，无论是在 Windows、Linux 还是 MacOS 等其它平台对 Java 程序进行编译，编译后的程序可在其它平台运行。</li><li>Java 为解释型语言，编译器把 Java 代码编译成平台无关的中间代码，然后在 JVM 上解释运行，具有很好的可移植性。</li><li>Java 提供了很多内置类库。如对多线程支持，对网络通信支持，最重要的一点是提供了垃圾回收器。</li><li>Java 具有较好的安全性和健壮性。Java 提供了异常处理和垃圾回收机制，去除了 C++中难以理解的指针特性。</li></ul><h3 id="jdk-与-jre-有什么区别" tabindex="-1"><a class="header-anchor" href="#jdk-与-jre-有什么区别"><span>JDK 与 JRE 有什么区别？</span></a></h3><ul><li>JDK：Java 开发工具包（Java Development Kit），提供了 Java 的开发环境和运行环境。</li><li>JRE：Java 运行环境(Java Runtime Environment)，提供了 Java 运行所需的环境。</li><li>JDK 包含了 JRE。如果只运行 Java 程序，安装 JRE 即可。要编写 Java 程序需安装 JDK.</li></ul><h3 id="简述-java-基本数据类型" tabindex="-1"><a class="header-anchor" href="#简述-java-基本数据类型"><span>简述 Java 基本数据类型</span></a></h3><ul><li>byte: 占用 1 个字节，取值范围-128 ~ 127</li><li>short: 占用 2 个字节，取值范围-2<sup>15</sup> ~ 2<sup>15</sup>-1</li><li>int：占用 4 个字节，取值范围-2<sup>31</sup> ~ 2<sup>31</sup>-1</li><li>long：占用 8 个字节</li><li>float：占用 4 个字节</li><li>double：占用 8 个字节</li><li>char: 占用 2 个字节</li><li>boolean：占用大小根据实现虚拟机不同有所差异</li></ul><h3 id="简述自动装箱拆箱" tabindex="-1"><a class="header-anchor" href="#简述自动装箱拆箱"><span>简述自动装箱拆箱</span></a></h3><p>对于 Java 基本数据类型，均对应一个包装类。</p><p>装箱就是自动将基本数据类型转换为包装器类型，如 int-&gt;Integer</p><p>拆箱就是自动将包装器类型转换为基本数据类型，如 Integer-&gt;int</p><h3 id="简述-java-访问修饰符" tabindex="-1"><a class="header-anchor" href="#简述-java-访问修饰符"><span>简述 Java 访问修饰符</span></a></h3><ul><li>default: 默认访问修饰符，在同一包内可见</li><li>private: 在同一类内可见，不能修饰类</li><li>protected : 对同一包内的类和所有子类可见，不能修饰类</li><li>public: 对所有类可见</li></ul><h3 id="构造方法、成员变量初始化以及静态成员变量三者的初始化顺序" tabindex="-1"><a class="header-anchor" href="#构造方法、成员变量初始化以及静态成员变量三者的初始化顺序"><span>构造方法、成员变量初始化以及静态成员变量三者的初始化顺序？</span></a></h3><p>先后顺序：静态成员变量、成员变量、构造方法。</p><p>详细的先后顺序：父类静态变量、父类静态代码块、子类静态变量、子类静态代码块、父类非静态变量、父类非静态代码块、父类构造函数、子类非静态变量、子类非静态代码块、子类构造函数。</p><h3 id="java-代码块执行顺序" tabindex="-1"><a class="header-anchor" href="#java-代码块执行顺序"><span>Java 代码块执行顺序</span></a></h3><ul><li>父类静态代码块（只执行一次）</li><li>子类静态代码块（只执行一次）</li><li>父类构造代码块</li><li>父类构造函数</li><li>子类构造代码块</li><li>子类构造函数</li><li>普通代码块</li></ul><h3 id="面向对象的三大特性" tabindex="-1"><a class="header-anchor" href="#面向对象的三大特性"><span>面向对象的三大特性？</span></a></h3><p>继承：对象的一个新类可以从现有的类中派生，派生类可以从它的基类那继承方法和实例变量，且派生类可以修改或新增新的方法使之更适合特殊的需求。</p><p>封装：将客观事物抽象成类，每个类可以把自身数据和方法只让可信的类或对象操作，对不可信的进行信息隐藏。</p><p>多态：允许不同类的对象对同一消息作出响应。不同对象调用相同方法即使参数也相同，最终表现行为是不一样的。</p><h3 id="为什么-java-语言不支持多重继承" tabindex="-1"><a class="header-anchor" href="#为什么-java-语言不支持多重继承"><span>为什么 Java 语言不支持多重继承？</span></a></h3><p>为了程序的结构能够更加清晰从而便于维护。假设 Java 语言支持多重继承，类 C 继承自类 A 和类 B，如果类 A 和 B 都有自定义的成员方法 <code>f()</code>，那么当代码中调用类 C 的 <code>f()</code> 会产生二义性。</p><p>Java 语言通过实现多个接口间接支持多重继承，接口由于只包含方法定义，不能有方法的实现，类 C 继承接口 A 与接口 B 时即使它们都有方法<code>f()</code>，也不能直接调用方法，需实现具体的<code>f()</code>方法才能调用，不会产生二义性。</p><p>多重继承会使类型转换、构造方法的调用顺序变得复杂，会影响到性能。</p><h3 id="简述-java-的多态" tabindex="-1"><a class="header-anchor" href="#简述-java-的多态"><span>简述 Java 的多态</span></a></h3><p>Java 多态可以分为编译时多态和运行时多态。</p><p>编译时多态主要指方法的重载，即通过参数列表的不同来区分不同的方法。</p><p>运行时多态主要指继承父类和实现接口时，可使用父类引用指向子类对象。</p><p>运行时多态的实现：主要依靠方法表，方法表中最先存放的是 Object 类的方法，接下来是该类的父类的方法，最后是该类本身的方法。如果子类改写了父类的方法，那么子类和父类的那些同名方法共享一个方法表项，都被认作是父类的方法。因此可以实现运行时多态。</p><h3 id="java-提供的多态机制" tabindex="-1"><a class="header-anchor" href="#java-提供的多态机制"><span>Java 提供的多态机制？</span></a></h3><p>Java 提供了两种用于多态的机制，分别是重载与覆盖。</p><p>重载：重载是指同一个类中有多个同名的方法，但这些方法有不同的参数，在编译期间就可以确定调用哪个方法。</p><p>覆盖：覆盖是指派生类重写基类的方法，使用基类指向其子类的实例对象，或接口的引用变量指向其实现类的实例对象，在程序调用的运行期根据引用变量所指的具体实例对象调用正在运行的那个对象的方法，即需要到运行期才能确定调用哪个方法。</p><h3 id="重载与覆盖的区别" tabindex="-1"><a class="header-anchor" href="#重载与覆盖的区别"><span>重载与覆盖的区别？</span></a></h3><ul><li>覆盖是父类与子类之间的关系，是垂直关系；重载是同一类中方法之间的关系，是水平关系。</li><li>覆盖只能由一个方法或一对方法产生关系；重载是多个方法之间的关系。</li><li>覆盖要求参数列表相同；重载要求参数列表不同。</li><li>覆盖中，调用方法体是根据对象的类型来决定的，而重载是根据调用时实参表与形参表来对应选择方法体。</li><li>重载方法可以改变返回值的类型，覆盖方法不能改变返回值的类型。</li></ul><h3 id="接口和抽象类的相同点和不同点" tabindex="-1"><a class="header-anchor" href="#接口和抽象类的相同点和不同点"><span>接口和抽象类的相同点和不同点？</span></a></h3><p>相同点:</p><ul><li>都不能被实例化。</li><li>接口的实现类或抽象类的子类需实现接口或抽象类中相应的方法才能被实例化。</li></ul><p>不同点：</p><ul><li><p>接口只能有方法定义，不能有方法的实现，而抽象类可以有方法的定义与实现。</p></li><li><p>实现接口的关键字为 implements，继承抽象类的关键字为 extends。一个类可以实现多个接口，只能继承一个抽象类。</p></li><li><p>当子类和父类之间存在逻辑上的层次结构，推荐使用抽象类，有利于功能的累积。当功能不需要，希望支持差别较大的两个或更多对象间的特定交互行为，推荐使用接口。使用接口能降低软件系统的耦合度，便于日后维护或添加删除方法。</p></li></ul><h3 id="简述抽象类与接口的区别" tabindex="-1"><a class="header-anchor" href="#简述抽象类与接口的区别"><span>简述抽象类与接口的区别</span></a></h3><p>抽象类：体现的是 is-a 的关系，如对于 man is a person，就可以将 person 定义为抽象类。</p><p>接口：体现的是 can 的关系。是作为模板实现的。如设置接口 fly，plane 类和 bird 类均可实现该接口。</p><p>一个类只能继承一个抽象类，但可以实现多个接口。</p><h3 id="简述内部类及其作用" tabindex="-1"><a class="header-anchor" href="#简述内部类及其作用"><span>简述内部类及其作用</span></a></h3><ul><li>成员内部类：作为成员对象的内部类。可以访问 private 及以上外部类的属性和方法。外部类想要访问内部类属性或方法时，必须要创建一个内部类对象，然后通过该对象访问内部类的属性或方法。外部类也可访问 private 修饰的内部类属性。</li><li>局部内部类：存在于方法中的内部类。访问权限类似局部变量，只能访问外部类的 final 变量。</li><li>匿名内部类：只能使用一次，没有类名，只能访问外部类的 final 变量。</li><li>静态内部类：类似类的静态成员变量。</li></ul><h3 id="java-语言中关键字-static-的作用是什么" tabindex="-1"><a class="header-anchor" href="#java-语言中关键字-static-的作用是什么"><span>Java 语言中关键字 static 的作用是什么？</span></a></h3><p>static 的主要作用有两个：</p><ul><li>为某种特定数据类型或对象分配与创建对象个数无关的单一的存储空间。</li><li>使得某个方法或属性与类而不是对象关联在一起，即在不创建对象的情况下可通过类直接调用方法或使用类的属性。</li></ul><p>具体而言 static 又可分为 4 种使用方式：</p><ul><li>修饰成员变量。用 static 关键字修饰的静态变量在内存中只有一个副本。只要静态变量所在的类被加载，这个静态变量就会被分配空间，可以使用“类.静态变量”和“对象.静态变量”的方法使用。</li><li>修饰成员方法。static 修饰的方法无需创建对象就可以被调用。static 方法中不能使用 this 和 super 关键字，不能调用非 static 方法，只能访问所属类的静态成员变量和静态成员方法。</li><li>修饰代码块。JVM 在加载类的时候会执行 static 代码块。static 代码块常用于初始化静态变量。static 代码块只会被执行一次。</li><li>修饰内部类。static 内部类可以不依赖外部类实例对象而被实例化。静态内部类不能与外部类有相同的名字，不能访问普通成员变量，只能访问外部类中的静态成员和静态成员方法。</li></ul><h3 id="为什么要把-string-设计为不可变" tabindex="-1"><a class="header-anchor" href="#为什么要把-string-设计为不可变"><span>为什么要把 String 设计为不可变？</span></a></h3><ul><li>节省空间：字符串常量存储在 JVM 的字符串池中可以被用户共享。</li><li>提高效率：String 可以被不同线程共享，是线程安全的。在涉及多线程操作中不需要同步操作。</li><li>安全：String 常被用于用户名、密码、文件名等使用，由于其不可变，可避免黑客行为对其恶意修改。</li></ul><h3 id="简述-string-stringbuffer-与-stringbuilder" tabindex="-1"><a class="header-anchor" href="#简述-string-stringbuffer-与-stringbuilder"><span>简述 String/StringBuffer 与 StringBuilder</span></a></h3><p>String 类采用利用 final 修饰的字符数组进行字符串保存，因此不可变。如果对 String 类型对象修改，需要新建对象，将老字符和新增加的字符一并存进去。</p><p>StringBuilder，采用无 final 修饰的字符数组进行保存，因此可变。但线程不安全。</p><p>StringBuffer，采用无 final 修饰的字符数组进行保存，可理解为实现线程安全的 StringBuilder。</p><h3 id="判等运算符-与-equals-的区别" tabindex="-1"><a class="header-anchor" href="#判等运算符-与-equals-的区别"><span>判等运算符==与 equals 的区别？</span></a></h3><p>== 比较的是引用，equals 比较的是内容。</p><p>如果变量是基础数据类型，== 用于比较其对应值是否相等。如果变量指向的是对象，== 用于比较两个对象是否指向同一块存储空间。</p><p>equals 是 Object 类提供的方法之一，每个 Java 类都继承自 Object 类，所以每个对象都具有 equals 这个方法。Object 类中定义的 equals 方法内部是直接调用 == 比较对象的。但通过覆盖的方法可以让它不是比较引用而是比较数据内容。</p><h3 id="简述-object-类常用方法" tabindex="-1"><a class="header-anchor" href="#简述-object-类常用方法"><span>简述 Object 类常用方法</span></a></h3><ul><li>hashCode：通过对象计算出的散列码。用于 map 型或 equals 方法。需要保证同一个对象多次调用该方法，总返回相同的整型值。</li><li>equals：判断两个对象是否一致。需保证 equals 方法相同对应的对象 hashCode 也相同。</li><li>toString: 用字符串表示该对象</li><li>clone:深拷贝一个对象</li></ul><h3 id="java-中一维数组和二维数组的声明方式" tabindex="-1"><a class="header-anchor" href="#java-中一维数组和二维数组的声明方式"><span>Java 中一维数组和二维数组的声明方式？</span></a></h3><p>一维数组的声明方式：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">type arrayName[]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">type[] arrayName</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>二维数组的声明方式：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">type arrayName[][]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">type[][] arrayName</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">type[] arrayName[]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 type 为基本数据类型或类，arrayName 为数组名字</p><h3 id="简述-java-异常的分类" tabindex="-1"><a class="header-anchor" href="#简述-java-异常的分类"><span>简述 Java 异常的分类</span></a></h3><p>Java 异常分为 Error（程序无法处理的错误），和 Exception（程序本身可以处理的异常）。这两个类均继承 Throwable。</p><p>Error 常见的有 StackOverFlowError、OutOfMemoryError 等等。</p><p>Exception 可分为运行时异常和非运行时异常。对于运行时异常，可以利用 try catch 的方式进行处理，也可以不处理。对于非运行时异常，必须处理，不处理的话程序无法通过编译。</p><h3 id="简述-throw-与-throws-的区别" tabindex="-1"><a class="header-anchor" href="#简述-throw-与-throws-的区别"><span>简述 throw 与 throws 的区别</span></a></h3><p>throw 一般是用在方法体的内部，由开发者定义当程序语句出现问题后主动抛出一个异常。</p><p>throws 一般用于方法声明上，代表该方法可能会抛出的异常列表。</p><h3 id="出现在-java-程序中的-finally-代码块是否一定会执行" tabindex="-1"><a class="header-anchor" href="#出现在-java-程序中的-finally-代码块是否一定会执行"><span>出现在 Java 程序中的 finally 代码块是否一定会执行？</span></a></h3><p>当遇到下面情况不会执行。</p><ul><li>当程序在进入 try 语句块之前就出现异常时会直接结束。</li><li>当程序在 try 块中强制退出时，如使用 System.exit(0)，也不会执行 finally 块中的代码。</li></ul><p>其它情况下，在 try/catch/finally 语句执行的时候，try 块先执行，当有异常发生，catch 和 finally 进行处理后程序就结束了，当没有异常发生，在执行完 finally 中的代码后，后面代码会继续执行。值得注意的是，当 try/catch 语句块中有 return 时，finally 语句块中的代码会在 return 之前执行。如果 try/catch/finally 块中都有 return 语句，finally 块中的 return 语句会覆盖 try/catch 模块中的 return 语句。</p><h3 id="final、finally-和-finalize-的区别是什么" tabindex="-1"><a class="header-anchor" href="#final、finally-和-finalize-的区别是什么"><span>final、finally 和 finalize 的区别是什么？</span></a></h3><ul><li>final 用于声明属性、方法和类，分别表示属性不可变、方法不可覆盖、类不可继承。</li><li>finally 作为异常处理的一部分，只能在 try/catch 语句中使用，finally 附带一个语句块用来表示这个语句最终一定被执行，经常被用在需要释放资源的情况下。</li><li>finalize 是 Object 类的一个方法，在垃圾收集器执行的时候会调用被回收对象的 finalize()方法。当垃圾回收器准备好释放对象占用空间时，首先会调用 finalize()方法，并在下一次垃圾回收动作发生时真正回收对象占用的内存。</li></ul><h3 id="简述泛型" tabindex="-1"><a class="header-anchor" href="#简述泛型"><span>简述泛型</span></a></h3><p>泛型，即“参数化类型”，解决不确定对象具体类型的问题。在编译阶段有效。在泛型使用过程中，操作的数据类型被指定为一个参数，这种参数类型在类中称为泛型类、接口中称为泛型接口和方法中称为泛型方法。</p><h3 id="简述泛型擦除" tabindex="-1"><a class="header-anchor" href="#简述泛型擦除"><span>简述泛型擦除</span></a></h3><p>Java 编译器生成的字节码是不包涵泛型信息的，泛型类型信息将在编译处理是被擦除，这个过程被称为泛型擦除。</p><h3 id="简述注解" tabindex="-1"><a class="header-anchor" href="#简述注解"><span>简述注解</span></a></h3><p>Java 注解用于为 Java 代码提供元数据。作为元数据，注解不直接影响你的代码执行，但也有一些类型的注解实际上可以用于这一目的。</p><p>其可以用于提供信息给编译器，在编译阶段时给软件提供信息进行相关的处理，在运行时处理写相应代码，做对应操作。</p><h3 id="简述元注解" tabindex="-1"><a class="header-anchor" href="#简述元注解"><span>简述元注解</span></a></h3><p>元注解可以理解为注解的注解，即在注解中使用，实现想要的功能。其具体分为：</p><ul><li>@Retention: 表示注解存在阶段是保留在源码，还是在字节码（类加载）或者运行期（JVM 中运行）。</li><li>@Target：表示注解作用的范围。</li><li>@Documented：将注解中的元素包含到 Javadoc 中去。</li><li>@Inherited：一个被@Inherited 注解了的注解修饰了一个父类，如果他的子类没有被其他注解修饰，则它的子类也继承了父类的注解。</li><li>@Repeatable：被这个元注解修饰的注解可以同时作用一个对象多次，但是每次作用注解又可以代表不同的含义。</li></ul><h3 id="简述-java-中-class-对象" tabindex="-1"><a class="header-anchor" href="#简述-java-中-class-对象"><span>简述 Java 中 Class 对象</span></a></h3><p>java 中对象可以分为实例对象和 Class 对象，每一个类都有一个 Class 对象，其包含了与该类有关的信息。</p><p>获取 Class 对象的方法：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">forName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(“类的全限定名”)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">实例对象</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">类名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">class</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java-反射机制是什么" tabindex="-1"><a class="header-anchor" href="#java-反射机制是什么"><span>Java 反射机制是什么？</span></a></h3><p>Java 反射机制是指在程序的运行过程中可以构造任意一个类的对象、获取任意一个类的成员变量和成员方法、获取任意一个对象所属的类信息、调用任意一个对象的属性和方法。反射机制使得 Java 具有动态获取程序信息和动态调用对象方法的能力。可以通过以下类调用反射 API。</p><ul><li>Class 类：可获得类属性方法</li><li>Field 类：获得类的成员变量</li><li>Method 类：获取类的方法信息</li><li>Construct 类：获取类的构造方法等信息</li></ul><h3 id="序列化是什么" tabindex="-1"><a class="header-anchor" href="#序列化是什么"><span>序列化是什么？</span></a></h3><p>序列化是一种将对象转换成字节序列的过程，用于解决在对对象流进行读写操作时所引发的问题。序列化可以将对象的状态写在流里进行网络传输，或者保存到文件、数据库等系统里，并在需要的时候把该流读取出来重新构造成一个相同的对象。</p><h3 id="简述-java-序列化与反序列化的实现" tabindex="-1"><a class="header-anchor" href="#简述-java-序列化与反序列化的实现"><span>简述 Java 序列化与反序列化的实现</span></a></h3><p>序列化：将 java 对象转化为字节序列，由此可以通过网络对象进行传输。</p><p>反序列化：将字节序列转化为 java 对象。</p><p>具体实现：实现 Serializable 接口，或实现 Externalizable 接口中的 writeExternal()与 readExternal()方法。</p><h3 id="简述-java-的-list" tabindex="-1"><a class="header-anchor" href="#简述-java-的-list"><span>简述 Java 的 List</span></a></h3><p>List 是一个有序队列，在 Java 中有两种实现方式:</p><p>ArrayList 使用数组实现，是容量可变的非线程安全列表，随机访问快，集合扩容时会创建更大的数组，把原有数组复制到新数组。</p><p>LinkedList 本质是双向链表，与 ArrayList 相比插入和删除速度更快，但随机访问元素很慢。</p><h3 id="java-中线程安全的基本数据结构有哪些" tabindex="-1"><a class="header-anchor" href="#java-中线程安全的基本数据结构有哪些"><span>Java 中线程安全的基本数据结构有哪些</span></a></h3><ul><li>HashTable: 哈希表的线程安全版，效率低</li><li>ConcurrentHashMap：哈希表的线程安全版，效率高，用于替代 HashTable</li><li>Vector：线程安全版 Arraylist</li><li>Stack：线程安全版栈</li><li>BlockingQueue 及其子类：线程安全版队列</li></ul><h3 id="简述-java-的-set" tabindex="-1"><a class="header-anchor" href="#简述-java-的-set"><span>简述 Java 的 Set</span></a></h3><p>Set 即集合，该数据结构不允许元素重复且无序。Java 对 Set 有三种实现方式：</p><p>HashSet 通过 HashMap 实现，HashMap 的 Key 即 HashSet 存储的元素，Value 系统自定义一个名为 PRESENT 的 Object 类型常量。判断元素是否相同时，先比较 hashCode，相同后再利用 equals 比较，查询 O(1)</p><p>LinkedHashSet 继承自 HashSet，通过 LinkedHashMap 实现，使用双向链表维护元素插入顺序。</p><p>TreeSet 通过 TreeMap 实现的，底层数据结构是红黑树，添加元素到集合时按照比较规则将其插入合适的位置，保证插入后的集合仍然有序。查询 O(logn)</p><h3 id="简述-java-的-hashmap" tabindex="-1"><a class="header-anchor" href="#简述-java-的-hashmap"><span>简述 Java 的 HashMap</span></a></h3><p>JDK8 之前底层实现是数组 + 链表，JDK8 改为数组 + 链表/红黑树。主要成员变量包括存储数据的 table 数组、元素数量 size、加载因子 loadFactor。HashMap 中数据以键值对的形式存在，键对应的 hash 值用来计算数组下标，如果两个元素 key 的 hash 值一样，就会发生哈希冲突，被放到同一个链表上。</p><p>table 数组记录 HashMap 的数据，每个下标对应一条链表，所有哈希冲突的数据都会被存放到同一条链表，Node/Entry 节点包含四个成员变量：key、value、next 指针和 hash 值。在 JDK8 后链表超过 8 会转化为红黑树。</p><p>若当前数据/总数据容量&gt;负载因子，Hashmap 将执行扩容操作。默认初始化容量为 16，扩容容量必须是 2 的幂次方、最大容量为 1&lt;&lt; 30 、默认加载因子为 0.75。</p><h3 id="为何-hashmap-线程不安全" tabindex="-1"><a class="header-anchor" href="#为何-hashmap-线程不安全"><span>为何 HashMap 线程不安全</span></a></h3><p>在 JDK1.7 中，HashMap 采用头插法插入元素，因此并发情况下会导致环形链表，产生死循环。</p><p>虽然 JDK1.8 采用了尾插法解决了这个问题，但是并发下的 put 操作也会使前一个 key 被后一个 key 覆盖。</p><p>由于 HashMap 有扩容机制存在，也存在 A 线程进行扩容后，B 线程执行 get 方法出现失误的情况。</p><h3 id="简述-java-的-treemap" tabindex="-1"><a class="header-anchor" href="#简述-java-的-treemap"><span>简述 Java 的 TreeMap</span></a></h3><p>TreeMap 是底层利用红黑树实现的 Map 结构，底层实现是一棵平衡的排序二叉树，由于红黑树的插入、删除、遍历时间复杂度都为 O(logN)，所以性能上低于哈希表。但是哈希表无法提供键值对的有序输出，红黑树可以按照键的值的大小有序输出。</p><h3 id="arraylist、vector-和-linkedlist-有什么共同点与区别" tabindex="-1"><a class="header-anchor" href="#arraylist、vector-和-linkedlist-有什么共同点与区别"><span>ArrayList、Vector 和 LinkedList 有什么共同点与区别？</span></a></h3><ul><li>ArrayList、Vector 和 LinkedList 都是可伸缩的数组，即可以动态改变长度的数组。</li><li>ArrayList 和 Vector 都是基于存储元素的 Object[] array 来实现的，它们会在内存中开辟一块连续的空间来存储，支持下标、索引访问。但在涉及插入元素时可能需要移动容器中的元素，插入效率较低。当存储元素超过容器的初始化容量大小，ArrayList 与 Vector 均会进行扩容。</li><li>Vector 是线程安全的，其大部分方法是直接或间接同步的。ArrayList 不是线程安全的，其方法不具有同步性质。LinkedList 也不是线程安全的。</li><li>LinkedList 采用双向列表实现，对数据索引需要从头开始遍历，因此随机访问效率较低，但在插入元素的时候不需要对数据进行移动，插入效率较高。</li></ul><h3 id="hashmap-和-hashtable-有什么区别" tabindex="-1"><a class="header-anchor" href="#hashmap-和-hashtable-有什么区别"><span>HashMap 和 Hashtable 有什么区别？</span></a></h3><ul><li>HashMap 是 Hashtable 的轻量级实现，HashMap 允许 key 和 value 为 null，但最多允许一条记录的 key 为 null.而 HashTable 不允许。</li><li>HashTable 中的方法是线程安全的，而 HashMap 不是。在多线程访问 HashMap 需要提供额外的同步机制。</li><li>Hashtable 使用 Enumeration 进行遍历，HashMap 使用 Iterator 进行遍历。</li></ul><h3 id="如何决定使用-hashmap-还是-treemap" tabindex="-1"><a class="header-anchor" href="#如何决定使用-hashmap-还是-treemap"><span>如何决定使用 HashMap 还是 TreeMap?</span></a></h3><p>如果对 Map 进行插入、删除或定位一个元素的操作更频繁，HashMap 是更好的选择。如果需要对 key 集合进行有序的遍历，TreeMap 是更好的选择。</p><h3 id="hashset-中-equals-与-hashcode-之间的关系" tabindex="-1"><a class="header-anchor" href="#hashset-中-equals-与-hashcode-之间的关系"><span>HashSet 中，equals 与 hashCode 之间的关系？</span></a></h3><p>equals 和 hashCode 这两个方法都是从 object 类中继承过来的，equals 主要用于判断对象的内存地址引用是否是同一个地址；hashCode 根据定义的哈希规则将对象的内存地址转换为一个哈希码。HashSet 中存储的元素是不能重复的，主要通过 hashCode 与 equals 两个方法来判断存储的对象是否相同：</p><ul><li>如果两个对象的 hashCode 值不同，说明两个对象不相同。</li><li>如果两个对象的 hashCode 值相同，接着会调用对象的 equals 方法，如果 equlas 方法的返回结果为 true，那么说明两个对象相同，否则不相同。</li></ul><h3 id="fail-fast-和-fail-safe-迭代器的区别是什么" tabindex="-1"><a class="header-anchor" href="#fail-fast-和-fail-safe-迭代器的区别是什么"><span>fail-fast 和 fail-safe 迭代器的区别是什么？</span></a></h3><ul><li>fail-fast 直接在容器上进行，在遍历过程中，一旦发现容器中的数据被修改，就会立刻抛出 ConcurrentModificationException 异常从而导致遍历失败。常见的使用 fail-fast 方式的容器有 HashMap 和 ArrayList 等。</li><li>fail-safe 这种遍历基于容器的一个克隆。因此对容器中的内容修改不影响遍历。常见的使用 fail-safe 方式遍历的容器有 ConcurrentHashMap 和 CopyOnWriteArrayList。</li></ul><h3 id="collection-和-collections-有什么区别" tabindex="-1"><a class="header-anchor" href="#collection-和-collections-有什么区别"><span>Collection 和 Collections 有什么区别？</span></a></h3><ul><li>Collection 是一个集合接口，它提供了对集合对象进行基本操作的通用接口方法，所有集合都是它的子类，比如 List、Set 等。</li><li>Collections 是一个包装类，包含了很多静态方法、不能被实例化，而是作为工具类使用，比如提供的排序方法：Collections.sort(list);提供的反转方法：Collections.reverse(list)。</li></ul><hr><p>投稿作者：后端技术小牛说 转载链接：<a href="https://mp.weixin.qq.com/s/PmeH38qWVxyIhBpsAsjG7w" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/PmeH38qWVxyIhBpsAsjG7w</a></p><hr><p>GitHub 上标星 10000+ 的开源知识库《<a href="https://github.com/itwanger/toBeBetterJavaer" target="_blank" rel="noopener noreferrer">二哥的 Java 进阶之路</a>》第一版 PDF 终于来了！包括Java基础语法、数组&amp;字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：<a href="https://javabetter.cn/overview/" target="_blank" rel="noopener noreferrer">太赞了，GitHub 上标星 10000+ 的 Java 教程</a></p><p>微信搜 <strong>沉默王二</strong> 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 <strong>222</strong> 即可免费领取。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,146),n=[t];function r(h,p){return l(),e("div",null,n)}const o=a(s,[["render",r],["__file","java-basic-baguwen.html.vue"]]),v=JSON.parse('{"path":"/interview/java-basic-baguwen.html","title":"Java 基础背诵版八股文必看🍉","lang":"zh-CN","frontmatter":{"title":"Java 基础背诵版八股文必看🍉","shortTitle":"Java基础背诵版八股文🍉","category":["求职面试"],"tag":["面试题&八股文"],"description":"二哥的Java进阶之路，小白的零基础Java教程，Java 基础背诵版八股文必看🍉","head":[["meta",{"name":"keywords","content":"Java,java,面试题,八股文"}],["meta",{"property":"og:url","content":"https://javabetter.cn/interview/java-basic-baguwen.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Java 基础背诵版八股文必看🍉"}],["meta",{"property":"og:description","content":"二哥的Java进阶之路，小白的零基础Java教程，Java 基础背诵版八股文必看🍉"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-06T02:28:58.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"面试题&八股文"}],["meta",{"property":"article:modified_time","content":"2024-11-06T02:28:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 基础背诵版八股文必看🍉\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png\\"],\\"dateModified\\":\\"2024-11-06T02:28:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"Java 语言具有哪些特点？","slug":"java-语言具有哪些特点","link":"#java-语言具有哪些特点","children":[]},{"level":3,"title":"JDK 与 JRE 有什么区别？","slug":"jdk-与-jre-有什么区别","link":"#jdk-与-jre-有什么区别","children":[]},{"level":3,"title":"简述 Java 基本数据类型","slug":"简述-java-基本数据类型","link":"#简述-java-基本数据类型","children":[]},{"level":3,"title":"简述自动装箱拆箱","slug":"简述自动装箱拆箱","link":"#简述自动装箱拆箱","children":[]},{"level":3,"title":"简述 Java 访问修饰符","slug":"简述-java-访问修饰符","link":"#简述-java-访问修饰符","children":[]},{"level":3,"title":"构造方法、成员变量初始化以及静态成员变量三者的初始化顺序？","slug":"构造方法、成员变量初始化以及静态成员变量三者的初始化顺序","link":"#构造方法、成员变量初始化以及静态成员变量三者的初始化顺序","children":[]},{"level":3,"title":"Java 代码块执行顺序","slug":"java-代码块执行顺序","link":"#java-代码块执行顺序","children":[]},{"level":3,"title":"面向对象的三大特性？","slug":"面向对象的三大特性","link":"#面向对象的三大特性","children":[]},{"level":3,"title":"为什么 Java 语言不支持多重继承？","slug":"为什么-java-语言不支持多重继承","link":"#为什么-java-语言不支持多重继承","children":[]},{"level":3,"title":"简述 Java 的多态","slug":"简述-java-的多态","link":"#简述-java-的多态","children":[]},{"level":3,"title":"Java 提供的多态机制？","slug":"java-提供的多态机制","link":"#java-提供的多态机制","children":[]},{"level":3,"title":"重载与覆盖的区别？","slug":"重载与覆盖的区别","link":"#重载与覆盖的区别","children":[]},{"level":3,"title":"接口和抽象类的相同点和不同点？","slug":"接口和抽象类的相同点和不同点","link":"#接口和抽象类的相同点和不同点","children":[]},{"level":3,"title":"简述抽象类与接口的区别","slug":"简述抽象类与接口的区别","link":"#简述抽象类与接口的区别","children":[]},{"level":3,"title":"简述内部类及其作用","slug":"简述内部类及其作用","link":"#简述内部类及其作用","children":[]},{"level":3,"title":"Java 语言中关键字 static 的作用是什么？","slug":"java-语言中关键字-static-的作用是什么","link":"#java-语言中关键字-static-的作用是什么","children":[]},{"level":3,"title":"为什么要把 String 设计为不可变？","slug":"为什么要把-string-设计为不可变","link":"#为什么要把-string-设计为不可变","children":[]},{"level":3,"title":"简述 String/StringBuffer 与 StringBuilder","slug":"简述-string-stringbuffer-与-stringbuilder","link":"#简述-string-stringbuffer-与-stringbuilder","children":[]},{"level":3,"title":"判等运算符==与 equals 的区别？","slug":"判等运算符-与-equals-的区别","link":"#判等运算符-与-equals-的区别","children":[]},{"level":3,"title":"简述 Object 类常用方法","slug":"简述-object-类常用方法","link":"#简述-object-类常用方法","children":[]},{"level":3,"title":"Java 中一维数组和二维数组的声明方式？","slug":"java-中一维数组和二维数组的声明方式","link":"#java-中一维数组和二维数组的声明方式","children":[]},{"level":3,"title":"简述 Java 异常的分类","slug":"简述-java-异常的分类","link":"#简述-java-异常的分类","children":[]},{"level":3,"title":"简述 throw 与 throws 的区别","slug":"简述-throw-与-throws-的区别","link":"#简述-throw-与-throws-的区别","children":[]},{"level":3,"title":"出现在 Java 程序中的 finally 代码块是否一定会执行？","slug":"出现在-java-程序中的-finally-代码块是否一定会执行","link":"#出现在-java-程序中的-finally-代码块是否一定会执行","children":[]},{"level":3,"title":"final、finally 和 finalize 的区别是什么？","slug":"final、finally-和-finalize-的区别是什么","link":"#final、finally-和-finalize-的区别是什么","children":[]},{"level":3,"title":"简述泛型","slug":"简述泛型","link":"#简述泛型","children":[]},{"level":3,"title":"简述泛型擦除","slug":"简述泛型擦除","link":"#简述泛型擦除","children":[]},{"level":3,"title":"简述注解","slug":"简述注解","link":"#简述注解","children":[]},{"level":3,"title":"简述元注解","slug":"简述元注解","link":"#简述元注解","children":[]},{"level":3,"title":"简述 Java 中 Class 对象","slug":"简述-java-中-class-对象","link":"#简述-java-中-class-对象","children":[]},{"level":3,"title":"Java 反射机制是什么？","slug":"java-反射机制是什么","link":"#java-反射机制是什么","children":[]},{"level":3,"title":"序列化是什么？","slug":"序列化是什么","link":"#序列化是什么","children":[]},{"level":3,"title":"简述 Java 序列化与反序列化的实现","slug":"简述-java-序列化与反序列化的实现","link":"#简述-java-序列化与反序列化的实现","children":[]},{"level":3,"title":"简述 Java 的 List","slug":"简述-java-的-list","link":"#简述-java-的-list","children":[]},{"level":3,"title":"Java 中线程安全的基本数据结构有哪些","slug":"java-中线程安全的基本数据结构有哪些","link":"#java-中线程安全的基本数据结构有哪些","children":[]},{"level":3,"title":"简述 Java 的 Set","slug":"简述-java-的-set","link":"#简述-java-的-set","children":[]},{"level":3,"title":"简述 Java 的 HashMap","slug":"简述-java-的-hashmap","link":"#简述-java-的-hashmap","children":[]},{"level":3,"title":"为何 HashMap 线程不安全","slug":"为何-hashmap-线程不安全","link":"#为何-hashmap-线程不安全","children":[]},{"level":3,"title":"简述 Java 的 TreeMap","slug":"简述-java-的-treemap","link":"#简述-java-的-treemap","children":[]},{"level":3,"title":"ArrayList、Vector 和 LinkedList 有什么共同点与区别？","slug":"arraylist、vector-和-linkedlist-有什么共同点与区别","link":"#arraylist、vector-和-linkedlist-有什么共同点与区别","children":[]},{"level":3,"title":"HashMap 和 Hashtable 有什么区别？","slug":"hashmap-和-hashtable-有什么区别","link":"#hashmap-和-hashtable-有什么区别","children":[]},{"level":3,"title":"如何决定使用 HashMap 还是 TreeMap?","slug":"如何决定使用-hashmap-还是-treemap","link":"#如何决定使用-hashmap-还是-treemap","children":[]},{"level":3,"title":"HashSet 中，equals 与 hashCode 之间的关系？","slug":"hashset-中-equals-与-hashcode-之间的关系","link":"#hashset-中-equals-与-hashcode-之间的关系","children":[]},{"level":3,"title":"fail-fast 和 fail-safe 迭代器的区别是什么？","slug":"fail-fast-和-fail-safe-迭代器的区别是什么","link":"#fail-fast-和-fail-safe-迭代器的区别是什么","children":[]},{"level":3,"title":"Collection 和 Collections 有什么区别？","slug":"collection-和-collections-有什么区别","link":"#collection-和-collections-有什么区别","children":[]}],"git":{"createdTime":1638502328000,"updatedTime":1730860138000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":21.15,"words":6344},"filePathRelative":"interview/java-basic-baguwen.md","localizedDate":"2021年12月3日","excerpt":"<h3>Java 语言具有哪些特点？</h3>\\n<ul>\\n<li>Java 为纯面向对象的语言。它能够直接反应现实生活中的对象。</li>\\n<li>具有平台无关性。Java 利用 Java 虚拟机运行字节码，无论是在 Windows、Linux 还是 MacOS 等其它平台对 Java 程序进行编译，编译后的程序可在其它平台运行。</li>\\n<li>Java 为解释型语言，编译器把 Java 代码编译成平台无关的中间代码，然后在 JVM 上解释运行，具有很好的可移植性。</li>\\n<li>Java 提供了很多内置类库。如对多线程支持，对网络通信支持，最重要的一点是提供了垃圾回收器。</li>\\n<li>Java 具有较好的安全性和健壮性。Java 提供了异常处理和垃圾回收机制，去除了 C++中难以理解的指针特性。</li>\\n</ul>"}');export{o as comp,v as data};