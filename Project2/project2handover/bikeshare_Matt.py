import time
import pandas as pd
import numpy as np

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
    # TO DO: get user input for city (chicago, new york city, washington). HINT: Use a while loop to handle invalid inputs
    city_option = ['all', 'chicago', 'new york city', 'washington']
    mon_option = ['all', 'january', 'february', 'march', 'april', 'may', 'june']
    day_option = ['all', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    while True:
        city = input( 'q1/3: which city do you want to know? chicago,new york city or washington? > ')
        if city in city_option:
            break
    # TO DO: get user input for month (all, january, february, ... , june)
    while True:
        month = input('q2/3: which month do you want to know? choose from all,january, february, ... , june. > ') 
        if month in mon_option:
            break
    # TO DO: get user input for day of week (all, monday, tuesday, ... sunday)
    while True:
        day = input('q3/3: which date do you want to know? choose from all,monday, tuesday, ... ,sunday. > ')
        if day in day_option:
            break
    print('-'*40)
    return city, month, day


def load_data(city, month, day):
    """
    Loads data for the specified city and filters by month and day if applicable.

    Args:
        (str) city - name of the city to analyze
        (str) month - name of the month to filter by, or "all" to apply no month filter
        (str) day - name of the day of week to filter by, or "all" to apply no day filter
    Returns:
        df - Pandas DataFrame containing city data filtered by month and day
    """
    df = pd.read_csv(CITY_DATA[city])
    print('analyzing --- ',city)

    df['Start Time'] = pd.to_datetime(df['Start Time'])
    df['month'] = df['Sstart Time'].df.month
    df['day_of_week'] = df['Sstart Time'].df.weekday_name


    if month != 'all':
        months = [ 'january', 'february', 'march', 'april', 'may', 'june']
        month = months.index(month) + 1
        df = df[df['month'] == month]
    
    if day != 'all':
        days = ['all', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        day - days.index(day) + 1
        df = df[df['day_of_week'] == day.title()]
    
    return df

def time_stats(df):
    """Displays statistics on the most frequent times of travel."""
    
    print('\nCalculating The Most Frequent Times of Travel...\n')
    start_time = time.time()
    
    df['Start Time'] = pd.to_datetime(df['Start Time'])

    # TO DO: display the most common month
    common_month = df['month'].mode()[0]
    print ('the most common month:' ,common_month)

    # TO DO: display the most common day of week
    common_day = df['day'].mode()[0]
    print ('the most common day:' ,common_day)

    # TO DO: display the most common start hour
    common_hour = df['hour'].mode()[0]
    print ('the most common hour:' ,common_hour)

    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)
    print('the most common month is: ')
    print(common_month)
    print('the most common day is: ')
    print(common_day)
    print('the most common hour is: ')
    print(common_hour)

def station_stats(df):
    """Displays statistics on the most popular stations and trip."""

    print('\nCalculating The Most Popular Stations and Trip...\n')
    start_time = time.time()

    # TO DO: display most commonly used start station
    common_start_station = df['start station'].mode()[0]
    print ('the most commonly used start station is:' ,common_start_station)

    # TO DO: display most commonly used end station
    common_end_station = df['end station'].mode()[0]
    print ('the most commonly used end station is:' ,common_end_station)

    # TO DO: display most frequent combination of start station and end station trip
    df['combine_station'] = df['Start Station'] + ' 到 ' + df['End Station']
    max_combine = df['combine_station'].mode()[0]
    print ("most frequent trip is:" ,max_combine)

    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)


def trip_duration_stats(df):
    """Displays statistics on the total and average trip duration."""

    print('\nCalculating Trip Duration...\n')
    start_time = time.time()

    # TO DO: display total travel time
    total_trip_time = df['Trip Duation'].sum()

    # TO DO: display mean travel time
    mean_trip_time = df['Trip Duation'].mean()

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
    user_types = df['User Type'].value_counts()

    # TO DO: Display counts of gender
    gender_types = df['Gender'].value_counts()

    # TO DO: Display earliest, most recent, and most common year of birth
    earliest_user = df['Birth Year'].min()
    most_recent = df['Birth Year'].max()
    most_common = df['Birth Year'].mode()[0]

    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)

    print('user types is:')
    print(user_types)
    print('\ngender types is:')
    print(gender_types)
    print('\nearliest year of birth is:')
    print(earliest_user)
    print('\nrecent year of birth is:')
    print(most_recent)
    print('\nnost common year of birth is:')
    print(most_common)

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
