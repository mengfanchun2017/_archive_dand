## day3 今日导学

### 前面的话

同学们，今天是我们开课的第3天。昨天我们已经开始接触Python代码的/数字和字符串/部分，也了解了项目的相关信息和项目工作区的使用方式。今天我们的一切将会围绕项目的撰写展开。请同学们务必在今天晚上的优达日活动前完成。我们将会用1个小时的时间讲解项目的内容。

### 今日目标

今天的目标分为3部分，首先是熟悉一下我们提交项目文件的工作区、再有就是对项目的5个部分进行一下了解、其中1-3会进行讲解，第4部分有些长咱们视频时再完成。

1. （看懂即可，课程3部分 - 配置jupyter notebook中的内容）配置jupyter notebook
   1. notebook界面（项目工作区是怎么用）
   2. 代码单元格（就是输入代码的框是怎么回事）
   3. Markdonw单元格（就是大家写字的框是怎么回事）

2. （之后咱们切换到-项目实战部分）项目工作区
   1. 这个区域就是上面那个任务使用的jupyter notebook了，所有操作都在此处完成，所有功能在上面菜单都可以选。
   2. 需要编辑的话双击到相应位置就可以了。**本项目空间不能重置！请只改动需要的地方！**
   3. 项目中的说明非常详细，请认真从头读到尾，跳过代码框，只读文字，并着重理解5个问题。

3. 填写项目文件（问题1：提出问题部分）：这部分可以发到群里来大家一起看看，因为涉及到后面代码的编写。

4. 填写项目文件（问题2:数据评估部分）：这部分将会出现较多的代码，但大部分都是现成的，不用完成，简要说明一下：

   - 数据文件：在这一部分我们先会看到做项目的5个数据文件。可以从名字看出来就是中国5个城市从2010年到2015年的数据。

     ```
      BeijingPM20100101_20151231.csv,
     2. ChengduPM20100101_20151231.csv,
     3. GuangzhouPM20100101_20151231.csv,
     4. ShanghaiPM20100101_20151231.csv,
     5. ShenyangPM20100101_20151231.csv
     ```

     文件的格式是csv，就是用逗号分隔存储数据的一种格式。里面每行记录了一次测量的数据（也可用excel打开，就是比较便于看的表格形式了）：

     ```
     No,year,month,day,hour,season,PM_Dongsi,PM_Dongsihuan,PM_Nongzhanguan,PM_US Post,DEWP,HUMI,PRES,TEMP,cbwd,Iws,precipitation,Iprec
     1,2010,1,1,0,4,NA,NA,NA,NA,-21,43,1021,-11,NW,1.79,0,0
     2,2010,1,1,1,4,NA,NA,NA,NA,-21,47,1020,-12,NW,4.92,0,0
     3,2010,1,1,2,4,NA,NA,NA,NA,-21,43,1019,-11,NW,6.71,0,0
     ```

   - 包倒入：那么要想使用python语言处理这些数据，我们需要将csv文件读取一下。在这之前，需要把用到的库导入进来，一共用到以下几个，我用#号做了注释，了解一下就好

     ```python
     import csv #读取csv文件的库
     import numpy as np #用于矩阵计算的库
     import pandas as pd #用于数据统计的库
     import matplotlib.pyplot as plt #用于图形化展示的库
     import seaborn #用于优化图形显示的库
     %matplotlib inline #用于让jupyter能显示图形的参数
     ```

   - 数据读取：最后我们要把刚才的csv文件导入成Python可以处理的数据

     ```python
     Shanghai_data = pd.read_csv('ShanghaiPM20100101_20151231.csv')
     #上面的代码就是设定了一个数据Shanghai_data，里面的数据都是从后面那个csv读取来的。导入的方法就是pd.read_csv()。pd是我们刚到入的库，read_csv()的意思就是把括弧里面的csv读进来。
     Shanghai_data.head()
     #在我们做好的数据后面加了.head()就会把数据的前5行显示出来，好让我们检查是不是成功了
     ```

   - （选看，不看不影响项目！）数据清理：上面的.head()输出后，我们会发现season是1到4编号，不是春夏秋冬啊，太没有感性的美了，可以使用map方法进行替换。

     ```python
      Shanghai_data['season'] = Shanghai_data['season'].map({1:'Spring', 2:'Summer', 3:'Autumn', 4: 'Winter'})
      Shanghai_data.head()
     ```

   - 去掉没有数据的值：其实数据的最大问题是有很多标记为NaN的空值，这样会对分析结果产生很大影响，那么我们再通过.info()方法查下到底缺失了多少：

     ```python
     Shanghai_data.info()
     #输出是：
     Data columns (total 17 columns):
     No               52584 non-null int64
     year             52584 non-null int64
     month            52584 non-null int64
     day              52584 non-null int64
     hour             52584 non-null int64
     season           52584 non-null int64
     PM_Jingan        24700 non-null float64
     PM_US Post       34039 non-null float64
     PM_Xuhui         25189 non-null float64
     DEWP             52571 non-null float64
     HUMI             52571 non-null float64
     PRES             52556 non-null float64
     TEMP             52571 non-null float64
     cbwd             52572 non-null object
     Iws              52572 non-null float64
     precipitation    48575 non-null float64
     Iprec            48575 non-null float64
     ```

     这里要第二列彩色的阿拉伯数字，就是有数值的记录。表示每个值的多少都不一样啊，这个怎么办！我们可以用一行代码把NaN这种没意义的值干掉：

     ```python
     Shanghai_data['PM_Jingan'].dropna()
     ```

   - （选看）数据生成：那么到了最后我们干脆把5个数据文件都按上面步骤处理一遍，并且将数据整合为一个文件中，这样下一步我们怎么分析就是这个数据，就方便了。我把用到的语句放到了下面，这几块代码不用看！理解即可！

    ```python
    files = []
    out_columns = []
    df_all_cities = pd.DataFrame()
    #df_all_cities 就是我们最后分析使用的数据
    for inx, val in enumerate(files):
    #用一个循环把5个城市的数据做标识（就是增加一列，来自beijing的写beijing，来自上海的写上海，便于后续筛选）
    ```

