## day3 每日一题答案

1. 关于python的赋值，左边可以不加下划线写成animal lion='lion' 这样的形式吗？

   > 不可以。变量名中只能使用普通字母、数字和下划线，且以字母或下划线开头。如果想要一个多词变量名，要用下划线分隔单词。

2. pandas的dataframe某一列名为'City'，我想抽取该列，写成df['city']，返回key error:city的报错，请说下你理解的为什么会报这个key error这个错误？

   > 一个是c一个是C。dataframe中的字母是大小写敏感的。City 和 city是不同的。

3. 对于箱线图，会出现5个数据点。都是什么。其中有2个点是异常点，是那2个？

   > 对于箱线图，有5个点需要注意的，中位数，上四分位Q3，下四分位Q1，上限和下限。其中四分位距IQR=Q3-Q1，上限是Q3+1.5IQR，下限是Q1-1.5IQR，上限和下限之间的部分叫做内限，在上限和下限以外的点都是异常点，对应着图上的最上面和最下面的横线。

4. python当中的try和except语句是什么用途？

   > 答：try/except语句主要是用于处理程序正常执行过程中出现的一些异常情况，如语法错误（python作为脚本语言没有编译的环节，在执行过程中对语法进行检测，出错后发出异常消息）、数据除零错误、从未定义的变量上取值等。

5. 常用的逻辑判断符号有哪些？比如"=="检验两个变量是否相等，">"表示大于 

   > 运算符是比较两个值的逻辑过程。和数学中的符号是基本相同的，采用a与b比较的例子：
   >
   > 1. a > b 大于关系
   > 2. a < b 小于关系
   > 3. a >= b 大于等于关系
   > 4. a <= b 小于等于关系
   > 5. a != b 不等于关系
   > 6. a ==b 相等关系
   >   注意最后是==表示相等，而不是=。因为=是赋值，比如a = 10

6. 现在有一个文本字符串是s='string'，请问s.split('i')返回的结果是什么？s.split('i')[0]呢？ 

   > 1.['str','ng']
   > 2.'str'
   > Python split() 通过指定分隔符对字符串进行切片，如果参数 num 有指定值，则仅分隔 num 个子字符串。

7. print 'hello\n'，这个语句显示的结果中\n有没有显示出来？\n是普通的文本吗？

   > \n是转义符号，代表换行，如果要打印出"\n"，那就前面加上\，也就是print "\\n"。

8. 集合里面的元素是唯一的吗？

   > 是的，集合里面的元素都是唯一的，这是集合的性质。

9. 假如你不知道pandas如何去除一列里面的重复值，你会如何在搜索引擎这个方法？(用英文)  

   > 我会在google当中搜索 pandas delete repeat，然后根据搜索框推荐选项选择“pandas delete repeated rows” 或 “pandas delete duplicate rows”；根据搜索内容，搜索到这样一些语句：
   >
   > ```python
   > import pandas as pd #加载pandas包
   > 
   > df.duplicated()  #找到df中重复的项
   > 
   > df.drop_duplicates() #丢弃重复的项
   > ```

10. dewp=20 print 'The missing number of DEWP is %d'%20。显示的结果是什么？如何用format和{}实现相同的显示结果？

    > 显示的结果是，The missing number of DEWP is 20；%d'%是dec 十进制整数的表达；
    > 以下方式也可实现相同结果：
    >
    > ```python
    > dewp = 20
    > result = "The missing number of DEWP is {number}".format(number=20)
    > 
    > print (result)
    > ```

11. pandas删除缺失值用什么方法？是在原本的dataframe上面修改的吗？

    > 用.dropna()方法（默认参数：axis=0, how='any'）, 删除后会返回新的dataframe。

12. 如何查看一个dataframe里面有多少条数据？

    > 使用len(dataframe)即可返回数据条数。

13. 我们做项目的jupyter notebook是干什么程序。

    > jupyter notebook能够在一个文件中又记录文字，也能跑代码框里编辑器。这样既能提交有很多文字的报告，又能在这个报告中把代码展示出来。

14. jupyter notebook中使用的markdown记录框。markdown是什么？

    > markdown是一种轻量型的标记语言。是一种将内容与格式拆分，让写作者只关心内容的高效输入方式。其实比较简单，30分钟就能上手，助教强力安利！

15. python定义函数用什么语句开头。

    > def function1():    看到def 就知道定义了一个函数，后面是函数的名字。函数是写好的一段代码。需要执行的时候只用调用就行： function1（）

16. 在进行数据分析之前，是否有必要检查我们得到的数据，怎么检查？

    > 非常有必要，因为数据输入是分析的基础。即使分析的再好，如果原数据出现问题，也会影响分析结果。简单的要看下数据的大小、划分是否合适，再有就是是否有异常值。