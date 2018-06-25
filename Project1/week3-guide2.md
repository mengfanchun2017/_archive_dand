# week3a/12 本周导学

## 前面的话

同学们，第2周我们进入到了项目2的第一周，学习了Python的基础知识。这一周我们将开始学习Python中的NumPy和Pandas两个第三方库，这两个库是我们对数据进行分析的杀手锏。保留了第二个项目的介绍如下：

**项目2:探索美国共享单车数据**

> - 项目说明:在此项目中，你将利用 Python 探索与以下三大美国城市的自行车共享系统相关的数据：芝加哥、纽约和华盛顿特区。你将编写代码导入数据，并通过计算描述性统计数据回答有趣的问题。你还将写一个脚本，该脚本会接受原始输入并在终端中创建交互式体验，以展现这些统计信息。
> - 练习目标：数据分析过程、数据整理、探索和可视化
> - 项目概述：请先看下这一页，对项目有个感触：
https://classroom.udacity.com/nanodegrees/nd002-cn-basic-vip/parts/0ad43cea-8e74-4486-911c-d1fae2f03c97/modules/134150b9-81b0-40d1-9c2c-bb288bb49d55/lessons/e5bef1dd-5031-45c3-aaf7-8536f6f3cf8a/concepts/8846274e-0239-4eef-8619-f9854a068ca8

另外，为了能够顺利完成项目2，请准备好以下环境：

> 1. （非必须但推荐）本地Anaconda环境，安装后可以运行：Python3、Jupyter Notebook、Spyder
>   1. Anaconda的安装和Jupyter Notebook的安装配置请见可选内容：https://classroom.udacity.com/nanodegrees/nd002-cn-basic-vip/parts/e566ad37-6119-4448-a6bc-7ade73ef3992
>   1. spyder的简单教程：https://blog.csdn.net/LucyGill/article/details/78068985
> 1. 如果想自己安装也可以选择Atom和Sublime两个，和Spyder是一样的，但要单独安装，有点麻烦。当然，有经验的同学用自己习惯的就好了
> 1. 在本周第4部分也有Atom的使用教程，可以先看或者顺序看：配置Python编程环境 https://classroom.udacity.com/nanodegrees/nd002-cn-basic-vip/parts/0ad43cea-8e74-4486-911c-d1fae2f03c97/modules/2ceb59e6-2fa6-4177-a8b8-b6130f45ac3f/lessons/09be9405-95aa-4a89-b800-9b60ccde5476/concepts/f411e93c-03f8-4d45-b60f-d4c2832b63d6#

对于Atom的插件再补充一点点：

