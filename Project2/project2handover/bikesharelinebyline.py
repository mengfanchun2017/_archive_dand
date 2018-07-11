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
    
    