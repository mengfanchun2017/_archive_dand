# Week11 项目4 Part2/3 Plus2
## 统计学项目

[TOC]

# 学习地图

![-c](http://pb6cho8f0.bkt.clouddn.com/15342616091047.jpg)

本周是统计学项目的Part2，是项目4的推论统计学的扩展部分。目标1、2、3讲解置信区间、假设检验、和一个A/B测试案例。目标4作为Plus发布，讲解了回归的相关知识。目标5为项目讲解作为plus2发布（新增）。

**！注意，1星和2星的可以只看本导学，先大致理解就可以。3星的是本周重点！**

# /目标5/ 分析A/B测试结果项目 - II A/B测试

本部分将会指导项目的后两个部分，大家加油（第一部分在week10导学中有讲解）。

## / 1.写出假设检验

此处考察的是能否理解假设检验的内容，根据后面2.问题描述中的提示，零假设为新旧页面的转化率相同。

### // 优雅的输入假设

首先呢是写假设检验，根据本周第一个导学文件，直接在项目空间中markdown cell这样写（如果不想这么麻烦直接用英文大小写描述也没有问题的, $ $z中间包住的内容就是latex的公式格式内容）：

```
# 这个是错的呦！
$ H_0:p_{new}−p_{old}=0 $

$ H_1:p_{new}−p_{old}\neq0 $
```


在开始做的时候，我先按照这部分2.中的描述做了解答，但实际上这里回答1的问题，是要按照1中的描述：**如果你想假定旧的页面效果更好，除非新的页面在类型I错误率为5％的情况下才能证明效果更好。**来写假设（提示下，这次是单尾假设了），大于等于和小于等于的代码是：

```
$ \leq $
$ \geq $
```
样子就是这样的：$ \leq $ $ \geq $
切换markdown cell的方式是点中，之后点击上面的选项：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350806005366.jpg)

选择之后前面的 In[] 会消失，直接编辑就行。Latex如何输入大家直接搜索，比如“latex 不等号”就能找到很多例子。其实是一种数学公式的输入方法，非常强大，更重要的是非常优雅漂亮！更改之后的markdown cell的内容是这样的：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350816443392.jpg)

shift回车之后就会渲染（这是错的例子，请自行解决）：

