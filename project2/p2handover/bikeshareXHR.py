import time
import pandas as pd
import numpy as np

CITY_DATA = { 'chicago': 'chicago.csv',
              'new york city': 'new_york_city.csv',
              'washington': 'washington.csv' }

def phrase_input(input_prompt,err_prompt,option_list):
    user_input = input(input_prompt).lower()
    while user_input not in option_list:
        user_input = input(err_prompt).lower()
    return user_input

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
    city_option = CITY_DATA.keys()

    # TO DO: get user input for month (all, january, february, ... , june)
    month_option = ['all','january','february','march',
                     'april','may','may','june']

    # TO DO: get user input for day of week (all, monday, tuesday, ... sunday)
    day_option = ['all','monday','tuesday','wednesday','thursday',
                       'friday','saturday','sunday'] 
    city_prompt = 'q1:Would you like to see data for chicago, \
new york city, washington?>'
    month_prompt = 'q2:Would you like to see data for all, \
january, february, ... , june?>'
    day_prompt = 'q3:Would you like to see data for all,\
monday, tuesday, ... sunday?>'
    err_prompt = 'Sorry,I do not have that data.'
    city = phrase_input(city_prompt,err_prompt,city_option)
    month = phrase_input(month_prompt,err_prompt,month_option)
    day = phrase_input(day_prompt,err_prompt,day_option)
    return city, month, day
    print('-'*40)


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
    df['day_of_week'] = df['Start Time'].dt.weekday_name
    return city, month, day
    if month!= 'all':
        months = ['january','february','march','april','may','may','june']
        month = months.index() + 1
        df = df[df['month'] == month]
    if day!= 'all':
        df = df[df['day_of_week'] == day.title()]
    return df


def time_stats(df):
    """Displays statistics on the most frequent times of travel."""

    print('\nCalculating The Most Frequent Times of Travel...\n')
    start_time = time.time()

    # TO DO: display the most common month
    df['Start Time'] = pd.to_datetime(df['Start Time'])
    df['month'] = df['Start Time'].dt.month
    popular_month = df['month'].mode()[0]

    # TO DO: display the most common day of week
    df['day'] = df['Start Time'].dt.day
    popular_day = df['day'].mode()[0]

    # TO DO: display the most common start hour
    df['hour'] = df['Start Time'].dt.hour
    popular_hour = df['hour'].mode()[0]


    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)
    print('\nThe most Frequent Start month:', popular_month)
    print('\nThe most Frequent Start day:', popular_day)
    print('\nThe most Frequent Start Hour:', popular_hour)

def station_stats(df):
    """Displays statistics on the most popular stations and trip."""

    print('\nCalculating The Most Popular Stations and Trip...\n')
    start_time = time.time()

    # TO DO: display most commonly used start station
    max_start_station = df['Start Station'].mode()[0]

    # TO DO: display most commonly used end station
    max_end_station = df['End Station'].mode()[0]

    # TO DO: display most frequent combination of start station and end station trip
    df['combination'] = df['Start Station'] + '-----' + df['End Station']
    max_combination = df['combination'].mode()[0]

    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)
    print('\nThe most commonly used start station is:',max_start_station)
    print('\nThe most commonly used end station is:',max_end_station)
    print('\nThe most frequent combination is:',max_combination)

def trip_duration_stats(df):
    """Displays statistics on the total and average trip duration."""

    print('\nCalculating Trip Duration...\n')
    start_time = time.time()

    # TO DO: display total travel time
    total_travel_time = df['Trip Duration'].sum()

    # TO DO: display mean travel time
    mean_travel_time = df['Trip Duration'].mean()

    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)
    print('\nThe total travel time is:',total_travel_time)
    print('\nThe mean travel time is:',mean_travel_time)

def user_stats(df):
    """Displays statistics on bikeshare users."""

    print('\nCalculating User Stats...\n')
    start_time = time.time()

    # TO DO: Display counts of user types
    user_types = df['User Type'].value_counts()

    # TO DO: Display counts of gender
    gender_types = df['Gender'].value_counts()

    # TO DO: Display earliest, most recent, and most common year of birth
    earliest = df['Birth Year'].min()
    recent = df['Birth Year'].max()
    common = df['Birth Year'].mode()[0]

    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)
    print('\nThe counts of user types is:',user_types)
    print('\nThe counts of gender is:',gender_types)
    print('\nThe eraliest year of birth is:',earliest)
    print('\nThe recent year of birth is:',recent)
    print('\nThe most common year of birth is:',common)


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
