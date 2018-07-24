# Week7 数据分析案例

[TOC]

# 学习地图

![-c](http://pb6cho8f0.bkt.clouddn.com/GMTm7iL1RMivZIBZuPruIg_thumb_13f.jpg)

**注意P3的学习地图有调整，请以此版为准！** 本周是数据分析课项目3的Part2，是通过燃料经济的案例进行分析，也就相当于模拟完成一个项目。知识点经过调整，也会直接在文件最开始的目录展示，大家加油！

## 本周知识点

- 数据分析的应用场景
- 数据分析过程
- pandas读入csv文件
- dataframe的loc和iloc
- pandas的.value_count()方法
- dataframe的空值处理
- pandas绘图

## 学习计划

项目3的4周计划和Uda每日计划如下（本周是第3周）：

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

## 本周目标

**不要怂，就是肝！大家High起来！** 本周目标对应的是（根据内容可能会有拆分）：
> /目标1/：数据分析过程燃料经济型案例（本文件）
> /目标2/：了解python画图的扩展（week07-guide-plus文件）

# /目标1/：数据分析过程燃料经济性案例

今天的案例是根据环保局发布的数据对燃料经济性做分析。
- 燃料经济性的介绍：https://en.wikipedia.org/wiki/Fuel_economy_in_automobiles 
- 数据下载链接：https://www.fueleconomy.gov/feg/download.shtml/
- 数据Feature的说明：https://www.fueleconomy.gov/feg/EPAGreenGuide/GreenVehicleGuideDocumentation.pdf
- 本次案例是对比2008年和2018年汽车的能源消耗数据
- ！注意！链接下载的是txt文件，而且是使用tab分割的。建议本案例在workspace上完成。如果需要自己下砸的话读入文件要注意。
- 我传送的源数据链接（最新版和working space中的有些不同）
    - https://github.com/mengfanchun2017/DAND-Basic/blob/master/Project3/files/all_alpha_08.txt
    - https://github.com/mengfanchun2017/DAND-Basic/blob/master/Project3/files/all_alpha_18.txt

## |5 数据评估

注意出了import外，自己下载文件本地做的readcsv是这样的：

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
% matplotlib inline
df08 = pd.read_csv('all_alpha_08.txt', sep = '\t')
df18 = pd.read_csv('all_alpha_18.txt', sep = '\t')
# 注意原文件链接为xlsx、zip和txt（不是csv，csv课程中没给出链接）
# 使用read_csv读入，发现没有分列，看样子是tab分割
# 加个 sep = '\t'指定使用tab分割解决
# （mac 遇到奇怪问题下载的文件都很奇怪，可能和单位网有关）
```

除了检查na数据的数量，我们还可以检查下比例,结果看着比较帅气和整洁：：

```python
# 看下占的百分比
round(nucheck/df08.shape[0],3)
# round(float,n) 的作用是把float小数，保留到小数点后n位
# 当然了 nucheck是求出的丢失值的数量，df08.shape[0]是所有项，案例1有讲
```

```
Model                   0.000
Displ                   0.000
Cyl                     0.090
Trans                   0.090
Drive                   0.042
```

非空唯一值的解法，我比较懒使用循环，而且使用unique：

```python
for i in df08.columns:
    print(i, end = ' : ')
    print(df08[i].nunique())
# 可以使用格式化字符串来更好的显示，略过
```

```
Model : 436
Displ : 47
Cyl : 8
Trans : 14
Drive : 2
```

## |6 清理列标签

对于判断两个数据集的列是否一样：

```python
# 先检查一下有没有列不同的
df08.columns == df18.columns
# 输出是个boolean的列表，比较直观

# 也可以用这个，比较安静的，因为加了.all()所以只会出一个True或者False
(df08.columns == df18.columns).all()
```

```
array([ True,  True,  True,  True,  True,  True, False,  True,  True, True,  True,  True,  True,  True])

True
```

那么到底哪列不同呢，我来写个循环告诉我（懒）：

```python
# 把08列的名字得出来
for i in df08.columns:
    if i not in df18.columns:
        print(i)

# 把18列的名字得出来
for i in df18.columns:
    if i not in df08.columns:
        print(i)  
```

```
Sales Area
Cert Region
```

那么我们来替换一下，而且顺手把不同形式的列名修改一下（有的是空格，有的是下划线）：

```python
# 将08的替换为18的
df08.rename(columns = 
            lambda x: x.replace('Sales Area', 'Cert Region'), 
            inplace = True)
# 这里使用的是lambda x:
# 就是对columns执行后面的操作 x.replace
# 而x.replace的操作是把后面小括弧中的前面替换成后面

# 还有就是把列中的空格替换成下滑线
# 因为很多处理要对空格判断，不要有比较好
# 全部变为小写是习惯，了解一下吧
df08.rename(columns=lambda x:
             x.strip().lower().replace(" ", "_"),
             inplace=True)
# .strip是去除单词首尾的空格
# .lower是变为小写
# .replace是把小括弧里的做替换
df08.columns
```

着节是项目3的开始，看完之后应该对整体的课程设计和需要的SQL知识（项目1）、python知识（项目2）有所了解。并且提供了不少额外资源的链接。

此处最后一个链接是一本超好的书，可以陪你走到微学位完成，请不要错过（鸟文的，中文的也有），如果链接不可用，可以试试我搬运的：

## |7 过滤、丢空、去重

在案例1中有讲，注意unique、drop、isnull、dropna等的用法

## |9 修正数据1

是这个项目的重点，之前内容没有讲过，我们先来看下cyl的数据其实是这样的：(6 cyl) 其实就是发动机的缸数，越大越腻害，而且只有偶数整数。所以我们要把它变成6，注意输出的上下对比:

```python
# 使用str的extract检索里面的数字
print(df08['cyl'].value_counts())
df08['cyl'] = df08['cyl'].str.extract('(\d+)').astype(int)
# （\d+)是匹配任意数字的意思，有兴趣的可以看看reg或者回顾week2格式化字符串
print(df08['cyl'].value_counts())
type(df08['cyl'][0])
```

```
(6 cyl)     836
(4 cyl)     582
(8 cyl)     516
(5 cyl)     113
(12 cyl)     60
(10 cyl)     29
(2 cyl)       4
(16 cyl)      2
Name: cyl, dtype: int64

6     836
4     582
8     516
5     113
12     60
10     29
2       4
16      2
Name: cyl, dtype: int64
```

结果2018年的文件到不是字符，但是小数，难不倒我们，使用astype：

```python
print(df18['cyl'].value_counts())
df18['cyl'] = df18['cyl'].astype(int)
# 貌似astype不能使用inplace参数
print(df18['cyl'].value_counts())
type(df18['cyl'][0])
```

```
4.0     1210
6.0      843
8.0      418
12.0      51
3.0       42
10.0      16
2.0        4
5.0        4
16.0       2
Name: cyl, dtype: int64
4     1210
6      843
8      418
12      51
3       42
10      16
5        4
2        4
16       2
Name: cyl, dtype: int64
```

## |10 修正数据类型2

到了这里，发现有的是混合动力车，使用能源、里程、污染什么的使用 a\b 记录的，据说设计这个数据结构的人已经被数据分析师砍死了，悲剧啊，但是还要处理下。有些复杂，看懂即可：

```python
# 找出含有 / 的部分
# 也可以使用query方式
hb_08 = df08[df08['fuel'].str.contains('/')]
print(hb_08.shape)

# 拆分为两列，使用copy否则会修改原数据
# create two copies of the 2008 hybrids dataframe
df1 = hb_08.copy()  # data on first fuel type of each hybrid vehicle
df2 = hb_08.copy()  # data on second fuel type of each hybrid vehicle

# 确定要拆分的列
# columns to split by "/"
split_columns = ['fuel', 'air_pollution_score', 'city_mpg', 'hwy_mpg', 'cmb_mpg', 'greenhouse_gas_score']

# apply split function to each column of each dataframe copy
for c in split_columns:
    df1[c] = df1[c].apply(lambda x: x.split("/")[0])
    df2[c] = df2[c].apply(lambda x: x.split("/")[1])
    # lambda对每个带/的进行分割，分别赋值第1个和第2个拆分元素
print(df1.head(3))
# 看下是否成功

dfnewrows = df1.append(df2)
print(df1.shape)
print(dfnewrows.shape)
dfnewrows.head(3)
# 检查数量

# 更新df08
print(df08.shape)
print(hb_08.index)
# 检查下要删除的行
df08.drop(hb_08.index, inplace = True)
df08 = df08.append(dfnewrows, ignore_index = True)
# append 没有inplace参数
df08.shape

# 现在可以转换了(之前由于 \ 的原因，转换会报错）
df08.air_pollution_score = df08.air_pollution_score.astype(float)
```

## |12 使用可视化探索数据

画图画图画画图，首先看看环保，，，，温室气体指标评分，10年得分降低了，到底是低好还是高好呢，需要大家去数据源自己研究，我加了个透明度，看着还不错：

```python
p08=plt.hist(df08['greenhouse_gas_score'],color='r', alpha = 0.5)
p18=plt.hist(df18['greenhouse_gas_score'],color='b', alpha = 0.5)
plt.show()
# 哇偶，可以看出18年的greenhouse_gas_score有所下降！
# 企鹅宝宝，，，
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15324532898859.jpg)