![-c](http://pb6cho8f0.bkt.clouddn.com/15350816794792.jpg)

## / 2.相关数值计算

### // a,b,c,d 数量计算

这里和上一节基本一样，再按照空回答一遍就好了

```python
# 转化率
control_rate = df2[(df2['group'] == 'control')&(df2['converted'] == 1)].shape[0] / df2[(df2['group'] == 'control')].shape[0]
# 使用round保留4位小数
round(control_rate,4)
```

```python
# 筛选出new的，并且记数
df2[(df2['group'] == 'treatment')].shape[0]
```

本部分得出的几个变量：
- rnew = 0.1188 新页面的转化率
- rold = 0.1204 旧页面的转化率
- nnew = 145310 新页面的数量
- nold = 145274 旧页面的数量
**需要注意：上面的4个值是收集来的所有页面信息的统计数。**

### // e,f,g 生成new/old_page_converted和他们的差

这里先拆解下要求：
- 使用pnew转化率模拟nnew交易（在I部分得出的结果）
- 将模拟的结果存为new_page_converted
- 此处的意义应该是根据算出的pnew再模拟（每次运行都不一样）抽样分布

```python
# 模拟么要使用random.choice
# ()中的参数解释
# 参数1 - 2，表明随机选择的是0，1
# 参数2 - nnew，就是上面的145310，代表抽取多少次
# 此处可以这么理解：既然是要模拟nnew的情况，那么抽取次数要和nnew相同
# 参数3 - p = [1-rnew,rnew]，就是对应参数1的两个值，各自取的概率
# rnew就是上面得出的0.1188，对应的是1的取值
new_page_converted = np.random.choice(2,nnew, p = [1-rnew,rnew])
# 输出是个array
type(new_page_converted)
# 结果是numpy.ndarray，内容是由0与1组成的array
# 直接求均值就是转化率了
new_page_conr = round(new_page_converted.mean(),4)
new_page_conr
```

那么就可以把这两个值相减了（g的任务）：

```python
p_compare = new_page_conr - old_page_conr
p_compare
```

本部分得出的几个变量：
- new_page_conr = 0.1196 
- old_page_conr = 0.1202
- p_compare = -0.0013

### // f 把上述模拟进行1万次

**重要提示：此处是进行10000遍模拟，大家可以在开始做的时候改为range（1000）改为1000次。等文件都写完了之后再改为10000，之后提交报告，可以缩短此处代码的运行时间。**

```python
# 建立p_diffs存放每次模拟抽样后的转化率
p_diffs = []
# 将上面的代码循环1万遍，得出这1万遍模拟新旧转化率的差异
for i in range(10000):
    new_page_converted = np.random.choice(2,nnew, p = [1-rnew,rnew])
    old_page_converted = np.random.choice(2,nold, p = [1-rold,rold])
    p_diffs.append(new_page_converted.mean()-old_page_converted.mean())
    
# 将p_diffs转化为array，为了以后能用.std
p_diffs = np.array(p_diffs)
type(p_diffs)
```

### // i 绘制直方图

熟悉吧，这里就是将这1万次的模拟画出图来，明显的正态分布（中心极限定理还记得不？）

```python
# 直接把p_diffs画图（列表输入，arrays输入都ok的）
plt.hist(p_diffs);
```

### // j 比较刚才模拟的数据和真实的数据差距

```python
# 下面的3行其实是1行代码，为了不超过79个字符的规则，使用 \ 分割到下一行
# 这是的obs_diff是真实的值（从数据中推算出来的）
# obs_diffs就是根据所有数据计算出的新页面转化率和旧页面转化率的差
obs_diffs = \
df2.query('landing_page == "new_page"')['converted'].mean()- \
df2.query('landing_page == "old_page"')['converted'].mean()
# 得出obs
obs_diffs

# 直接进行比较，输出是True和False
# 再取平均值
# 结果代表的是模拟的大于真实的比率
# 肉眼观察接近50%
(p_diffs > obs_diffs).mean()
```
结果是：0.5013

### // k 对上面结果做描述

- 此处应该转换为markdown框作答
- 根据上面的答案0.5013（注意因为是模拟每次可能会有点不同）
- 这个比率是模拟抽样（1万次）和真实值的对比
- 接近0.5所以符合中心极限定律
- 从数值上看转化率并没有区别

### // i 使用置信区间进行A/B假设的判定1

```python
# 首先引入统计学模块
import statsmodels.api as sm
# 将转化了的都筛选出来
# 使用的是.query 里面是筛选的条件
con_1 = df2.query('converted =="1"')
# 测出新旧页面数量和总数量
convert_old = con_1.query('landing_page == "old_page"').shape[0]
convert_new = con_1.query('landing_page == "new_page"').shape[0]
n_old = df2.query('landing_page == "old_page"').shape[0]
n_new = df2.query('landing_page == "new_page"').shape[0]
```

### // m 使用置信区间进行A/B假设的判定2

```python
# 使用.stat.proportions_ztest计算z_score
# 同时会输出p（p的概念就是：如果零假设为真，观察到统计量的概率
# 其中的3个参数
# 参数1 - 新旧页面对比的转化率 [convert_old,convert_new]
# 参数2 - 新旧页面的数量 [n_old, n_new]
# 参数3 - 计算参数延用就好
z_score, p_value = sm.stats.proportions_ztest([convert_old,convert_new], [n_old, n_new], alternative='smaller')
# 最后输出 z_score,p_value
z_score,p_value
```

输出的值是：(1.3109241984234394, 0.9050583127590245)

### // n 使用置信区间进行A/B假设的判定3

这里要理解怎样判断z-score是否显著，简单的说就是根据0.95的置信度，双尾这两个情况去查表。根据表中查处具有统计学显著意义的临界值（上面条件是1.96），和计算出的值做比较。

- 根据得出的z-score和p-value的值：
- 检查z表格，在$ \alpha $ = 0.05 （双尾）时的值是1.96（大于才是，所以1.31无法否认零假设
- p值为0.905无法否认0假设（和0.95比较）
- 其实因为n很大（采样），只看z的就可以确定了
- 所以认为新旧页面的转化率无区别，结论与j和k中的结果一致

到此，A/B测试的第二部分已经完成，其实已经得出了结论（后面的一节是用机器学习中线性回归的方法再判断一遍）。简单的说就是根据我们收集到的样本，我们假设的p值为0.905，I类错误率超过0.05（ 1-0.0905 > 0.05 )

