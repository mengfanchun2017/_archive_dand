# week6/12 项目3开始（Part 1/4）

## 本周知识点

- 数据分析的应用场景
- 数据分析过程
- pandas读入csv文件
- dataframe的loc和iloc
- pandas的.value_count()方法
- dataframe的空值处理
- pandas绘图

## 前面的话

同学们，这周我们讲开始学习项目3，如何进行数据集的探索。本周将会用到项目2中的Python知识，和项目1中的SQL知识，并且会做一些扩展。本项目新加入的知识点是怎样进行数据清理，因为现实世界的数据往往有很多瑕疵，而要想得到良好的分析结果，就要把这些瑕疵处理掉。大家加油！
    
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

![](http://pb6cho8f0.bkt.clouddn.com/15318421868203.jpg)

## 本周目标

**不要怂，就是肝！大家High起来！** 本周目标对应的是（根据内容可能会有拆分）：
> /目标1/：数据分析过程（本文件）
> /目标2/：案例研究1、2（week6-guide-plus文件）

### /目标1/：课程1:数据分析过程

#### *{2.课程概述}

着节是项目3的开始，看完之后应该对整体的课程设计和需要的SQL知识（项目1）、python知识（项目2）有所了解。并且提供了不少额外资源的链接。

此处最后一个链接是一本超好的书，可以陪你走到微学位完成，请不要错过（鸟文的，中文的也有），如果链接不可用，可以试试我搬运的：

#### **{3.数据分析的应用}

提供了5个链接，对于数据分析能干什么做了说明：
- 百万数据告诉你第一次约会用来了解对方的最佳问题
- 看看沃尔玛如何使用大数据分析来增加销量
- 你还可以了解Bill James 如何将数据分析应用于棒球
- 数据分析如何帮助设计药物
- 这篇Facebook 博客(需科学上网) 和另一篇文章 介绍如何用数据分析社交媒体上的意识形态

#### *{5.数据分析过程概述}

1. 提问
    - 好奇心是最好的老师
2. 整理数据
    - Gather 收集
    - Assess 评估
    - Clean 清理
3. 执行EDA（探索性数据分析）
    - 包括画图进行观察
4. 得出结论（或做出预测）
    - 通过机器学习得出
    - 通过推断统计学得出（项目4的重点呦，我们到时候再学习）
5. 传达结果
    - 一图胜千言，交出图来！

#### ***{6.数据分析过程练习}

又是一份共享单车的数据！这节请看看，就当复习了。

#### *{9.提问/10.数据集问题}

在第9节介绍了一份肿瘤数据：
https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+%28Diagnostic%29
原始数据是.data格式，第10节练习中的工作空间中可以导入服务器端的csv文件对数据进行观察和提问。

#### *{11.数据整理和EDA}
本节讨论了数据分析流程中的第2步：Wrangling（数据整理）和第3步：EDA（探索性数据分析）之间的关系和交互过程。本部分说明包含了几个子类的说明，将相应节号整合加入便于理解：

**Wrangling：主要解决**
- Gather收集数据 **{12：收集数据}** 可以下载、从API获取、网页获取（爬虫）或者使用公司的数据库。
- Assess评估数据，见14节练习
- Clean

**EDA：**
- Explor
- Augment

#### ***{13.阅读csv文件}
本节对pandas.read_csv()做了超级详细的扩展，推荐在Uda工作空间中完成（因为文件是在Uda工作空间中，不建议在本地做）。我们抓个其中的电厂的例子做说明，如果只是简单的读入csv文件，输入输出是这样子的：

![](http://pb6cho8f0.bkt.clouddn.com/15317053757797.jpg)

原始输出，根本看不出是什么意思，我们可以查看下数据说明：
> Features consist of hourly average ambient variables 
- Temperature (T) in the range 1.81°C and 37.11°C,
- Ambient Pressure (AP) in the range 992.89-1033.30 milibar,
- Relative Humidity (RH) in the range 25.56% to 100.16%
- Exhaust Vacuum (V) in teh range 25.36-81.56 cm Hg
- Net hourly electrical energy output (EP) 420.26-495.76 MW

那么我们就可以在读取csv的时候把列的名称做扩展了说明，这样看就好多了：
![](http://pb6cho8f0.bkt.clouddn.com/15317058792920.jpg)

那么接下来我们就可以使用.to_csv()方法把数据集存储为新的csv文件就可以了，这里注意有个index的问题要考虑下：
![](http://pb6cho8f0.bkt.clouddn.com/15317070506224.jpg)

里面新出来的这个index是行的名字，扩展看懂下面这个就行了：
![](http://pb6cho8f0.bkt.clouddn.com/15317071182748.jpg)

#### **{14.评估和理解}
本节的重点是对dataframe的一些信息的获取，可以用于评估所收到数据情况，有以下几个小点：
- 通过.shape检查数据的维度信息：下面的输出是说df是个有569行和32列的二维数据： ![](http://pb6cho8f0.bkt.clouddn.com/15317083917660.jpg)
- 通过.dtypes检查各列的类型：（注意diagnosis本身是str字符串格式，这是由于str在dataframe中以对象方式呈现，如果深入到一个元素使用type(df['diagnosis'][0])检查的话还是会显示str） ![](http://pb6cho8f0.bkt.clouddn.com/15317085582097.jpg)
- 通过.info()检查所有列的数量
- 通过.describe()检查数据集每列的统计学信息：（一个8个） ![](http://pb6cho8f0.bkt.clouddn.com/15317088183840.jpg)
- 通过.columns .index可以看到数据集的行列信息，注意columns的输出是一个列表，所以可以遍历访问： ![](http://pb6cho8f0.bkt.clouddn.com/15317091581005.jpg)
- 通过.loc[] .iloc[]选择所需数据，第一种是key value对应，第二种是通过索引。简单的说是这样选：[行范围,列范围]具体看例子： ![](http://pb6cho8f0.bkt.clouddn.com/15317123678205.jpg)
- 挑选不连续的列：在选择时可以用列表挑选需要的列，两种实现方式（后面的用了变量方便修改）： ![](http://pb6cho8f0.bkt.clouddn.com/15317133705558.jpg)
- 但是上面的方法不能在不连续的列中混入范围的选择，如果列很多的时候要这样处理：![](http://pb6cho8f0.bkt.clouddn.com/15317140410209.jpg)
- 官方文档： https://pandas.pydata.org/pandas-docs/stable/indexing.html

#### *{15.评估和理解练习}
通过练习有一点扩展，总结如下：
- 通过.xx选择df中的列，一下两种方式是等价的： ![](http://pb6cho8f0.bkt.clouddn.com/15317151657673.jpg)
- 通过.unique()筛选唯一的值，可以用len直接求出有几个，其实也可以使用.nunique()直接得出： ![](http://pb6cho8f0.bkt.clouddn.com/15317155640172.jpg)
15317154270712.jpg)
- 通过.value_counts()统计一列中的数值个数： ![](http://pb6cho8f0.bkt.clouddn.com/15317152664251.jpg)
- 通过.isnull()统计缺失值。在df中有isnull的方法可以检查缺失值（也有notnull）。要在后面加个sum()就可以检查个数了(当然也可以对所有列做处理）： ![](http://pb6cho8f0.bkt.clouddn.com/15317185145596.jpg)
- 注意.isnull()是对值做判断，所以无论是否为空都有一个结果，所以对isnull()做value_count()也是可以的，注意两种对比： ![](http://pb6cho8f0.bkt.clouddn.com/15317186518065.jpg)
- 通过.quantile()查询相应百分位的值。如果要多个要放在一个列表中，并且小数点前的0可以省略： ![](http://pb6cho8f0.bkt.clouddn.com/15317324651608.jpg)

#### ***{17.清理示例}
总算来了，清理数据是本周的重点，大家这一节一定要好好学。首先我们要知道清理数据常见的3种情况：
1. 缺失值
2. 冗余数据
3. 数据类型错误

我们先从缺失值下手处理这个问题，按照书中的例子，对于duration这样的数字组成的数据列，一种方法是直接把平均值填充到NaN（标示空值的位置）：
```python
# 方法1，先定义mean变量，再使用fillna(mean)将空值填充为mean的值
mean = df['view_duration'].mean()
df['view_duration'] = df['view_duration'].fillna(mean)
# # 此处要用 = 将后面处理后的数据写入原数据

# 方法2，在fillna中增加inplace参数，表示替换
# # 并且直接把mean的计算融入fillna的参数中
df['view_duration'].fillna(df['view_duration'].mean(), inplace=True)
```

接下来我们处理数据重复的问题：
```python
# 使用.duplicated()处理
# # 注意.duplicated()输出是一个个True / False的列表，所以要想知道有多少个，需要使用sum()或者.sum()进行统计
df.duplicated().sum()

# 最后使用.drop_duplicateds()清理数据，同样可以使用inplace = True进行替换
df.drop_duplicateds(inplace=True)
# # 另外如果只是对一列中的重复值统计和去掉的话使用subset
# # df.drop_duplicateds(subset=['colname'], inplace=True)
# # 另外也可以使用keep参数定义保留那一个重复数据
# # https://stackoverflow.com/questions/23667369/drop-all-duplicate-rows-in-python-pandas
```

最后的改变数据格式的方式我们已经在项目2中使用过了，还记得 pd.to_datatime() 这个方法么？详情请见week4导学内容。如果你将转换之后的数据保存为csv下次打开后还不是datetime格式，因为csv无法数据类型。但是这种情况可以通过在读取csv的时候使用parse_dates参数解决。感兴趣的请戳（选学）： https://stackoverflow.com/questions/17465045/can-pandas-automatically-recognize-dates

#### **{18.清理练习}

对于清理，还有一个小练习，建议有精力的不要放过，同样由于csv文件的原因请在工作空间完成，有2点做个扩展：

```python
# 扩展1：重命名列
# # 可以直接通过赋值重命名df的列，但元素数要一致
# # 首先定义一个空列
new_labels = []
# # 之后用一个循环把原先列中带_mean的列名都改为不带_mean的
for col in df.columns:
    print(col)
    if '_mean' in col:
    # 判断如果带_mean
        new_labels.append(col[:-5])  
        # 那么就把不包括最后5个字母的列名存为新列名
    else:
        new_labels.append(col)
        # 如果没有_mean的话就保持原名字
        
print(new_labels)
# 检查下是否改好了

df.columns = new_labels
# 将新的列名赋值
df.head()
# 检查下是不是改过来了，大功告成！ 
```

```python
# 扩展2：用均值填充缺失值
# # 使用循环将除了前2列之外的进行均值填充处理
# # 第一列是用户id，第二列是诊断评级
for i in df.columns[2:]:
    # 使用df.columns遍历列
    # 2: 表示的是从第2列到最后一列（排除了0、1列）
    df[i].fillna(df[i].mean(), inplace = True)
    # # 使用上节的方法完成填充
# 用 info() 确认修改
df.info()
# 这一次就可以看到所有列的飞空数字是一样的了（info显示每列后面的是非空数据）
```

后面的去掉重复数据方面，就是一样的了，使用这个数据我们可以观察一下，duplicated是找到所有列都一样的，如果只看一列，数据是不同的（正好有分类信息，会重复很多），对比如下： ![](http://pb6cho8f0.bkt.clouddn.com/15317435414801.jpg)

#### ***{20.使用Pandas绘图}

Pandas中的绘图功能其实是封装了matplotlib中的功能，所以呢就不用再import一遍了。简单的例子如下（基于已经导入的df数据）：

```python
# 为了能够在jupyter中显示图形要增加下面这句：
% matplotlib inline

# 可以直接在数据集上调用，会每个列出一个图，比如
# # .plot() 折线图
# # .hist() 直方图
# # 可以在()中定义数据的大小
df.hist(figsize=(8,8));
# # 默认会把图形建立的一些信息一起输出，可以在结尾加上;隐藏信息，只出现图
# # .hist()和.plot(kind='hist')是相同的

# 对于education这样的分类的列，可以使用.value_counts()先把各列数据统计出来，再画图
df['education'].value_counts().plot(kind='bar')

# 放大招！有个.scatter_matrix()可以让你看到每两个变量之间散点的关系，便于进行初步观察
# # 注意使用方法是将数据集作为参数输入
# # 还会展示每个变量的直方图
pd.plotting.scatter_matrix(df, figsize=(15,15));
# # 如果只想看特定的两个变量，这样写：
df.plot(x='compactness', y='concavity', kind='scatter')
```

#### *{23.得出结论示例}

这里呢大家明白筛选是怎么回事就好（在项目2用过呦），最后的把两个图放在一起显示的代码本周不要求。
```python
# 这里是使用过滤将df中满足条件诊断为M的存为新的数据df  —m
df_m = df[df['diagnosis'] == 'M']
```
#### *{24.练习：得出结论}

本节是对上一节可视化的练习，后面需要使用.idmin()方法，了解一下：

![](http://pb6cho8f0.bkt.clouddn.com/15317846263153.jpg)

#### *{26.传达结果示例}

这节一路看完就Ok了，新出现的内容有：
- 定义可视化图形的index，这样两个前后相关的可视化图形在展示上比较统一

```python
ind = df_a['education'].value_count().index
# 这句话就是创建了ind变量，这个变量等于后面那个index的输出
# 这个输出是对df_a['education']进行统计得出的，类别最多的排序在前面（使用的就是.value_count()方法）

df_a['education'].value_counts()[ind].plot(kind='bar');
# 这句的意思是我要画个图.plot(kind='bar')
# 图的内容就是df_a['education']的值分类
# 这个分类按照从多到少排列（使用的就是.value_count()方法）
# 但是我又想了想，还是我指定一下排列顺序把，现在改为使用ind排列（刚生成的，其实df_a不加这个结果一样的，因为本身就是自己的顺序么）

df_b['education'].value_counts()[ind].plot(kind='bar');
# 但是这行加[ind]就有用了，因为这里如果不加就回按照   df_b生成的从大到小排列了，两个图各说各话回很乱的
# 所以引入以df_a顺序生成的[ind]，就能做到排序相同了
```

#### *{27.传达结果练习}

此处有的部分和24相同，大家注意在生成一个序列值的地方可以使用做图显示，能够更好的传达自己想法就可以了。

#### 探索数据集

中文数据集说明：
https://github.com/udacity/new-dand-basic-china/blob/master/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E5%85%A5%E9%97%A8/%E9%A1%B9%E7%9B%AE-%E6%8E%A2%E7%B4%A2%E6%95%B0%E6%8D%AE%E9%9B%86/%E6%8E%A2%E7%B4%A2%E6%95%B0%E6%8D%AE%E9%9B%86%20-%20%E5%A4%87%E9%80%89%E6%95%B0%E6%8D%AE%E9%9B%86.md






