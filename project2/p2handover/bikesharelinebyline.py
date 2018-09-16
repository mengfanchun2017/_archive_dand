'''
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jul 11 08:47:13 2018

@author: mengfanchun
"""
import pandas as pd
df = pd.read_csv('chicago.csv')
'Gender' in df.columns
if 'Birth Year' in df.columns:
    print('in')
'''


CITY_DATA = { 'chicago': 'chicago.csv',
              'new york city': 'new_york_city.csv',
              'washington': 'washington.csv' }

def phrase_input(input_prompt,err_prompt,option_list):
    
    user_input = input(input_prompt)
    while user_input not in option_list:
        user_input = input(err_prompt)
    return user_input

def get_filters():

    #city_option = ['chicago', 'new york city', 'washington']
    
    city_option = CITY_DATA.keys()
    month_option = ['all', 'january', 'february', 'march', 'april', 'may', 
                  'june']
    day_option = ['all', 'monday', 'tuesday',  'wednesday', 
                  'thursday', 'friday', 'saturday', 'sunday' ]
    
    city_prompt = 'q1/3: which city do you want to know? \
                     \noption:<chicago,new york city,washington> \n>>> '               
    month_prompt = 'q2/3: which month do you want to know? \
                      \noption:<all,january,february,march,april,may,june>\
                      \n>>> '               
    day_prompt = 'q3/3: which day do you want to know? \
                    \noption:<all,monday,tuesday,wednesday, ... ,sunday>\
                    \n>>> '       
    err_prompt = '---warning: I do not have that data.\
                  \n---Or you type a wrong name\n---Input Again\n>>> '
                  
              
                     
    city = phrase_input(city_prompt,err_prompt,city_option)
    month = phrase_input(month_prompt,err_prompt,month_option)
    day = phrase_input(day_prompt,err_prompt,day_option)
    
    str_got_input = 'Got Inputs:'
    print('')
    print(str_got_input.center(30,'>'))
    #str有.ljust .center .rjust等方式不使用变量的话很方便
    #http://www.tutorialspoint.com/python/string_ljust.htm

    print('>>>city requirement:',city)
    print('>>>month requirement:',month)
    print('>>>day requirement:',day)
    
    return city, month, day

print(get_filters())
    