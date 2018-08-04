# Week8 项目3 Part3/4 Plus1
## FBI枪支数据项目

[TOC]

# 学习地图

![-c](http://pb6cho8f0.bkt.clouddn.com/GMTm7iL1RMivZIBZuPruIg_thumb_13f.jpg)

本周是数据分析课项目3的Part3，正式发布的是TMDB项目，作为扩展我们再来看看数据集中的另一个枪支管制项目的内容。如果你选择的是这个项目，可以看到一些提示，如果是做的其他项目也可以借鉴其中的不同之处，加油吧，少年们！

## 本周重点

- 项目数据集选择：http://t.cn/RejvMmS，(原先的链接比较凶残，我短了它一下）
- 项目环境准备：
    - Uda环境完成：可以在  |3 实战项目   这一节完成，但是要把下载好的数据文件通过 File - Open - Upload 上传到跟目录下。昨晚之后再下载html或者pdf文件在最后的  |4 项目：探索数据集   右下角点击 ’提交项目‘ 提交
    - 本地环境完成：可以在  |3 实战项目   这一节下载ipynb模版文件，之后在本地做完，把最后的文件同样点击 ’提交项目‘ 提交。这个模版文件我搬运了下：https://github.com/mengfanchun2017/DAND-Basic/blob/master/Project3/Investigate_a_Dataset-zh.ipynb
- 开始写项目文件！！！
    - |目标1: 数据整理
    - |目标2: 探索性数据分析
    - |目标3: 得出结论

## 学习计划

每周的时间进度如下表，注意周六的时间是大家Classin视频讨论的时间，其他的可以灵活调配，记住目标不要拖过一周为妙，加油！请大家仔细看下前面项目3的学习地图，可以灵活的安排下时间，咬紧项目很重要呦！

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
> /目标1、2、3/：按照板块完成探索数据集项目（week08-guide文件，以TMDB数据举例）
> /目标4/：了解其他项目数据集（本文件，以FBI枪支数据为例）

# /目标4/：数据整理（FBI数据）

## |1 准备

其实在做项目的时候，大家一定要：**认真看模版文件！！！**不但有整个报告的结构在里面，很多地方还是有提示的。那么在开始我们要干什么事情呢：
- 从头到尾浏览下项目模版文件（链接在本文开始）
- 认真看下评审说明：https://review.udacity.com/#!/rubrics/306/view
- 写好import代码框，一般来讲就是这几个家伙了（提示好nice的）：

```python
# 用这个框对你计划使用的所有数据包进行设置
# 导入语句
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# 务必包含一个‘magic word’，以便将你的视图显示出来
% matplotlib inline

# magicwords的说明：
# http://ipython.readthedocs.io/en/stable/interactive/magics.html
```

## |2 读入数据

接下来就是把你下载好的数据加载，如果下载遇到问题可以找我友情搬运（保证不干坏事），但要注意以下情况：

- 下载后先检查数据的扩展名，看下大小（一般不会特别大）
- 注意用excel/numbers打开数据浏览下内容，有个直观的概念
- 读取csv的时候看下需不需要加参数
- 读取完成后，检查数据是否如预期

```python
# 这里我们要加载xlsx文件，可以使用xlrd第三方库来，有不少选择
# 我当然还是用大熊猫了read_excel
df = pd.read_excel('gun_data.xlsx')
# 注意这里面也可以加参数，和csv的一样，请见以前的导学文件
# 看下都有哦那些列
df.head()
# 看下head，分析下数据列的意思（本数据没有列说明）
```

观察了下，数据的结构是这样的（前面是列名）：
- month/state - 按照每个月每个周一行数据，开始第一条是2017-09 Alabama以此类推
- permit/permit_check - permit应该是批准数（执枪护照），permit check是不是核实，这个数据从比较晚才开始有，而且其中的数量有很多是0，在没有详细说明的情况下不太好使用
- handgun/long_gun/other - 应该是枪的分类（other是机关枪，榴弹炮，生化危机片场？）但是这3个数字加一起和permit的数量非常不一样，有时候多有时候少，而且差别很大
- multiple - 应该是有2种以上的的
- 其他列也是各种的奇怪名称
- 最后一个是total，这个数是和其他的所有数只和相同的
- 所以呢推测这个数据是NICS（FBI的潜质检查数据）的每月的使用记录情况。其中每一列无论是发许可（permit）还是买枪（handgun）或者是退货（return to handgun)都要在NICS中做记录，这一行数据是NICS一个月的记录数
- 我们来用代码检验一下：

