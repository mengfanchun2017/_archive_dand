import time
import pandas as pd
import numpy as np
import seaborn

CITY_DATA = { 'chicago': 'chicago.csv',
              'new york city': 'new_york_city.csv',
              'washington': 'washington.csv' }

def get_filters():
    """
    Asks user to specify a city, month, and day to analyze.

    Returns:
        (str) city - name of the city to analyze
        (str) month - name of the month to filter by, or "all" to apply no month filter
        (str) day - name of the day of week to filter by, or "all" to apply no day filter
    """
    print('Hello! Let\'s explore some US bikeshare data!')

    city_option = ['chicago', 'new york city', 'washington']
    mon_option = ['all', 'january', 'february', 'march', 'april', 'may', 'june']
    day_option = ['all', 'monday', 'tuesday',  'wednesday', 'thursday', 'friday', 'saturday', 'sunday' ]
    #三个输入的备选

    while True:
        city = input('q1/3: which city do you want to know? chicago, \
                     new york city or washington? > ')
        if city in city_option:
            break
    #要求输入city并检查是否合法

    while True:
    # 总是循环执行，直到遇到break
        month = input('q2/3: which month do you want to know? choose from all, \
                  january, february, ... , june. > ')
        # \ 是代码换行的意思，python的编程规范是每行不超过79个字符
        if month in mon_option:
            break
    # 当经过判断 month 变量在可选范围内，就break结束while循环

    while True:
        day = input('q3/3: which day do you want to know? choose from all, \
                  monday, ... , sunday. > ')
        if day in day_option:
            break

    print('-'*40)
    return city, month, day

#print(get_filters())


def load_data(city, month, day):
# 定义函数，根据用户输入的3个变量处理数据
# city是要处理那个城市
# month、day是要处理的月份和天输入

    df = pd.read_csv(CITY_DATA[city])
    # 根据输入的city读入csv文件
    print('analyzing --- ', city)

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
    print('\nCalculating The Most Frequent Times of Travel...\n')
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

    print("\nThis took %s seconds." % (time.time() - start_time))
    # 后面的time.time() - start_time就是用当前时间剪去开始运行时的时间
    # 可以看出这段代码运行了多长时间
    print('-'*40)
    print('max freq month is:')
    print(max_month)
    print('max freq day is:')
    print(max_day)
    print('max freq hour is:')
    print(max_hour)
    #以上是3个频率的输出


def station_stats(df):
    """Displays statistics on the most popular stations and trip."""

    print('\nCalculating The Most Popular Stations and Trip...\n')
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

    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)
    print('max freq start station is:')
    print(max_startsta)
    print('\nmax freq end station is:')
    print(max_endsta)
    print('\nmax freq combine statuion is:')
    print(max_combine)
    #以上是3个频率的输出


def trip_duration_stats(df):
    """Displays statistics on the total and average trip duration."""

    print('\nCalculating Trip Duration...\n')
    start_time = time.time()

    # 使用.sum()方法求和
    total_trip_time = df['Trip Duration'].sum()

    # 使用.mean()方法求平均值
    mean_trip_time = df['Trip Duration'].mean()


    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)
    print('total trip time is:')
    print(total_trip_time)
    print('mean trip time is:')
    print(mean_trip_time)


def user_stats(df):
    """Displays statistics on bikeshare users."""

    print('\nCalculating User Stats...\n')
    start_time = time.time()

    # TO DO: Display counts of user types
    # 使用.
    user_types = df['User Type'].value_counts()

    # TO DO: Display counts of gender
    gender_types = df['Gender'].value_counts()

    # TO DO: Display earliest, most recent, and most common year of birth
    earliest = df['Birth Year'].min()
    recent = df['Birth Year'].max()
    common = df['Birth Year'].mode()[0]
    
    print('user types is:')
    print(user_types)
    print('\ngender types is:')
    print(gender_types)
    print('\nrecent year of birth is:')
    print(earliest)
    print('\nrecent year of birth is:')
    print(recent)
    print('\ncommon year of birth is:')
    print(common)


    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)

def main():
    while True:
        city, month, day = get_filters()
        df = load_data(city, month, day)

        time_stats(df)
        station_stats(df)
        trip_duration_stats(df)
        user_stats(df)

        restart = input('\nWould you like to restart? Enter yes or no.\n')
        if restart.lower() != 'yes':
            break


if __name__ == "__main__":
	main()
