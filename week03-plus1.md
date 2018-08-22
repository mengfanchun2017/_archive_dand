# week3 plus1 dataframe

## dataframe的由来

Python中的dataframe数据结构，是pandas第三方库中的提供的一种数据结构。超详细的官方文档：http://pandas.pydata.org/pandas-docs/stable/merging.html#database-style-dataframe-joining-merging
    
## 为什么要用dataframe这种数据结构

- 结合了python list的序列特性，和dictionary的健-值对应特性，更加灵活
- pandas使用Cpython完成，速度更快
- pandas序列中的每一列都可以是不同的数据类型（numpy的array所有列必须相同）
- 有众多的方法可以计算统计数字，比如：.mean()计算平均数 .max()计算最大值 .min()计算最小值 .mode()计算众数
- 对于dataframe数据，有很多方便的检索信息比如：.info()看整体信息 .head()和.tail()看数据头尾信息 .describe()看描述信息
- 可以设置列名和行名（想想看你excel中的表单，没有列名和行名将是多么的痛苦），numpy的array就不可以的
- 拥有丰富读写功能，比如读入csv文件，而且同样是Cpython的原因，所以会快很多
- pandas dataframe的结构和R语言中的dataframe（高级课程有学呦）结构类似，学一个送半个，要不要了解一下
- 据说pypy因为使用了jit技术，比cpython还快5倍（有空要了解一下）

**简单的说：datafram能处理复杂的数据类型、具备众多数据分析和统计的内置方法、并且处理速度超快！** 那么我们不用他用谁捏？

## dataframe入门

### /dataframe啥样子/

- week3导学中的：{6.练习：访问DataFrame元素}
- spyder展示

### /dataframe.applymay()介绍/

- week3导学中的：{11.练习：DataFrame applymap()}

## dataframe使用

### /dataframe简介/

比较全面的介绍：

- https://www.infoworld.com/article/3257599/analytics/introducing-pandas-dataframe-for-python-data-analysis.html
- https://www.infoworld.com/article/3257599/analytics/introducing-pandas-dataframe-for-python-data-analysis.html?nsdr=true&page=2
- https://www.infoworld.com/article/3257599/analytics/introducing-pandas-dataframe-for-python-data-analysis.html?nsdr=true&page=3

### /官方文档/

**官方文档是最全面的一手信息，要慢慢培养看的感觉，虽然太多会比较蒙！**

http://pandas.pydata.org/pandas-docs/stable/merging.html#database-style-dataframe-joining-merging

### /pandas里的众多方法e.g./

to_datatime 将数据格式转换成时间格式，之后可以进行各种操作的呦！官方文档： http://pandas.pydata.org/pandas-docs/stable/merging.html#database-style-dataframe-joining-merging

### /pandas里导入的库（来自小艾神助攻）/

- python的import一般就是3类， python标准库，开源库，还有自己编写的模块
- 标准库可以参考 https://docs.python.org/3/library/index.html
- 第三方库可以参考 https://github.com/jobbole/awesome-python-cn/
- 自己可以编写的模块可以参考 你自己，就是把你要用的一堆函数和文件打包，就叫模块了




