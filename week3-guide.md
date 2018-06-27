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

上周我们进行了Python基础内容的学习，对于没有太多基础的同学来讲可能有些头疼，本周开始我们将会完成数据分析中常用的dataframe数据结构的学习。希望大家能够按照本周导学的内容，先学习完内容，再准备好项目的环境和文件。
    
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

**重点提示：**

- 每周任务会拆分成不同目标，对应的是课程中的Lesson，每个Lesson中的小节将通过{编号.内容}进行对应
- {}前面将会放置1到3个*，代表重要性从低到高。请优先学习高优先级的任务。
- 任务中有***和**标的共有11个，请大家在4天内学完，将根据大家的理解情况在周六的公开日对其中内容进行讲解。这样周六咱们视频讲解的时候，就是复习，而不是第一次听了。
- 标有*的是选学内容，请大家本周任务全部完成后再学习。
- 本周虽然没有项目提交，但是内容还是比较多的，如果同学是编程新手的话，一定记得多看、多试、多问，大家一起加油。


## 本周目标

**不要怂，就是肝！**对应Numpy & Pandas 第一部分与第二部分两课，需要完成是两个目标。

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

### /目标2/：：Numpy & Pandas 第二部分

#### ***{3.练习：二维Numpy数组}

这个练习一定要认真，因为扩展到了2维。对于二维，可以这样理解：

- 列表是[item1,item2]
- 那么当列表中每个元素又是一个列表的时候呢，就会变成这样
- 嵌套列表[[item1a,item1b],[item2a,item2b]]
- 如果我们转换下形势，就变成这样了（有了2*2矩阵的感觉了）
    - [[item1a,item1b],
    - [item2a,item2b]]
- 也就能对应下面这个表格了：

| item1a | item1b |
| --- | --- |
| item2a | item2b |

这样的话，我们就能理解练习中的二维数组：

```python
ridership = np.array([
    [   0,    0,    2,    5,    0],
    [1478, 3877, 3674, 2328, 2539],
    [1613, 4088, 3991, 6461, 2691],
    [1560, 3392, 3826, 4787, 2613],
    [1608, 4802, 3932, 4477, 2705],
    [1576, 3933, 3909, 4979, 2685],
    [  95,  229,  255,  496,  201],
    [   2,    0,    1,   27,    0],
    [1438, 3785, 3589, 4174, 2215],
    [1342, 4043, 4009, 4665, 3033]
])
```
实际上是这个意思：

| 天\车站 | 车站1 | 车站2 | 车站3 | 车站4 | 车站5 |
| --- | --- | --- | --- | --- | --- |
| 第1天 | 0 | 0 | 2 | 5 | 0 |
| 第2天 | 1478 | 3877 | 3674 | 2328 | 2539 |
| 第3天 | 1631 | 4088 | 3991 | 6461 | 2691 |
| ... | ... | ... | ... | ... | ... |

练习中的代码解释如下：

```python
def mean_riders_for_max_station(ridership):
    max_station = ridership[0,:].argmax()
    # 通过argmax检查第1行那个值最大，如果想看看中间输出，把下面行#去掉打印看看
    #print(ridership[0,:])

    # [0,:]代表选中第一天的所有车站出入量，就是从[0 0 2 5 0]中选
    # 结果是第4个元素5最大，所以max_station = 3
    # argmax就是求最大元素的位置，注意是从0开始，所以第四个元素是3
    mean_for_max = ridership[:,max_station].mean()
    # 那么接下来要算这个车站的平均数，就把这个车站所有的数量取平均
    # [:,max_station]带入3就是[:,3]就是说第4列的所有值
    # ：的意思是选中所有内容
    overall_mean = ridership.mean()
    # 这行代码是计算整体的客流量平均值
    return (overall_mean, mean_for_max)

print(mean_riders_for_max_station(ridership))

# 扩展，ragmax可以加axis参数，代表计算2d数组中横向切分和纵向切分的最大值位置（下一节将会详细讲）
# 下面行将会返回每一列的最大值在那里
#print(ridership.argmax(axis = 0))
```

#### *{4.练习：Numpy轴}

本节是上节的扩展，讲解了使用axis对二维数组的列进行操作的方法。看明白视频即可。

#### *{5.NumPy和Pandas数据类型}

NumPy的多维数组，和Pandas的DataFrame是比较类似的，都是2维的数据结构。DataFrame是数据分析的重要数据结构，在特性上比较利于数据分析，这节要求看懂视频。比如说这两个区别：

- DataFrame里面的不同列可以是不同类型的数据，而2维的Array则只能是一个数据类型。
- DataFrame可以使用像字典的key value键值对应的结构。

