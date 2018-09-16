## day5 今日导学

### 前面的话

同学们，今天是我们开课的第5天。我们已经在前4天的导读中完成了项目相关的所有讲解。后3天的导学将是作为扩展内容，请同学们在完成前面导读内容，项目提交的情况下再学习这3天的内容。前4天的导读文件如下：
1. [[day1-guide]](https://github.com/mengfanchun2017/Intro-Data-Analysis/blob/master/day1-guide.md)
4. [[day2-guide]](https://github.com/mengfanchun2017/Intro-Data-Analysis/blob/master/day2-guide.md)
7. [[day3-guide]](https://github.com/mengfanchun2017/Intro-Data-Analysis/blob/master/day3-guide.md)
10. [[day4-guide]](https://github.com/mengfanchun2017/Intro-Data-Analysis/blob/master/day4-guide.md)

今天的扩展内容是熟悉PEPs，那么什么是PEPs呢?PEPs是Python Enhancement Proposals的缩写，是一套对于Python语言的书写代码的建议。PEPs是一套很庞大的文档，对Ptyhon编程中的很多都做出了规范，Python中最常参考的PEP8是Style Guide for Python Code链接如下：[[PEP8]](https://www.python.org/dev/peps/pep-0257/)

还是有点绕啊，其实PEP8就是约定俗成额写Python程序的规则。今天的扩展内容就是对其中的重要内容做个介绍，让大家在开始的时候能够从好的习惯下手。

### 今日目标

今天的目标分为3部分，首先是熟悉一下我们提交项目文件的工作区、再有就是对项目的5个部分进行一下了解、其中1-3会进行讲解，第4部分有些长咱们视频时再完成。

- 缩进Identation

    - 函数参数定义时候使用以下几个方式：

    ```python
    def filter_data(data, condition, arg1, arg2):
    #1行都写下，注意不要超过79个字符
    def filter_data(data, condition, 
                    arg1, arg2):
    #2如果参数中间换行，第二行起始要在上面的（ 下面
    def filter_data(
        	data, condition, arg1, arg2):
    #3如果是小括号后就换行，就缩进2次，相当于8个空格
    ```
    - 悬挂缩进那么接下来，我们怎么调用文件呢？我们看看项目中的例子（只调用最后的函数就好了，Uda已经非常简化这个项目了）：

    ```python
    fun = filter_data(
        data, condition, arg1, arg2)
    #1悬挂缩进。如果是上面这种调用，第二行缩进4个空格
    my_list = [
        1, 2, 3,
        4, 5, 6,
    ]
    #2这也是，注意最后关闭的中括号的位置也是可以的
    ```

- 优先使用缩进

    - 缩进使用4个空格，不是tab键（但是如果已经使用了tab，还是用tab，保持一致）

- 最大代码长度

    - 不要超过79
    - docstring和注释不要超过72
    - 太长了在结尾使用 \ 后转到下一行继续

- 带有运算符的换行：把运算符放到最前面，如下示例

    ```python
    income = (gross_wages
              + taxable_interest
              + (dividends - qualified_dividends)
              - ira_deduction
              - student_loan_interest)
    ```

- 代码中的空行：

    - 类和函数定义前后2行空行
    - 方法前后1行空行

- 文件编码：

    - 总是使用UTF-8
    - 使用UTF-8的话不用加入encoding declaration 

- 导入：

    - 总在文件的最前面
    - 大小写敏感
    - 排列顺序
        - Standard library imports.
        - Related third party imports.
        - Local application/library specific imports.
    - 每行一个

    ```python
    import os
    import sys
    ```

    - 导入的标准库实际上就是带有`__init__.py` 文件的目录，这个文件损坏就不能导入库了。后面的。后面带.的就是目录中的一个个文件了。看下例子就明白了：
    ```python
    #test/packA/a1.py
    def a1_func():
        print("running a1_func()")
        
    test/packA/__init__.py
    # this import makes a1_func directly accessible from packA.a1_func
    from packA.a1 import a1_func
    def packA_func():
        print("running packA_func()")
    ```

- **调用!敲黑板！**

    - 总结下，调用的2种方式：为什么讲了这么多，因为在不同引用方式时候，调用会不一样：


```python
#Example: start.py needs to import the helloWorld() function in sa1.py

#Solution 1: from packA.subA.sa1 
import helloWorld
#这种是绝对模式（可以理解成把整个包都搞进来了）
#we can call the function directly by name: 
x = helloWorld()

#Solution 2: 
from packA.subA import sa1 
#这种是明确模式（就是用到那个，就明确把路径写上搞进来）
#（也可以import packA.subA.sa1 as sa1，但是为了区分两种模式，我喜欢使用 from的方式）
#we have to prefix the function name with the name of the module: 
x = sa1.helloWorld()
#其实更加复杂，详细的看请看链接：https://chrisyeh96.github.io/2017/08/08/definitive-guide-python-imports.html

#plus1
import pandas as pd
#在导入的时候，在import xxx as x这样吧前面的简化成后面的，比如上面例子中把pandas 简化成 pd

#plus2
#我们使用import，from xxx import *的时候，会把模块中的全部内容导入
#但是如果你是这个模块的制作者，你可以使用def _xxx():
#这样的话在上面导入的时候就不会导入_xxx了，如果需要使用：
from packA.subA import _xxx
#也就是说，这是一种规则，但你也可以使用
```

- 代码中的空白

  - 不要有空白的地方（直接上例子）
  ```python
  spam(ham[1], {eggs: 2})
  Yes: foo = (0,)
  if x == 4: print x, y; x, y = y, x
  dct['key'] = lst[index]
  #	紧挨着括弧的，逗号前面，定义列表的[]前后、都不要空格
  ```
  - 要使用空白的地方（直接上例子）
  ```python
  i = i + 1
  submitted += 1
  x = x*2 - 1
  hypot2 = x*x + y*y
  #赋值和运算要加空格为了更加易读，箭头，input同样。（但是参数不要空格，见下面）
  def complex(real, imag=0.0):
      return magic(r=real, i=imag)
  ```


### 助教叨叨

上面看的是不是很晕啊，其实同学们也不用太担心，比较重点的是import那里的内容，因为在我学习得时候，两种引用方式真的看的有一点点晕。今天的内容主要是让大家感受下Python真的是有很强大的后台的（呵呵，就是大牛们的持续贡献）。大家在学习得时候，总能挖到很多更深层次的东西。但是正是由于这样，在使用Python应用数据分析时候，我们才能够更加方便快捷。

但是前提是，你要能够逐渐熟悉并使用这些工具。要想做到这点，之前说的搜索能力请一定慢慢培养起来。另外，对于资料来讲还是英文的更全面，也请养成google/bing + key word的方式！祝大家今天学习愉快，并找到数据分析师大大的感觉！