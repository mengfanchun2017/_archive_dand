# Week8 项目3 Part3/4
## 探索数据集项目

[TOC]

# 学习地图

![-c](http://pb6cho8f0.bkt.clouddn.com/GMTm7iL1RMivZIBZuPruIg_thumb_13f.jpg)

本周是数据分析课项目3的Part3，我们要开始做探索数据集项目了，兴奋不！其实经过前两周的洗礼，对于数据集的探索，我们已经比较熟悉了：除了课程的内容，我们还已经完成了两个案例的分析，也就是说这周我们做探索数据集项目时，已经是第4遍比较全面的完成这个流程了，加油吧，少年们！

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
> /目标1、2、3/：按照板块完成探索数据集项目（本文件，以TMDB数据举例）
> /目标4/：了解其他项目数据集（week08-guide-plus1文件）

# /目标1/：数据整理（TMDB数据）

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
# 加载数据并打印几行。进行这几项操作，来检查数据
df = pd.read_csv('tmdb-movies.csv')
print(df.columns)
# 看下都有哦那些列
print(df.head(50))
# 看下50行，可以粗略的看下NaN和各feature的情况
df.dtypes
# 看下各列的数据类型
```

## |3 检查数据

检查数据么，一般是看4个东西：维度、缺失值、重复值、唯一值
- 看维度（上面框是输入，下面框是输出，后同）：

```python
df.shape
```

```
(10866, 21)
```

- 看缺失值

```python
df.isnull().sum()
```

```
id                         0
imdb_id                   10
popularity                 0
budget                     0
revenue                    0
original_title             0
cast                      76
homepage                7930
director                  44
tagline                 2824
keywords                1493
overview                   4
runtime                    0
genres                    23
production_companies    1030
release_date               0
vote_count                 0
vote_average               0
release_year               0
budget_adj                 0
revenue_adj                0
```

也可以加一行，看看缺失值的比例（人这种动物看超过100的数会心跳加速的，所以有人发明了百分比）：

```python
round(df.isnull().sum()/df.shape[0],2)
```

```
id                      0.00
imdb_id                 0.00
popularity              0.00
budget                  0.00
revenue                 0.00
original_title          0.00
cast                    0.01
homepage                0.73
director                0.00
tagline                 0.26
keywords                0.14
overview                0.00
runtime                 0.00
genres                  0.00
production_companies    0.09
release_date            0.00
vote_count              0.00
vote_average            0.00
release_year            0.00
budget_adj              0.00
revenue_adj             0.00
```

- 看重复值
重复值是要去掉的，本例子中只有一个重复值，其实不干掉也不会太影响（虽然就1个，我还是要干掉，强迫症，，，，，其实即使是0也应该做的，因为你不知道下一次的数据会是什么样子的，或者以后会变成一个处理数据的产品也数不定呢），标准打法（检查，去掉，检查）：

```python
print(df.shape)
print(df.duplicated().sum())
df.drop_duplicates(inplace = True)
print(df.shape)
print(df.duplicated().sum())
```

```
(10866, 21)
1
(10865, 21)
0
```

- 看唯一值

这里可以通过唯一值观察一些内容，比如budget（预算）的唯一值有557个，而budget_adj(修正后的预算)有2617个，是不是说明指定预算时有点拍脑袋。或者是看runtime居然有247个唯一值，要知道这是按照分钟统计的（这么多种，真是没想到！）。如果是要输出含有非唯一值的列，可以参考案例2中写个小循环自己输出。

```python
df.nunique()
```

```
id                      10865
imdb_id                 10855
popularity              10814
budget                    557
revenue                  4702
original_title          10571
cast                    10719
homepage                 2896
director                 5067
tagline                  7997
keywords                 8804
overview                10847
runtime                   247
genres                   2039
production_companies     7445
release_date             5909
vote_count               1289
vote_average               72
release_year               56
budget_adj               2614
revenue_adj              4840
```

## |4 清理数据

其实上一节的去掉重复值应该是这个环节做的（因为反正也不复杂就顺手处理了）。接下来是清理数据，为探索数据分析提供一个干净的数据：

- 丢弃列
拿到数据后，可以对于无用的列进行处理，前提是你理解了列都是什么，需要仔细看下数据说明。比如TMDB数据中，我们考察预算和收入使用_adj调整后的真实列更加准确，那么之前版本的列就可以删除，当然如果要比较之前版本和调整版本之间的差异，就不能删掉。另外imdb_id和id都是unique的编号，留一个就好了。

```python
# 1 清理无用列
# buget \ revenue 使用adj调整后数值，丢弃
# imdb id 与 id作用相同，丢弃
# homepage 缺失很多，其中的内容
print(df.shape)
drop_list = ['budget', 'revenue', 'imdb_id']
df.drop(drop_list, axis = 1, inplace = True)
print(df.shape)
df.columns
```
```
(10865, 21)
(10865, 18)
Index(['id', 'popularity', 'original_title', 'cast', 'homepage', 'director',
       'tagline', 'keywords', 'overview', 'runtime', 'genres',
       'production_companies', 'release_date', 'vote_count', 'vote_average',
       'release_year', 'budget_adj', 'revenue_adj'],
      dtype='object')
```

- 处理空值
实话说，在这个环节我并没有处理空值，没有特别注意，后来在探索性数据分析的环节因为图像的比较奇怪才想起来。这里就没有重新写，给大家一个比较实在的分析过程（厚脸皮就是有这点好处）。**同时，也说明了数据清理和探索性数据分析（EDA）这两个环节是交织在一起的。有的时候你通过EDA才去想要要一些数据的特点，再去调整数据。不过，有时候把回答不同问题的数据存为不同版本会更加清晰。**

- 改变列
这个一般是要先有个问题，或者怀疑点的，比如我看到了homepage这一列缺失值超多的，就在洗澡的时候联想到（阿基米德裸奔称皇冠的故事了解一下？）是不是有自己网站的电影都更重要一点，是不是能在预算和收入中有所体现？所以我决定建立一个新列，用于区分这两种情况：

```python
# 2 调整列
# homepage 缺失很多，但突然想看看是不是有homepage的
# 有更加多的投入和收入（因为重视么）
# 显示最有一列是谁（碰巧了在最后就不用都输出了）
if 'homepage' in df.columns:
    df['has_homepage'] = df['homepage'].notnull()
    df.drop('homepage', axis = 1, inplace = True)
else:
    print('data already processed')
# 写了个小循环如果执行过就提示下不会报错
# 万一评审老师点了两次，报错了不是会很尴尬的
# 开玩笑了，提交项目是html文件，但是自己用起来方便
print(df.columns[-1:])
df.head()
```
```
data already processed
Index(['has_homepage'], dtype='object')
```

# /目标2/：探索性数据分析（TMDB数据）

根据项目模版结构，这部分就开始是问题导向的方法了，这里我举了两个问题（没有包括数据说明那个里面的区分电影分类的方法，那个解决需要多一点点的工作，大家也可以尝试），这里的两个例子是我写项目时候的思维过程的记录。请不要把这个直接copy到项目提交中**（非常重要，一定要理解后，自己完成呦！）**

## |研究问题1 - 几个数字值的关系如何

观察数据集，有几个列是数值的，我来看看他们之间有什么关系（这一个项目全靠眼睛，统计学的判断方法咱们会在最后一个项目里学他个 ~~昏天黑地~~ 兴高采烈！）

- 整理数据
```python
# 先把需要保留的列列出来
smlist = ['popularity','vote_average','budget_adj','revenue_adj']
# 制作一个新的数据用于scater matirx显示（否则太慢了，也看不太清）
dfsm = pd.DataFrame()
for i in smlist:
    dfsm[i] = df[i]
dfsm.head()
```
```
popularity	vote_average	budget_adj	revenue_adj
0	32.985763	6.5	1.379999e+08	1.392446e+09
1	28.419936	7.1	1.379999e+08	3.481613e+08
2	13.112507	6.3	1.012000e+08	2.716190e+08
3	11.173104	7.5	1.839999e+08	1.902723e+09
4	9.335014	7.3	1.747999e+08	1.385749e+09
```

- 画图观察（还记得那个scatter_matrix，~~黑客帝国~~散点矩阵图超Cool！）
```python
# OK 我们接下来就可以画个scater matrix图来看看了
pd.plotting.scatter_matrix(dfsm, figsize=(20,20));
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15330783873904.jpg)
真是超难看（大家自己做的画全屏能看见字），这4个指标中除了vote_average其他的都分布的特别靠左，，，，为什么呢？我来hist直接看下分布情况：
```python
dfsm.hist(figsize=(10,10));
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15330785557895.jpg)
这回就明显了，分布超级偏左，我再看看describe检查下，果然是很奇怪，钱除了vote其他列的mean都是那么的少！：

```python
dfsm.describe()
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15330787622390.jpg)

