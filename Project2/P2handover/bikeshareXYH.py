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
    city_option = CITY_DATA.keys()
    month_option = ['all', 'january', 'february','march' ,'april','may ','june']
    day_option = ['all', 'monday', 'tuesday', 'wednesday','thursday','friday','saurday','sunday']
    while True:
      city = input('q1/3：which city do you want to know? chicago, new york city or washington')
    
      if city.lower()in city_option:
            break
    while True:
      month = input('q2/3: which month do you want to know? all, january, february, ... , june')
      if month.lower()in month_option:
            break
    while True:
      day = input('q3/3: which day do you want to know ? all, monday, tuesday, ... sunday')
      if day.lower() in day_option:
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

    #Writing some frequently used data into an extra column in here may simplifies your code.
    df['Start Time'] = pd.to_datetime(df['Start Time'])
    df['month'] = df['Start Time'].dt.month
    df['day_of_week'] = df['Start Time'].dt.weekday_name
    if month != 'all':
        months = ['january', 'february', 'march', 'april', 'may', 'june']
        month = months.index(month) + 1     
        df = df[df['month'] == month]    
    if day != 'all':
        df = df[df['day_of_week'] == day.title()]
    return df



def time_stats(df):
    """Displays statistics on the most frequent times of travel."""

    print('\nCalculating The Most Frequent Times of Travel...\n')
    start_time = time.time()

    # TO DO: display the most common month
    df['month'] =df['Start Time'].dt.month
    max_month = df['month'].mode()[0]

    # TO DO: display the most common day of week
    df['day'] =df['Start Time'].dt.day
    max_day = df['day'].mode()[0]

    # TO DO: display the most common start hour
    df['hour'] =df['Start Time'].dt.hour
    max_hour = df['hour'].mode()[0]


    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)
    print('The most frequent month :')
    print(max_month)
    print('The most frequent day :')
    print(max_day)
    print('The most frequent hour :')
    print(max_hour)
  

def station_stats(df):
    """Displays statistics on the most popular stations and trip."""

    print('\nCalculating The Most Popular Stations and Trip...\n')
    start_time = time.time()

    # TO DO: display most commonly used start station、
    most_start_station = df ['Start Station'].mode()[0]

    # TO DO: display most commonly used end station
    most_end_station = df ['End Station'].mode()[0]

    # TO DO: display most frequent combination of start station and end station trip
    df ['Combine Station'] = df ['Start Station'] + '---'+ ['End Station']
    most_combine_station =df ['Combine Station'].mode()[0]

    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)
    print('most commonly used start station is')
    print(most_start_station)
    print('most commonly used end station is')
    print(most_end_station)
    print('most frequent combination of start station and end station trip is')
    print(most_combine_station)
    
    


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
    print('total travel time is')
    print(total_travel_time)
    print('mean travel time is')
    print(mean_travel_time)

   


def user_stats(df):
    """Displays statistics on bikeshare users."""

    print('\nCalculating User Stats...\n')
    start_time = time.time()

    # TO DO: Display counts of user types
    user_types = df['User Type'].value_counts()

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
    

    # TO DO: Display earliest, most recent, and most common year of birth
    earliest = df ['Birth Year'].min()
    most_recent = df ['Birth Year'].max()
    most_common = df ['Birth Year'].mode()[0]
    

    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)
    print('user type is')
    print(user_types)
    print('gender type is')
    print(gender_types)
    print('earliest year of birth is')
    print(earliest)
    print('most recent year of birth is')
    print(most_recent)
    print('most common year of birth is')
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
