## day6 今日导学

### 前面的话

同学们，今天是我们开课的第6天了。估计大家项目都提交的差不多了，如果还没提交的话，加紧点，提交以后@班主任大大，还是可以完成的。已经提交的同学请过几个小时就检查下邮件，可能会有修改的要求。如果这些都OK了的话，咱们今天今日导学就聊聊项目中的选修内容，循环！别怕别怕，其实如果没有循环，你才会崩溃，因为循环的作用就是帮你重复的工作做完，无论是5次，还是10000次，帅不帅？！

### 今日目标

首先，请同学们先把选修的循环部分看完，之后我们扩展聊一聊。Python的循环有两种，for循环和while循环。抓狂了？为什么有两种循环呢！！！

1. 从名字上看区分：

   1. for是遍历，常见的是结合in的判断

      ```python
      for i in list:
          pass
      ```

      这个意思就是说，当i在list中的时候，blabla。那么既然是遍历，这个i就是从list里面第一个到最后一个，都run一遍，之后结束。所以for in的对象是一个可迭代的对象（不要晕看例子）：

      ```python
      #先看一个列表的例子
      list = ['I ', 'love ', 'python ', 666, '!']
      for i in list:
          print(i, end = '')
          #end = ''的意思是结尾不换行    
      #---输出如下---
      I love python 666!
      
      #再看一下字符串的例子
      string = 'GOOD'
      for i in string:
          print(i)
      #---输出如下---    
      G
      O
      O
      D
      
      #看到这里，大家就明白了列表和字符串都是可迭代对象，因为能够按照顺序从同到尾遍历一下。
      ```

   1. 那么while呢，就是当...时候，做...的意思。和for不同，只要while这行判断成立，就会一直做下去。

   1. 综上所述，for in 适合可迭代目标的循环，while适合不知道要循环多少次，每次需要判断状态的循环。

   1. 两个的区别咱们来个对比做小结：

      1. for loops：
         1. know number of iterations
         1. can end early via break
         1. uses a counter
         1. can rewrite using a while loop
      1. while loops:
         1. unbounded number of iterations
         1. can end early via break
         1. can use a counter but must initialize before loop and increment it inside loop
         1. may not be able to rewrite using a for loop

   1. 咱们来个计算阶乘的例子，两个循环如下：

      ```python
      #for loop solution
      n = 5
      fact = 1
      for i in range(2, n + 1):
          fact = fact * i
      print(str(n) + ' factorial is ' + str(fact))
      
      #while loop solution
      n = 5
      fact = 1
      i = 2
      #while要初始化i
      while i <= n:
          fact = fact * i
          i = i + 1
          #在循环中要对i进行更新否则进入死循环
      print(str(n) + ' factorial is ' + str(fact))
      
      #---输出是一样的---
      5 factorial is 120
      ```

      OK，大家看明白了么？for in 这种循环方式对于可迭代目标更加简洁（也能用enumerate再简化一点点，有兴趣的可以自行搜索）。但是其实两种都是OK的，是个人风格问题。

   1. 更详细的例子大家参考这个链接：
      http://www.peachpit.com/articles/article.aspx?p=1312792&seqNum=5

### 助教叨叨

第6天了，大家无论是提交了还是正在做项目，相信都已经和一周前的感觉有很大进步了，大家加油，放松和祝贺的话我们留在明天在聊。念念不忘，必有回响，大家冲！刺！啦！另外今天还给进度快一些的同学聊了下两种循环，逐渐培养软件工程的思维方式，从循环下手是很有意思的。祝大家学得愉快。