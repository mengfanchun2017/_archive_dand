'''
month = ''
mon_option = ['all', 'january', 'february', 'march', 'april', 'may', 'june']

while month not in mon_option:
    month = input('q2/3: which month do you want to know? choose from all, \
                  january, february, ... , june. > ')
'''

mon_option = ['all', 'january', 'february', 'march', 'april', 'may', 'june']

while True:
    month = input('q2/3: which month do you want to know? choose from all, \
                  january, february, ... , june. > ')
    if month in mon_option:
        break
        
    
