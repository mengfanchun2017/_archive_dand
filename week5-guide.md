# week5/12 项目2总结（P2 4/4）

## 前面的话

同学们，恭喜大家，这周是项目2的最后一周，经过前3周的努力，同学们应该都在努力的提交项目中吧。本周我们将对项目2的重点知识做回顾和扩展。总结好项目2，并为下周项目3开始打好基础。
    
## 学习计划

项目2的4周计划和Uda每日计划如下（本周是第3周）：

| 时间 | 学习重点 | 对应内容（按照名字找就好了） |
| --- | --- | --- |
| 第1周 | Python基础内容 | 数据类型和运算符、控制流、函数、脚本编写 |
| 第2周 | Python数据处理内容 | Numpy & Pandas - 第一、二部分 |
| 第3周 | 运用前2周的知识完成项目 | 项目：探索美国共享单车数据 |
| **第4周** | **项目修改与通过** | **修改项目、查缺补漏、休息调整** |

每周的时间还是按照这个进度，注意周六的时间是大家Classin视频讨论的时间，其他的可以灵活调配，记住目标不要拖过一周为妙，加油！

| 学习时间 | 学习资源 | 学习重点 |
| --- | --- | --- |
| 周3 | /助教/发布当周导学 | 浏览导学文件内容开始学习 |
| 周4 | /Uda/线上内容 | 学习Uda Classroom内容 |
| 周5 | /助教/1v1预约 | 难点可预约1v1语音指导 |
| 周6 | /助教/视频讲解 20:30-21:30 | 讲解本周导学内容、回答疑难问题 |
| 周7 | /助教/根据视频课程学习 | 完成本周内容内容 |
| 周1 | /小结/本周总结 | 总结、笔记、思考 |
| 周2 | /选学/自主学习修养 | 自主学习（选学部分）或调休 |

**重点提示：**

- **本周任务是项目通过！所以要尽早提交，因为评审老师会审阅反馈的！**
- 目标1、目标2、目标3对应的是3个teambition的勾勾，作为考核发礼物参考
- 请认真看本导读文件，如果同学是编程新手的话，一定记得多看、多试、多问，大家一起加油

## 本周目标

**不要怂，就是肝！大家High起来！** 3个目标对应的是：

> /目标1/：整体项目回顾
> /目标2/：知识点梳理
> /目标3/：项目文件优化（看懂即可）

### /目标1/：项目整体回顾

#### {1.回顾项目2:探索美国共享单车数据}

> - 项目说明:在此项目中，你将利用 Python 探索与以下三大美国城市的自行车共享系统相关的数据：芝加哥、纽约和华盛顿特区。你将编写代码导入数据，并通过计算描述性统计数据回答有趣的问题。你还将写一个脚本，该脚本会接受原始输入并在终端中创建交互式体验，以展现这些统计信息。
> - 练习目标：数据分析过程、数据整理、探索和可视化
> - 项目概述：请先看下这一页，对项目有个感触：
https://classroom.udacity.com/nanodegrees/nd002-cn-basic-vip/parts/0ad43cea-8e74-4486-911c-d1fae2f03c97/modules/134150b9-81b0-40d1-9c2c-bb288bb49d55/lessons/e5bef1dd-5031-45c3-aaf7-8536f6f3cf8a/concepts/8846274e-0239-4eef-8619-f9854a068ca8

**如果下载文件打不开，请试试我传送的：** https://github.com/mengfanchun2017/DAND-Basic/blob/master/Project2/bikeshare-new-2.zip

#### {2.项目分析思路}

要完成项目，不要一下就掉到代码中去，我们首要明白的是我们要解决什么问题，我们有什么数据，我们怎么拆分实现不同的功能。

接下来是查看项目文件，先从最后的 main() 函数看整个文件是怎么组织的，再根据里面调用的方式去看需要你处理的文件，因为在实际的工程中的是有很多合作的，读大量代码并且在你负责的地方写代码是一般的工作场景。详细的可以参见我们小艾的神助攻解释：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week4-guide.md#2%E5%88%86%E6%9E%90%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF%E6%96%87%E4%BB%B6

由于项目文件不是十分长，在上面的链接那节后面还为大家分析了下整个文件的结构，了解了项目中调用的函数便于后面逐条完成项目目标。

#### {3.项目解答路径}

总体来讲，要完成项目可以按照下面的3个步骤进行推进：

**能力1:Python基础：**
- 本部分主要是通过 Project2 week1，Project week2的基础内容的学习了解所需的数据编程知识
- week1导学链接：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week1-guide.md
- week2导学链接：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week2-guide.md