那么我再看详细点，看看每10%的数据都是多少（偷懒写了个循环，结果太多，就不一一展示了），结果发现budget和revenue居然在50%的时候都是0！
```
# 检查百分位的值
# 那么我们查查几个百分位的数值吧，使用linspace每隔5%显示一下！
# dfsm['popularity'].quantile(np.linspace(0,1,21))
# linspace 是0到1的n个点之间的分割，因为有开始结束所以要增加1个，比如21
# 可以看出来过了只有15%的数值超过了1，Max真是太大了
# 这个数值画图意义也不是特别明显

# 干脆我们写个函数把其他的quantile也看一下
# 把平均分为几个作为n值输入
def vquantile(data, n):
    for i in data:
        quantile = data[i].quantile(np.linspace(0,1,n+1))
        print('\n', 'Checking:', i , '\n', quantile)

vquantile(dfsm, 10)
```
```
Checking: budget_adj 
0.0    0.000000e+00
0.1    0.000000e+00
0.2    0.000000e+00
0.3    0.000000e+00
0.4    0.000000e+00
0.5    0.000000e+00
0.6    4.462259e+06
0.7    1.404050e+07
0.8    2.904090e+07
0.9    5.812285e+07
1.0    4.250000e+08
```

估计是有空值了吧，而且还不少，我来刷一波好了，因为是分析和公司收入相关的所以我就大胆删除了（这么多0预算，0收入的电影是什么意思...）