```python
# 先看下第一行的数据
print(df.iloc[0])

# 按照推论，第3个数据开始至倒数第1个数据的和应该等于最后一列的total
df.iloc[0][2:-1].sum() == df.iloc[0][-1]
```
```
month                        2017-09
state                        Alabama
permit                         16717
permit_recheck                     0
handgun                         5734
long_gun                        6320
other                            221
multiple                         317
admin                              0
prepawn_handgun                   15
prepawn_long_gun                  21
prepawn_other                      2
redemption_handgun              1378
redemption_long_gun             1262
redemption_other                   1
returned_handgun                   0
returned_long_gun                  0
returned_other                     0
rentals_handgun                    0
rentals_long_gun                   0
private_sale_handgun               9
private_sale_long_gun             16
private_sale_other                 3
return_to_seller_handgun           0
return_to_seller_long_gun          0
return_to_seller_other             3
totals                         32019
Name: 0, dtype: object

True
```
那么按照这个猜测的话，我们不用管那么多列的数据，我比较关注的是handgun、long_gun、other这3种枪的关系（会不会发现一些地域特征？对于米国地理一窍不通的我表示很为难）

另外一个数据是U.S. Census Data.csv,是各洲的人口统计信息。我们来看下，结果发现这个数据是按照法每行一次普查为数据行，每个洲的人数为列：
```python
dfcen = pd.read_csv('U.S. Census Data.csv')
dfcen.head()
```
![-c](http://pb6cho8f0.bkt.clouddn.com/15331948723211.jpg)

那么这个数据我们怎么用呢，有几个想法：
- 如果是只看最近的数据和做分析，那么就使用census最后一行2016年相关的数据就好了
- 之所以说是相关的数据，是2016、2012、2010年的数据除了人数还有很多的百分比数据，比如6岁以下，65岁以上什么的（就是可以作为分类信息了）
- 其他大概70条之后的数据有比较奇怪的title，pass不予考虑（除非有详细的说明）

现在我们有了2个数据：
- 一个是从1999年开始的枪支数据，行为月/州，列为各种枪支数据统计
- 另一个是人口统计数据，行为年/统计特征，列为各州的数量
- 第一个文件州是行，第二个文件州是列，这两个文件的相同点是州
- 有的时候这种情况需要进行行列转换，但这个案例我觉得把第二个文件抽出部分数据更加实用
- 我来过滤下第二个文件包含2016年的行，看看都有什么内容（在检查数据中完成）

## |3 检查数据

首先读入Census数据，之后观察到Fact这一列是数值，我们再把Fact检索出来观察名字:

```python
dfcen = pd.read_csv('U.S. Census Data.csv')
dfcen.head()
dfcen['Fact'].values
# 使用.values直接输出值，不看索引会简洁些
```

之后发现2016年的数据条目都有V2016这个字符作为标识，我们先去掉空值，再做筛选（否则筛选会报错）：

```python
# 去掉空值，存为新的数据(多次运行shape可以看出对比)
print(dfcen.shape)
dfcen_edited = dfcen[dfcen['Fact'].notnull()]
print(dfcen_edited.shape)

# 过滤
dfcen_2016 = dfcen_edited[dfcen_edited['Fact'].str.contains("2016")]
# 也可以加个na = False参数
# https://stackoverflow.com/questions/28311655/ignoring-nans-with-str-contains
# df[df.fact xxxx] 是 operation chain 的方法，举例：
# https://stackoverflow.com/questions/11869910/pandas-filter-rows-of-dataframe-with-operator-chaining/28159296#28159296
# 使用chain方法对str进行筛选：
# https://stackoverflow.com/questions/32616261/filtering-pandas-dataframe-rows-by-contains-str
# pandas 还有 .filter的方法也可以实现
dfcen_2016.shape
```
过滤出来17条数据，这部分的代码结果：
```
(85, 52)
(80, 52)
(17, 52)

array(['Population estimates, July 1, 2016,  (V2016)',
       'Population estimates base, April 1, 2010,  (V2016)',
       'Population, percent change - April 1, 2010 (estimates base) to July 1, 2016,  (V2016)',
       'Persons under 5 years, percent, July 1, 2016,  (V2016)',
       'Persons under 18 years, percent, July 1, 2016,  (V2016)',
       'Persons 65 years and over, percent,  July 1, 2016,  (V2016)',
       'Female persons, percent,  July 1, 2016,  (V2016)',
       'White alone, percent, July 1, 2016,  (V2016)',
       'Black or African American alone, percent, July 1, 2016,  (V2016)',
       'American Indian and Alaska Native alone, percent, July 1, 2016,  (V2016)',
       'Asian alone, percent, July 1, 2016,  (V2016)',
       'Native Hawaiian and Other Pacific Islander alone, percent, July 1, 2016,  (V2016)',
       'Two or More Races, percent, July 1, 2016,  (V2016)',
       'Hispanic or Latino, percent, July 1, 2016,  (V2016)',
       'White alone, not Hispanic or Latino, percent, July 1, 2016,  (V2016)',
       'Housing units,  July 1, 2016,  (V2016)', 'Building permits, 2016'],
      dtype=object)
```

可以看到这个信息里除了信息之外有两个方面的数据
- 人口年龄组成数据（按照年龄）貌似和持枪关系不大（5岁以下，，，，买把真枪玩玩？），这个方面pass
- 人口成分组成，比如女性、白人单身、黑人或非洲裔、美国土著、亚洲人等等，这些分类可以和各州的比率比较看可以发现什么

综上，结合fbi的枪支管制数据我们就可以发现很多问题了，举例两个：
- （最近数据）各州购买枪的比率和各州人员成分比例有关不？（本导学文件介绍）
- 选中的州（可以是排名靠前的几个），的购买频次如何（结合第二个看，和米国一些法规发布有关系，对于米国不是特别感兴趣，最后会放上个资料，大家参考一下）

## |4 清理数据
- df只保留最近时间（2017-09）的数据（为了防止某个月有个别事件有影响，也可以取1年的做平均值）
- 存为新的df1数据，列只保留handgun、long_gun、other并将后两者合并为1列（参见New York Times的2个分类）

### 先处理FBI数据

```python
# 把我们要的时间选出来
dftemp = df[df['month'].str.contains('2017-09')]
print(dftemp.shape)
# 把需要的3个列选出来，存为新的数据q1是question1的简写
df1 = pd.DataFrame(dftemp.loc[:,'handgun':'other'])
# 看了下，还要把index给指定成洲的名字
df1.index = dftemp['state']
# 将其他2个列合并为Others
df1['others'] = df1['long_gun'] + df1['other']
df1 = df1.drop(['other','long_gun'],1)
# 检查下
print(df1)
# 转换行列,因为我们看以洲为输入的图
df1 = df1.T
df1
```
结果就是这个样子滴：

![-c](http://pb6cho8f0.bkt.clouddn.com/15333656119219.jpg)

### 再处理Census数据

看了下，其实要保留的列也不是特别多，我们来看下dfcen_2016['Fact']这一列（列名太凶残了，我还是用index筛选数据好了）

![-c](http://pb6cho8f0.bkt.clouddn.com/15333674065873.jpg)

由于FBI的数据是数量，而Census里的人口分类信息是百分比，所以我们保留全部人口，用作FBI数据的百分比转换（第0行）；再就是保留第12，13，15，18行（保持在统一维度并且干掉过小的值），经过观察各洲的分布情况还真的有很大区别。

```python
# 筛选出行
dfcen_2016_filter = dfcen_2016.loc[[0,12,13,15,18],:]
# 干掉Fact Note
dfcen_2016_filter = dfcen_2016_filter.drop('Fact Note', 1)
print(dfcen_2016_filter.shape)
```

### 处理两个数据列数不同的问题

```python
# 55 vs 51 看来两个数据的洲不对应，需要处理一下

# 来个小循环把相同的列找出来
def matchlist(a,b):
    matchlist = []
    for i in list(a.columns):
        if i in list(b.columns):
            matchlist.append(i)
        else:
            print(i)
    return matchlist
    
# 有50个ok的，而且cen是被dfq1包含的

matchlist(dfq1,dfcen_2016_filter)
matchlist(dfcen_2016_filter,dfq1)
# 本来想把Fact这列变成index，名字太长了，自己指定把
cenindex = ['Population', 'White Alone', 
            'Black or African American', 'Asian Alone',
           'Hispanic or Latino']
dfcen_2016_filter.index = cenindex

# 删除dfcen[Fact]
if 'Fact' in dfcen_2016_filter.columns:
    dfcen_2016_filter = dfcen_2016_filter.drop(['Fact'],1)

dfcen_2016_filter
```
dfcen_2016_filter做了规整，还是比较好看：

![-c](http://pb6cho8f0.bkt.clouddn.com/15333759920593.jpg)

接下来我们删除df1多处来的列，并且把index改为首字母大写：
```python
# 删除dfq1的列

for i in df1.columns:
    if i not in matchlist(dfcen_2016_filter,dfq1):
        df1 = df1.drop(i,1)
        
# index不太好看，改个名吧（在week07-guide中有讲）
df1.rename(index = lambda x: x.replace('handgun', 'Handgun'),
           inplace = True)
df1.rename(index = lambda x: x.replace('others', 'Others'),
           inplace = True)
df1
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15333848446218.jpg)

### 修改数据类型

有的数据是个数，有的数据是比例，接下来将购买枪的孩子从个数转成比率才能达成一致，结果开始做报错，结果发现dfcen的Pop这列是str字符型，字符串和数字是无法运算的（这是开始检查数据时候留的一个坑，开始改好就方便了，擦屁股，，）,Pop的数据是正阳的 4,863,330 所以不是简单的转换，我们先要把逗号去掉：

```python
# 使用.str.replace替换
# 官方说明 https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.str.replace.html
dfcen_2016_filter.loc['Population'] = dfcen_2016_filter.loc['Population'].str.replace(',','')
# 看一眼数据
dfcen_2016_filter.iloc[0].head()

# 这回可以转换了
dfcen_2016_filter.iloc[0] = pd.to_numeric(dfcen_2016_filter.iloc[0])

# 看一下，普遍比较小，扩大100倍存档
df1.iloc[0].values / dfcen_2016_filter.loc['Population'].values
df1_r = df1.copy()
df1_r.shape
df1_r.iloc[0] = 100 * df1.iloc[0].values / dfcen_2016_filter.loc['Population'].values
df1_r.iloc[1] = 100 * df1.iloc[1].values / dfcen_2016_filter.loc['Population'].values
df1_r
```
![-c](http://pb6cho8f0.bkt.clouddn.com/15333851307856.jpg)

接下来处理带%的数据：

```python
# 干掉百分号
def hunchange(df,list):
    for i in list:
        df.loc[i] = df.loc[i].str.replace('%','')
        
hunlist = dfcen_2016_filter.index[1:]

hunchange(dfcen_2016_filter, hunlist)

dfcen_2016_filter.head()
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15333979625054.jpg)

最后按照列转换一下数据类型，并切合并两个数据就可以了：

```python
# 因为dataframe的类型是按照列来定的，所以这里要转换列
humstat = dfcen_2016_filter.columns
for i in humstat:
    dfcen_2016_filter[i] = pd.to_numeric(dfcen_2016_filter[i]) / 100
# .to_numeric就是咱们pd转换数字的方法

dfcen_2016_filter.head()
# OK 既然都转换完了，那么我们把Pop这行干掉，并合并数据
dfq1 = dfcen_2016_filter.drop(['Population'],0)
dfq1
# 合并df1_r的数据
dfq1.append(df1_r)
# Perfect, 可以画图了！ 
```

数据总算准备好了

![-c](http://pb6cho8f0.bkt.clouddn.com/15333981527990.jpg)


# FBI数据补充

- FBI数据的特点是需要将两个数据文件进行清理和规整
- 和Gapminder使用多个数据文件有点相似
- 其实上面最后做图的数据来讲还是有些问题，大家可以自己做的时候研究下：
    - 因为是按照bar图，所以行数太多，可以通过先总体观察，再把影响不大的数据干掉的方法降低（感觉4个会比较好，1个枪的数据，3个人口分类的数据）
    - 在开始并没有把数据类型做检查和转换，为中间的工作增加了复杂度
    - 州太多了，不好展示，要不要top10之类的来一波？

# 最后的话

本导学内容是以P3中的FBI枪支数据为例进行的分析，请大家注意以下几点：
- 本文件还原了我在做项目时候的思考和解答过程，这个过程并不是最优的
- 主要是抛砖引玉将一个项目比较完整的过程展现出来，供大家参考下
- **按照项目中的建议，你可以先写一个代码多，尝试多‘比较乱’的版本，之后再提交时候再提交另一个版本。**
- 不过如果你比较懒，如果能够满足‘项目评审标准’又能注意逻辑和描述，一个文件也是OK的
- 除了SQL的那个数据，我们有4个数据可以选的，兴趣是最好的出发点
- 加油加油，争取1周时间能够提交，之后再按照评审老师的反馈修改就更有针对性了。**记住：时间节点比质量更加重要！**（因为还有机会改的，不限次数）