# /目标6/ 分析A/B测试结果项目 - III 回归分析法之一

## / 1.使用回归来完成A/B测试的计算

### // a 使用逻辑回归（因为是算分类信息）

此处使用的是逻辑回归，如果是对数值做估算就要使用线性回归和多元线性回归。

### // b 使用statsmodels来进行计算1

使用的就是week11-guide1中的虚拟变量的方式，并且调用statsmodels来完成计算，先用虚拟变量的方式建立0/1数值的列：

```python
# 根据课程中的.get_dummies一列的信息转换为两列1/0标识的信息
# 截距为1
df2['intercept'] = 1
# 此处get_dummies是将landing_page的值拆分出来，将两列值赋值给df2的新列
# 生成了2个新列 new_page old_page(用于回答后续问题)
df2[['new_page','old_page']] = pd.get_dummies(df2['landing_page'])
# 将ab_page的两个字段应设成1/0（1表示是新页面，0表示的是旧页边）
# 之后就可以用这个列和converted做比较了（后续代码框）
# 此处使用了.map(之前导学文件中有)把后面的（）中的逐一对每个元素执行
# 执行的是 lambda x: 行内函数
# 要干的就是把x变成1，如果x=treatment； 否则变成0
df2['ab_page'] = df['group'].map(lambda x: '1' if x=="treatment" else "0")
df2.head()
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15352505943134.jpg)

### // c 使用statsmodels来进行计算2

```python
# 定义模型
# 使用sm.Logit(因为是新旧分类ab_page列)
# 因变量是converted
# 自变量是ab_page(intercept默认要有的)
logit_mod = sm.Logit(df2['converted'],df2[['intercept','ab_page']])
# 对模型进行适配
results = logit_mod.fit()
```

### // d 根据计算得出结论

```python
results.summary()
# 使用summary2的话P为4位小数
```
根据结果，我们可以看出这里检查的是converted，使用的模型是Logit，结论是ab_page的p值是0.190:
![-c](http://pb6cho8f0.bkt.clouddn.com/15352516572225.jpg)

### // e 给出你的答案

p值都有了，就可以给出答案了，这一步该你自己走了！此处注意要回答II部分和本部分p值不同的原因，提示是单尾检验还是双尾检验。

### // f 增加更多因素到回归模型中

更多因素会带来更准确训练结果，但是太多了的话又会造成对样本很管用（解决欠拟合问题），但对新的数据就没那么适用了（产生过拟合问题），其实就是找个平衡点就好了。

### // g 我们还有个国家的数据，来分析一下吧

数据集中还有个countries.csv，把他读进来，附加在df2上(这半句代码如下）：

```python
# 此处代码如果多次运行会报错（因为已经join过了）
# cell - run all 就好了
# 使用.join把country文件中的数据根据user_id进行整合
# .set_index()，on是按照那一列进行整合
# 这里两个数据都是user_id所以前后是一样的
df2 = df2.join(country.set_index('user_id'), on='user_id')
df2.head()
```

之后一样进行虚拟变量的转换：

```python
# 同样，使用虚拟变量进行变换
df2[['CA','UK','US']] = pd.get_dummies(df2['country'])
```

再之后就再次进行逻辑回归了：

```python
# 那么再来一遍Logit分析
# 后面的参数选择的是CA、UK（根据虚拟变量那节的解释可以代表3个变量的趋势）
# 默认的斜率 = 1
df2['intercept'] = 1
# 描述模型
lm = sm.Logit(df2['converted'],df2[['intercept','CA','UK']])
# 进行适配
result_country = lm.fit()
# 输出结果
result_country.summary()
```

![-c](http://pb6cho8f0.bkt.clouddn.com/15352531180577.jpg)

### // h 那我我们把那么我们来吧国家和新旧页面联合考察下

根基提示，我们还是要创建新的列（请按照提示自己完成），之后对新的列做逻辑回归：

```python
df3['intercept'] = 1
lm = sm.Logit(df2['converted'],df3[['intercept','ab_page','UK','US','new_UK','new_US']])
result_country = lm.fit()
result_country.summary()
```

结果如下，大家看看和前面的结论一致不？项目到此完成，大家代码部分可以参考，但一定要理解并且自己写出来！

![-c](http://pb6cho8f0.bkt.clouddn.com/15352536422547.jpg)































​


