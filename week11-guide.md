# Week11 项目4 Part2/3
## 统计学

[TOC]

# 学习地图

![-c](http://pb6cho8f0.bkt.clouddn.com/15342616091047.jpg)

本周是统计学项目的Part2，是项目4的推论统计学的扩展部分。目标1、2、3讲解置信区间、假设检验、和一个A/B测试案例。目标4作为Plus发布，讲解了回归的相关知识。

**！注意，1星和2星的可以只看本导学，先大致理解就可以。3星的是本周重点！**

## 本周知识点

- 数值数据vs分类数据
- Center 集中趋势测量
- Spread 离散程度测量
- 表达式是什么
- 5数概括法
- 直方图的形状
- 描述统计与推论统计
- 概率
- 二项式
- 条件概率
    
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

# /目标1、2/ 置信区间和假设检验

> 课程11:置信区间
> 课程12:假设检验

这课程有2个重点，第一个是明白什么是置信区间(Confidence Intervals)。第二个重点是进行假设检验。

## / 置信区间

> 课程11:置信区间

### ***// 什么是置信区间

> 

置信区间这是个什么鬼？大家还记得之前项目中有计算出两个变量的关系么，那么在什么情况下我们能确定两个变量是有关系的，什么情况下是没关系的呢（~~当然是用眼睛了~~)。到了项目4这里，我们就可以用上统计学的工具来回答了。这个工具就是置信区间。简单的说，在区间内就说明有关系，不再就没关系。在操作时有两种方法，课程开始就提示了：Build confidence intervals using sampling distributions and bootstrapping.

统计学要解决的问题，其实是从样本的分布推算出总体参数的过程(How do we use sampling distributions to infer where a parameter is located?)。因为统计经常是得不到所有样本的反馈的（Uda的1000000名学生是不是喝咖啡，你真的都要每个人都问下么？），但是这种用样本推算总体的方式也是有限制的（对，概率就是就是这么严谨）。因为是从部分推送总体，所以我们的确定性是条件的：根据5000个调研数据，我们有95%的信心拍着胸脯说：优达的10万个学员有70%喝咖啡！直接上图：