```python
# 根据上面的输出，发现budget有很多空的，特别不靠谱，我要干掉它们
print(len(dfsm[dfsm['budget_adj'] == 0]))
print(dfsm.shape)
# 干脆把budget和revenue的空值都干掉
dfsm5k = dfsm[(dfsm['revenue_adj'] != 0)&(dfsm['budget_adj'] != 0)]
dfsm5k.shape
```
```
5696
(10865, 4)
(3854, 4)
```
```python
# 干掉了60%的数据，实际处理时候要慎重，不过数值就好看多了
# ps：同时也要小心对数据好看的追求，不要太极端了多删了数据
print(vquantile(dfsm5k, 10))
```
```
Checking: budget_adj 
0.0    9.693980e-01
0.1    4.612144e+06
0.2    1.029637e+07
0.3    1.617956e+07
0.4    2.229130e+07
0.5    3.001611e+07
0.6    3.816024e+07
0.7    5.162149e+07
0.8    7.114803e+07
0.9    1.031006e+08
1.0    4.250000e+08
```
最后我们用修正过的数据来画图（从scater matrix中挑出来单独画）。在探索阶段，对于细节我们可以不太细究，在最后的得出结论阶段再进行报告级别的调整就好：
```python
# 发现1 vote 和 pop有关系的
dfsm5k.plot(x='vote_average',
            y='popularity', kind='scatter', alpha=0.3);
# 要不要美化一下，少年？
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15330848065917.jpg)

```python
# 发现2 budget 和 revenue有一些关系，但是没有那么明显
dfsm5k.plot(x='budget_adj',
            y='revenue_adj', kind='scatter', alpha=0.3);
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15330848913402.jpg)

## |研究问题2 - 是否有Website和Feature的关系

大家还记得之前在清理的时候，我加了1列has_homepage么，可以区分开是否有homepage的电影的参数之间有没有区别。可以使用groupby进行区分。这里需要注意的是：
- 用了两个代码框进行了区分：收集列和删除空值
- 这两个的前后顺序决定了代码运行的时间，也是在写代码时候要考虑的：
    - 先运行能排除最多的
    - 优先使用pandas和numpy等基于c的包完成
    - 使用time进行测速

