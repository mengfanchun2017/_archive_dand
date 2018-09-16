## day5 每日一题答案

1. pandas新建一个dataframe可以传入一个字典，比如:

   ```python
   dic={'a':1, 'b':0}
   df=pd.DataFrame(dic)
   ```

   除此以外你知道还可以传入什么样的类型和结构构建一个dataframe？

   >  类型还可以是有数组，列表等组成的字典，Numpy的结构化数组，由series组成的字典和由字典组成的字典， 机构可以是等长的或嵌套式的方式。

2. pandas的loc和iloc用法的区别是什么？

   > 前者传入的是index和column的名字，后者传入两个的名字

3. numpy如何生成随机的整数？（参考np.random模块底下的一个方法）

   > 可以用numpy.random.randint方法

4. 现在有个类 class MyClass:     variable = "blah"     def function(self):         print("This is a message inside the class.") 如果我打印MyClass.variable会返回什么？调用MyClass().function()呢？

   > 打印MyClass.variable会返回blah，调用MyClass().function()会返回This is a message inside the class.（对类不熟悉，不知道对不对。）

5. 两个集合可能有哪几种运算？（提示：A交B）

   > 以下为只有set可以用的：
   >
   > ```python
   > 1. s.update(t) 增加t集合中的元素
   > 2. s.intersection_update(t) 更新s，只保留和t重合的部分
   > 3. s.difference_update(t) 将s中去掉t
   > 4. s.symmetric_difference_update(t) 保留s和t中独立的集合
   > 5. s.add(x)
   > 6. s.remove(x)
   > 7. s.discard(x) 和remove的区别是如果x没有，不会报错
   > 8. s.pop() 提出最后一个值
   > 9. s.clear() 清除所有
   > ```

6. pandas的left join和right join有什么区别？

   > left join :左连接，返回左表中所有的记录以及右表中连接字段相等的记录。
   >
   > right join :右连接，返回右表中所有的记录以及左表中连接字段相等的记录。

7. 如何判断一个元素是否在列表当中？

   > 's' in ['a' ,'b', 's']

8. 概率的互斥事件是什么意思？

   > 也就是各个事件不能同时发生，有你没我的事件集

9. 如何查看列表中的惟一值的个数?

   > len(set(列表))

10. 如何给pandas的dataframe df重新更改列名或者索引？(参考df.columns和df.index)

   > df.columns=列名，df.index=索引名

11. pandas绘图语法有哪两种？(提示：plot.bar和plot(kind='bar '))

    > Answer: 有两种绘图方式，一种是df.plot()（.plot()中有许多参数可选，比如：kind，figsize，title，style，etc.），df.plot()默认绘图类型为line，相当于df.plot.line()；另一种绘图方式是诸如 df.plot.hist(), df.plot.bar(), df.plot.box()等, 在plot属性之后直接调用绘图方法，相当于df.plot(kind='hist'), df.plot(kind='bar'), df.plot(kind='box')等的快捷使用版。

12. python的类中__init__是做什么用的

    > 这样创建的每个实例都有自己的属性，也方便直接调用类中的函数

13. python中的控制流是什么意思

    > 就是使用if和while进行循环。也可以运行enumerate简化完成。
    >
    > enumerate() 函数用于将一个可遍历的数据对象(如列表、元组或字符串)组合为一个索引序列，同时列出数据和数据下标，一般用在 for 循环当中。使用方法如下：
    >
    > ```python
    > enumerate(iterable, start=0)
    > ```
    >
    > 其中iterable指的是字符串或者列表。start如果不指定的话，从0开始。这个函数实际上是这么实现的：
    >
    > ```python
    > def enumerate(sequence, start=0):
    >     n = start
    >     for elem in sequence:
    >         yield n, elem
    >         n += 1
    > ```

14. python中的代码如果要在中途换行怎么办？

    > 在代码后面增加 \ 之后换行继续写。这样是为了把代码限制到80字符做准备。

15. python中的maptplot库是干什么的

    > 是一个2d的视图库，可以通过代码生成数据可视化的标准库。可以使用在jupyter这类基于ipython的集成环境中。
    > 官方文档：https://matplotlib.org/

16. python中的enunmerate是干什么的

    > enumerate是一个可以简化循环遍历的内置函数。enumerate() 函数用于将一个可遍历的数据对象(如列表、元组或字符串)组合为一个索引序列，同时列出数据和数据下标，一般用在 for 循环当中。使用方法如下：
    >
    > ```python
    > enumerate(iterable, start=0)
    > ```
    >
    > 其中iterable指的是字符串或者列表。start如果不指定的话，从0开始。这个函数实际上是这么实现的：
    >
    > ```python
    > def enumerate(sequence, start=0):
    >     n = start
    >     for elem in sequence:
    >         yield n, elem
    >         n += 1
    > ```
    >详细介绍可以参考：https://blog.csdn.net/churximi/article/details/51648388
    > 