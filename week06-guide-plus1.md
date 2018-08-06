# Week6/12 项目3 Part1/4 Plus1
## 酒品质分析案例

[TOC]

# 任务说明

本周是数据分析课项目3的第一个案例红酒质量分析，请大家跟上节奏，来一波啊来一波！

## 学习地图

![-c](http://pb6cho8f0.bkt.clouddn.com/GMTm7iL1RMivZIBZuPruIg_thumb_13f.jpg)

## 学习重点

- 重命名列
- 写入CSV的index参数
- 使用可视化探索数据
- Pandas Groupby
- 由值生成分类数据
- Pandas Query
- 图形展示入门

## 学习目标

本文件对应的是本周的目标2，目标列表：
> /目标1/：数据分析过程（week6-guide文件）
> /目标2/：酒品质分析案例（本文件）

**请注意：由于下载的csv文件和空间中调用的再columns name 有些不同，请选择本地完成或者在working space上完成，二选其一。**

# /目标2/：酒品质分析案例

案例1是关于白酒和红酒品质的分析。其中新接触的一些数据处理方式会在以下内容中介绍。数据文件分为白酒和红酒两个文件：winequality-red.csv，winequality-white.csv。数据来源依然是UCI的数据集：https://archive.ics.uci.edu/ml/datasets/Wine+Quality

**请注意：为了对应课程中的小节，每个二级标题中的|x 的x对应课程中的小节编号。**

## *|6 理解numpy库为什么很快
再次强调了python原生和numpy（pandas里的数学运算很多是从numpy中来的）后者更快.{6}中差了100倍！这种原因是C没有自动垃圾回收动态数据什么的功能（而这些功能是要消耗性能的），具体解释：https://stackoverflow.com/questions/418914/why-is-c-so-fast-and-why-arent-other-languages-as-fast-or-faster

## *|7 如何用numpy增加一列数据

在{7}中介绍了在numpy中增加列的方法：

```python
color_red = np.repeat('red', red_df.shape[0])
# 通过np.repeat方法制作一个列表，列表的内容是第一个参数'red',列表的长度是第二个参数red_df.shape[0]
# 其实shape[0]就是数据的行数（在p2中有讲shape）

print(color_red)
# 那么我么检查下是不是生成了一个列表

print(len(color_red))
#再检查下列表的长度
```

输出是这个样子滴：
```
['red' 'red' 'red' ... 'red' 'red' 'red']
1599
```

接下来是把生成的颜色数据加入到数据中：

```python
white_df['color'] = color_white
# 新列的名字叫‘color’
white_df.head()
# 我们再来看看white_df的数据就会发现有一新列叫'color'
```

再之后是用apped方法把红酒和白酒的数据搞在一起，因为这时候已经有了color这列的信息区分红酒和白酒了，所以呢就可以集合在一起了：

```python
wine_df = red_df.append(white_df)
```

其实呢，我个人更偏爱直接使用pandas的方式增加color列，一下方法是等价的：

```python
red_df['color'] = 'red'
# 多么简洁！！！我爱大熊猫！！！
```

## *|9 重命名列

接下来发现了数据很奇怪，根据检查white和red的列发现是有一列名字不同，那么我们来修改（ps：这节看下就好，如果是本地下载的数据两列名字是一样的）：

```python
# 经过尝试列名是不可变的，只能重新分配一个列表
new_labels = list(red_df.columns)
# 先是把原先的列名搞出来
new_labels[6] = 'total_sulfur_dioxide'
# 将其中的第7个列的名称改对
red_df.columns = new_labels
# 将新的列名读入red_df中

# 好麻烦有没有，我们可以使用rename的方法完成：
red_df = red_df.rename(columns = {'total_sulfer-dioxide':'total_sulfer_dioxide'}
# 高兴到飞起有木有！rename的链接：
# https://stackoverflow.com/questions/20868394/changing-a-specific-column-name-in-pandas-dataframe
```

## *|10 附加数据续（写入CSV的index参数）

这里大家请回顾一下之前讲的讲数据写入csv时候的index参数，如果不加index = False，默认会加一列作为行号，对比如下：

![-c](http://pb6cho8f0.bkt.clouddn.com/15321293190296.jpg)

## **|11 使用可视化探索数据

这里就是把本周课程中的作图方法使用一遍：首先是所有列的hist（我把figsize调整了下）：

![-c](http://pb6cho8f0.bkt.clouddn.com/15321384655734.jpg)

接下来是散点图，我想到了那个scatter_matrix大招，结果由于参数太多了，执行超慢，而且太小了啥也看不出来（来个大显示器？给报销么...)，放弃：

![-c](http://pb6cho8f0.bkt.clouddn.com/15321387172057.jpg)

最后那就只能两个两个对比了：

![-c](http://pb6cho8f0.bkt.clouddn.com/15321387707633.jpg)

但是有这么多要对比的，肿么办呢，我来写个循环（注意输出比较多是可以滚动看的）：

![-c](http://pb6cho8f0.bkt.clouddn.com/15321390062591.jpg)

## *|Pandas Groupby

这一节我们来使用实际数据复习下groupby函数。在上一节我们试图用散点图的方式寻找和质量相关的参数（地毯式），这一节我们换个想法：我们把数据按照质量划分成小组，看看各组之间的各项指标有什么变化：
![-c](http://pb6cho8f0.bkt.clouddn.com/15321404532846.jpg)

但是我又觉得这种把红酒白酒混合在一起的方式有点太混了，于是决定在groupby中多加一个color参数（注意多个参数要写成一个列表），就可以区分出来了：

![-c](http://pb6cho8f0.bkt.clouddn.com/15321406462284.jpg)

## *|13 使用Groupby得出结论（由值生成分类数据）

当使用groupby的时候，可以在后面指定要考察的列（而不是所有列），并且可以加上as_index = False指定不以groupby作为index（会按数字排列）：

![-c](http://pb6cho8f0.bkt.clouddn.com/15321412868935.jpg)

接下来的问题2有一点点复杂，我梳理一下：
- 首先数据中的pH是数值
- 在我们要考察pH level和酒质量的关系
- 既然是level那么我们就要把所有数据分为几大列，比如可以这样定义：
- 酸度水平：
    - H 高: 最低 25% 时的 pH 值
    - MH 中等偏高: 25% - 50% 时的 pH 值
    - M 中: 50% - 75% 时的 pH 值
    - L 低: 最高 75% 时的 pH 值
- 肿么办，首先我们要在数据中创建一个新列来记录酸度水平，就是acidity_levels
- 那么我们把酸度水平的数据填上呢，pandas有个cut函数可以干这个事（把数值按照百分比归类到对应的level上）
- 代码如下，请认真读注释：

```python
# 用 Pandas 描述功能查看最小、25%、50%、75% 和 最大 pH 值
wine_df['pH'].describe()

# 将min到max的5个值用做“分割”点
bin_edges = [2.72,3.11,3.21,3.32,4.01] 

# 当然也可以偷懒了，先确定要的5个是describe输出的倒数5个，用[3:]选中
# 因为是series结构（有min ： 2.72这种对应关系）
# 所以用list把输出的value（就是2.72这些值）输出成列表
bin_edges_smart = list(wine_df['pH'].describe()[3:].values)

#检查下
print(bin_edges_smart)

# 接下来对每个酸度水平类别进行命名
bin_names = ['H','MH','M','L'] 

# 之后就可以创建 acidity_levels 列了
wine_df['acidity_levels'] = pd.cut(wine_df['pH'], bin_edges, labels=bin_names)
# 这里注意cut方法的3个参数用法第一个参数是要比较的列wine_df['pH']，第二个是比较的区分点就是那5个值，第三个是分类的名称
# 检查该列是否成功创建
wine_df.head()
```

输出是：
```python
count    6497.000000
mean        3.218501
std         0.160787
min         2.720000
25%         3.110000
50%         3.210000
75%         3.320000
max         4.010000
Name: pH, dtype: float64

[2.72, 3.11, 3.21, 3.32, 4.01]
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15321441473886.jpg)

那么最后就可以回答问题了：

![-c](http://pb6cho8f0.bkt.clouddn.com/15321442143769.jpg)

## **|14.15 Pandas Query

就是如何过滤你要的数据，之前是使用filter的方法，也可以使用query的方法，代码对比如下：
```python
# selecting malignant records in cancer data
df_m = df[df['diagnosis'] == 'M']
df_m = df.query('diagnosis == "M"')

# selecting records of people making over $50K
df_a = df[df['income'] == ' >50K']
df_a = df.query('income == " >50K"')
```

要想回答究竟含量高是否更高评分，我们还是要把数据分为高和低，就是按照50%为区分。这里我们使用query的方法实现：

```python
print(wine_df['alcohol'].median())
# 如果使用众数mode的话会相差超多，使用mean还凑合，使用median中位数最好

# 选择酒精含量小于平均值的样本
low_alcohol = wine_df.query('alcohol < 10.49')

# 选择酒精含量大于等于平均值的样本
high_alcohol = wine_df.query('alcohol >= 10.49')

# 确保这些查询中的每个样本只出现一次
print(low_alcohol.shape[0])
print(high_alcohol.shape[0])
wine_df.shape[0] == low_alcohol.shape[0] \
+ high_alcohol.shape[0]
# 左边是全数据量，右边是拆分后的数据量和
# 也顺便检查下两个分组的数量

# 回答问题
# 这次问题的回答是为了使用query，比cut略显麻烦
mean_quality_high = high_alcohol['quality'].mean()
mean_quality_low = low_alcohol['quality'].mean()
print(mean_quality_high)
print(mean_quality_low)
```

接下来糖分的内容一模一样的方法，就不赘述了。

## **|16.17 类型和质量图

这两节就可以画图了，我们还是用回groupby方法

```python
wine_df.groupby('color')['quality'].mean()。.plot(kind='bar', title='Average Wine Quality by Color', color = ['red', 'white'], alpha = .7)
```

但是为了好看，我还想引入x和y的title，代码说明：

```python
# 接下来我们要美化一下（美颜相机了解一下？）
# 在文档前面加上import matplotlib.pyplot as plt
# 这种方式是把matplotlib第三方库众的pyplot模块引入
# 有时候库内容很多这样可以只引入库中需要的部分
# 这个模块是要定义图形x和y轴时候要用的pandas中并没有集成这个功能
# 一同引入的还有seaborn


wine_df.groupby('color')['quality'].mean() \
.plot(kind='bar', 
      title='Average Wine Quality by Color', 
      color = ['red', 'blue'], alpha = .7);

plt.xlabel('Color', fontsize=12)
plt.ylabel('Quality', fontsize=12)
# 有了这两行就可以看到两个轴的标签了
# 注意这两行要放在最下面，因为plot会输出xlabel所以要在最后覆盖一下
```

![](http://pb6cho8f0.bkt.clouddn.com/15321485000881.jpg)

接下来，我我们看看能不能再加点东西，就平均值对比数据太少了，我们看看每个质量级别的对比吧(使用counts和groupby，示例使用pH数据）：
```python
counts = wine_df.groupby(['quality', 'color']).count()['pH']
# 随便选了pH列，可以写循环输出所有的
counts.plot(kind='bar', color = ['red', 'blue'], alpha = .7)
plt.xlabel('Quality and Color', fontsize = 16)
plt.ylabel('Count', fontsize = 16)
plt.title('Counts by Wine Color and Quality', fontsize = 18)
# 我把title也拆出来了为了能够指定大小，这样plot也比较短
```

![](http://pb6cho8f0.bkt.clouddn.com/15321493985538.jpg)

ps:seaborn可以画出超帅气的图来，我们将在下周进行讲解，有兴趣的可以看下官方文档和样例库：
- https://seaborn.pydata.org/
- https://seaborn.pydata.org/examples/index.html

## *|18 Matplotlib示例

{18}建议大家浏览并跑一遍工作空间中的文件，主要多了介绍怎么为轴的标签指定名字（比如说不是显示3、4、5而是显示质量3、质量4、质量5）

## *|19.20 Matplotlib绘图

此处作为扩展了解一下作图的更复杂操作，了解即可。






