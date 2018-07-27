# Week7 项目3 Part2/4 Plus1
## 介绍Matplotlib这个能画图的家伙

[TOC]

# 学习地图

![-c](http://pb6cho8f0.bkt.clouddn.com/GMTm7iL1RMivZIBZuPruIg_thumb_13f.jpg)

本周是数据分析课项目3的Part2和了解matplotlib做图扩展，P3和P4都会用得到，大家加油！

## 本周目标

**不要怂，就是肝！大家High起来！** 本周目标对应的是（根据内容可能会有拆分）：（week07-guide文件）
> /目标1/：数据分析过程燃料经济型案例
> /目标2/：了解python画图的扩展（本文件）

# /目标2/：了解python画图的扩展

Python有很多可视化工具，matplotlib是一个用于创建出版质量图表的桌面绘图包，比较老，也比较通用，无论你用什么做图，都几乎脱不开干系。其他的seaborn、ggplot也都各有特点，或者是d3更是可以建立交互可视化。建议Python可视化先学好matplotlib，再根据需要扩展。

## | Matplotlib是啥东东

Mat可以画出很复杂的图形，比如这个金融曲线图（本文多图和例子来自《利用Python进行数据分析》）：
![c](http://pb6cho8f0.bkt.clouddn.com/15325990283961.jpg)

我们常用的pandas中集成了一些matplotlib（好长，简称plot）的函数，但是如果要使用高级功能的画就要学matplotlib了。一般matplotlib的pyplot中包含了大多数API函数，比如每次都用的plot，引入的方式是：

```python
import matplotlib.pyplot as plt
import numpy.random
%matplotlib inline
# 在jupytor中要有%这行才能在文档中画出图来
```

## | 画图的组织方式

要想在用plt画图，你要先准备一张画纸，这张纸就是figure，之后再在这张纸上画上你要的图们，这些图就是subplot。在逻辑上一张纸上可以画出啊很多图来，全看你怎么定义，比如：

```python
fig = plt.figure()
# 先定义一张画纸

ax1 = fig.add_subplot(2,2,1)
# 建立一个sub1图像
# 把fig切分成2*2的分割（就是一个田字）
# 把sub1画在第1个分割里（就是左上角的那个）
plt.plot(randn(50), 'k--')
# 我们画个50个数的随机值
# plt.plot()实际上会通过plt.gca()获得当前的Axes对象ax，然后再调用ax.plot()方法实现真正的绘图。

ax2 = fig.add_subplot(2,2,2)
# 定义了画纸上的第2个图
# 注意如果画纸上没有画图的话，相应的位置是空的

ax3 = fig.add_subplot(2,2,3)
# 定义了画纸上的第3个图
plt.plot(np.random.randn(50).cumsum(), 'k--')
# 我们画个50个数的随机值的累积值
# k--是告诉matplotlib绘制黑色虚线图

ax2.scatter(np.arange(30), np.arange(30) + 3 * randn(30))
# 注意这个sub2的图形是在上面这行加上的指定加入的
# 如果注释掉了的话，sub2的图是空的
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15327083190091.jpg)

## | 画图的细节

matplotlib是可以制作出出班级的图的，有很多参数可以调整图像，比如线的样式和颜色：

```python
# 那么接下来就可以指定细节了
# 我们以单一sub为例子
# 注意如果上来就plt.plot()的话，会默认建好一个fig和对应的sub
plt.plot(randn(30).cumsum(), 'ko--')
# 和上面例子一样这是原始30个随机数的累积值
# 线型是黑色（k）端点是黑色圆（o）线为虚线（--）
plt.plot(randn(30).cumsum(), 'rx-')
# 如果再加入内容还是会显示在同一个画图上
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15327085305806.jpg)

也可以限制x和y的显示范围，再上面的代码中增加：

```python
plt.xlim([0,20])
plt.ylim([-4,4])
# 通过xlim和ylim限制x轴和y轴的范围
# 还有一个sharex和sharey参数，调节xlim将会影响所有subplot
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15327086783146.jpg)

最后，一个fig中的ax的边距也是可以设定的：
```python
fig = plt.figure()
sub1 = fig.add_subplot(2,2,1)
plt.plot(randn(50), 'k--')
sub2 = fig.add_subplot(2,2,2)
sub3 = fig.add_subplot(2,2,3)
plt.plot(np.random.randn(50).cumsum(), 'k--')
sub2.scatter(np.arange(30), np.arange(30) + 3 * randn(30))

plt.subplots_adjust(left=1, bottom=None, right=2,top=None,
                    wspace=1,hspace=1)
# plt.subplots_adjust可以定义fig中sub的间隔
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15327089036448.jpg)



## | 做图标准代码模版