#### ***{6.练习：访问DataFrame元素}

记住DataFrame是Pandas库里面的多维数据结构，二期将会在数据分析大量使用，本节练习请一定认真完成。

```python
import pandas as pd

# Subway ridership for 5 stations on 10 different days
ridership_df = pd.DataFrame(
    data=[[   0,    0,    2,    5,    0],
          [1478, 3877, 3674, 2328, 2539],
          [1613, 4088, 3991, 6461, 2691],
          [1560, 3392, 3826, 4787, 2613],
          [1608, 4802, 3932, 4477, 2705],
          [1576, 3933, 3909, 4979, 2685],
          [  95,  229,  255,  496,  201],
          [   2,    0,    1,   27,    0],
          [1438, 3785, 3589, 4174, 2215],
          [1342, 4043, 4009, 4665, 3033]],
    index=['05-01-11', '05-02-11', '05-03-11', '05-04-11', '05-05-11',
           '05-06-11', '05-07-11', '05-08-11', '05-09-11', '05-10-11'],
    columns=['R003', 'R004', 'R005', 'R006', 'R007']
)
# 用index定义行名，用columns定义列名

# Change False to True for each block of code to see what it does

# DataFrame creation
if 0:
    # You can create a DataFrame out of a dictionary mapping column names to values
    df_1 = pd.DataFrame({'A': [0, 1, 2], 'B': [3, 4, 5]})
    print (df_1)

    # You can also use a list of lists or a 2D NumPy array
    df_2 = pd.DataFrame([[0, 1, 2], [3, 4, 5]], columns=['A', 'B', 'C'])
    print (df_2)


# Accessing elements
if 0:
    print (ridership_df.iloc[0])
    print (ridership_df.loc['05-05-11'])
    print (ridership_df['R003'])
    print (ridership_df.iloc[1, 3])
    # .iloc[x]是按位置定位行
    # .loc['x']是按照名字定位行
    # [colname]是选择列
    # .iloc[x,y]是定位行和列（也就是1个元素了）

# Accessing multiple rows
if 0:
    print (ridership_df.iloc[1:4])
    # [x:y]表示二维表中的一个范围

# Accessing multiple columns
if 0:
    print (ridership_df[['R003', 'R005']])
    # 此处是选择多列

# Pandas axis
if 0:
    df = pd.DataFrame({'A': [0, 1, 2], 'B': [3, 4, 5]})
    print (df.sum())
    # 按照列做汇总
    print (df.sum(axis=1))
    # 按照行做汇总
    print (df.values.sum())
    # 把所有值做汇总

def mean_riders_for_max_station(ridership):
    '''
    Fill in this function to find the station with the maximum riders on the
    first day, then return the mean riders per day for that station. Also
    return the mean ridership overall for comparsion.

    This is the same as a previous exercise, but this time the
    input is a Pandas DataFrame rather than a 2D NumPy array.
    '''
    overall_mean = ridership.values.mean()
    # DataFrame使用.values.mean()计算所有的平均值
    max_station = ridership_df.iloc[0].argmax()
    # 此处和arrays不同，使用iloc[0].argmax()找出在0行最大的列值在那里
    mean_for_max = ridership[max_station].mean()
    # 再把这个列的所有值做平均，就能得出这个车站的平均值了

    return (overall_mean, mean_for_max)

print(mean_riders_for_max_station(ridership_df))
```

#### *{7.将数据加载到 DataFrame 中}

本节看一遍视频，回顾下:
- pd.readcsv('filename.csv')
- pd.head()
- pd.describe()

#### *{8.练习：计算相关性}

本节内容在项目2里不要求，在项目4中会有涉及（有精力的细究）本节的简要说明：

- **相关性分析：**数据分析的一个重要使用场景就是看两个参数之间有没有相关性。比如说同一个车站一周的人多少变化，和是否上班日有关系么？还是和是否下雨有关？又或者和温度有没有关系？
- **相关性分析工具：**在统计学中有一个工具是计算两个相关性的叫做 Pearson's R。链接课程里面有。还记得前面计算 预期寿命 和 GDP 之间的关系时。通过计算，我们知道两个指标同向（都高于均值，或都低于均值）的有17个，而不同向的只有3个。这个就和R的这种方式类似。

```python
def correlation(x, y):
    std_x = (x - x.mean()) / x.std(ddof=0)
    std_y = (y - y.mean()) / y.std(ddof=0)
    # 将x，y做标准化（见之前的知识）

    return (std_x * std_y).mean()
    # 返回r相关性指标
```

