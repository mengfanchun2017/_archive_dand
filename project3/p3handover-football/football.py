# -*- coding: utf-8 -*-
"""
Created on Wed Nov 21 15:58:50 2018

@author: calen
"""
import numpy as np
import pandas as pd
import math
import matplotlib.pyplot as plt

path ='D:/python/project3/'
database = path + 'tmdb-movies.csv'

file = pd.read_csv(database)

#观察数据结构，有几行几列，参数类型
print(file.shape)
print(file.info())
print(file.dtypes)
print(file.isnull().sum())
#删除重复值
print(file.duplicated().sum())
file.drop_duplicates(inplace=True)
print(file.duplicated().sum())

#删除无用列
# imbd_id 和 id 功能重复 而且imdb_id有空值，所以删除imdb_id列
print(file.shape)
drop_col=['imdb_id']
file.drop(drop_col,axis =1,inplace=True)
print(file.shape)

#整理列， 新建一列，用于判断评分与是否有homepage有关
file['homepage_notnull'] = file['homepage'].notnull()

# 得出那个域名的作品最多
file['my_homepage'] = file['homepage'].str.split('/',3).str[2]
domain = file.groupby('my_homepage').size().sort_values(ascending = False)
print(domain)

#得出那个公司的作品最多
domain2 = file.groupby('production_companies').size().sort_values(ascending=False)
print(domain2)

#分析数值列之间的关系



columns_number = ['vote_average','popularity','runtime','vote_count','budget_adj','revenue_adj']

df_num = pd.DataFrame()

for i in columns_number:
    df_num[i] = file[i]

print(df_num.shape)

#pd.plotting.scatter_matrix(df_num,diagonal='hist',figsize=(15,15))
#df_num['popularity'].plot(kind='hist',alpha = 0.5,figsize=(8,8))

#describe() 发现后两个数据0太多，将0删除
print(df_num.describe())
new_num = df_num[(df_num['budget_adj'] !=0 )&( df_num['revenue_adj']!=0)]
print(new_num.shape)
print(new_num.head())

#new_num.plot(kind='scatter',x='vote_average',y='revenue_adj',alpha=0.5)

for i in range(1,len(columns_number)):
    new_num.plot(kind='scatter',x='vote_average',y=columns_number[i],alpha=0.5)


columns_number = ['vote_average','popularity','runtime','vote_count','budget_adj','revenue_adj','homepage_notnull']

df_num2 = pd.DataFrame()

for i in columns_number:
    df_num2[i] = file[i]

print(df_num2.info())




new_num2 = df_num2[(df_num2['budget_adj']!=0) & (df_num2['revenue_adj']!=0)]
print(new_num2.shape)

#按homepage_notnull 分组 
group_homepage = new_num2.groupby('homepage_notnull').mean()
print(group_homepage)

#group_homepage.iloc[0].plot(kind='bar',alpha=0.5,color='b')

#数据相差太多，看不到前面几个值
mean_edited = group_homepage.copy()

mean_edited['budget_adj']=group_homepage['budget_adj']/1000000
mean_edited['revenue_adj']=group_homepage['revenue_adj']/1000000
print(mean_edited)
print(mean_edited.shape[1])

mean_edited['vote_average']=group_homepage['vote_average'] *10

mean_edited['popularity']=group_homepage['popularity'] *100
print(mean_edited)
print(mean_edited.shape[1])

#mean_edited.iloc[0].plot(kind='bar',alpha=0.5,color='b')
#mean_edited.iloc[1].plot(kind='bar',alpha=0.5,color='y')

#mean_edited['revenue_adj'].plot(kind='bar',title="my table")
#mean_edited['vote_average'].plot(kind='bar',title="my table")
#
#plt.xlabel('homepage_notnull',fontsize=15)
#plt.xlabel('homepage_notnull',fontsize=15)


ind = np.arange(mean_edited.shape[1])
width = 0.45

false_bar = plt.bar(ind,mean_edited.iloc[0],width,color='red',alpha=.7,label='false bar')
white_bars = plt.bar(ind+width,mean_edited.iloc[1],width,color='pink',alpha=.7,label='True bar')

# 标题和书签
plt.ylabel('number')
plt.xlabel('name')
plt.title('number by diff name ')
locations = ind+ width/2
plt.xticks(locations,columns_number) 

plt.legend()



     




