5. （选看）问题3:筛选数据部分。这部分看着很吓人，两段超长的函数，其实这两段里面一个字都不用写。大家能看明白这两个函数是怎么使用的就可以了：

   第1个是数据筛选函数 ：

    ```python
   def filter_data(data, condition):
    ```
   第2个是数据处理函数：  

    ```python
   def usage_stats(data, filters = [], verbose = True):
    ```
   这部分的重点是，知道这是2个函数，也知道怎么用就可以了。
### 助教叨叨

第3天了，我们今天就要进入到项目完成阶段了！上面的问题1-2的内容要在优达日活动开始前完成，问题3的两个函数来得及也建议看一看。优达日会讲解全部的项目，后面部分的指导会在day4的导学放出。大家加油，不要被项目吓到，需要写的东西不很多的。

另外今天我们的小艾（根据我判断，不是机器人）对于python中的docstring有特别精辟的解释，盗版如下：

> 1. python有一个很牛逼的功能叫做自省 
> 2. 有很多的自省函数，比如help，dir，type，id等等
> 3. 就是为了在程序运行期间获取对象的信息 
> 4. 比如这个docstring，可以通过help来查看。你的代码是干什么用的，怎么用的，别人就很清楚了 
> 5. 记住一点，代码是写给机器运行的，但是是写给人看的。可维护性，可读性非常重要。否则同事会画圈圈诅咒你的哦 
> 6. 你想象一下，你在写代码的时候老是有人打断你，问你你写的这个函数怎么用，如果你写了docstring，就不会有这样的遭遇了。也不会有想要把同事掐死的冲动。 
> 7. 为了团结友爱世界和平，请为你的函数和类添加docstring 
> 8. 你可能有一点困惑就是，我已经写了注释，还要不要写docstring 
> 9. 不困惑了，为了防止同事找我 ，我决定把docstring 写得叼一点 
> 10. 而且有很多工具可以自动根据docstring生成文档，省时省力 
> 11. 注释不能通过help查看哦，别人要有你的源文件，还得搜到你的函数才能看到注释 