#### *{9.Pandas 轴名}

本节是对DataFrame轴使用的扩展，除了使用 axis='index' 和 axis='column' 之外，也可以使用 axis=0 和 axis=1 来定义x轴或者y轴。了解即可。

#### *{10.练习：DataFrame向量化运算}

这节里面有句亮点，我一定要放出来：**我觉得函数说明晦涩难懂，所以我决定直接试一下函数，以了解它的用处。**因为用了dataframe的.shift()方法，只用一行就解决问题了！不用去写循环了！

```python
def get_hourly_entries_and_exits(entries_and_exits):
    return entries_and_exits - entries_and_exits.shift(1)
    # .shift()这个方法就是把所有行错后，只用一行代码就搞定了！！！
    # shift的文档和参数如下：http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.shift.html
```

#### **{11.练习：DataFrame applymap()}

还记得numpy array的.apply()么，pandas dataframe有一个更加厉害的方法.applymap()，练习代码解释如下：

```python
def convert_grades(grades):
    if grades >= 90:
        return 'A'
    elif grades >= 80:
        grades = 'B'
        return grades
    #注意if和elif的写法，都是可以的，但第1种直接return的更加简洁
    elif grades >= 70:
        return 'C'
    elif grades >= 60:
        return 'D'
    else:
        return 'F'

print(grades_df.applymap(convert_grades))
# 如果不使用.apply,而直接把df作为输入，就会报错：
# ValueError: The truth value of a DataFrame is ambiguous.
# 因为不知道要怎么处理df中的那么多数据，apply就明确的说每个都要处理
print(grades_df)
# 注意虽然上面做了转换但是没有写入到grades_df，所以打印df还是以前的值
```

#### *{12.13.练习：DataFrame apply()}

**此节选学。**其实DataFrame也有.apply()方法，和Series作用相同，使用场景是那些使用.applymap()会对结果产生影响的情况（因为apply可以对指定列或行做操作，不是像applymay那样对所有的元素）。

课程中对于ddof=0 的参数说明的非常详细：

> 计算得出的默认标准偏差类型在 numpy 的 .std() 和 pandas 的 .std() 函数之间是不同的。默认情况下，numpy 计算的是总体标准偏差，ddof = 0。另一方面，pandas 计算的是样本标准偏差，ddof = 1。如果我们知道所有的分数，那么我们就有了总体——因此，要使用 pandas 进行归一化处理，我们需要将“ddof”设置为 0。

练习13对于apply()做了扩展，apply(np.mean)，apply(np.max)可以作用于行或者列，并把结果存为一个Series（相当于从2维变成了1维）。

#### *{14.练习：向Series添加DataFrame}

**此节选学。**可以作为向量化运算的扩展，练习完全是运行一遍哥哥if代码框就好了，不用自己写。

#### *{15.练习：再次归一化每一列}

**此节选学。**挺复杂的一节，甚至可以放到毕业后复盘再回来看。引入了.sub() .div()两个方法。

#### ***{16.练习：Pandas groupby()}

.groupby()方法的用处是根据需要把数据集拆分为子集，比如说练习中的是将整个数据拆分为周1到周7，一同7个子集。之后就可以得到周1到周7的每天均值，进行数据分析。

练习中的if False：后面的代码框不会运行，当改成if True：之后就会运行，这个Uda练习的一个特点，比较方便进行测试。另外if 0:和if 1:也是一样的效果。

```python
filename = 'nyc-subway-weather.csv'
#因为下载的csv文件名是-而不是_，将代码中的文件名改为上面
#为了简化，将文件放到与本py文件一个目录就可执行
subway_df = pd.read_csv(filename)
print(subway_df.head())
#使用.head()检查数据的前5行
print(subway_df.groupby('day_week').mean())
#根据‘day_week'也就是一周7天，对数据集进行拆分，并求各个拆分组的均值（就是把所有数据按照周一到周日分成7份，并对每份求均值）。可以考察每周到底哪一天系统运作比较忙。
print(subway_df.groupby('day_week').mean()['ENTRIESn_hourly'])
#对上面的输出中的['ENTRIESn_hourly']内容单独展示
```

#### ***{17.练习：每小时入站和出站数}

本部分为本周最后的必学部分，就是把这周的东西放在一起，最后输出每小时的初入站人数。里面的内容前面分步都接触过，整合起来，成就感有没有！

