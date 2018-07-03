# week4/12 本周导学

## 前面的话

同学们，项目2已经到了第3周，前两周我们学习了python的基础知识和dataframe数据结构。这周我们将开始开始准备完成项目文件，我们将会在这周过一遍项目中的难点，讲解项目中的机构，希望同学们能通过本周学习尽快提交项目（如果没能提交也不用太着急，下周是回顾、扩展和修改项目的时间）。我们要完成的项目2介绍如下：

**项目2:探索美国共享单车数据**

> - 项目说明:在此项目中，你将利用 Python 探索与以下三大美国城市的自行车共享系统相关的数据：芝加哥、纽约和华盛顿特区。你将编写代码导入数据，并通过计算描述性统计数据回答有趣的问题。你还将写一个脚本，该脚本会接受原始输入并在终端中创建交互式体验，以展现这些统计信息。
> - 练习目标：数据分析过程、数据整理、探索和可视化
> - 项目概述：请先看下这一页，对项目有个感触：
https://classroom.udacity.com/nanodegrees/nd002-cn-basic-vip/parts/0ad43cea-8e74-4486-911c-d1fae2f03c97/modules/134150b9-81b0-40d1-9c2c-bb288bb49d55/lessons/e5bef1dd-5031-45c3-aaf7-8536f6f3cf8a/concepts/8846274e-0239-4eef-8619-f9854a068ca8

另外，为了能够顺利完成项目2，请准备好以下环境：

> 1. （非必须但推荐）本地Anaconda环境，安装后可以运行：Python3、Jupyter Notebook、Spyder
>   1. Anaconda的安装和Jupyter Notebook的安装配置请见可选内容：https://classroom.udacity.com/nanodegrees/nd002-cn-basic-vip/parts/e566ad37-6119-4448-a6bc-7ade73ef3992
>   1. spyder的简单教程：https://blog.csdn.net/LucyGill/article/details/78068985

注意一点，本地环境并不是必须的，所有任务都可以在uda平台完成。请一定记住：**按照计划完成项目优先！！！**等过关了之后，大家再回来复盘和抠细节。
    
## 学习计划

项目2的4周计划和Uda每日计划如下（本周是第3周）：

| 时间 | 学习重点 | 对应内容（按照名字找就好了） |
| --- | --- | --- |
| 第1周 | Python基础内容 | 数据类型和运算符、控制流、函数、脚本编写 |
| 第2周 | Python数据处理内容 | Numpy & Pandas - 第一、二部分 |
| **第3周** | **运用前2周的知识完成项目** | **项目：探索美国共享单车数据** |
| 第4周 | 项目修改与通过 | 修改项目、查缺补漏、休息调整 |

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

- 本周任务是提交项目！
- 目标1、目标2、目标3对应的是3个teambition的勾勾，做完了就可以来画了
- 请认真看本导读文件
- 如果同学是编程新手的话，一定记得多看、多试、多问，大家一起加油。

## 本周目标

**不要怂，就是肝！** 3个目标对应的是理解项目、分析项目提交模版和完成项目，大家high 起来。

### /目标1/：分析项目模板文件

#### {1.拆分项目功能}

要完成项目，不要一下就掉到代码中去，我们首要明白的是我们要解决什么问题，我们有什么数据，我们怎么拆分实现不同的功能。

项目的说明页面非常详细：https://classroom.udacity.com/nanodegrees/nd002-cn-basic-vip/parts/0ad43cea-8e74-4486-911c-d1fae2f03c97/modules/134150b9-81b0-40d1-9c2c-bb288bb49d55/lessons/e5bef1dd-5031-45c3-aaf7-8536f6f3cf8a/concepts/d233dd24-607b-4bb1-a17d-dfa94768104b

**数据文件如下：**

- 我们有3个城市的共享单车数据（由Motivate提供）
- 数据集包括以下内容：