**能力2:针对项目的练习：**
- 首先了解项目，除了项目的描述页面之外还可以自己查查资料，提高兴趣，共享单车这个事在中国还是很熟悉的
- 之前去米国旅游，30分钟就要大改7.5刀啊，小黄、小蓝和小橙相当的实惠啊
- 当然也有些爆料的，比如这篇：https://m.sohu.com/a/240046942_161623/?pvid=000115_3w_a （ps：谁要知道不到200能买辆小蓝，请通知我）
- 这部分最终要的是把项目里面的几个练习做完，和完成项目文件相关度超高。在week4的导学中有详细讲解：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week4-guide.md#%E7%9B%AE%E6%A0%872%E5%AE%8C%E6%88%90%E5%88%86%E6%A8%A1%E5%9D%97%E7%BB%83%E4%B9%A0

**能力3:完成项目：**
- 独立完成一个项目是非常不容易的，即使有助教的帮助，自己也要付出很多努力，但是这个过程十分值得
- 即使细节都知道了，从无到有，从文件到提交也是不能出现一点错误
- 而且还有适应调试出错的过程，当你郁闷的时候切记一点：**这很正常，报错信息能够提供很多线索，尝试着解决问题是非常重要的能力！**

#### {4.数据分析工具汇总}
另外，为了能够顺利完成项目2，和以后的几个数据分析项目，我们还学习准备了本地环境：

**Anaconda / Jupyter Notebook / Spyder：**
> 1. （非必须但推荐）本地Anaconda环境，安装后可以运行：Python3、Jupyter Notebook、Spyder
> 1. Anaconda的安装和Jupyter Notebook的安装配置请见可选内容：https://classroom.udacity.com/nanodegrees/nd002-cn-basic/parts/91b5b867-4a7f-49c5-b658-57521a8de12d
> 1. spyder的简单教程：https://blog.csdn.net/LucyGill/article/details/78068985
> 1. 注意一点，本地环境并不是必须的，所有任务都可以在uda平台完成。请一定记住：**按照计划完成项目优先！！！**等过关了之后，大家再回来复盘和抠细节。

### /目标2/：知识点梳理

大家还记得开学时候Uda的两个原则么？本质是保持住项目进度，循环往复的螺旋上升，不要去扣不影响项目完成的细节，等通关了再来复盘就好了！切记咬紧学习进度！

**最快学习原则：**
- Need to know Principle 按需知情原则
- Competence without comprehension 无需理解即可完成能力

**Week1的必学模块：**
- 数据类型和运算符：和试学项目是差不多的，Python基础
- 控制流：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week2-guide.md#%E7%9B%AE%E6%A0%872%E6%8E%A7%E5%88%B6%E6%B5%81 这个部分，对于两种循环的区别可以参照之前试学的导学：https://github.com/mengfanchun2017/DAND-Basic-P0/blob/master/day6-guide.md
- 函数：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week2-guide.md#%E7%9B%AE%E6%A0%872%E6%8E%A7%E5%88%B6%E6%B5%81

**Week2的必学模块：**
- Pandas Series：先了解Pandas的一维结构是怎样的，和它的特点（其实Dataframe就是嵌套2维的Series）。 https://github.com/mengfanchun2017/DAND-Basic/blob/master/week3-guide.md#13%E7%BB%83%E4%B9%A0pandas-series
- Series索引：了解Pandas的Series和Dataframe是可以进行索引操作的 https://github.com/mengfanchun2017/DAND-Basic/blob/master/week3-guide.md#14%E7%BB%83%E4%B9%A0series%E7%B4%A2%E5%BC%95
- 二维Numpy数组：此处虽然不是Pandas的Dataframe，但是结构是类似的，逻辑搞懂即可。 https://github.com/mengfanchun2017/DAND-Basic/blob/master/week3-guide.md#3%E7%BB%83%E4%B9%A0%E4%BA%8C%E7%BB%B4numpy%E6%95%B0%E7%BB%84
- 访问DataFrame元素：重点中的重点！对Dataframe要上手操作了，练习也不要放过！ https://github.com/mengfanchun2017/DAND-Basic/blob/master/week3-guide.md#6%E7%BB%83%E4%B9%A0%E8%AE%BF%E9%97%AEdataframe%E5%85%83%E7%B4%A0
- 练习：每小时入站和出站数。相当于一个小项目，把上面将的都串起来了，不要错过。 https://github.com/mengfanchun2017/DAND-Basic/blob/master/week3-guide.md#17%E7%BB%83%E4%B9%A0%E6%AF%8F%E5%B0%8F%E6%97%B6%E5%85%A5%E7%AB%99%E5%92%8C%E5%87%BA%E7%AB%99%E6%95%B0