```python
import numpy as np
import pandas as pd

values = np.array([1, 3, 2, 4, 1, 6, 4])
example_df = pd.DataFrame({
    'value': values,
    'even': values % 2 == 0,
    'above_three': values > 3
}, index=['a', 'b', 'c', 'd', 'e', 'f', 'g'])

#print(example_df)

# Change False to True for each block of code to see what it does

# Standardize each group
if 0:
    def standardize(xs):
        return (xs - xs.mean()) / xs.std()
    grouped_data = example_df.groupby('even')
    print(grouped_data)
    print()
    #只打印groupby的输出是一个提示，因为没有指定要打印分组之后的什么东西
    print(grouped_data['value'].apply(standardize))
    #使用.apply将grouped_data分组后的value的值进行标准化计算

# Find second largest value in each group
if 1:
    def second_largest(xs):
        sorted_xs = xs.sort_values(inplace=False, ascending=False)
        #如果报错'Series' object has no attribute 'sort'
        #是因为pandas版本已经比实例中的高
        #将sort改为sort_values
        return sorted_xs.iloc[1]
    # 先对输出排序，再使用.iloc[1]输出排序后的第二个元素
    grouped_data = example_df.groupby('even')
    print(grouped_data['value'].apply(second_largest))

# --- Quiz ---
# DataFrame with cumulative entries and exits for multiple stations
ridership_df = pd.DataFrame({
    'UNIT': ['R051', 'R079', 'R051', 'R079', 'R051', 'R079', 'R051', 'R079', 'R051'],
    'TIMEn': ['00:00:00', '02:00:00', '04:00:00', '06:00:00', '08:00:00', '10:00:00', '12:00:00', '14:00:00', '16:00:00'],
    'ENTRIESn': [3144312, 8936644, 3144335, 8936658, 3144353, 8936687, 3144424, 8936819, 3144594],
    'EXITSn': [1088151, 13755385,  1088159, 13755393,  1088177, 13755598, 1088231, 13756191,  1088275]
})

def get_hourly_entries_and_exits(entries_and_exits):
    return entries_and_exits - entries_and_exits.shift(1)
    # 使用之前的shift方法

print(ridership_df.groupby('UNIT')['ENTRIESn', 'EXITSn'].apply(get_hourly_entries_and_exits))
# 按照UNIT进行分组，并调用函数计算每小时的值
# 注意如果不指定对['ENTRIESn', 'EXITSn']做操作的话会报错
# 因为其他列包含数值，使用.apply()会报错的
```

#### *{18.练习：合并Pandas DataFrame}

**此节选学。**合并的相关操作，引入了.merge()方法，可以遇到再研究。

#### *{19.练习：使用DataFrame绘制图形}

**此节选学。**项目2中对图形不要求。

#### *{20.三维数组}

**此节不学！！！**这节是谁写的，出来，我保证不打死你。用不到，而且链接中的Panel也要被丢弃了。这节就一个目的：**吓唬你！**实际上你的任务已经完成。

## 项目内容

本首是Python项目的第2周，主要还是理解项目和准备项目文件，请大家做到以下几点：

**Project2/week1的项目要求：**（应该已经做完）

- 完成/项目：探索美国共享单车数据/的1-3节内容
- 搭建本地anaconda环境（Python3版本）确保Spyder可以使用
- 下载bikeshare-new-2.zip项目文件。如果教室里面不能下载，请尝试下载下面的链接：https://github.com/mengfanchun2017/DAND-Basic/blob/master/Project1/Project1Files/bikeshare-new-2.zip

**Project2/week2的项目要求**（本周要求和，做完了画第二个勾勾）

- 用spyder打开项目文件浏览
- 了解项目文件中有几个函数，函数名和输入是什么（不用看明白和尝试做）

## 资源列表

**导学文件：**

- 00-试学导学内容：https://github.com/mengfanchun2017/DAND-Basic-P0/blob/master/day7-guide.md
- 01-week1导学：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week1-guide.md
- 02-week2导学：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week2-guide.md
- 03-week3导学：https://github.com/mengfanchun2017/DAND-Basic/blob/master/week3-guide.md

**项目文件：**

- 项目2文件：https://github.com/mengfanchun2017/DAND-Basic/blob/master/Project2/bikeshare-new-2.zip
- 项目2中的py3版本文件（有的练习是py2环境的，当本地做遇到问题可以参考）命名规则lx_y_z.py(x是课程号，y是小节号，z是小节内容简称：https://github.com/mengfanchun2017/DAND-Basic/tree/master/Project2/project2py3solution

**扩展资源：**

- 官方数据结构说明：http://pandas.pydata.org/pandas-docs/stable/dsintro.html#panel
- 控制流总结：https://bop.mol.uno/09.control_flow.html

