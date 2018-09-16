import time
import pandas as pd

CITY_DATA = { 'chicago': 'chicago.csv',
              'new york city': 'new_york_city.csv',
              'washington': 'washington.csv' }

def phrase_input(input_prompt, err_prompt, option_list):
# 如果想使用 err_prompt = err_show 这种带有default的参数输入，需要先定义err_show
    
    user_input = input(input_prompt).lower()
    while user_input not in option_list:
        user_input = input(err_prompt)
    return user_input


def get_filters():
    
    city_option = CITY_DATA.keys()
    #直接指定城市的话不太灵活，可以根据CITY_DATA的keys（）进行判断
    #.keys()方法就是吧CITY_DATA中的key输出成一个列表，和下面这句等价：
    #city_option = ['chicago', 'new york city', 'washington']
    month_option = ['all', 'january', 'february', 'march', 'april', 'may', 
                  'june']
    day_option = ['all', 'monday', 'tuesday',  'wednesday', 
                  'thursday', 'friday', 'saturday', 'sunday' ]
    
    #将city、month、day、err的输出分离出来
    city_show = 'q1/3: which city do you want to know? \
                     \noption:<chicago,new york city,washington> \n>>> '
    month_show = 'q2/3: which month do you want to know? \
                      \noption:<all,january,february,march,april,may,june>\
                      \n>>> '
    day_show = 'q3/3: which day do you want to know? \
                    \noption:<all,monday,tuesday,wednesday, ... ,sunday>\
                    \n>>> '
    err_show = '---warning: I do not have that data.\
                  \n---Or you type a wrong name\n---Input Again\n>>> '
    
    #调用3次函数，将结果负责给city、month、day三个变量                 
    city = phrase_input(city_show,err_show,city_option)
    month = phrase_input(month_show,err_show,month_option)
    day = phrase_input(day_show,day_option,day_option)
    
    #输出结果
    str_got_input = 'Got Inputs:'
    print('')
    print(str_got_input.center(30,'>'))
    #str有.ljust .center .rjust等方式不使用变量的话很方便
    #http://www.tutorialspoint.com/python/string_ljust.htm
    print('>>>city requirement:',city)
    print('>>>month requirement:',month)
    print('>>>day requirement:',day)
    
    return city, month, day

#print(get_filters())


def load_data(city, month, day):
# 定义函数，根据用户输入的3个变量处理数据
# city是要处理那个城市
# month、day是要处理的月份和天输入

    df = pd.read_csv(CITY_DATA[city])
    # 根据输入的city读入csv文件


    df['Start Time'] = pd.to_datetime(df['Start Time'])
    
    # 将时间从字符格式转为datetime格式

    df['month'] = df['Start Time'].dt.month
    df['day_of_week'] = df['Start Time'].dt.weekday_name
    # 将month和weekday抽离出来建立新的列
    # 是为了后面根据输入进行数据筛选时候的参考

    if month != 'all':
    # 如果月份要求不是all，则按照要求筛选数据

        months = ['january', 'february', 'march', 'april', 'may', 'june']
        # 这是可选的所有月份
        month = months.index(month) + 1
        # 定义month变量等于输入月份的索引加1
        # 为什么要加1呢？
        # 因为索引是从0开始，用户输入是从1开始

        df = df[df['month'] == month]
        # 最后对df做更新
        # 右边df['month'] == month是一种过滤
        # 左边是month列的所有内容（1-6月）
        # 右边是刚刚生成的要筛选的month变量（由用户输入）
        # 中间是判断 ==
        # 结果就是满足右边条件的数据被重新写入df里

    if day != 'all':
    # week的筛选方式同上
        df = df[df['day_of_week'] == day.title()]

    return df


def time_stats(df):
    print('\n...Calculating The Most Frequent Times of Travel...\n')
    # 先是打印一行提示
    start_time = time.time()
    # 此处可以忽略，是调用time函数用于计算代码的执行时间

    # 为了能够计算时间要变换为pandas里面的时间格式
    # 就是使用.to_datatime()这个方法转换格式
    df['Start Time'] = pd.to_datetime(df['Start Time'])

    # TO DO: display the most common month
    df['month'] = df['Start Time'].dt.month
    max_month = df['month'].mode()[0]

    # TO DO: display the most common day of week
    df['day'] = df['Start Time'].dt.day
    max_day = df['day'].mode()[0]

    # TO DO: display the most common start hour
    df['hour'] = df['Start Time'].dt.hour
    max_hour = df['hour'].mode()[0]

    print("(Took %s seconds.)" % (time.time() - start_time))
    # 后面的time.time() - start_time就是用当前时间剪去开始运行时的时间
    # 可以看出这段代码运行了多长时间
    
    print('>>>max freq month is: ',max_month)
    print('>>>max freq day is: ',max_day)
    print('>>>max freq hour is: ',max_hour)
    #以上是3个频率的输出