matplotlib做图其实非常强大，但也略显复杂，其实熟悉以后就还好了。如果你只想研究一个python可视化，那就用mat因为你绕不开，而且在会了以后，也不是特别的复杂，可以在以后有专项的时候再扩展别的（ps：如果用matpltlib的话也可以import seaborn，即使只用mat，也会把一些图的细节变好看一点）

```python
# 比较标准的写法（主观）
# 1-先定义画纸fig
fig=plt.figure(figsize=(8,4))
# # 加了个figsize比较好看
# 2-定义子图名和位置sub1
ax = fig.add_subplot(1, 2, 1)
ax2 = fig.add_subplot(1, 2, 2)
# 3-画子图名，我习惯带上ax而不是默认plt
ax.plot(randn(30).cumsum(), 'ko--', label = 'one')
ax.plot(randn(30).cumsum(), 'rx-', label = 'two')
# # 要加label = 才能在后面调用legend图例
# 4-设定xylim,注意这里要用plt所以位置要在你需要的sub下面，此处略过
# plt.xlim([0,25])
# 5-设定x轴的显示位置和标签
ax.set_xticks(np.linspace(0,30,8))
# # 先设定xticks是显示几个点，和显示的范围
# # 这里是0到30（因为数据就是30个点），平均点8个点
# # np.linspace就是干这个的，感兴趣可以搜索，也可以直接给个列表
ax.set_xticklabels(('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'),
                            rotation = 30, fontsize = 'large');
# # 再接下来就可以设定在这些点上要显示的字和样式了
font = {'family' : 'serif',
        'color'  : 'darkred',
        'weight' : 'normal',
        'size'   : 16,
        }
ax.set_xlabel('Eight Stage of Testing', fontdict = font)
# # 最后是设定轴的名字，可以用fontdict传入一个字典
# 6-设定画图title
ax.set_title('Testing Canvas')
fig.suptitle('Test Canvas Title', fontsize=20)
# # ax用set_title
# # fig用suptitle
# 因为咱们的图只有一个ax所以两个title就重合了
# 7-设定legend
ax.legend(loc = 'best')
# # best是自己选择最不碍事的位置
# 8-将图标保存为文件
plt.savefig('testmat.png')
# # 注意svg是一种无损矢量图，拖入到浏览器能打开，一般png就好了
# # savefig还有dpi和其他参数
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15327091945023.jpg)

## | 使用Pandas做图

Pandas的做图实际上是集成了matplotlib完成的，用法差不多看看就会了，好处是不用加载mat库，而且可以结合padas的一些数据功能，坏处么就是一些谢姐需要使用mat的功能定义，我们看段例子（选学，还是那句话，如果学一个就学mat）：

```python
# 使用pandas的plot语法大同小异，其实pd也是给matplotlib处理的
fig, axes = plt.subplots(2,1)
# 设定fig和axes
data = pd.Series(np.random.rand(16), index = list('abcdefghijklmnop'))
# 生成16个随机数并指定index
data.plot(kind = 'bar', ax = axes[0], color = 'k', alpha = 0.7)
data.plot(kind = 'barh', ax = axes[1], color = 'r', alpha =0.7)
# 在ax = axes中指定输出图的位置
# 如果结合stacked和df的value_count可以画出挺好看的堆积图
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15327094779449.jpg)


## | 后续学习

Python的可视化内容也是不少的，作为刚开始接触请记住以下几点：
- 从matplotlib开始学，先达到能够完成项目的程度！
- 先把matplotlib学熟了，别因为觉得别的可视化简单就换，绕不过mat
- 使用时可以一同倒入seaborn库，即使不用
- matplotlib figure ax title limit 这些词能帮你搜索出需要的信息。再次推荐google（科学webing）和bing（可以显示国际搜索结果）会帮到你很多
- 遇到了pandas制图的话搜索词变换一下，并且无论是mat 还是 pandas 再加上需要的图形 hist bar 等等过就能得到很多信息
- matplotlib的核心是一套由对象构成的绘图API。由John D. Hunter发起的（John D. Hunter由于癌症于2015年过世），完全免费！感谢John！- 首先了解mat的结构和语法，剩下的世界尽情去探索吧，少年！

## | 资料

- 首先是官网，里面有很多examples，可以看看代码：https://matplotlib.org/ 
- 翻到一个很详细的mat说明：https://liam0205.me/2014/09/11/matplotlib-tutorial-zh-cn/
- 上面的英文原版：http://www.labri.fr/perso/nrougier/teaching/matplotlib/
- 数据科学Python入门的老鼠书：https://github.com/mengfanchun2017/DAND-Basic/blob/master/Project3/python_for_data_analysis.pdf
    - Uda课程中提供的英文版，我搬运了一下（aws s3经常被墙的）
    - 绘图的再第8章，其他的也很好
    - 中文版有电子版（多看阅读有），但纸质书貌似第二版

![-c](http://pb6cho8f0.bkt.clouddn.com/15327111650088.jpg)