```python
# 继续使用删除了budget和rev为0的（和钱都没关系的不分析了吧）
smlist2 = ['popularity','vote_average','budget_adj','revenue_adj', 'has_homepage']
# 制作一个新的数据用于scater matirx显示（否则太慢了，也看不太清）
dfsm2 = pd.DataFrame()
for i in smlist2:
    dfsm2[i] = df[i]
dfsm2.head()
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15330855044612.jpg)

```python
# 接下来一样干掉空值的项
# 根据上面的输出，发现budget有很多空的，特别不靠谱，我要干掉它们
print(len(dfsm2[dfsm2['budget_adj'] == 0]))
print(dfsm2.shape)

# 干脆把revenue的空值也干掉
dfsm25k = dfsm2[(dfsm2['revenue_adj'] != 0)&(dfsm2['budget_adj'] != 0)]
dfsm25k.shape
```
```
5696
(10865, 5)
(3854, 5)
```

数据有了，我们来看看，用groupby求均值，再画图看看：
```python
mean = dfsm25k.groupby('has_homepage').mean()
mean
# 可以看出来区别还是很大的
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15330861287764.jpg)

```python
# 我们来画图试试，结果相差太多，前两个基本看不到啊
dfsm25k.groupby('has_homepage').mean().iloc[0].plot(
    kind = 'bar', alpha = 0.7, color = 'b')
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15330861623947.jpg)

肿么办，我们把数据集都规整到一个数量级吧，就是按列除，结果就好多了：
```python
# 把数据都搞到一个数量级好了
mean_edited = mean.copy()
# 需要注意如果不用.copy()的话修改mean_edited 也会修改mean
mean_edited['budget_adj'] = mean['budget_adj'] / 10000000
mean_edited['revenue_adj'] = mean['revenue_adj'] / 10000000
mean_edited
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15330865212104.jpg)

我们可以看下两个分类之间的倍数关系，直接相除就可以了（向量运算，week2导学中有讲）：
```python
mean_edited.iloc[1] / mean_edited.iloc[0]
# 我们来看看变化有多少，pop和rev的增幅都超过了50%
```
把两张图堆叠起来看看，比较奇怪但是要比较的东西已经出来了：
```
# 堆叠起来看看，不是特别理想
mean_edited.iloc[0].plot(kind = 'bar', color = 'r', alpha = 0.3)
mean_edited.iloc[1].plot(kind = 'bar', color = 'b', alpha = 0.3)
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15330867360513.jpg)

还是老老实实做图吧，如果下面的代码看着有点难，请看下week7-guide-plus1的matplotlib彩蛋：

```python
# 那只好认真的画图了，开始想到了折线图，但是这4个指标没有延续的关系
# 折线图比较适合画x轴为时间的数据
sns.set(context = 'notebook', style = 'darkgrid')
# 使用sns设置底色要放在最前面
fig = plt.figure(figsize=(8,8))
# 如果使用是import的是matplotlib 而不是 matplotlib.pyplot
# 调用的时候会有区别
ax = fig.add_subplot(1,1,1)
ind = np.arange(len(mean_edited.iloc[0]))
# 要想微调位置要设置个变量ind
w = 0.3
# bar的宽度也是可以设定的
ax.bar(ind, mean_edited.iloc[0], color = 'r',
       alpha = 0.7, width = w, label = "Homepage No")
ax.bar(ind+w, mean_edited.iloc[1], color = 'b',
       alpha = 0.7, width = w, label = "Homepage Yes")
#ind是bar的位置，datared是输入的数据，多个width是bar的宽度
ax.legend(loc = 'best', fontsize = 12)
ax.set_xticks(ind+w/2)
# 设定x轴标签位置，在正中间
# 根据你要堆叠的数据设定
mean_lable = ['Popularity','Vote Average',
              'Budget/10^7', 'Revenue/10^7']
# 把标签设定为比较友好的方式
# 也可以导出index处理，比写死了好，有没有兴趣优化一下？
ax.set_xticklabels(mean_lable)
# 将分类标签作为x标签

