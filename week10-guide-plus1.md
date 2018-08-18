# Week10 项目4 Part1/4
## 统计学

[TOC]

# 学习地图

![-c](http://pb6cho8f0.bkt.clouddn.com/15342616091047.jpg)

本周是统计学项目的Part1，是项目3的基础内容。导学分为两个部分，目标1、2、3是对统计学的讲解（本文件）。目标4是项目的第一部分完成（不用担心，这一部分大都是项目3中做过的）。统计学是本项目的重点，请不要被一堆公式吓一跳，项目中用到的都是基础知识。ps：课程里的内容挺多的 

**！注意，*和2*的可以只看本导学，先大致理解就可以。3* 的和项目第一部分是本周重点！**

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
- 抽样分布
- 中心极限定理
- 大数法则
    
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

# /目标5/ 项目：分析A/B测试结果

## /1 准备

最后一个项目，我们试一个新的节奏，每周学习完成之后，直接把项目的相关内容写完。所以呢，和以前的项目相同，首先请大家决定是在workspace做项目还是本地做，如果本地做的话，我传送了项目的两个数据文件和jupyter notebook的打包文件，在导学的最后链接。

## / 2 完成项目的 I-概率 部分的撰写

根据模版，这个部分完全是项目3中的清理内容为主，大家High起来一鼓作气搞定它！一定要开工哦（助教大大坏笑脸），有几点提醒：

- 这部分对于pandas数据的筛选使用比较凶残、计算数量时可以使用.shape[0], 也可以使用count， 也可以用len
- 独立用户使用.nunique()

### // 1小问，基本信息
代码如下，前面是小节号：

```python
# b. 使用下面的单元格来查找数据集中的行数。
print(len(df))
#使用len可以看出共多少行
print(df.count())
#使用count可以看到每列多少（可以观察到空数据）
#可以加参数见
#https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.count.html
df.shape[0]

# c. 数据集中独立用户的数量。
df.nunique()
```

到了下一问，用户转化比例就可以用转化了的用户处以总用户，用筛选加count检查不一样的次数，用isnull().sum()检查是否有缺失值：

```python
# d. 用户转化的比例
df['converted'].sum() / df['user_id'].nunique()

# e.  new_page 与 treatment 不一致的次数
df[(df['landing_page']=='new_page')&(df['converted']==1)].shape[0]

# f. 是否有任何行存在缺失值
df.isnull().sum()
```

### // 2小问，处理异常值

这里的重点是使用好过滤，并且能求比率：

```python
# a. 现在，使用测试题的答案创建一个符合测试规格要求的新数据集。将新 dataframe 存储在 df2 中。
# 先看下有多少这样的值
# 检查1看左边是newpage右边不是treatment的
dismatch1 = df[(df['landing_page']=='new_page')&(df['group']!='treatment')]
dismatch1.shape[0]

>>> 1928

# 检查2看左边不是newpage但是右边是treatment的
dismatch2 = df[(df['landing_page']!='new_page')&(df['group']=='treatment')]
dismatch2.shape[0]

>>> 1965

# 计算下比率
dismatchr = (dismatch1.shape[0] + dismatch2.shape[0]) / df.shape[0]
dismatchr

>>> 0.013220002852505111

# 发现只有1.3%的数据是这样的，但是回头想一想，应该看dismatch的是和match的比较
# 注意复杂过滤的写法，把每个条件放到（）中
match = df[(df['landing_page']=='new_page')&(df['group']=='treatment')].shape[0]
dismatchr2 = (dismatch1.shape[0] + dismatch2.shape[0]) / match
dismatchr2

>>> 0.026790814184748574

# 2.6%（上面计算出不一致的数据），不算太多，丢弃吧
# 建立df2，把符合要求的数据行过滤出来
df2 = df[((df['landing_page']=='new_page')&(df['group']=='treatment'))|((df['landing_page']=='old_page')&(df['group']=='control'))]
# 右侧df[()]中括号里面是过滤条件，可以符合
# 比如()&()代表与，&替换成|代表或
# 可以嵌套，如上面代码是两边先与，结果再求或
df2.shape[0]

>>> 290585

# 检查下是否数量相同
df2.shape[0] + dismatch1.shape[0] + dismatch2.shape[0] == df.shape[0]

>>> True

# 这样检查也可以
df2[((df2['group'] == 'treatment') == (df2['landing_page'] == 'new_page')) == False].shape[0]

>>> 0
```

### // 问题3，删除重复值

同样罗列在下面，一定要看懂自己写出来不要copy paste：

```python
# b. df2 中有一个重复的 user_id 。它是什么？
# .duplicated()就是输出重复行
df2[df2['user_id'].duplicated()]

# d. 删除 一个 含有重复的 user_id 的行， 但需要确保你的 dataframe 为 df2。
# 在小括弧中使用[]参数定义要判断deplicates的列
# 不加的话就是每列都重复才删除
df2 = df2.drop_duplicates(['user_id'])
df2.shape[0]
```

### // 问题4，计算比率

```python
# a. 不管它们收到什么页面，单个用户的转化率是多少？
# 使用转化的除总数
converte_rate = df2['converted'].sum() / df2.shape[0]
# converte因为是0、1区分，所以sum就是个数
# 使用round保留4位小数
round(convert_rate,4)

# b. 假定一个用户处于 control 组中，他的转化率是多少？
# c. 假定一个用户处于 treatment 组中，他的转化率是多少？
# 还是使用筛选解决，大家自己试一下

# d. 一个用户收到新页面的概率是多少？
# 也可以直接筛选出来shape转成数字计算
newpage_rate = df2[df2['landing_page'] == 'new_page'].shape[0] / df2.shape[0]
# 之后用round将结果保留4位小数
round(newpage_rate,4)
```

在这之后，不要忘了还有e的主观问题。这第一部分就做完了，基本上是上一个项目中加简单的比例计算，大家做好后就可以准备后两个部分的重点内容了，加油！

# 项目4数据集打包

这次项目中有3个数据可以选择，如果任务完成了，可以看看项目说明，选一个可心的呦：
https://github.com/udacity/new-dand-basic-china/blob/master/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E5%85%A5%E9%97%A8/%E9%A1%B9%E7%9B%AE-%E6%8E%A2%E7%B4%A2%E6%95%B0%E6%8D%AE%E9%9B%86/%E6%8E%A2%E7%B4%A2%E6%95%B0%E6%8D%AE%E9%9B%86%20-%20%E5%A4%87%E9%80%89%E6%95%B0%E6%8D%AE%E9%9B%86.md