![-c](http://pb6cho8f0.bkt.clouddn.com/15344072687213.jpg)

下面的4个：：：

代码：

To see how well our confidence intervals perform, having the population data will be helpful.

Confidence Interval Interpretation: We are 95% confident the mean height of all coffee drinkers is between 68.06 and 68.97 inches tall.

### ***// 置信区间（自展法代码）
> 4.Notebook + 练习：构建置信区间

我们的总体是2974个，假设我们做了200个调研，来看看怎么从样本的统计量（200个样本的比例）估算总体参数（2974个总体的比例，假装我们有上帝视角），首先是先抽样出200个，注意seed设置为42保证了每次抽取能复现（见上周导学的描述）：

```python
# 设定随机种子（以后可复现抽样）
np.random.seed(42)
# 读入文件
coffee_full = pd.read_csv('coffee_dataset.csv')
# 使用.sample抽取200个样本
# 在实际案例中，这个就应该是你等得到的数据了
coffee_red = coffee_full.sample(200)
```

那么我们看看总体和抽样的喝咖啡比例，差不多的：
```python
coffee_red['drinks_coffee'].mean()
>>> 
0.59499999999999997
 
coffee_full['drinks_coffee'].mean()
>>>
0.58977807666442505
```

光这样我们是算不出置信区间的，这200个样本我们可是要好好利用一下，bootstrap这个方法的牛x之处就体现出来了：虽然我们只有200个样本，但是我们可以用这200个样本模拟出来100000次抽取来。是这样实现的：我们先从200个样本中拿出1个来，记录好；再把它放回去（就是说还可能抽到）；再拿下一个，记录好再放回去。这样的话当我们抽取200次之后，得到的新的记录和这200个就不一样了，而且这个过程可以进行很多遍，每次的结果都不一样。代码是这样的：

```python
# 设定每次抽出的内容为bootstrap_sample
# .sample默认的是replace = Ture
# 就是每次抽取之后，再放回去，就是实现自展（bootstrap）
# 这样的话每次运行都会是不一样的集合
# .sample不受seed影响
bootstrap_sample = coffee_red.sample(200,replace = True)
# 检查下，每次都应该不一样
bootstrap_sample.head()
```

那么接下来，我们要做的就是这种自展抽样来他10000遍，看看这10000遍均值的统计规律：

```python
# 先建立个空列表存储结果
boot_mean = []
# 使用for in range 循环10000遍
for i in range(10000):
    # 生成sample，自展为True
    sample = coffee_red.sample(200, replace = True)
    # 生成mean_s 赋值为不喝咖啡学生的平均身高
    mean_s = sample[sample['drinks_coffee'] == False]['height'].mean()
    # 将这个值附加到列表中
    boot_mean.append(mean_s)
    
# 画个图看一看    
plt.hist(boot_mean);    
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15345506004876.jpg)

还记得上面那个95%置信区间的图么，对于这个输出我们将范围截断。左边舍弃2.5%，右边舍弃2.5%。这样剩下中间的95%就是：**我们根据200个样本推算出总体（5000个学生）中不喝咖啡同学的平均身高的95%置信区间。这个95%称为置信度。**

```python
# 使用np.percentail计算两边截断点值，中间区间就是95%的截断区间
np.percentile(boot_mean, 2.5), np.percentile(boot_mean, 97.5)

>>> (65.992913281575198, 67.584027382815719)
```

现在我们可以开上帝视角了，把总体的算出来，真的是在这个区间中！帅！：

```python
# 直接使用coffee full计算总体的参数
coffee_full[coffee_full['drinks_coffee'] == False]['height'].mean()

>>> 66.443407762147004
```

### **// 均数差

> 6.Notebook+练习：均数差

上面的置信区间我们是用不喝咖啡同学的身高距离，介绍了什么事置信区间，那么问题来了，我开始好奇喝咖啡和不喝咖啡的同学身高有没有差别呢？通过比较不喝咖啡平均身高、喝咖啡平均身高，我们就扩展到了两个参数比较了，这里使用问题和结论进行描述：

- Question: What is the difference in the mean height for coffee vs. non-coffee drinkers?
- Conclusion: Since a confidence interval for mean_coff - mean_nocoff is (0.59,2.37), we have 95% evidence of the mean height for coffee drinkers is larger than non-coffee drinkers. 
- 注意结论中的（0.59，2.37）是置信区间，95%是可信度，是支持结论的数据。代码是在上面的基础上扩展一点，将比较的数值换成了喝咖啡同学身高与不喝咖啡同学身高的差值：

```python
# 定义新的列表
means_f = []
for i in range(10000):
    sample = sample_data.sample(200, replace = True)
    mean_coffee = sample[sample['drinks_coffee'] == True]['height'].mean()
    mean_coffee_no = sample[sample['drinks_coffee'] == False]['height'].mean()
    # 将两类人的身高求差，存到列表中
    means_f.append(mean_coffee - mean_coffee_no)
# 画图看看
plt.hist(means_f);
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15345540554560.jpg)

！发现问题！居然这个图不是在0周围，肉眼观察差异平均值在1.0到1.5之间，为什么呢？可能是因为喝咖啡的同学营养比较好吧（毕竟得吃饱了饭才喝咖啡）？（开玩笑了），寻找原因这么主观的事，不是用统计学来玩的。

那么我们看下置信区间（注意数据和课程中有一点不同）：

```python
np.percentile(means_f, 2.5),np.percentile(means_f, 97.5)

>>> (0.39656867909086274, 2.2432588681124224)
```

那么这种描述均值差的置信区间是在什么地方使用呢？对！就是项目4中的A/B Tests，简单的讲就是把两种解决方案分为A测试组与B测试组，收集来数据看下两组有没有差异，来决定使用那种方案更好。课程中的解释：A/B 测试对全球企业是最重要的内容之一。通过这个技巧，你可以改变网页布局的一些内容，了解它如何影响用户。理想情况下，你需要提供一个页面，可以实现更多点击量、更高收益和/或更高的用户满意度。