ax.set_ylabel('Values', fontsize = 16)
ax.set_xlabel('Features', fontsize = 16)
fig.suptitle('Compare Features on Homepage or Not',
             fontsize = 24, color = 'red');
# 记住在最后的语句后面加个；就不会显示图之外的信息，比较友好
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15330869084198.jpg)

# /目标3/：得出结论（TMDB数据）

这个部分大家可以理解为你家老板要copy到ppt里面去忽悠人的部分，有可能他前面都不看，就是要copy这里面的东西走，所以要有逻辑有颜值：

## |数据集说明

本次分析的数据为TMDB的电影评分数据，内容比较丰富：
- 数据量大：数据有10866行
- 数据维度大：数据有21列，包括涉及评价、分类、预算、宣传语等一些列内容
- 数据质量不错：考虑到数据中有大量0预算和0收入的电影外，重复值只有1个，除了homepage、tagline和keywords这些可能后期才有或者记录的数据外，只有production_companies的缺失百分比超过了1%（其实大部分都一点也不缺）
- 数据收集全：其实上面的0预算的电影也收入了说明收集范围还是挺全的，分析时候可以根据需要进行处理

## |研究问题1 - 几个数字值的关系如何

### 问题观察和结论
对于几个数值组成的Feature，我们可以来画散点图进行观察每每两个参数的关系，经过分析以下两个值的一注意：
- 影片得分和流行度正相关：平均投票得分越高，流行度就可能越高
- 影片的投入和收入之间有相关关系，但是没有那么明显

### 问题的图形展示
```python
# 最后的图：
# # 先是设定图纸和图画位置
fig = plt.figure(figsize=(8,8))
ax1 = fig.add_subplot(2, 1, 1)
ax2 = fig.add_subplot(2, 1, 2)

# # 把数据加载到图中
x1 = dfsm5k['vote_average']
y1 = dfsm5k['popularity']
x2 = dfsm5k['budget_adj']
y2 = dfsm5k['revenue_adj']

ax1.scatter(x1, y1, color = 'b', alpha = 0.2, label = "All")
ax2.scatter(x2, y2, color = 'b', alpha = 0.2, label = "All")

# # label、title等的细化
ax1.set_ylabel('Vote Average', fontsize = 16)
ax1.set_xlabel('Popularity', fontsize = 16)
ax2.set_ylabel('Budget', fontsize = 16)
ax2.set_xlabel('Revenue', fontsize = 16)

fig.suptitle('Scater on Vote/Pop and Budg/Rev',
             fontsize = 24, color = 'red');

# # 其实散点图是可以把分组加进去的（比如homepage有没有）找到一个：
# # https://pythonspot.com/en/tag/scatter-plot/
# # 大家有需要的可以试试
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15330917100697.jpg)


### 思考和建议
从几个数据来看，TMDB电影的数据与爆款营销理论非常契合，而从那删除掉的60% 0预算和0收入的情况看，长尾理论并不特别契合（这两种并没有冲突）。建议继续更新数据，并且可以增加对电影tagline等比较主观和情感的内容增加分析并加深判断。

## |研究问题2 - 是否有Website和Feature的关系

上面举了例子，这里就不啰嗦了，图的话在探索部分的最后一张图我也是很满意的了（其实那张图应该放在这个环节做）。

# 最后的话

本导学内容是以P3中的TMDB数据为例进行的分析，请大家注意以下几点：
- 本文件还原了我在做项目时候的思考和解答过程，这个过程并不是最优的
- 主要是抛砖引玉将一个项目比较完整的过程展现出来，供大家参考下
- **按照项目中的建议，你可以先写一个代码多，尝试多‘比较乱’的版本，之后再提交时候再提交另一个版本。**
- 不过如果你比较懒，如果能够满足‘项目评审标准’又能注意逻辑和描述，一个文件也是OK的
- 除了SQL的那个数据，我们有4个数据可以选的，兴趣是最好的出发点
- 加油加油，争取1周时间能够提交，之后再按照评审老师的反馈修改就更有针对性了。**记住：时间节点比质量更加重要！**（因为还有机会改的，不限次数）





