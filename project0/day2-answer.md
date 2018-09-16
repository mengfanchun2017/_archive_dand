## day2 每日一题答案

1. 下面这段代码是干什么的，如果我想运行这段代码应该怎么调用？

   ```python
   def if_conditions():
       count=1
       if count==1：
           return 'hello
   ```
   > def是定义函数的意思，后面的蓝色if_conditions():是函数名，使用的时候直接调用就可以了：
   >
   > ```python
   > if_conditions()
   > ```

2. '什么是布尔值？

   > 布尔值就是True和False，是一种状态标识，常喝判断和循环一起使用。

3. python当中遍历(loop)是什么意思？

   > 遍历就是依次取出列表，元组，集合里面的元素做一些事

4. python代码里面文本注释前面要加什么符号？

   > #常被用作单行注释符号，多行注释是用三引号'''   '''包含。

5. python的strip语法是做什么用的？

   > 1. s.strip(rm)删除s字符串中开头、结尾处的rm字符
   > 2. s.lstrip(rm)删除s字符串中开头处的rm字符 
   > 3. s.rstrip(rm)删除s字符串中结尾处的rm字符 
   > 4. 注意：当rm为空时，默认删除空白符（包括’\n‘, ’\r‘,  ’\t‘,  ’ ‘)

6. 如何查看dataframe df的列名和索引名字？(提示：列和索引的英文单词)

   > df.columns和df.index

7. 请问在判断语句当中and和or有什么区别？

   > and和or是同时成立以及只有一个成立即可的区别。

8. pandas中的series和dataframe有什么区别？

   > series是一维的，dataframe是多维的，dataframe的每一列都是一个series对象

9. 假设df数据有一列‘PM_US Post ’，df[‘PM_US Post ’].sum()的输出是什么值？

   > .sum()就是把前面标识的列求和。

10. Shanghai_data里面的'season'这一列是1,2,3,4的取值，请问你能不能从一下代码推断一下.map是干什么的？

    ```python
    Shanghai_data['season'] = Shanghai_data['season'].map({1:'Spring', 2:'Summer', 3:'Autumn', 4: 'Winter'}
    ```
    > 这里将原本的season这一列里面的1，2，3，4映射成对应的季节名字。map就是映射的意思。

11. pandas的dataframe有很多方法的参数都有axis这一项，比如dropna，sum等，axis可以为1或者0。你是如何理解axis=1和axis=0的？（提示：从列和行的方向考虑）

    > 一般默认情况是axis=0，axis=0代表从行的方向上操作，axis=1代表从列的方向上操作。 比如说，Shanghai_data.dropna()就是 将存在缺失值的某行数据删除。

12. python当中整数和浮点数的计算是一样的吗？比如`6/7`返回的结果是什么？如果我想要返回有小数位数的浮点数，应该怎么写？(提示：把分子或者分母变成浮点数)

    > Python3中6/7即为浮点数小数

13. 以下会显示几行数据？

    ```python
    df_all_cities.head(10)
    ```
    > 10行，因为括号里面有了10。如果是（）默认显示5行。

14. .info()是干什么用的?

    > .info()方法是对前面的数据集的信息做汇总展示的。会显示数据中每一列有多少数值和数据的类型。

15. csv文件和tsv文件的区别?

    > csv文件使用逗号分隔数据的文件，tsv使用tab分隔数据的文件。

16. .mean()是干什么的?

    > 是计算前面数据的中值的