![-c](http://pb6cho8f0.bkt.clouddn.com/15345563255704.jpg)

### *// 统计显著性与实际显著性

要注意，我们前面的所有结论是统计显著性的，和实际显著性是有区别的，先来看下定义：

- Statistical Significance: Evidence from hypothesis tests and confidence intervals that H1 is True. 使用置信区间和假设检验，你能够在做决策时提供 统计显著性。这里的H1将在假设检验中解释。
- Practical Significance: Considers real world aspects, not just numbers in making final conclusions. 实际显著性 考虑到所处情况的其他因素，假设检验或置信空间的结果可能不会直接考虑到这种情况。空间、时间 或 金钱 等约束条件对商业决定很重要。但是可能不会在统计测试中直接考虑这些因素。

简单的说就是，虽然统计知道那个更好，但是这种方案可能更贵，在做商业决策时要整体考虑（钱、资源等限制因素并不在统计中体现），看课程中这个例子：

![-c](http://pb6cho8f0.bkt.clouddn.com/15345573776218.jpg)

虽然右边的更好但是制作起来更贵更费时，所以呢如果是我的朋友刚刚开始这个业务，我会建议他做左边的（因为也挺有效的）。

需要注意，自展法在样本很小的时候能够很好的估计总体的参数；当样本很多的时候，使用传统的方法一样能够得到有效的估计，但是传统的公式更加复杂。在本课程中使用自展法进行计算。如果有兴趣想要研究传统假设检验的方法，可以参考这个链接：https://stattrek.com/hypothesis-test/hypothesis-testing.aspx

### *// 置信区间（传统代码）

传统的检验方法有很多：
- T-Test 比较总体均值
- Twe Sample T-Test 用于比较两个均值
- Paired T-Test 用于将个体与自己比较的T检验
- Z-Test
- Chi-Squared Test
- F-Test

这些都可以被自展法替代（神器！），而且自展法需要的样本更小，这部分的视频有个对比，大家看下就好了，本课程不需研究传统的检验方式。ps：这部分的ipynb文件我已经完成了，需要研究的找我要，就不放在这里瞎胡人了。

### *// 置信区间宽度和误差范围

先上个图看下误差范围（Margin of Error）指的是什么？（其实就是你买小零食上那个100g +/- 2g的标识：

![-c](http://pb6cho8f0.bkt.clouddn.com/15345874743036.jpg)

在上图中，我们得出的区间高值减去区间低值就是置信区间的宽度。比如Candidate A 是针对美国总统小特做的民意调查，我们可以这样描述：根据收集来的数据，我们确认，他的支持率在31%到37%的可能性有95%。置信区间宽度为6%。什么？区间太大，，，老板再给批点钱，增加收集的数据可以减少这个差距。注意MOE也是有计算公式的，这里不做介绍。

需要注意：置信区间采用综合方法，基于数据得出结论，因为这些测试旨在理解总体的参数 (即总体数值的集合)。

## / 假设检验

> 课程12：假设检验

### **// 什么是假设检验

> 2.假设检验

重点2是假设检验，那么我们怎么科学的，不产生歧义的把两个参数是否有关系说清楚呢，全面、准确、又高big呢？当然有了，就是假设检验！（看名字就肃然起敬了有没有）。其实假设检验和置信区间是相关的（看看上面那个小特的例子）：就是让我们能够通过样本推算出总体的情况：

**Hypothesis Testing** and **Confidence Intervals** allow us to use only sample data to draw conclusions about an **entire population.**

比如像这个例子，我认为巧克力冰激凌是最受欢迎的口味（H0），而我的朋友认为香草冰激凌是最受欢迎的口味（H1），就可以这样描述：

![-c](http://pb6cho8f0.bkt.clouddn.com/15345885391144.jpg)

但是并不是所有的假设检验都这么简单，这也就看出假设检验的厉害之处了，可以就复杂的情况做描述，比如一款新药是能让病人更舒服、活得更长、还是减少肿瘤的大小：

![-c](http://pb6cho8f0.bkt.clouddn.com/15345886367944.jpg)

**假设检验的目的就是帮助企作出更好、更明确的决策。**

### ***// 怎样设置假设检验

> 3.怎样设置假设检验-第一部分
> 4.怎样设置假设检验-第二部分

- 首先是把1个问题转换成对立的假设
- H0是零假设（null）
    - 是在我们收集任何数据之前认为为真的条件（比如认为两组相等，或者效应为零）
    - 数学上表达常是 =、<=、>=
- H1是对立假设（alternative）
    - 应该是H0对立的，不重叠的假设（通常与你想要证明为真的事实相关）
    - 数学上表达常是 !=、<、>

### **// 检验的错误类型

> 6.错误类型-第一部分
> -
> 11.练习：错误类型第三部分
    
课程中居了陪审团的例子，在下图中蓝色的两个部分是事实与审判不符合的区域，对应的和我们假设检验中犯错的两种类型：一类错误和二类错误。Type I Errors，Type II Errors

![-c](http://pb6cho8f0.bkt.clouddn.com/15346649136555.jpg)

- I 类错误（误报）：
    - 由 $ \alpha $ 符号表示。
    - 定义是：$ (H_0) $ 为真时，认为备择假设 (H_1H) 为真。
    - I 类错误通常称为 误报。
    - 应该设置零假设和备择假设，I 类错误是更严重的错误。

- II 类错误（漏报）：
    - 由 \betaβ 符号表示。
    - 定义是：$ (H_1) $ 为真时，认为零假设 $ (H_0) $ 为真。
    - II 类错误通常称为 漏报。

我们继续看上图中法院的例子，既然我们知道了I类错误是更严中的错误，那么我们该怎么设置$ (H_1) $与$ (H_0) $呢？
- 首先，我们认为让一个无辜的人被判有罪是更严重的错误：
    - I Type Errors: Claiming an innocent individual as guilty
    - Choosing $ (H_1) $ when $ (H_0) $ is true
    - False Positive （假阳性）
- 那么比较起来，让一个有罪的人被释放就是II类错误：
    - II Type Errors: Setting a guilty individual free
    - Choosing $ (H_0) $ when $ (H_1) $ is true
    - False Negative （假阴性）
- 所以说我们要把 $ (H_0) $ 设置为无罪，就是默认所有人都是无罪的。这样假阳性（无罪但被判有罪）就符合I类错误是最严重的错误。而相比之下假阴性（有罪但被判无罪）就是II类错误了。（人之初，性本善，这3字经解释的真到位）

这也就引出了另一个问题，类型I与类型II是否有关系，加入陪审团判定所有人都无罪，那么他们只会犯很多II类错误（因为不会判有罪，就不会有冤枉），而没有I类错误，反之亦然，对比如下2图：

![-c](http://pb6cho8f0.bkt.clouddn.com/15347265686061.jpg)

![-c](http://pb6cho8f0.bkt.clouddn.com/15347266038551.jpg)

两种方式都不理想（荒谬），所以在处理这两种错误的时候的方式应该为：**为愿意犯的I类错误设置一个阀值，再满足这个阀值的同时尽量减少II类错误。**这个比例取决于具体的情况，比如在商业中和医疗的例子（医疗还是严格点好）：

![-c](http://pb6cho8f0.bkt.clouddn.com/15347269180393.jpg)

接下来，我们看个特别严格，但是有实际意义的例子：检查跳伞。如果出现了I类错误，就是人带着坏伞跳下去了，，，，，（我以后还是不尝试这个运动的比较好）：

![-c](http://pb6cho8f0.bkt.clouddn.com/15347275686765.jpg)

### *// 如何选择假设检验

在扩展假设检验的内容之前，请记住：Hypothesis tests and confidence intervals tell us about parameters, not statistics. 就是说，我们检验来检验去，是对参数（对应总体）进行判断，而不是对统计量（对应样本）进行判断。因为一个样本抽取出来，统计量就是定的了，我们想发现的是总体的规律。这也就是推论统计的重点了。

那么我们接下来还看下咖啡的例子，课程中的练习可以在空间中通过open看到答案。这里举了两个例子：

- 如果你感兴趣的是喝咖啡的人与不喝咖啡的人身高是否相同（觉得会不同），那么检验是这样的：
    - $ H_0:\mu_{coff}−μ_{no}=0 $
    - $ H_1:\mu_{coff}−μ_{no}\neq0 $
- 如果你觉得喝咖啡的人要比不喝咖啡的人矮，那么检验是这样的（注意有个方向问题）：
    - $ H_0:\mu_{coff}−μ_{no}\geq0 $
    - $ H_1:\mu_{coff}−μ_{no}<0 $

本部分的代码还引入了一个np.random.normal的用法：

```python
np.random.normal(0, np.std(diffs), 10000)
# 这个方法是对后面的数据进行复合正态分布的抽取
# np.std(diffs)是数据
# 10000是抽取次数
# 0是中间值
# 这个代码的结果就也是正态分布的，课程中有图
# 看明白用法即可
```

### *// p值是什么（第二种检验方式）

前面我们讲的置信区间的判断方法是第一种验证方式，这里我们讲解另一种检验方式：p-value。p值的定义是：如果零假设为真，观察到统计量 (或支持备择假设的更多极端) 的概率。根据假设的不同，p对应的位置如下图区分：

![-c](http://pb6cho8f0.bkt.clouddn.com/15348886338452.jpg)

这里理解概念就好了，后面案例中随着代码实现（比较简单的）操作一遍就记住了。p值的好处是直接计算出一个值，可以比较准确的描述。

### *//置信区间vs假设检验

> 25.其他要考虑的事情：如何对比置信区间和假设检验？

在本课程中对于置信区间喝假设检验，还有一些更新的观点：
- 假设检验喝置信区间是可以互换的（本来置信区间就可以作为假设建议的方法）
- 假设检验经常引起误解（对比起来假设检验描述比较复杂），而且还有I类错误的问题
- 倾向于使用以下3个方法进行判断
    - 置信区间（所以说是重点）
    - 效应值（以后扩展）
    - 机器学习技巧（以后扩展）

![-c](http://pb6cho8f0.bkt.clouddn.com/15348897867767.jpg)

# /目标3/ 案例研究：A/B测试

> 课程13:案例研究：A/B测试

## ***/ 什么是A/B测试

既然叫A/B测试，肯定是要对比两个不同的东西了。比如说公司要测试应用的新特性或者某个网页页面的新版本时，会把用户分为两组。不变化的组叫对照组，变化的组呢叫实验组：

![-c](http://pb6cho8f0.bkt.clouddn.com/15348907926404.jpg)

为了量化的进行考量，就要用到上面讲到的假设检验了，设置如下：
- 零假设： 新版本不比旧版本好，甚至比旧版本差
- 对立假设：新版本比旧版本好

![-c](http://pb6cho8f0.bkt.clouddn.com/15348908622821.jpg)

需要注意的一点是，A/B测试并不适合所有变化（比如上产品A更好还是产品B更好），而且在A/B测试中也可能引入偏见，比如课程中关于两类用户，一类偏向保持原状、另一类偏向变化求新的例子：

![-c](http://pb6cho8f0.bkt.clouddn.com/15348910269603.jpg)

## */ Udacity的案例

课程中居了Uda家自己的案例，对于最后能达到毕业环节的来说，有一句描述：少数人坚持到了最后。所以呢，为了提高学员参与度，提高每个阶段之间（见后一节漏斗模型）的转化率，Audacity 试着做出一些改动，并对改动进行了 A/B 测试。（开始鸡汤）同学们加油啊！我们的目标是按进度毕业！（成为/赢取白富美，走上人生巅峰！）

### **// Udacity的漏斗模型

漏斗模型用户流就是用户接触到了产品之后，用户在使用过程中的流转情况。以Uda为例：浏览主页 > 探索课程 > 浏览课程概述页面 > 注册课程 > 完成课程

![-c](http://pb6cho8f0.bkt.clouddn.com/15348914752489.jpg)

### **// 点击率CTR（代码）

> 8.练习：点击率

点击率 (CTR)通常是点击数与浏览数的比例。因为 Udacity 有用cookies，所以可以确认单独用户，确保不重复统计同一个用户的点击率。在考察新版本主页是否可以带来更多的点击时，我们使用CTR（click through rate）点击率进行衡量：CTR = 单独用户点击数 / # 单独用户浏览数。在指标确定之后，就可以写出假设了：

$ H_0:CTR_{new} - CTR_{old} \le 0 $
$ H_0:CTR_{new} - CTR_{old} > 0$

这部分的代码主要是筛选和一个datetime的计算，对于过了p3的你来说完全能够胜任。

### ***// 注册率（代码）

> 10.指标-注册率

注册率就是用户注册的比率，我们来串一下此处新出现的代码：
- 先是把数据集分开为控制组和实验组。分别计算出两组的ctr，之后求差的出obs_diff。
- 再就是用自展法抽样了10000遍，计算出这10000次的差异：

```python
# 设定空列表
diffs = []
# 循环1w遍
for i in range(10000):
    # 抽样每次抽样都是和df相同的数量（所以会比较慢）
    # 使用自展法
    b_samp = df.sample(df.shape[0],replace = True)
    # 区分control组与experiment组
    control_df = b_samp.query('group == "control"')
    experiement_df = b_samp.query('group == "experiment"')
    # 得出两个组的CTR
    control_ctr = control_df.query('action == "enroll"').id.nunique() / control_df.query('action == "view"').id.nunique()
    experiment_ctr = experiment_df.query('action == "enroll"').id.nunique() / experiment_df.query('action == "view"').id.nunique()
    # 计算CTR的差值追加到diffs中
    diffs.append(experiment_ctr - control_ctr)
    
# 之后将列表转为array格式（好用np的特性）
diffs = np.array(diffs)
# 画个图
plt.hist(diffs)
```

注意，这时候的图是体现实际情况的（有0.03左右的差异，实验组的转化率更高，注意看x轴的标签）：

![-c](http://pb6cho8f0.bkt.clouddn.com/15348943560825.jpg)

接下来，我们用实际数据的标准差std模拟下$ H_0 $假设的时候，两个实验的偏差应该是什么样的：

```python
# Simulate distribution under the null hypothesis
# 使用.random.normal模拟正态分布
# 0为正态分布的中点（因为H0假设是没区别，所以中点为0）
# 使用实际数据的diffs.std()进行模拟（std决定了正态分布的宽窄）
# 数量依旧和实际保持一致（diffs.size)
null_vals = np.random.normal(0,diffs.std(), diffs.size)

# 再画个图呗
plt.hist(null_vals)
plt.axvline(x = obs_diff, color = 'red')
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15348948896131.jpg)

如上图，看出区别了没啊？这次的中点在0，因为这是对 $ H_0 $ 假设的模拟。再往下，就可以把两个图做比较了，p值出场：

```python
# 直接比较 p值
# null_vals > obs_diff 是直接使用的向量计算
# 生成的是一个True False的 array
# 直接使用mean就会得出True的比率
# 因为True相当于1，False相当于0
(null_vals > obs_diff).mean()
```

### *// 其他单项指标（代码）

> 11.指标-平均浏览时长
> 12.指标-平均教室逗留时长
> 13.指标-完成率

这几部分都大同小异了，大家按照逻辑自己完成就好（有的内容在讲解的视频里已经又了代码，可以暂停参考）

### **// 分析多个指标

你评估的指标越多，你观察到显著差异的偶然性就越高。这就多重比较问题（https://en.wikipedia.org/wiki/Multiple_comparisons_problem）。我们可以使用Bonferroni（邦弗朗尼）校正来修复，就是把p值再除以比较的指标数，再进行判断（比如说这个案例中有4个参数进行了比较，我们就除以4）。那么0.05的显著值就会变味0.0125的显著值。所以这4个指标中，就变成只有平均浏览时长有统计显著性了。

在课程的最后答案中，其实对于这次的修正也表达了态度：虽然有待商榷，但考虑到结果没几个具有显著性的，而且指标之间具明显关联，所以我们可以认为的确太保守了。（正话反话都说了，所以说数据分析中的经验和直觉也很重要啊！）

### ***// 得出结论

那么我们怎么半，正常的检测4个指标有3个是显著性，但Bonferroni矫正以后关键指标就不显著了。其实这在正常中是经常发生的，好在我们还有其他不那么保守的方法进行修正：
- 封闭测试程序 https://en.wikipedia.org/wiki/Closed_testing_procedure
- Boole-Bonferroni联合校正 https://en.wikipedia.org/wiki/Boole%27s_inequality
- Holm-Bonferroni方案 https://en.wikipedia.org/wiki/Holm%E2%80%93Bonferroni_method

这中间的要点是不要为了显著性去凑p值（很容易的），而是为了真正的考察你的数据，否则就变成了作弊，看看这个就知道你是可以用数据干坏事的了：https://freakonometrics.hypotheses.org/19817

对于A/B测试的难点，课程的最后一节总结非常到位，建议完成：https://classroom.udacity.com/nanodegrees/nd002-cn-basic-vip/parts/4e7e2f82-e05e-4fbe-b29c-fe3169c6dd77/modules/0596b9e8-4a3a-41c3-a929-6c72c0c93925/lessons/f3088061-6562-445e-b1a7-a86c9389c2b5/concepts/f6eae35d-536b-48d0-b97e-93e4fe93459d#

# 彩蛋

## */ 希腊数字的读法

在刚开始学统计学的时候，最尴尬的就是看着一堆鬼画符他认识我，我不认识他。一张嘴就念错就糗大了，特意放上下面这张图，让大家想说就说，说的痛快：

![-c](http://pb6cho8f0.bkt.clouddn.com/AF9DF022-F962-4B1A-B8F7-483A675A2A67.png)

## */ 传统概率的t检验

虽然我们在项目中将会使用自展法（替代传统的统计方法了）进行计算，但为了能够对课程中的偶尔蹦出的传统方式更好的理解，做一点点扩展，感兴趣的看一遍就好了。

- 首先概括讲下z-Test和t-Test的区别：
    - 首先要知道，他俩都是用作**正态分布**的数据上的
    - 其实这两个是差不多的，都是平均值差异的检验方法
    - z-Test对应的是拥有总体数据（每一个数据）
    - t-Test对应的是拥有样本数据（而且还比较少，30个以下）
    - 所以说z-Test考察的是总体的参数；而t-Test考察的是样本的统计值
    - 当然在单样本，统计量很大的时候，可以与z-Test互换
    - 因为我们大都是收集到的样本，所以用的z-Test最多
    - 课程中的附加说明：http://www.differencebetween.net/miscellaneous/difference-between-z-test-and-t-test/
- 接下来我们说下t-Test的分类
    - 单样本T检验，就是检验你的样本的均值。比如说课程中的扩展例子：一个橄榄球教练，用他球队的数据（就是样本了）进行计算，检查他球队的均值（$ \bar{x} $)和总体球队的平均值（$ \mu $之前已经知的，官方数据）。既然是t检验，就会计算出一个t值来（t-value），之后根据t-table（就是根据你假设检验的参数：a置信区间、b数据个数、c双尾还是单尾的输入，将不同组合的结果写成的一张速查表）查询到t-critical值，将这两个作出对比。t-value > t-critical 就是显著的。但在这个例子里，t-value < t-critical，所以说数据表明这位教练的球队不比其他的球队更优秀。（https://www.cliffsnotes.com/study-guides/statistics/univariate-inferential-tests/one-sample-t-test）
    - 双样本t检验，就是说在整个的比较中，从样本中生成了两个可以区分的内容进行检验。细分的话，可以有更多的小点。
        - 首先是这个对比是不是equal的，那么什么是equal的呢？就是说你对比的两个样本中的每一个元素都是对应的。我们来举个例子，比如说我们考察班上50名同学的测试成绩。第一个样本是上复习课之前的测验成绩，从$x_1$到$x_50$一共有50个；在上过数学课之后我们再测试一下，得到的成绩是从$y_1$到$y_50$一共有也是50个。每个x和y的小标都是学号，所以说这两个样本只是成绩不同，而每个同学都参加了2个测试。这种情况就是equal的，特点可以看出来两个样本是相同的。
        - 再就有我们还可以发现上面的这个例子还是paired（配对的），因为每个学生都参与了2个测试（比equal还多个条件，一一对应）。对于paired t-test的详细说明：http://www.statstutor.ac.uk/resources/uploaded/paired-t-test.pdf
        - 我们来举个不是equal的测试例子：调查了很多人，根据吸烟和不吸烟分为两个样本，这里两个区分人数不同，所以就不是equal的了。详细的例子：https://onlinecourses.science.psu.edu/stat414/node/268/
        - 当然在计算机很发达的时候，是不是equal的并没有那么重要，使用工具（比如python）也就是一个参数的区别（几种的公式是有些区别的）。two-sample t-test的扩展：https://www.itl.nist.gov/div898/handbook/eda/section3/eda353.htm



    

​	  









