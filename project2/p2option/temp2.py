Beatles_Discography = {'Rubber Soul': 1965, 'Magical Mystery Tour': 1967, "Sgt. Pepper's Lonely Hearts Club Band": 1967, 'Revolver': 1966, 'The Beatles': 1968, 'With the Beatles': 1963, 'Beatles for Sale': 1964, 'Yellow Submarine': 1969, "A Hard Day's Night": 1964, 'Help': 1965, 'Let It Be': 1970, 'Abbey Road': 1969, 'Twist and Shout': 1964, 'Please Please Me': 1963}

# 虽然dic可以在函数中编辑外部变量
# 但建议还是把只在函数内使用的变量放到函数内
# dict_result = {}
def most_prolific(dictary):
    dict_result = {}
    for year_item in dictary:
        if dict_result.get(dictary[year_item]) != None:
            dict_result[dictary[year_item]]+=1
        else:
            dict_result[dictary[year_item]]=1
            
    array_temp=[]
    index_temp=0
    for year in dict_result:
        value_count = dict_result.get(year)
        print('===',year,'+++',value_count)
        if index_temp < value_count:
            index_temp = value_count
            array_temp = []
            array_temp.append(str(year))
        elif index_temp == value_count:
            array_temp.append(str(year))
        else:
            continue
        
    if len(array_temp)==1:
        return "".join(array_temp)
    else:
        return int(array_temp)
    
print("==+++",most_prolific(Beatles_Discography))

def most_prolific(discs): 
#We will store a dictionary of years 
#and number of albums per year     
    years = {} 
    maxyears = [] 
    maxnumber = 0 
    for disc in discs: 
        year = discs[disc]
        if year in years: 
            years[year] += 1 
        else: 
            years[year] = 1 

#find the year in which the maximum 
#number of albums was published 
#there are more elegant ways of accomplishing this, 
#but the code below works 
    for year in years:
        if years[year] > maxnumber: 
            maxyears=[] 
            maxyears.append(year) 
            maxnumber = years[year] 
        elif years[year] == maxnumber and not (year in maxyears): 
            maxyears.append(year) 
    if (len(maxyears) == 1): 
        return maxyears[0] 
    else: 
        return maxyears