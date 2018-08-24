# Week11 项目4 Part2/3 Plus1
## 统计学项目

[TOC]

# 学习地图

![-c](http://pb6cho8f0.bkt.clouddn.com/15342616091047.jpg)

本周是统计学项目的Part2，是项目4的推论统计学的扩展部分。目标1、2、3讲解置信区间、假设检验、和一个A/B测试案例。目标4作为Plus发布，讲解了回归的相关知识。目标5为项目讲解（新增）。

**！注意，1星和2星的可以只看本导学，先大致理解就可以。3星的是本周重点！**
    
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

# /目标5/ 统计学项目

本部分将会指导项目的后两个部分，大家加油（第一部分在week10导学中有讲解）。

## / 机器学习的两种分类

机器学习就是machine learning，可以分为两类，如下图（请配合后面解释看，图来自Uda课程）：

![-c](https://ws1.sinaimg.cn/large/006tKfTcly1fstcsigknlj30jx0as0ui.jpg)

### **// 监督学习：Supervised Learning

- Input data is used to predict a value of label 
- 目的是根据现有模型预测新的数据，比如说购买行为，交易是否有欺诈
- 线性回归和逻辑回归都是监督学习的分支

### **// 非监督学习：Unsupervised Learning

- Clustering data based on common characteristics 
- 用于自动发现数据的规律，比如说对给定数据创建聚类
- 本学位不涉及，有兴趣请入坑机器学习纳米工程师学位

## ***/ 线性回归：Simple Liner Regression
 
线性回归就是对两个变量做比较。比如看体重和摄入热量之间的变化关系啊，或者看价格和销量的这种关系，听着挺高大上，其实我们日常生活中已经见过很多了。参见下面这个图我们说一下几个名词的意思，大家就好理解了：
 
![-c](https://ws4.sinaimg.cn/large/006tKfTcly1fstcyqyxi9j30gu0aa751.jpg)
 
- **反应变量 Response Variable（y）** 是你想预测的变量（也叫依赖变量Dependent）
- **解释变量 Explanatory Variable（x）** 是用于预测反应变量的变量（也叫自变量Independent）
- 其实把就事一个散点图，x轴是基准的变量，y值是要考量的变量，画个图就能看出两个变量的关系了（也能看出一些趋势），如下图根据这些点，我们可以做出一条线，这条线就叫**线性回归 Simple Liner Regression**

![-c](http://pb6cho8f0.bkt.clouddn.com/15349889837015.jpg)

### ***// 相关系数

那么既然我们能够画出了散点图，那么我们怎么用术语描写散点图的趋势呢。首先我们使用**强度 Strength**表示连个变量的关系是否足够明确，然后我们使用**方向 Direction**描述两个变量的相互关系，有图有真相：

![-c](http://pb6cho8f0.bkt.clouddn.com/15349901339867.jpg)

![-c](http://pb6cho8f0.bkt.clouddn.com/15349901589990.jpg)

那么我们怎么比较专业的衡量这两个趋势呢（靠眼神？！），这就有了下一个概念：**相关系数 Correlation Coefficient**：反应一段关系的强度和关系（好像走错片场到了心里咨询室）。The strength and direction of a linera relationship. 用小写r表示。
- 具体的解释：https://en.wikipedia.org/wiki/Pearson_correlation_coefficient
- 也有其他的可选：http://www.statisticssolutions.com/correlation-pearson-kendall-spearman/
- 斯皮尔曼相关性系数则不只衡量线性关系，可能更适用于关联两个变量的场合：https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient
 
### *// 回归线由什么决定

既然我们能够画出一条回归线，那么我们又怎么定义这条回归线呢？答案是**斜率-定义线的方向，截距-定义线与y轴的交点：**
- 截距的定义为： 当 x 变量为 0 时，反应变量的预测值。
- 斜率的定义为： x 变量每增加一个单位引起的反应变量的预测变化

![-c](http://pb6cho8f0.bkt.clouddn.com/15349919640153.jpg)

为了我们的课程能够高大上一点，我们还是要说下公式的：$ \hat{y}= b_0+b_1x_1 $ 

- $ \hat{y} $ 为回归线反应变量的预测值。
- $ b_0 $为截距。
- $ b_1 $为斜率。
- $ x_1 $为解释变量。
- y为数据集某个数据点的实际反应变量值 (不是回归线的预测值，就是对应一个给定x的y值)。

### **// 拟合回归线

**最小二乘法 Least Squares Algorithm：**计算每个点距离回归线的距离平方，找到所有值总和最小的那条线 Minimize the sum of the squared vertical distances from the line to points. 说白了就是找一条线，让所有点到线的距离的平方只和最小，公式：

$$
\begin{equation*}
\sum_{i=1}^n(y_i - \hat{y_i})^2
\end{equation*}
$$
​	
​在这里平方是因为要去掉负值，和对距离远的进行惩罚。当然我们还有其他方法，但最小二乘法在很多场景都很适用，就讲着一个先。具体的数学计算在后面小节中有，如果有兴趣可以在exce中一步一步计算下（当然是完成任务以后）：https://classroom.udacity.com/nanodegrees/nd002-cn-basic-vip/parts/4e7e2f82-e05e-4fbe-b29c-fe3169c6dd77/modules/0596b9e8-4a3a-41c3-a929-6c72c0c93925/lessons/d780a3b0-a08e-4282-858e-6a28e8d524aa/concepts/8282fff9-1876-4d21-9093-4af37ec40455#
课程中也有扩展内容：http://www.statisticshowto.com/probability-and-statistics/regression-analysis/find-a-linear-regression-equation/

### **// 拟合回归线（代码）

接下来我们就在python中搞定这个回归线，注意在输入参数的时候，截距不可少（见这个帖子：https://stats.stackexchange.com/questions/7948/when-is-it-ok-to-remove-the-intercept-in-a-linear-regression-model）。其实对于两个参数的预测，对于截距我们是不用太关心的，因为当对每个 x 变量进行假设检验，测试所涉及的两组为：总体斜率等于 0 vs. 参数不等于 0 的其它情况（对立假设）。因此，如果斜率不等于 0 (即对立假设为真)，那我们就能证明与那个系数有关的 x 变量与反应变量间有具统计显著性的线性关系，也就意味着 x 变量能帮我们预测反应变量 (或者，最起码意味着模型里有 x 变量比没有好)。

回归代码结果：
![-c](http://pb6cho8f0.bkt.clouddn.com/15349948510107.jpg)

![-c](http://pb6cho8f0.bkt.clouddn.com/15349949693542.jpg)

### *// 决定系数（相关系数的平方 $ r^2 $）

那么根据相关系数是不是我们就可以推断出两个变量互相影响的百分比了呢？其实专门有个系数是反应这个比率的，就是决定系数（别急，就是相关系数的平方），这个转换和实际的比较吻合（要知道相关和决定是不同的，所以取平方，让数值下降了）。当然也有人觉得这个决定系数不是好的标准：（https://data.library.virginia.edu/is-r-squared-useless/）。

**R-squared 决定系数：** The Amount of variability in the response (Y) Explained by your model. X可以解释Y变量的程度，如下图：

![-c](http://pb6cho8f0.bkt.clouddn.com/15349954536303.jpg)

课程中房价的结果（后面的空间中有代码，大家可以对应一下）：

![-c](http://pb6cho8f0.bkt.clouddn.com/15349956496641.jpg)

课程后面还有个钻石大小和重量之间关系分析的例子，代码解释一下：

```python
# 首先需要设置截距，1为默认，但是要加这一列（默认操作）
df['intercept'] = 1
# 接着建立分析模式，这里用到了sm是一个统计模块（见import那里）
# sm.OLS就是调用最小二乘法
# 第一个参数是因变量（y）
# 第二个参数是自变量（x），注意这个后面还有把刚建立的intercept加上
mode = sm.OLS(df['price'], df[['carats','intercept']])
# 之后用mode.fit做回归分析
res = mode.fit()
# 查看结果
res.summary()
```

后面还有个房价的分析，大同小异，但有一个说一下，在sklearn中是内置了一些数据集的（https://blog.csdn.net/kancy110/article/details/73716317）：

```python
# 引入sklean中的load_boston
from sklearn.datasets import load_boston
# 使用load_boston()载入数据
boston_data = load_boston()
```

## */ 多元线性回归

本节将会学习**多元线性回归 Multiple Linear Regression**，用于处理多个输入，以及这种方式的优缺点及结果解释。这节还有本电子书**《统计学习简介》**（http://www-bcf.usc.edu/~gareth/ISL/ISLR%20First%20Printing.pdf）。除了这本书，Uda推荐了一个可汗学院免费线性代数的课程作为扩展（为了同学们，优达君也是拼了）https://www.khanacademy.org/math/linear-algebra。

### **// 多元线性回归能解决什么问题

课程中的例子是如果你想买房，那么除了考虑面积，可能还要考虑区域（学区房了解一下？）、卧室数量、卫生间数量以及房子造型等等。在这种情况下，线性回归就不行了，就要使用多元线性回归进行分析了。多元线性回归实际就是把多个要考虑的参数转化成矩阵，使用线性代数的方式得出结论。对比下面要考量的参数和线性代数的对比就能明白（实际上代码是多输入几个参数，其他的一点变化都木有啊）：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350039439831.jpg)

![-c](http://pb6cho8f0.bkt.clouddn.com/15350039775647.jpg)

（这行选看）在结论的解释时，描述上有一点变化：在模型其它变量不变的情况下，解释变量每增加一个单位，反应变量会随之增加的预测幅度，这种有条件的解释叫做Slope Interpretation。那么我们再观察下结论，只有面积是统计显著的：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350052904252.jpg)

这个结论中有亮点要注意：一是做线性回归有统计显著性的指标在做多元线性回归时可能会消失（比如bathroom，也有可能是bathroom越多，房子的面积可能会越大）。还有就是多元线性回归时无法做定类分析的：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350053800301.jpg)

### **// 虚拟变量

那么为了对类别进行分析（比如说上面房子区域的分类），我们需要引入**虚拟变量 Dummy Variables**，将类别对应为一个矩阵（详细的方法在后面有，感兴趣请参考）：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350058418458.jpg)

结下来就是代码实现了：

```python
# 使用.get_dummies 增加列
df[['A','B','C']] = pd.get_dummies(df['neighborhood'])
df[['victorian','lodge','ranch']] = pd.get_dummies(df['style'])
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15350281773454.jpg)

再有就是检查截距（看标准状态下的价格）

```python
df['intercept'] = 1
# 这里3个参数只选择2个，余下的一个截距就是itercept的值
# 注意这里正负并没有关系
lm = sm.OLS(df['price'],df[['intercept','victorian','ranch']])
results = lm.fit()
results.summary()
```

对应的就是这3个值：
![-c](http://pb6cho8f0.bkt.clouddn.com/15350286151642.jpg)

这个部分就到此为止，其实后面还有标为[选学]的扩展内容，对这个分析的5个假设做了探讨，并且具有超多的额外资料，建议复盘时候再学习：https://classroom.udacity.com/nanodegrees/nd002-cn-basic-vip/parts/4e7e2f82-e05e-4fbe-b29c-fe3169c6dd77/modules/0596b9e8-4a3a-41c3-a929-6c72c0c93925/lessons/49462f74-b030-4bb6-bf67-8281c9181404/concepts/df69d406-341a-4dd1-827d-31a85e9d8ac1#

### // 多重线性（选学）

（选学）那么接下来，我们展开刚才提到的一个问题，我们要预测房价（y），我们有很多因素（x），我们希望x之间不要有关系（比如房价例子中的卫生间、卧室和面积之间其实是强相关的）。如果发生了这种情况，就是产生了多重共线性（VIF），就如同下图示例：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350327773440.jpg)

在实际操作的时候我们可以通过散点图的矩阵或者计算VIFs来考察x之间的关系：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350328554113.jpg)

当我们发现VIFs的时候，解决方法是去掉VIF>10的参数中比较不重要的那个，比如下面的Bedrooms和Bathrooms中干掉一个：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350329806718.jpg)

### **// 交叉验证和k折交叉验证

那么假设我们对房价的回归分析选好了相关的feature，也做出了预测，怎么知道我们的选择是合适的呢。干脆我们把能得到的数据分为2部分，90%用来训练我们的参数选择，另外留下10%用来测试我们得出的解。这种方式就叫做交叉验证：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350343397849.jpg)

但有时候我们的数据集来之不易，如果简单的这么分割，会有10%的数据不能用来训练，而沿着也只有10%。于是就有了一种k折叠交叉验证，折叠的意思就是把数据集分为n份，轮流的进行训练和测试，再把结果统一起来（这样就利用到所有的数据进行训练和测试了，有兴趣的选学看课程）。

## ***/ 逻辑回归

前面讲的线性回归是对数值的预测，那么最后的这一节，我们来讲讲对分类的预测（逻辑回归），比如说是否欺诈、是否点击等：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350346820126.jpg)

逻辑回归就是用来预测范围在 0 和 1 之间的概率的。（使用的是线性模型预测堆书几率，如后面的公式图，了解下就好了）:

![-c](http://pb6cho8f0.bkt.clouddn.com/15350646500439.jpg)
![-c](http://pb6cho8f0.bkt.clouddn.com/15350649084750.jpg)
![-c](http://pb6cho8f0.bkt.clouddn.com/15350649425791.jpg)

通过转换，我们就得出了p的表达式，就是Sigmoid函数。他的作用就是根据现行回归直线得到值，并将概率控制在0和1之间：
![-c](http://pb6cho8f0.bkt.clouddn.com/15350650114272.jpg)
![-c](http://pb6cho8f0.bkt.clouddn.com/15350648380097.jpg)

其实在代码中实现起来非常类似，就是换了一个拟合回归的方式：
![-c](http://pb6cho8f0.bkt.clouddn.com/15350664936726.jpg)

结果也是很熟悉的（截距的解释比较绕，大家可以先不看）：
![-c](http://pb6cho8f0.bkt.clouddn.com/15350665312112.jpg)

### *// 模型诊断

完成了上面的工作以后，我们就得出了自己的模型，那么怎么检查自己的模型是不是够厉害呢？我们需要进行**模型诊断 Model Diagnostics**：使用的是**准确率 Accuracy**这个指标，其实就是用标记出来的行（数据）除以总行数，但是这种情况当分类数据偏差太大（欺诈的很少，没欺诈的很多）的时候效果不太好：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350724845243.jpg)

结下来扩展一下几个在衡量时候的概念（选学）：
**混淆矩阵：**对于实际分类和算法分类结果的描述矩阵（就是之前癌症检验，真假阳性、真假阴性那种矩阵）：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350727305259.jpg)

这正的用下来之后，就可以发现模型跑出来的误差了：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350728892589.jpg)

之后就跳转到**主成分分析 PCA**的概念了，从这之后就不用看了，课程还特别卡位的提供了机器学习入门课程的链接（免费的不要说是我告诉你的）：https://cn.udacity.com/course/intro-to-machine-learning--ud120

### ***// 精确率和召回率

最后再八卦一个概念，精确率和召回率（我们继续用校长图像识别的这个例子）：
- **查全率（召回率）Recall**是指用你算法判断出来的结果，和真实的比是否都找出来了。（就是看跳出来的n个图片，和真实m个图片的比例关系）- **查准率（精确率）Precision：**是指用你算法判断出来的结果，是否为真。（就是看跳出来的n个图片，是不是都对的，没挑出来的不管）

![-c](http://pb6cho8f0.bkt.clouddn.com/15350735993605.jpg)

这里的代码实现大家看一下就行了，我们将会在项目讲解中解释。课程中扩展了3个内容（选学）：
- sklearn的逻辑回归：http://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html
- sklearn的混乱矩阵：http://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html
- 为什么我们要将数据划分为训练集和测试集：https://info.salford-systems.com/blog/bid/337783/Why-Data-Scientists-Split-Data-into-Train-and-Test

### *// 统计学到机器学习

最后的一部分，课程中讲解了统计学到机器学习的意义：
- **统计学 Statistics：**Determine relationships and understand the driving mechanisms. Are relationships due to chance? 
- **机器学习（监督）Machine Learning(Supervised):**Work to predict as well as possible. Often without regard to why it works well.
- 变化其实是我们减少了对输入的关注，增加了对输出的关注；更加注重预测结果的正确性，而不是输入的正确性。
- sklearn这个最流行的机器学习库的特点之一是模型诊断的最后内容是利用交叉验证。


























​


