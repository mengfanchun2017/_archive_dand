import requests
from bs4 import BeautifulSoup
response = requests.get('https://en.wikipedia.org/wiki/Cat')
# print(response.text)
print(type(response.text))

html = response.text

soup = BeautifulSoup(html,'html.parser')

print(soup.title)

# .p是把第一个p找出来
# 需要所有的话要用.find_all('p')
print(soup.p)
# print(soup.find_all('p'))

# .在搜索时候是不论嵌套的（因为response被记录为str）
# 下面的是搜索所有的a，不用前面再加p的指定了
# print(soup.find_all('a'))

# find和find_all(因该是找到全部，不过id没有重复的)
print(soup.find(id = 'jump-to-nav'))
print(soup.find_all(id = 'jump-to-nav'))

# 但是使用下面class会报错，很奇怪，后续研究
# print(soup.find(class = 'mw-jump-link'))