### /目标3/：项目文件优化（看懂即可）

对于上周week4导学中的项目讲解，其实已经达到了项目通过的水平，但是编程这件事，我们还是可以尽量优化一下，对比上周的项目讲解，我们还有这几个地方可以改进：
> 1. gender数据不完整：3个城市的数据文件中，washington是没有性别数据的，选中的话会报错虽然可以使用try/except优化输出
> 1. 对于输出显示并不友好，看着有点晕，调整输出显示
> 1. 对于用户的3个输入，也可以写一个小函数调用3回。3次区别并不大，当输入比较多的时候（或者要从很多种备选中选择的时候）会比较简洁
> 1. 上周的文件有不符合pep编程规范的地方（Atom中的Pylint可以提示），需要修改更加专业（本小节请大家自己研究）。关于Pep请参考之前的一个介绍：https://github.com/mengfanchun2017/DAND-Basic-P0/blob/master/day5-guide.md

#### {1.gender数据不完整} 

使用try/except可以对出错进行判断并处理，不会造成程序停止：

```python
try:
    gender_types = df['Gender'].value_counts()
except KeyError:
    print('>>>The city you choose do not have /Gender/ data:')
else:
    print('\n>>>gender types is:')
    print(gender_types)
finally:
    pass
```    

具体的try/except用法在week2导学中有讲解，摘录如下：
- try：这是 try 语句中的唯一必需子句。该块中的代码是 Python 在 try 语句中首先运行的代码。
- except：如果 Python 在运行 try 块时遇到异常，它将跳到处理该异常的 except 块。
- else：如果 Python 在运行 try 块时没有遇到异常，它将在运行 try 块后运行该块中的代码。
- finally：在 Python 离开此 try 语句之前，在任何情形下它都将运行此 finally 块中的代码，即使要结束程序，例如：如果 Python 在运行 except 或 else 块中的代码时遇到错误，在停止程序之前，依然会执行此finally 块。

举个 lesson2 13节的例子做个简单的说明（以注释方式）：

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

#### {2.输出优化}

这里比较偏向个性化，可以使用print较复杂一点的方式，除了之前介绍的格式化字符串方法，还可以使用print的.center(),.ljust()方式进行行级排版。不是很复杂，有兴趣的同学可以搜索一下。最后我的输出是这样的：

```
##Hello! Let's explore some US bikeshare data!##

---------------Step1 : Get input----------------

q1/3: which city do you want to know?                      
option:<chicago,new york city,washington> 
washington

q2/3: which month do you want to know?                       
option:<all,january,february,march,april,may,june>                      
jan
---warning: I do not have data about that month.
---Or you type a wrong name
---Input Again

q2/3: which month do you want to know?                       
option:<all,january,february,march,april,may,june>                      
january

q3/3: which day do you want to know?                     
option:<all,monday,tuesday,wednesday, ... ,sunday>                    
all

>>>>>>>>>Got Inputs:>>>>>>>>>>
>>>city requirement: washington
>>>month requirement: january
>>>day requirement: all

---------------Step2 : Computing----------------

...Calculating The Most Frequent Times of Travel...

(Took 0.04522085189819336 seconds.)
>>>max freq month is:  1
>>>max freq day is:  12
>>>max freq hour is:  17

...Calculating The Most Popular Stations and Trip...

(This took 0.025053977966308594 seconds.)
>>>max freq start station is:
Columbus Circle / Union Station

>>>max freq end station is:
Columbus Circle / Union Station

>>>max freq combine statuion is:
Columbus Circle / Union Station --- 8th & F St NE

...Calculating Trip Duration...

(Took 0.0006821155548095703 seconds.)
>>>total trip time is:
26948288.554999996
>>>mean trip time is:
896.6921290719757

...Calculating User Stats...

>>>user types is:
Subscriber    26246
Customer       3807
Name: User Type, dtype: int64
>>>The city you choose do not have /Gender/ data:
>>>The city you choose do not have /Year/ data:
(Took 0.006235837936401367 seconds.)


### Proceeding complete.                         
### Would you like to restart?                         
### Enter yes to restart or any key to quit.
```

#### {3.使用循环获得用户输入}