再看看city、hwy、cmb的里程续航啥关系：

```python
city=plt.hist(df08['city_mpg'],color='r', alpha = 0.5)
hwy=plt.hist(df08['hwy_mpg'],color='b', alpha = 0.5)
cmb = plt.hist(df08['cmb_mpg'],color='g', alpha = 0.5)
plt.show()
# 从数据可以推断出city是在城市的速度（miles per hour）
# hwy是高速的，cmb是联合的
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15324533874247.jpg)

## |13 结论和可视展示 Q1

开始回答问题喽，对于这个案例，都做到这了，给个福利，简单扩展下，便于你去撩人，假装有知识、有担当、有爱心、有态度的上进青年一枚：

- 这部分feature pdf中没有特殊说明，bing出来：
- CNG 压缩天然气
- dissel 柴油
- Gasoline 汽油
- ethanol 乙醇
- gas 天然气

瞎想的（可以忽悠不懂的）
1. CNG是压缩天然气，另外一种是液化天然气LNG（C代表compressed，L代表liquid，LNG可以制造CNG，NG是不经压缩的gas）。后者更环保因为是液态，行驶也更远。但是前一种更加普遍（因为可以使用现在的汽油汽车改装，难道混合动力的都是这个货？）
2. 乙醇更环保,天燃气是混合物,里面可能包含一些S,N这些元素.当这些元素燃烧时会产生污染气体.乙醇燃烧的产物是二氧化碳和水.再者乙醇是可再生资源,所以目前有很多国家在汽油用填加乙醇,已减少汽油的使用量。
3. 在18年的数据中还有电力汽车（我的特斯拉啊，看着就帅！，，，，这模型还挺重的）马克思，，哦不马斯克的Solar City了解一下。
4. 综上所述，由于各年的value不同，我们就分为两个阵营进行比较（谁说要加权来的，你出来，我保证，，，不打死你，，，）Gasoline和diesel作为传统能源，其他都粗暴的归为清洁能源。

言归正传，我们先看看各使用能源分类，再算算2008到2018的比例是否有上升，就知道大家是否在努力了

```python
df08.groupby(['fuel']).count()
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15324537282521.jpg)

