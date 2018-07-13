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
    city_option = ['chicago', 'new york city', 'washington']
    while True:
        city = input('1-1:which city do you want to know? chicago, new york city, washington? > ')
        if city in city_option:
            break
    # TO DO: get user input for month (all, january, february, ... , june)
    mon_option = ['all' ,'january' ,'february', 'march', 'april', 'may', 'june']
    while True:
        month = input('1-2:which cmonth do you want to know? choose from all,january ...june? > ' )
        if month in mon_option:
            break
    # TO DO: get user input for day of week (all, monday, tuesday, ... sunday)
    day_option = ['all', 'monday', 'tuesday', 'wednesday', 'thurday', 'friday', 'saturday', 'sunday']
    while True:
        day = input('1-3:which day do you want to know? choose from all, monday, tuesday ... sunday? > ')
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
    df['Start Time'] = pd.to_datetime(df['Start Time'])
    df['month'] = df['Start Time'].dt.month
    df['day'] = df['Start Time'].dt.weekday_name
    if month != 'all':
        months = ['january', 'february', 'march', 'april', 'may', 'june']
        month = months.index(month) + 1
        df = df[df['month'] == month]
    if day != 'all':
        df = df[df['day'] == day]
    return df


def time_stats(df):
    """Displays statistics on the most frequent times of travel."""

    print('\nCalculating The Most Frequent Times of Travel...\n')
    start_time = time.time()
    df['Strat Time'] = pd.to_datetime(df['Start Time'])
                                      
    # TO DO: display the most common month
    df['month'] = df['Start Time'].dt.month           
    popular_month = df['month'].mode()[0]
    print('the most common month ：', popular_month)
    # TO DO: display the most common day of week
    df['day'] = df['Start Time'].dt.day                     
    popular_day = df['day'].mode()[0]
    print('the most common day of week ：', popular_day)
    # TO DO: display the most common start hour
    df['hour'] = df['Start Time'].dt.hour                     
    popular_hour = df['hour'].mode()[0]
    print('the most common start time ：', popular_hour)

    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)


def station_stats(df):
    """Displays statistics on the most popular stations and trip."""

    print('\nCalculating The Most Popular Stations and Trip...\n')
    start_time = time.time()

    # TO DO: display most commonly used start station
    popular_start_station = df['Start Station'].mode()[0]
    print('the most commonly used start station ：', popular_start_station)           
    # TO DO: display most commonly used end station
    popular_end_station = df['End Station'].mode()[0]
    print('the most commonly used end station ：', popular_end_station)
    # TO DO: display most frequent combination of start station and end station trip
    popular_trip = df[('Start Station' == popular_start_station) & ('End_Station' == popular_end_station)]
    print('most frequent combination of start station and end station trip : ', popular_trip)

    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)


def trip_duration_stats(df):
    """Displays statistics on the total and average trip duration."""

    print('\nCalculating Trip Duration...\n')
    start_time = time.time()

    # TO DO: display total travel time
    travel_time = df['End Time' - 'Start Time']
    print('total travel time :',travel_time.sum())
    # TO DO: display mean travel time
    travel_time = df['End Time' - 'Start Time']
    print('mean travel time :', travel_time.mean())

    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)


def user_stats(df):
    """Displays statistics on bikeshare users."""

    print('\nCalculating User Stats...\n')
    start_time = time.time()

    # TO DO: Display counts of user types
    user_types = df['User Type'].value_counts()
    print('counts of user types :', user_types)
    
    # TO DO: Display counts of gender
    gender = df['Gender'].value_counts()
    print('counts of gender: ',gender)

    # TO DO: Display earliest, most recent, and most common year of birth
    df['Birth Year'] = pd.to_datetime(df['Birth Year'])
    df['year'] = df['Birth Year'].dt.year
    earliest_year = df['year'].min()
    most_recent_year = df['year'].max()
    most_common_year = df['year'].mean()[0]
    print('earliest  year of birth :',earliest_year)
    print('most recent year of birth :',most_recent_year)
    print('most common year of birth :', most_common_year)
                                          
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