我们先写一个函数，实现检查用户输入是不是在指定的可选范围内：
- 函数的输入是3个变量
- 变量1是输入的提示词
- 变量2是当输入有错的时候的提示词（不在列表中）
- 变量3是进行判断的列表

```python
def phrase_input(input_prompt,err_prompt,option_list):
    
    user_input = input(input_prompt)
    while user_input not in option_list:
        user_input = input(err_prompt)
    return user_input
```

之后就可以在filter_data()函数中调用3次，生成输出了，修改之后的代码和解释如下：

```python
def get_filters():
    
    city_option = CITY_DATA.keys()
    #直接指定城市的话不太灵活，可以根据CITY_DATA的keys（）进行判断
    #.keys()方法就是吧CITY_DATA中的key输出成一个列表，和下面这句等价：
    #city_option = ['chicago', 'new york city', 'washington']
    month_option = ['all', 'january', 'february', 'march', 'april', 'may', 
                  'june']
    day_option = ['all', 'monday', 'tuesday',  'wednesday', 
                  'thursday', 'friday', 'saturday', 'sunday' ]
    
    #将city、month、day、err的输出分离出来
    city_prompt = 'q1/3: which city do you want to know? \
                     \noption:<chicago,new york city,washington> \n>>> '
    month_prompt = 'q2/3: which month do you want to know? \
                      \noption:<all,january,february,march,april,may,june>\
                      \n>>> '
    day_prompt = 'q3/3: which day do you want to know? \
                    \noption:<all,monday,tuesday,wednesday, ... ,sunday>\
                    \n>>> '
    err_prompt = '---warning: I do not have that data.\
                  \n---Or you type a wrong name\n---Input Again\n>>> '
    
    #调用3次函数，将结果负责给city、month、day三个变量                 
    city = phrase_input(city_prompt,err_prompt,city_option)
    month = phrase_input(month_prompt,err_prompt,month_option)
    day = phrase_input(day_prompt,day_option)
    
    #输出结果
    str_got_input = 'Got Inputs:'
    print('')
    print(str_got_input.center(30,'>'))
    #str有.ljust .center .rjust等方式不使用变量的话很方便
    #http://www.tutorialspoint.com/python/string_ljust.htm
    print('>>>city requirement:',city)
    print('>>>month requirement:',month)
    print('>>>day requirement:',day)
    
    return city, month, day
```

#### {4.输出年为整数}

整体函数的输出中有一段是这样的：

```
>>>earliest year of birth is:
1899.0
>>>recent year of birth is:
2016.0
>>>common year of birth is:
1989.0
```

那么为什么年份的结果会是1899.0的这种方式呢，其实这是因为原始数据中都是1899.0这样的，所以在被读入的时候会变成float，所以输出就是小数了。但是如果使用excel打开csv的话，这一列是整数，所以容易让人迷惑：

![](http://pb6cho8f0.bkt.clouddn.com/15314456313490.jpg)

比较简单的解决方式是在输出那里加一个int转换成整数：
```python
print('\n>>>earliest year of birth is:')
print(int(earliest))
print('\n>>>recent year of birth is:')
print(int(recent))
print('\n>>>common year of birth is:')
print(int(common))
```

也可以使用.to_datatime()将这一列转换成pandas中的时间格式，但是需要加参数，因为原本是float格式，不加参数会转换出奇怪的结果，有兴趣的同学可以自己研究下。其实pandas中的readcsv是可以定义列格式的，不过使用比较复杂也容易出错（要定义每一列的格式），了解下就好了。

## 资源列表

**导学文件：**

- 00-试学导学内容：https://github.com/mengfanchun2017/DAND-Basic-P0/blob/master/day7-guide.md
- 01-week1导学：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week1-guide.md
- 02-week2导学：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week2-guide.md
- 03-week3导学：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week3-guide.md
- 04-week4导学：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week4-guide.md
- 05-week5导学：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week5-guide.md

**项目文件：**

- 项目2文件：https://github.com/mengfanchun2017/DAND-Basic/blob/master/Project2/bikeshare-new-2.zip
- 项目2中的py3版本文件（有的练习是py2环境的，当本地做遇到问题可以参考）命名规则lx_y_z.py(x是课程号，y是小节号，z是小节内容简称：https://github.com/mengfanchun2017/DAND-Basic/tree/master/Project2/project2py3solution

**扩展资源：**

- 官方数据结构说明：http://pandas.pydata.org/pandas-docs/stable/dsintro.html#panel
- 控制流总结：https://bop.mol.uno/09.control_flow.html