![打开安装界面](https://ws2.sinaimg.cn/large/006tKfTcly1fshgle7cbcj30c40aa3yw.jpg)

- 搜索并安装（配置也在packages的下面）

![安装](https://ws2.sinaimg.cn/large/006tKfTcly1fshgqd8gnvj30ip0b7jrn.jpg)

- 安装时可能会需要安装这个扩展依赖的别的扩展，一路确认就好了
- 推荐扩展：pylint 可以对输入的语句做详细提示，当你输入后会这样：

![](https://ws1.sinaimg.cn/large/006tKfTcly1fshguqjuzlj308t0a1q2z.jpg)

- 推荐扩展：script 使用command + i 可以在atom中运行py
    
## 学习计划

看着还挺丰富的对吧，这4周我们讲完成**/4. Python入门/**部分的所有内容，拆分后的每周工作和每日工作是这样的：

| 时间 | 学习重点 | 对应内容（按照名字找就好了） |
| --- | --- | --- |
| 第1周 | Python基础内容 | 数据类型和运算符、控制流、函数、脚本编写 |
| **第2周** | **Python数据处理内容** | **Numpy & Pandas - 第一、二部分** |
| 第3周 | 运用前2周的知识完成项目 | 项目：探索美国共享单车数据 |
| 第4周 | 项目修改与通过 | 修改项目、查缺补漏、休息调整 |

每周的时间还是按照这个进度，注意周六的时间是大家Classin视频讨论的时间，其他的可以灵活调配，记住目标不要拖过一周为妙，加油！

| 学习时间 | 学习资源 | 学习重点 |
| --- | --- | --- |
| 周3 | /助教/发布当周导学 | 浏览导学文件内容开始学习 |
| 周4 | /Uda/线上内容 | 学习Uda Classroom内容 |
| 周5 | /助教/1v1预约 | 难点可预约1v1语音指导 |
| 周6 20:30-21:30 | /助教/视频讲解 | 讲解本周导学内容、回答疑难问题 |
| 周7 | /小结/本周总结 | 总结、笔记、思考 |
| 周1 | /选学/自主学习修养 | 自主学习（选学部分）或调休 |

**重点提示：**[]([]())

- 每周任务会拆分成不同目标，对应的是课程中的Lesson，每个Lesson中的小节将通过{编号.内容}进行对应
- {}前面将会放置1到3个*，代表重要性从低到高。请优先学习高优先级的任务


## 本周目标

本节将按照4个学习部分（4个目标）进行难点指导和扩展，每个目标下的/x/就是对应的小节编号。这部分虽然有些多，但在试学项目中有过一些接触，所以呢：**不要怂，就是肝！**

### /目标1/：Numpy & Pandas 第一部分

#### *{4.Numpy和Pandas中的一维数组}

了解下哦使用pandas读入csv文件比直接使用unicodecsv读入要快就好了。

#### **{5.NumPy 数组}

 Numpy中的Arrays和list列表很像，区别如下：
 
  - Arrays中的元素要都是同一类别（数字，字符只能有一种）
  - 可以使用Numpy中的很多函数，比如平均值mean(), 标准差std()。虽然list也可以使用这些函数，但Arrays运行起来更快
  - Arrays可以扩展到多维
  - 代码练习中的 if True：就会执行后面一小段程序，如果是 if False：就不会执行，是一种测试的习惯，大家可以更改True 或 False 来决定运行那一块代码。对代码def那里的说明如下：

```python
def max_employment(countries, employment):
#定义了一个函数max_employment,需要输入两个参数countries和employment

    max_country = None
    max_value = 0
    #将最大城市设为空，将最大值设为0
    for i in range(len(countries)):
        country = countries[i]
        country_employment = employment[i]
    #开始循环，对countries中的国家，循环读取国家名和就业率
        if country_employment > max_value:
            max_country = country
            max_value = country_employment
        #如果就业率比最大值还大，就把新发现的作为新的最大值和拥有最大值的国家
            
     return (max_country, max_value)
     #函数结束，返回两个找到的最大值和对应国家
```

#### **{8.练习：计算整体完成率}

按位与与逻辑与，此处只需要看看练习，了解numpy的向量化运算就可以了。感兴趣的可以看下面3个链接：
- 区别：http://www.cnblogs.com/wudongyang/p/4340003.html
- numpy逻辑或说明：https://docs.scipy.org/doc/numpy/reference/generated/numpy.logical_or.html
- numpy逻辑或说明：https://docs.scipy.org/doc/numpy/reference/generated/numpy.logical_not.html

#### **{9.标准化数据/学会调用numpy的功能}

首先说明一下为什么我们要标准化呢？因为在很多数据进行比较的时候，范围、比例等都会有很大的变化，而这些体现在数值上来讲，人根本就没有什么感觉（看到就发懵了，不好判断）。那么我们怎么办来比较不同的数据呢：**我们把大家按照比例缩放，都放到一个区域中呗，比如所有的数据都在0-1之间，那么我看到接近1的就知道很高了，接近0的就很低了，其他的不用考虑。**前面的说明只是一个粗浅的举例，这种方式有很规则和应用。

细抠的话还有标准化和归一化等等细节，在机器学习中接触比较多，大家有兴趣看链接：https://blog.csdn.net/fontthrone/article/details/74067064

那么接下来这部分的例子就是要衡量各个国家的就业率，通过标准化，我们能够看出不同国家做的好坏，代码解释如下：

```python
#其实这里的函数没有必要，只用一行就ok了
def standardize_data(values):
    standardize_values = (values - values.mean()) / values.std()
    #这行就是进行表转化转换，注意里面的变量使用的是values，这是一个numpy的阵列，所以输出也是一个阵列（每个元素都计算一遍，再存入到阵列中）
    #但是其中values.mean()是一个阵列所有元素的均值，是一个固定值；同样values.std()是标准差，也是一个固定值。
    #标准差这里我们第四个项目再讲，大家看明白是怎么计算就好了
    return standardize_values
```

关于numpy强大的数学运算功能，请大家参见：https://www.tutorialspoint.com/numpy/numpy_statistical_functions.htm

#### *{10.练习：NumPy索引数组}

了解Array的索引数组使用方式，可以在一个数组后面加```[条件]```对数组进行过滤.

#### *{12.练习：原地与非原地}

了解list和numpy array在对于元素修改的不同之处。

#### ***{13.练习：Pandas Series}

从这节开始我们将会学习Pandas库，Pandas库里的Series和之前学习的Numpy Array是类似的。**Pandas是Python处理数据最重要的库，以下几节需要多看几遍。**相比之下，有更多扩展性，比如说：

Series.describe()方法，对于Series的数据内容自动计算平均值、标准偏差、中位数和一些其他的统计数据。做总体描述，便于观察数据情况。

Series包括了Array的大部分功能，总结如下（假设这个Series命名为S）：
- 访问元素 Accessing Elements - S[0], S[3:7]
- 循环 Looping - for x in S
- 功能计算 Convenient Functions - S.mean(), S.max()
- 向量运算 Vectorized Operation - S1 + S2

此处的练习还用到了上周的逻辑判断的内容，讲解一下函数部分：

```python
def variable_correlation(variable1, variable2):
#此处定义了函数，两个变量，就是life_expectancy和gdp了
    both_above = (variable1 > variable1.mean()) & \
        (variable2 > variable2.mean())
    #显示看都大于平均值的。首先看两个小括号，第一个是用变量1的每个值和变量1的平均值比较（.mean()就是求平均值），第二个小括弧是比较变量2的。两个都比较好了之后，在做与操作（就是说都是Ture的话，结果就为True），其中 \ 是python中的换行，为了不超过一行79个字符的限制
    both_below = (variable1 < variable1.mean()) & \
        (variable2 < variable2.mean())
    #同上，改为判断是不是都低于平均值

    is_same_direction = both_above | both_below
    #接下来，根据要求吧都高于和都低于的进行与操作，就能看出同方向变化的量是谁了（这里的意思是看看两个指标是不是相关啊）
    num_same_direction = is_same_direction.sum()
    #接着求出有多少个是相关的，运用的是.sum()就是求和，因为Ture是1所以所有True的加起来就是17了
    num_different_direction = len(variable1) - num_same_direction
    #最后，那么不相关的就是用总数减去相关的就好了，len求总数（就是看这个序列有多少个元素）

    return (num_same_direction, num_different_direction)
    #函数的最后，返回这两个值17个相关，3个不相关。感觉预期生命和GDP还是有关系的对不对。（这个练习可以当成一个mini项目了）
```

#### ***{14.练习：Series索引}

这节里面一句话亮了：**Numpy arrays是增强版的 Python lists，Pandas series像是Python lists 与 dictionary的结合。lists列表是根据顺序位置获取值的，而dictionay字典是通过key-value对应来获取值的，而在series中这两种方式都可以，对应的是iloc和loc方式。**

这里面要注意的一个是里面使用的argmax()已经被idxmax()替代了，代码解释如下：

```python
def max_employment(employment):
    employment_pd = pd.Series(employment, index = countries)
    #将employment的数据转换为Series，索引使用countries列表中的数据
    max_country = employment_pd.idxmax()
    #使用idmax找到最大的索引
    max_value = employment_pd.loc[max_country]
    #使用.loc[index]将最大索引对应的数值赋给max_value
    return (max_country, max_value)
    #返回max_country与max_value
```

#### **{17.练习：Pandas Series apply()}

- 本节大家记住Panda series和Python lists在类似的，可以使用for循环。
- 并且学了一个.apply()的方法。可以将()的函数作用于所有serie的元素中，并生成新的serie。
- 还有做练习的时候用到一个.split方法，是将输入分隔使用的，我将在下面代码中用注释讲解，感兴趣的也可以看官方文档：https://docs.python.org/2/library/stdtypes.html#str.split 中文介绍文档：https://my.oschina.net/hkmax/blog/146553

```python
def reverse_names(names):
    splited = names.split()
    #首先使用split将名字分为两个名字比如‘Lao Meng’就会变成['Lao', 'Meng']
    #当变成一个列表之后呢，就可以使用[索引号]分别选择‘Lao’和‘Meng’了
    new_names = splited[1] + ' ' + splited[0]
    #splited[1]代表‘Meng’，splited[0]代表‘Lao’
    #通过对new_names赋值，改变了名字的前后顺序
    #注意中间加了一个‘ ’空格
    return new_names
    #最后函数返回new_names新的名字
    
print(names.apply(reverse_names)) 
#使用apply调用刚刚的函数，那么每个series中的值都会被这个函数处理一遍   
```

#### *{18.练习：在Pandas中绘图}

**完全作为选修内容，在项目2中不要求。**大家知道import的seaborn是一个用于绘图的库就好了。一个中文的说明：http://blog.mazhangjing.com/2018/03/29/learn_seaborn/#233-多变量多图形拟合叠加

### /目标2/：控制流
此处就不是选学了，对于任何一种编程语言，控制流（循环）是非常重要的，请按以下顺序完成：
- 完成课程1-16内容
- 完成试学项目的选看内容 https://github.com/mengfanchun2017/DAND-Basic-P0/blob/master/day6-guide.md
- 完成课程17-22部分，之后看下面扩展
- /17 Zip和Enumerate/
    - 我们先来说zip，就是拉链的意思，可以把进行组合和拆分，课程里的例子非常详细。其实zip函数可以进行行列转换，感兴趣的话可以看这个：https://blog.csdn.net/shomy_liu/article/details/46968651
    - 接下来是Enumerate函数，其实就是简化for的一个内置函数，让你的循环更漂亮！
    - 最后是List Comprehension列表推导式：可以把一个设定初始空值，用条件循环填充的循环，简化成一个赋值语句，对比以下，注意else语句的位置是在前面：

```python
#for loop:
capitalized_cities = []
for city in cities:
capitalized_cities.append(city.title())
    
#list comprehension:
capitalized_cities = [city.title() for city in cities]

#list comprehension else:
squares = [x**2 if x % 2 == 0 else x + 3 for x in range(9)]
```

书中练习的解释（要先做完在看呦）：

```python
#练习1
names = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Jerry Smith", "Beth Smith"]
first_names = [name.split()[0].lower() for name in names]
##此处split会把Rick Sanchez分解为Rick和Sanchez，通过[0]就是选定了Rick
print(first_names)
#['rick', 'morty', 'summer', 'jerry', 'beth']

#练习3
scores = {
             "Rick Sanchez": 70,
             "Morty Smith": 35,
             "Summer Smith": 82,
             "Jerry Smith": 23,
             "Beth Smith": 98
          }

passed = [name for name, score in scores.items() if score >= 65]
##scores.items()就是把最前面的scores字典拆分成index（人名，Rick Sanchez）和value（70），这样的话就赋值给前面的name，score
print(passed)

#输出
['Beth Smith', 'Summer Smith', 'Rick Sanchez']
```

### /目标3/：函数
- /5变量作用域/
    - 如果遇到UnboundLocalError说明函数中对函数外定义的变量进行了修改。Python 不允许函数修改不在函数作用域内的变量。这个原则仅适用于整数和字符串，列表、字典、集合、类中可以在子程序中（子函数）通过修改局部变量达到修改全局变量的目的。
- /8文档/
    - docstrings的用途请见 https://github.com/mengfanchun2017/DAND-Basic-P0/blob/master/day3-guide.md 最后一段
    - docstrings的显示有两种方法，注意这两种方式都不用知道函数要求的参数是什么：

    ```python
help(functions)
print(functions.__doc__)
    ```
    - 单引号和双引号都是OK的
- /11Lambda表达式/
    - 当一个简单函数只会使用一次的时候，可以使用匿名函数的方式进行表达。比如下面这个例子，double为赋值对象，涉及2个参数x，y（就是lambada 后面跟的），计算的时候吧两个参数乘积为结果（函数的内容就是冒号后面的东西）
    - 这里重点要讲下map()函数，map函数的作用就是根据函数，对指定的序列做计算
        - 语法是这样的（注意先是要怎么处理数据的函数，后是要处理的数）：

        ```python
#map函数
map(function, iterable, ...)
        ```
        - 当然这个function也是可以使用lambada一次完成的，两种方式对比如下：

        ```python
        #使用函数
        def square(x) :            
            return x ** 2
        map(square, [1,2,3,4,5]) 
        #使用lambada
        map(lambda x: x ** 2, [1, 2, 3, 4, 5])
        #两种方式的结果是相同的：
        [1, 4, 9, 16, 25]
        
        #注意map是可以有多个输入的
        map(lambda x, y: x + y, [1, 3, 5, 7, 9], [2, 4, 6, 8, 10])
        #结果为
        [3, 7, 11, 15, 19]
        ```
        - 接下来我们就能看懂教室里的例子了：

        ```python
        numbers = [
                  [34, 63, 88, 71, 29],
                  [90, 78, 51, 27, 45],
                  [63, 37, 85, 46, 22],
                  [51, 22, 34, 11, 18]
                  ]
        #首先numbers是一个嵌套的列表，有4个元素，每个元素（每行）又包括4个元素   
        
        averages = list(map(lambda x :sum(x)/len(x),numbers))
        #此处的list是将map生成的4行平均数存为一个列表
        #lambada的内容是：sum(num_list)/len(num_list)，用每个元素的加和除以每个元素内部的个数
        #最后numbers是输入
        ```
    - filter函数和map类似，请看这个说明：http://www.runoob.com/python/python-func-filter.html
- /14迭代器和生成器（选学）/ 这部分有点绕，选学，想看更详细的可以参考：https://www.zhihu.com/question/20829330

### /目标4/：脚本编写
- /8在脚本中接受原始输入/格式化字符串：
    - 这里出现了个有点奇怪的print函数：
    
    ```python
        name = input("Enter your name: ")
        print("Hello there, {}!".format(name.title()))
    ```
    有点奇怪啊，不就是让用户输入个名字，不是应该这样的么？

    ```python
        name = input("Enter your name: ")
        print("Hello there, ", name, "!")
    ```
    对的，实际上输出是一样的，后面这个我们比较熟悉，把字符和变量串在一起输出。但是观察下上下对比，是不是上面的这个比较简单呢？这种新的方法叫做：**print格式化字符串。**大家对比观察一下，其实就是在print里面放了个{},并在后面加了个.format(name.title)。这个语句的意思是，打印到{}的时候，把后面这个.format()里的东西打印出来，name.title就是把输入的name的第一个字母改为大写。
    默认{} {} {}...会按照后面.format(a, b, c)来替换,但也可以指定。比如{0}指定的是a，{1}指定的是b，以此类推。举个例子就知道了：
    
```python
    ##format methord
    print('---test1:---')
    print('I am lucky to eat {} {} {} {}!'.format(4,'eggs', 1, 'spam'))
    print('---test2:---')
    print('I am lucky to eat {2} {1} {3} {0}!'.format(4,'eggs', 1, 'spam'))
    print('---test3:(option)---')
    print('I am lucky to eat {2:.2f} {1} {3} {0}!'.format(4,'eggs', 1, 'spam'))
    print('---test4:(option)---')
    print('I am lucky to eat {2:.2f} {1:#^20} {3} {0}!'.format(4,'eggs', 1, 'spam'))
```
输出是这样的：其中test3，4是更为复杂的应用，感兴趣的话看这两个链接：https://blog.csdn.net/i_chaoren/article/details/77922939
https://www.cnblogs.com/wilber2013/p/4641616.html
    
```
---test1:---
I am lucky to eat 4 eggs 1 spam!
---test2:---
I am lucky to eat 1 eggs spam 4!
---test3:(option)---
I am lucky to eat 1.00 eggs spam 4!
---test4:(option)---
I am lucky to eat 1.00 ########eggs######## spam 4!
```
       
这一节后面还有个eval是把用户输入的内容当作python代码处理。扩展下也可以这样使用，把str字符转化为响应的内容(>>>是输入的代码），大家注意a和b的type是不一样的：
    
```python
     >>> a = "{1: 'a', 2: 'b'}"
     >>> type(a)
     <type 'str'>
     
     >>> b = eval(a)
     >>> print b
     {1: 'a', 2: 'b'}
     >>> type(b)
     <type 'dict'>
```
    
- /13处理错误/ 大家理解try、except、else、finally4个语句的执行条件就好了。
    - try：这是 try 语句中的唯一必需子句。该块中的代码是 Python 在 try 语句中首先运行的代码。
    - except：如果 Python 在运行 try 块时遇到异常，它将跳到处理该异常的 except 块。
    - else：如果 Python 在运行 try 块时没有遇到异常，它将在运行 try 块后运行该块中的代码。
    - finally：在 Python 离开此 try 语句之前，在任何情形下它都将运行此 finally 块中的代码，即使要结束程序，例如：如果 Python 在运行 except 或 else 块中的代码时遇到错误，在停止程序之前，依然会执行此finally 块。
    - 对于/15/的例子做个简单的说明（以注释方式）：
    
```python
    def create_groups(items, num_groups):
    #定义函数，2个输入items（多少个东西），分成num_groups(分成多少个组）
    try:
        size = len(items) // num_groups
    #上来是计算每组大小
    except ZeroDivisionError:
        print("WARNING: Returning empty list. Please use a nonzero number.")
        return []
    #但是当发生ZeroDivisionError时（除数为0的时候的错误），就显示错误并返回空值
    else:
        groups = []
        for i in range(0, len(items), size):
        #是说从0到items的最大数（就是len(items)这个的结果），按照size（在try语句中得出的每组大小）进行循环
            groups.append(items[i:i + size])
            #每一个循环，把当前的组存追加存放到groups里面
        return groups
    #如果没报错，就是按照上面这一段把每组都有什么写到groups里面
    finally:
        print("{} groups returned.".format(num_groups))
    #无论怎么处理的，都打印一行提示，使用的是格式化字符串的方式
    
print("Creating 6 groups...")
for group in create_groups(range(32), 6):
    print(list(group))
print("\nCreating 0 groups...")
for group in create_groups(range(32), 0):
    print(list(group))
```

输出是这样的：
    
```
Creating 6 groups...
6 groups returned.
[0, 1, 2, 3, 4]
[5, 6, 7, 8, 9]
[10, 11, 12, 13, 14]
[15, 16, 17, 18, 19]
[20, 21, 22, 23, 24]
[25, 26, 27, 28, 29]
[30, 31]

Creating 0 groups...
WARNING: Returning empty list. Please use a nonzero number.
0 groups returned.
```
    
因为函数输出的是一个嵌套的列表，所以要用上面的方式把列表的每一组元素显示出来，我们加一句print就能看明白了：
    
```python
print(create_groups(range(38),3))
```
    
输出是这样的：
    
```
3 groups returned.
[range(0, 12), range(12, 24), range(24, 36), range(36, 38)]
```

另外，即是except有报错输出，也是可以通except as的方式访问并输出的，这一块知道就行了。

- /17读写文件/ 注意append和write区别，和with的用法
    - 追加文件是用f.append(),使用f.write()将会覆盖文件
    - 为了避免忘记f.close()关闭一个文件，可以使用with的方式：

```python
with open('my_path/my_file.txt', 'r') as f:
    file_data = f.read()
#和下面的语句是一样的
f = open('my_path/my_file.txt', 'w')
file_data = f.read()
f.close()
```

- /18读写文件/ 注意这个地方有个新的.split(',')方法，用处是把line里面的内容用，split开，关于readline相关的用法，总结为以下几个例子：

```python
print('{0:-^30}'.format('print read'))
#print函数会在结尾自动加入换行
with open('print.format.py') as song:
    print(song.read(1))
    print(song.read(8))
    print(song.read(8))
    #print(song.read())

print('{0:-^30}'.format('print read end none'))
with open('print.format.py') as song:
    print(song.read(1), end = '')
    print(song.read(8), end = '')
    print(song.read(8))
    #print(song.read())

print('{0:-^30}'.format('print readline'))
with open('print.format.py') as song:
    print(song.readline())
    print(song.readline())
    print(song.readline(1), end = '\n\n')
    #可以看出readlline()是每次读取一行（/n换行跟随上一行，不会算成下一行）
    #如果readline(x),就是读出这行的x个字符
    #这种方式时结尾的/n不会打印
    #结尾\n\n 才会换行，一个的话会追加到x个字符后面

print('{0:-^30}'.format('print readlines'))
with open('print.format.py') as song:
    print(song.readlines(), end = '\n\n')
    #readlines是把所有行读入到一个列表中

print('{0:-^30}'.format('for line in file'))
test_lines = []
with open('print.format.py') as song:
#line可以替换成i，只不过line比较明确
#这里重点是，对于open的文件，for 循环是每次循环一行
    for line in song:
        test_lines.append(line.strip())
    print(test_lines,end = '\n\n')

print('{0:-^30}'.format('split lines'))
def create_cast_list(filename):
    cast_list = []
    #use with to open the file filename
    with open("circus.csv") as f:
        for line in f:
            name=line.split(',')[0]
            cast_list.append(name.strip())
        #下面的是最后一个循环的输出，输出做对比就明白很多了：
        print('{0:-^30}'.format('under is split testing'))
        print('originial: {0:#^20}'.format(line), end = '')
        nameall = line.split(',')
        nameallfirst = line.split(',')[0]
        print(name)
        print(nameall)
        print(nameallfirst)
    #use the for loop syntax to process each line
    #and add the actor name to cast_list

    return cast_list

cast_list = create_cast_list('circus.csv')
for actor in cast_list:
    print(actor)
```

结果如下，感兴趣的可以自己研究下：

```
----------print read----------
#
#format 
methord

-----print read end none------
##format methord

--------print readline--------
##format methord

print('---test1:---')

p

-------print readlines--------
['##format methord\n', "print('---test1:---')\n", "print('I am lucky to eat {} {} {} {}!'.format(4,'eggs', 1, 'spam'))\n", '\n', "print('---test2:---')\n", "print('I am lucky to eat {2} {1} {3} {0}!'.format(4,'eggs', 1, 'spam'))\n", '\n', "print('---test3:(option)---')\n", "print('I am lucky to eat {2:.2f} {1} {3} {0}!'.format(4,'eggs', 1, 'spam'))\n", '\n', "print('---test4:(option)---')\n", "print('I am lucky to eat {2:.2f} {1:#^20} {3} {0}!'.format(4,'eggs', 1, 'spam'))\n"]

-------for line in file-------
['##format methord', "print('---test1:---')", "print('I am lucky to eat {} {} {} {}!'.format(4,'eggs', 1, 'spam'))", '', "print('---test2:---')", "print('I am lucky to eat {2} {1} {3} {0}!'.format(4,'eggs', 1, 'spam'))", '', "print('---test3:(option)---')", "print('I am lucky to eat {2:.2f} {1} {3} {0}!'.format(4,'eggs', 1, 'spam'))", '', "print('---test4:(option)---')", "print('I am lucky to eat {2:.2f} {1:#^20} {3} {0}!'.format(4,'eggs', 1, 'spam'))"]

---------split lines----------
----under is split testing----
originial: The Fred Tomlinson Singers,  Amantillado Chorus / ... (7 episodes, 1969-1973)
The Fred Tomlinson Singers
['The Fred Tomlinson Singers', '  Amantillado Chorus / ... (7 episodes', ' 1969-1973)\n']
The Fred Tomlinson Singers
Graham Chapman
Eric Idle
Terry Jones
Michael Palin
Terry Gilliam
John Cleese
Carol Cleveland
Ian Davidson
John Hughman
The Fred Tomlinson Singers
```

- /20导入本地模块/ if main
    - if __name__ == '__main__' 简单的理解就是： 如果模块是被直接运行的，则代码块被运行，如果模块是被导入的，则代码块不被运行
    - 是为了在导入时候不运行（被调用才运行）的限制
    - 详细说明：http://blog.konghy.cn/2017/04/24/python-entry-program/
- /23标准库/
    - 这里介绍了random标准库的两个用法，总结如下：

```python
import random
word_list = ['tatoo', 'happy', 'apple', 'ios', 4]

def generate_password():
    return str(random.choice(word_list)) + str(random.choice(word_list)) + str(random.choice(word_list))
    #增加了str确保如果wordlist里面有4这样的数字可以转化为字符
print(generate_password())

def generate_password2():
    return ''.join(random.sample(word_list,5))
    #join方式就不能加str，要求wordlist都是字符，但是既然是wordlist就应该都保证是字符
    #而不是在写处理代码时候再额外处理不推进str的方式
print(generate_password2())
```

- /26第三方库/
    - 在安装python或者ananconda后，可以使用：`pip install package_name` 来安装需要的包。推荐的一些安装包很实用，链接归档 https://classroom.udacity.com/nanodegrees/nd002-cn-basic-vip/parts/0ad43cea-8e74-4486-911c-d1fae2f03c97/modules/2ceb59e6-2fa6-4177-a8b8-b6130f45ac3f/lessons/09be9405-95aa-4a89-b800-9b60ccde5476/concepts/45252bd7-50b1-41f0-bed5-cef100501c12当然也可以将需要的包放在一个文件中，批量安装`pip install -r requirements.txt` ，requeirement.txt文件示例如下：
    
```
beautifulsoup4==4.5.1
bs4==0.0.1
pytz==2016.7
requests==2.11.1
```

- /28在线资源/ 一定要看！提升软能力！

## 项目内容

本首是Python项目的第1周，主要是理解项目和准备项目文件，请大家做到以下几点：

- 完成/项目：探索美国共享单车数据/的1-3节内容
- 搭建本地anaconda环境（Python3版本）确保Spyder可以使用
- 下载bikeshare-new-2.zip项目文件。如果教室里面不能下载，请尝试下载下面的链接：https://github.com/mengfanchun2017/DAND-Basic/blob/master/Project1/Project1Files/bikeshare-new-2.zip
- 整理并保存好好提交项目1的文件目录，并用spyder打开项目文件浏览

## 助教叨叨

大家第1个项目，过了没！爽不爽啊！本周开始我们将会完成初级数据分析中最难搞也最能让你成长的项目了。希望大家能够按照本周导学的内容，先学习完内容，在准备好项目的环境和文件。

其中学习的内容主要是4部分，大家可以每天搞一个，这样周六咱们视频讲解的时候，就是复习，而不是第一次听了。本周虽然没有项目提交，但是内容还是比较多的，如果同学是编程新手的话，一定记得多看、多试、多问，大家一起加油，给项目2做个好的开端！

## 资源列表
- 试学导学内容：https://github.com/mengfanchun2017/DAND-Basic-P0/blob/master/day7-guide.md
- week1导学：https://github.com/mengfanchun2017/DAND-Basic/blob/master/Project1/week1-guide.md