def station_stats(df):
    """Displays statistics on the most popular stations and trip."""

    print('\n...Calculating The Most Popular Stations and Trip...\n')
    start_time = time.time()

    # TO DO: display most commonly used start station
    max_startsta = df['Start Station'].mode()[0]

    # TO DO: display most commonly used end station
    max_endsta = df['End Station'].mode()[0]

    # TO DO: display most frequent combination of start station and end station trip
    # 问题3是问那个车站组合出现最多
    # 为了回答这个问题，我们可以在数据新建1列
    # 例子命名为combine_sation
    # 由Start Station的数据加上End Station合并
    # 为了便于识别，我加上了 - - - 作为标签
    # 再之后就一样是使用mode()进行统计了
    df['combine_station'] = df['Start Station'] + ' --- ' + df['End Station']
    max_combine = df['combine_station'].mode()[0]

    print("(This took %s seconds.)" % (time.time() - start_time))

    print('>>>max freq start station is:')
    print(max_startsta)
    print('\n>>>max freq end station is:')
    print(max_endsta)
    print('\n>>>max freq combine statuion is:')
    print(max_combine)
    #以上是3个频率的输出


def trip_duration_stats(df):
    """Displays statistics on the total and average trip duration."""

    print('\n...Calculating Trip Duration...\n')
    start_time = time.time()

    # 使用.sum()方法求和
    total_trip_time = df['Trip Duration'].sum()

    # 使用.mean()方法求平均值
    mean_trip_time = df['Trip Duration'].mean()


    print("(Took %s seconds.)" % (time.time() - start_time))
    print('>>>total trip time is:')
    print(total_trip_time)
    print('>>>mean trip time is:')
    print(mean_trip_time)


def user_stats(df):
    """Displays statistics on bikeshare users."""

    print('\n...Calculating User Stats...\n')
    start_time = time.time()

    # TO DO: Display counts of user types
    # 使用.
    user_types = df['User Type'].value_counts()
    print('>>>user types is:')
    print(user_types)
    
    # TO DO: Display counts of gender
    try:
        gender_types = df['Gender'].value_counts()
    except KeyError:
        print('>>>The city you choose do not have /Gender/ data:')
    else:
        print('\n>>>gender types is:')
        print(gender_types)
    finally:
        pass
    # 也可以使用 ’Gender‘ in df.columns 做循环判断，这种方法不适用于try/except
    # 因为不会报错

    # TO DO: Display earliest, most recent, and most common year of birth
    try:
        earliest = df['Birth Year'].min()
    except KeyError:
        print('>>>The city you choose do not have /Year/ data:')
    else:
        recent = df['Birth Year'].max()
        common = df['Birth Year'].mode()[0]
        print('\n>>>earliest year of birth is:')
        print(int(earliest))
        print('\n>>>recent year of birth is:')
        print(int(recent))
        print('\n>>>common year of birth is:')
        print(int(common))

    print("(Took %s seconds.)" % (time.time() - start_time))

def main():
    while True:
        
        str_title = 'Hello! Let\'s explore some US bikeshare data!'
        print(str_title.center(48,'#'))
        print('')
        
        str_input = 'Step1 : Get input'
        print(str_input.center(48,'-'))
        city, month, day = get_filters()
        
        df = load_data(city, month, day)
        
        str_input = 'Step2 : Computing'
        print('')
        print(str_input.center(48,'-'))
        
        time_stats(df)
        station_stats(df)
        trip_duration_stats(df)
        user_stats(df)

        restart = input('\n### Proceeding complete. \
                        \n### Would you like to restart? \
                        \n### Enter yes to restart or any key to quit.\n')
        if restart.lower() != 'yes':
            break


if __name__ == "__main__":
	main()
