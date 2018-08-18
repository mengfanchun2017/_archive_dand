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

# /目标1/ 课程11:置信区间（和假设检验）

这课程有2个重点，第一个是明白什么是置信区间(Confidence Intervals)。第二个重点是进行假设检验。

## / 置信区间

### ***// 什么是置信区间

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

### **// 什么是假设检验

重点2是假设检验，那么我们怎么科学的，不产生歧义的把两个参数是否有关系说清楚呢，全面、准确、又高big呢？当然有了，就是假设检验！（看名字就肃然起敬了有没有）。其实假设检验和置信区间是相关的（看看上面那个小特的例子）：就是让我们能够通过样本推算出总体的情况：

**Hypothesis Testing** and **Confidence Intervals** allow us to use only sample data to draw conclusions about an **entire population.**

比如像这个例子，我认为巧克力冰激凌是最受欢迎的口味（H0），而我的朋友认为香草冰激凌是最受欢迎的口味（H1），就可以这样描述：

![-c](http://pb6cho8f0.bkt.clouddn.com/15345885391144.jpg)

但是并不是所有的假设检验都这么简单，这也就看出假设检验的厉害之处了，可以就复杂的情况做描述，比如一款新药是能让病人更舒服、活得更长、还是减少肿瘤的大小：

![-c](http://pb6cho8f0.bkt.clouddn.com/15345886367944.jpg)

**假设检验的目的就是帮助企作出更好、更明确的决策。**

### ***// 怎样设置假设检验