```python
cleanlist = ['cng', 'ethanol', 'gas', 'electricity']
# 先制定清洁能源的备选

def cleanratio(df):
    cnumber = 0
    fuel_list = list(set(df['fuel'].values))
    
    for i in fuel_list:
        if i.lower() in cleanlist:
        # 本例子中i不要变化，因为后面还要根据i来匹配
            cnumber = cnumber + df[df['fuel'] == i].shape[0]
    return round(cnumber / df.shape[0],4)
    # 使用round控制小数的精度：round（你要显示的数，你要显示的小数位数）
            
print(cleanratio(df08))
print(cleanratio(df18))
# 可见从6%增长到了9%
```

```
0.0603
0.0924
```

## |13 结论和可视展示 Q2

这个问题也不错的：各车辆类别（veh_class）在燃料经济性方面的改进（mpg 的增长）是多少？其实还是使用groupby进行数据的真理，再引入mean看每个种类的平均值就可以了，看懂即可：

```python
# only plot the classes that exist in both years
inc.dropna(inplace=True)
plt.subplots(figsize=(8, 5))
plt.bar(inc.index, inc)
plt.title('Improvements in Fuel Economy from 2008 to 2018 by Vehicle Class')
plt.xlabel('Vehicle Class')
plt.ylabel('Increase in Average Combined MPG');
# 美化美化，有兴趣不？
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15324539330924.jpg)

后面的问题就可以不看了，有个merge把两个数据融合的内容，但例子有点不好理解，大家～到此为止就可以了！加油加油！又从头到尾看过了一个数据分析，记得去喷一下呦。

# 探索数据集

最后的任务，选择你P3要做的数据，告诉助教，欢迎群里讨论！中文数据集说明：
https://github.com/udacity/new-dand-basic-china/blob/master/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E5%85%A5%E9%97%A8/%E9%A1%B9%E7%9B%AE-%E6%8E%A2%E7%B4%A2%E6%95%B0%E6%8D%AE%E9%9B%86/%E6%8E%A2%E7%B4%A2%E6%95%B0%E6%8D%AE%E9%9B%86%20-%20%E5%A4%87%E9%80%89%E6%95%B0%E6%8D%AE%E9%9B%86.md