> 起始时间 Start Time（例如 2017-01-01 00:07:57）
结束时间 End Time（例如 2017-01-01 00:20:53）
骑行时长 Trip Duration（例如 776 秒）
起始车站 Start Station（例如百老汇街和巴里大道）
结束车站 End Station（例如塞奇威克街和北大道）
用户类型 User Type（订阅者 Subscriber/Registered 或客户Customer/Casual）
性别 Gender (只有纽约和芝加哥数据有）
出生年份 Birth Year(只有纽约和芝加哥数据有）

**项目目标（问题）如下：**

- 通过分析收到的数据文件，得出共享单车运行数据中的趋势，辅助进行商业决策
- 本次分析过程基于收到的数据，属于探索性的分析阶段，目的在于根据不同特征的到共享单车的趋势数据
- 本次分析不涉及分析两个变量中的相关关系（项目4就有了，不要着急学霸们）
- 根据项目模版，需要回答一下问题：

> 起始时间（Start Time 列）中哪个月份最常见？
起始时间中，一周的哪一天（比如 Monday, Tuesday）最常见？ 提示：可以使用 datetime.weekday() （点击查看文档）
起始时间中，一天当中哪个小时最常见？
总骑行时长（Trip Duration）是多久，平均骑行时长是多久？
哪个起始车站（Start Station）最热门，哪个结束车站（End Station）最热门？
哪一趟行程最热门（即，哪一个起始站点与结束站点的组合最热门）？
每种用户类型有多少人？
每种性别有多少人？
出生年份最早的是哪一年、最晚的是哪一年，最常见的是哪一年？

**如何完成项目：**

- 首先看下3、11、12节的完成指南
- 接下来要决定是在13节项目空间完成并提交，还是下载文件到本地再在15节提交（需要本地环境）**！注意2选1，只在一个地方提交就可以了！**
- 如果是在13节处完成项目，请参看14节的说明
- 如果是本地完成，下载的数据和模版文件链接（2018年7月版本）：https://github.com/mengfanchun2017/DAND-Basic/blob/master/Project2/bikeshare-new-2.zip
- **第4节是检查数据的基本语句，选修！**我们再项目4再讲相关内容。

#### {2.分析项目模板文件}

```python
- /1/ prepare block
-- imports # 导入需要第三方库
-- CITY_DATA # 定义CITY_DATA包括3个城市的文件
--- # CITY_DATA包括3城市chicago，new york city，washington
--- # 采用字典结构存储数据chicago': 'chicago.csv

- /2T/ def get_filters()
-- # 函数输入参数为空
-- # 此函数是和用户互动得到数据筛选输入的
-- # 通过input方式请用户输入要求
--- /T1.1/ # 那个城市？
--- /T1.2/ # 那个月份（只有1-6月）？
--- /T1.3/ # 周几？

- /3/ def load_data(city, month, day)
-- # 函数输入为city，month，day
-- # 此处没有todo
-- # return df 所以要结合别的调用使用

- /4T/ def time_stats(df)
-- # 函数输入为df（过滤后的数据）
-- # 使用print通知用户进行将要完成的事情
-- # 计算不同颗粒度时间内容最繁忙时段
--- /T4.1/ #月份
--- /T4.2/ #日
--- /T4.3/ #小时
-- # 使用 time函数报告运行所用时间

- /5T/ def station_stats(df)
-- # 函数输入为df（过滤后的数据）
-- # 使用print通知用户进行将要完成的事情
-- # 计算不同内容最繁忙车站
--- /T5.1/ #开始
--- /T5.2/ #结束
--- /T5.3/ #综合考虑
-- # 使用 time函数报告运行所用时间

- /6T/ def trip_duration_stats(df)
-- # 函数输入为df（过滤后的数据）
-- # 使用print通知用户进行将要完成的事情
-- # 计算行程数据
--- /T6.1/ #总旅行时间
--- /T6.2/ #平均旅行时间
-- # 使用 time函数报告运行所用时间

- /7T/ def user_stats(df)
-- # 函数输入为df（过滤后的数据）
-- # 使用print通知用户进行将要完成的事情
-- # 计算用户数据
--- /T7.1/ #用户数计算
--- /T7.2/ #用户性别计算
--- /T7.3/ #用户其他信息计算
-- # 使用 time函数报告运行所用时间

- /8/ def main()
-- # 主函数是调用其他函数的主程序
-- # 不用编辑但逻辑要弄通
-- # while True 是一种在测试时常用的方式
--- # 当不想执行的时候改为 while Flase
--- # 1和0等价
--- # 此处可以删掉，也可不管
-- # 此处以下是通过调用6个函数完成所有功能
--- city, month, day = get_filters() # 赋值
--- df = load_data(city, month, day) # 生成df数据
--- time_stats # 处理时间数据
--- station_stats(df) # 处理车站数据
--- trip_duration_stats(df) # 处理旅程数据
--- user_stats(df) # 处理旅客数据
-- # 通过restart再运行一遍程序功能

- /9/ if __name__ == "__main__"
-- # 库文件标准结尾
-- # 能够保证本文件作为第三方库的被导入时只运行要求的函数
-- # 详细请参见week2导学后面扩展内容
```

根据以上拆分，我们发现其实要想完成项目，我们只用把2、4、5、6、7部分完成就可以了（在数字编号后面有个T的部分）。本导学所有内容将会按照以上项目代码框进行讲解。其中实现方法只是讲解一种可选方式，请同学们理解后自己完成。

### /目标2/：完成分模块练习

在完成项目之前，Uda非常贴心的把要用到的3个重点做了3组讲解和练习，对应5-10节我们来讲一下。这块也不白学，3个练习对应的内容调整一点点就可以写进项目文件中了。
**注意：本节练习和项目全部使用Pandas Dataframe数据结构完成！**

#### {5.6.计算最受欢迎的开始时间}

本代码基于Uda课程中的工作区完成。

```python
import pandas as pd

filename = 'chicago.csv'

# load data file into a dataframe
df = pd.read_csv(filename)
# 使用.read_csv()方法读入数据

# 首先我们读入的Start Time这一列默认是字符格式
# 我们使用type检查Start Time列的第一个元素
# 可以看到转换钱的类型是<class 'str'>
print('original data type:')
print(type(df['Start Time'][0]))

# 为了能够计算时间要变换为pandas里面的时间格式
# 就是使用.to_datatime()这个方法转换格式
df['Start Time'] = pd.to_datetime(df['Start Time'])
# 下面再次检查类型输出变为 <class 'pandas.tslib.Timestamp'>
print('\nconverted data type:')
print(type(df['Start Time'][0]))

# 接下来对时间分析就可以随心所欲了
# 比如把Start Time的小时数拆出来，存为新的列
# 方式就是在需要处理的数据后面加.dt.hour
df['hour'] = df['Start Time'].dt.hour
# 两个的区别如下
print('\noriginal time: ')
print(df['Start Time'].head())
print('\nonly hour: ')
print(df['hour'].head())

# 之后我们就可以使用.mode()查看众数（出现最多的数是什么样子了）
popular_hour = df['hour'].mode()
print('\nMost Popular Start Hour:', popular_hour)
# 结果的输出是这样的：
# Most Popular Start Hour: 0    17
# dtype: int64
# 意思是众数发现了一个（可以并列的）众数
# 第0索引的众数是17
# 数据类型是整数

# 太丑了对不对，所以我们直接要求把这第0个位置的结果显示出来
popular_hour = df['hour'].mode()[0]
print('\n(pretty) Most Popular Start Hour:', popular_hour)
```

输出是这个样子滴：

```python
original data type:
<class 'str'>

converted data type:
<class 'pandas.tslib.Timestamp'>

original time: 
0   2017-05-29 18:36:27
1   2017-06-12 19:00:33
2   2017-02-13 17:02:02
3   2017-04-24 18:39:45
4   2017-01-26 15:36:07
Name: Start Time, dtype: datetime64[ns]

only hour: 
0    18
1    19
2    17
3    18
4    15
Name: hour, dtype: int64

Most Popular Start Hour: 0    17
dtype: int64

(pretty) Most Popular Start Hour: 17
```

#### {7.8.显示用户类型细分}

本代码基于Uda课程中的工作区完成。

```python
import pandas as pd

filename = 'chicago.csv'

df = pd.read_csv(filename)

# 就是使用.value_counts()对一列的值做统计输出
user_types = df['User Type'].value_counts()

print(user_types)
```

输出是这样的，可以看到User Type这列一共有两种值，和每种值的个数：

```python
Subscriber    330
Customer       70
Name: User Type, dtype: int64
```

#### {9.10.数据加载与过滤}

这块其实是把5.6.节的东西运用到项目文件中。

```python
import pandas as pd

CITY_DATA = { 'chicago': 'chicago.csv',
              'new york city': 'new_york_city.csv',
              'washington': 'washington.csv' }
# 这是文件列表，根据不同的输入选择不同的文件  

def load_data(city, month, day):
# 定义函数，根据用户输入的3个变量处理数据
# city是要处理那个城市
# month、day是要处理的月份和天输入

    df = pd.read_csv(CITY_DATA[city])
    # 根据输入的city读入csv文件
    
    df['Start Time'] = pd.to_datetime(df['Start Time'])
    # 将时间从字符格式转为datetime格式

    df['month'] = df['Start Time'].dt.month
    df['day_of_week'] = df['Start Time'].dt.weekday_name
    # 将month和weekday抽离出来建立新的列
    # 是为了后面根据输入进行数据筛选时候的参考

    if month != 'all':
    # 如果月份要求不是all，则按照要求筛选数据

        months = ['january', 'february', 'march', 'april', 'may', 'june']
        # 这是可选的所有月份
        month = months.index(month) + 1
        # 定义month变量等于输入月份的索引加1
        # 为什么要加1呢？
        # 因为索引是从0开始，用户输入是从1开始

        df = df[df['month'] == month]
        # 最后对df做更新
        # 右边df['month'] == month是一种过滤
        # 左边是month列的所有内容（1-6月）
        # 右边是刚刚生成的要筛选的month变量（由用户输入）
        # 中间是判断 ==
        # 结果就是满足右边条件的数据被重新写入df里

    if day != 'all':
    # week的筛选方式同上
        df = df[df['day_of_week'] == day.title()]

    return df
    #最终返回筛选过的数据
```

### /目标3/：按照函数完成项目文件

根据上一节的模版文件分析，我们只用完成2、3、4、5、6、7部分的填空题就好了，在这之前，我们分析下最后8的main文件是怎么把这几部分串接起来使用的：

```python
def main():
    while True:
    # 当条件为真时，执行。因为是True所以总是执行这个循环
    # 除非遇到break才会停止
    # 本段代码最后有个是否要再分析一遍的提问
    # 如果回答的不是yes，将会终止循环
        city, month, day = get_filters()
        # 调用函数，的到city，month，day的输入
        df = load_data(city, month, day)
        #根据输入的内容对数据进行过滤，生成df函数
        time_stats(df)
        # 调用函数，对时间进行处理
        station_stats(df)
        # 调用函数，对车站进行处理
        trip_duration_stats(df)
        # 调用函数，对旅程进行处理
        user_stats(df)
        # 调用函数，对旅程进行处理
        
        restart = input('\nWould you like to restart? Enter yes or no.\n')
        if restart.lower() != 'yes':
            break
        # 此处的仪式是如果yes再循环一遍
        # 如果不是，则结束
```

大概的输出是这样的，注意 > 后面都是我输入的：

```python
Hello! Let's explore some US bikeshare data!

q1/3: which city do you want to know? chicago,                      new york city or washington? > chicago

q2/3: which month do you want to know? choose from all,                   january, february, ... , june. > january

q3/3: which day do you want to know? choose from all,                   monday, ... , sunday. > all
```


#### {2.get_filters() 函数}

这个函数的作用就是让用户输入city，month，day3个参数，在输入的时候要注意判断是否输入有效。在项目模版中的docstring（就是开始“”“包围起来的内容）解释的很详细（为了便于理解，官方模版的注释都已经删除，请结合两个文件一起学习）：

```python
def get_filters():

    print('Hello! Let\'s explore some US bikeshare data!')
    # 先显示一行输出，让用户知道在做什么任务
    # TO DO: get user input for city (chicago, new york city, washington). HINT: Use a while loop to handle invalid inputs
    
    city = input('q1/3: which city do you want to know? chicago, new york city or washington? > ')
    # 第一个是获得city的输入，输入可选在模版提示中
    # 使用city = inpyt(xxx)，注意xxx是在输入时提示的语句

    month = input('q2/3: which month do you want to know? choose from all, january, february, ... , june. > ')
    # 同样的获得month输入，输入可选在模版提示中

    day = input('q3/3: which day do you want to know? choose from all, monday, tuesday, ... sunday. > ')
    # 同样的获得day输入，输入可选在模版提示中

    print('-'*40)
    # 打印一行 - - - - 作为分隔
    # *40的意思就是把前面的家伙重复40遍
    return city, month, day
    # 返回city, month, day 3个参数就达到目标了
```

那么我们搞完了么，没呢！大家注意到提示里面有这么一句了么：HINT: Use a while loop to handle invalid inputs。也是就是说如果用户输入的不对，我们就没法筛选数据，也就没办法完成任务。所以我们要加一块对用户输入做判断的。那么我们有3个参数要让用户输入，这里有两种方式进行判断：

- 方式1:3个参数都输入完成了，总体做判断，如果那个是错的，就都要求重新输入。好处是代码简单，效率高点。坏处是用户麻烦，不小心输错了1个还要都重来一遍。
- 方式2:每输入一个参数就进行判断，如果输入错了就赶紧重新输入这1个参数。好处是用户方便些，坏处是代码复杂一点点。
- 选择：都可以的，我个人喜欢方式2，因为用户方便为优先。

那么我们怎么来写这个循环呢，按照提示我们可以把3处输入包在while循环中，如果输入的是合法选项，我们就pass，如果是错的就打回去重新输入。使用月份筛选的方法做个例子(方式1）：

```python 
def get_filters():

    mon_option = ['all', 'january', 'february', 'march', 'april', 'may', 'june']
    # 先是建立备选名单
    
    month = ''
    # 给变量定义为空
    # 因为第一次要比较，所以要先赋值再使用

while month not in mon_option:
# 使用while循环，如果变量month没在备选名单mon_option里的话就执行
# 相当于输入不对就一直循下面的inpyt让用户输入
# 第一次的时候month是空值，所以也会执行
    month = input('q2/3: which month do you want to know? choose from all, january, february, ... , june. > ')
    # 赋值语句，输入提示尽量人性化便于用户理解
```

这种先给month赋值为空的方式有点啰嗦，像我这样一个有要求的男人是不会这样妥协的，于是有了（方法2）：

```python
while True:
# 总是循环执行，直到遇到break
    month = input('q2/3: which month do you want to know? choose from all, \
                  january, february, ... , june. > ')
    # \ 是代码换行的意思，python的编程规范是每行不超过79个字符  
    if month in mon_option:
        break
    # 当经过判断 month 变量在可选范围内，就break结束while循环
```

方法2的问题是while True这种循环判断方式总是成立，但是当你知道自己在写什么的时候就没有问题了。所以无论是那种方式都是编程风格的选择，都是可以的。这里请大家按照例子把自己的def_fiters完成。

#### {3.load_data(city, month, day) 函数}

在上一节，我们收集到了用户的输入，就可以将原始数据文件按照用户的要求。大家发现了没有，这里的代码和 **目标2 {9.10.数据加载与过滤}** 是一模一样的。要注意回顾一下的是这个函数在主函数main()中是怎么调用的就好了：

```python
city, month, day = get_filters()
# 调用函数，的到city，month，day的输入
df = load_data(city, month, day)
# 将这3个变量输入到load_data函数，得到我们需要的数据d'f
```

#### {4.time_stats(df) 函数}

大家注意到了小括弧中的df没，这说明这个函数是要输入的，而这个输入就是df这个数据集，就是上一节在main中调用出得出的。接下来我们先对时间做处理，主要的内容也是和 **目标2：{5.6.计算最受欢迎的开始时间}** 是一样的：

```python
def time_stats(df):
    print('\nCalculating The Most Frequent Times of Travel...\n')
    # 先是打印一行提示
    start_time = time.time()
    # 此处可以忽略，是调用time函数用于计算代码的执行时间
    
    # 为了能够计算时间要变换为pandas里面的时间格式
    # 就是使用.to_datatime()这个方法转换格式
    df['Start Time'] = pd.to_datetime(df['Start Time'])
    
    # TO DO: display the most common month
    df['month'] = df['Start Time'].dt.month
    max_month = df['month'].mode()[0]

    # TO DO: display the most common day of week
    df['day'] = df['Start Time'].dt.day
    max_day = df['day'].mode()[0]

    # TO DO: display the most common start hour
    df['hour'] = df['Start Time'].dt.hour
    max_hour = df['hour'].mode()[0]

    print("\nThis took %s seconds." % (time.time() - start_time))
    # 后面的time.time() - start_time就是用当前时间剪去开始运行时的时间
    # 可以看出这段代码运行了多长时间
    print('-'*40)
    print('max freq month is:')
    print(max_month)
    print('max freq day is:')
    print(max_day)
    print('max freq hour is:')
    print(max_hour)
    #以上是3个频率的输出
```

当运行后，main()函数会调用time_stats(df)函数，输出是这个样子的（因为有使用了time方法，所以会输出执行时间）：

```python
This took 0.04229283332824707 seconds.
----------------------------------------
max freq month is:
1
max freq day is:
21
max freq hour is:
17
```

#### {5.station_stats(df)函数}

与4节大同小异，请同学们自己完成。提示如下：

```python
# 问题3是问那个车站组合出现最多
    # 为了回答这个问题，我们可以在数据新建1列
    # 例子命名为combine_sation
    # 由Start Station的数据加上End Station合并
    # 为了便于识别，我加上了 - - - 作为标签
    # 再之后就一样是使用mode()进行统计了
    df['combine_station'] = df['Start Station'] + ' --- ' + df['End Station']
    max_combine = df['combine_station'].mode()[0]
```

输出是这个样子的：

```python
max freq start station is:
Streeter Dr & Grand Ave

max freq end station is:
Streeter Dr & Grand Ave

max freq combine statuion is:
Lake Shore Dr & Monroe St --- Streeter Dr & Grand Ave
```

#### {6.trip_duration_stats(df)函数}

与4节大同小异，请同学们自己完成。提示如下：

```python
# 使用.sum()方法求和
    total_trip_time = df['Trip Duration'].sum()

    # 使用.mean()方法求平均值
    mean_trip_time = df['Trip Duration'].mean()
```

输出是这样的：

```python
total trip time is:
280871787
mean trip time is:
936.23929
```


#### {7.usr_stats(df)函数}

这部分与{7.8.显示用户类型细分}方法相同，还扩展了一个性别的统计。之后使用min、max统计了最大最小值，提示如下：

```python
# 使用.value_counts方法进行统计
    user_types = df['User Type'].value_counts()

    # 同样使用.value_counts方法进行统计
    gender_types = df['Gender'].value_counts()

    # 计算最大最小值使用的是.min方法和.max方法
    earliest = df['Birth Year'].min()
    recent = df['Birth Year'].max()
    common = df['Birth Year'].mode()[0]
```

输出是这样的：

```python
Calculating User Stats...

user types is:
Subscriber    238889
Customer       61110
Dependent          1
Name: User Type, dtype: int64

gender types is:
Male      181190
Female     57758
Name: Gender, dtype: int64

recent year of birth is:
1899.0

recent year of birth is:
2016.0

common year of birth is:
1989.0
```

## 项目推进

本首是Python项目的第3周，大家可以开始先做项目2了，本周目标是尽量完成项目2，能提交最好。下周是项目2的最后一周，可以用来修改项目和集中讨论。大家加油了！

**Project2/week1的项目要求：**（应该已经做完）

- 完成/项目：探索美国共享单车数据/的1-3节内容
- 搭建本地anaconda环境（Python3版本）确保Spyder可以使用
- 下载bikeshare-new-2.zip项目文件。如果教室里面不能下载，请尝试下载下面的链接：https://github.com/mengfanchun2017/DAND-Basic/blob/master/Project1/Project1Files/bikeshare-new-2.zip

**Project2/week2的项目要求** （上周的要求，本导学已经给出了答案，加油加油！）

- 能够打开项目文件（用Uda线上的可以，但建议可以试试用spyder本地打开项目文件浏览）
- 了解项目文件中有几个函数，函数名和输入是什么（不用看明白和尝试做）

**Project2/week3的项目要求** （肝！少年！）

- 浏览本导学文件
- 做完项目中的练习
- 根据导学文件，按照函数一个个，一步步的完成项目
- 能提交最好了！

## 资源列表

**导学文件：**

- 00-试学导学内容：https://github.com/mengfanchun2017/DAND-Basic-P0/blob/master/day7-guide.md
- 01-week1导学：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week1-guide.md
- 02-week2导学：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week2-guide.md
- 03-week3导学：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week3-guide.md
- https://github.com/mengfanchun2017/DAND-Basic/blob/master/week4-guide.md

**项目文件：**

- 项目2文件：https://github.com/mengfanchun2017/DAND-Basic/blob/master/Project2/bikeshare-new-2.zip
- 项目2中的py3版本文件（有的练习是py2环境的，当本地做遇到问题可以参考）命名规则lx_y_z.py(x是课程号，y是小节号，z是小节内容简称：https://github.com/mengfanchun2017/DAND-Basic/tree/master/Project2/project2py3solution

**扩展资源：**

- 官方数据结构说明：http://pandas.pydata.org/pandas-docs/stable/dsintro.html#panel
- 控制流总结：https://bop.mol.uno/09.control_flow.html





