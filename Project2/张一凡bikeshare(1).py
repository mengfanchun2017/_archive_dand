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
    While Ture
    city=['chicago','new york city','washington'] 
    city=input（'would you like to see data for chicago,new york city or washington?').lower() 
    if city in cities:
      break
    print('please entere a valid city')
    

    
    
    
    
    # TO DO: get user input for month (all, january, february, ... , june)
	month=['all','january','february','march','april','may','june']
    month=input('which month would you like to filter by data?'format(',',join())).lower()
    if month in months
    break
    print('please enter a valid month')
    

    
    
    
    
    # TO DO: get user input for day of week (all, monday, tuesday, ... sunday)
	day=['all','monday','tuesday','wednesday','thuraday','friday','saturday','sunday']
    day=input('which day of the week would you like to analyse?'format(',',join())).lower()
    if day in days
    break
    print('please enter the valid day')
    

    
    
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


    return df


def time_stats(df):
    """Displays statistics on the most frequent times of travel."""

    print('\nCalculating The Most Frequent Times of Travel...\n')
    start_time = time.time()

    # TO DO: display the most common month
	month=['january','february','march','april','may','june']
    popular_month=month.[df['month'].mode()[0]]
    print('the most popular month is:',popular months)
    
   
    

    # TO DO: display the most common day of week
	day=['monday','tuesday','wednesday','thuraday','friday','saturday','sunday']
    print('the most common day of week is:',df['day_of_week'].mode()[0])

   
    
    # TO DO: display the most common start hour
	df['hour']=df['start hour'].dt.hour
    print('the most common start hour is:',df['hour'].mode()[0])

    
    
    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)


def station_stats(df):
    """Displays statistics on the most popular stations and trip."""

    print('\nCalculating The Most Popular Stations and Trip...\n')
    start_time = time.time()

    # TO DO: display most commonly used start station
	print('the most commomly used start station is:',df['start station'].mode()[0])

    
    
    # TO DO: display most commonly used end station
	print('the most commomly used end station is:',df['end station'].mode()[0])

    
    # TO DO: display most frequent combination of start station and end station trip
	df['combine']=df['start station']+'/'+df['end station']
    print('most frequent trip is:',df['combine'].mode()[0])
    
    
	
    
    
    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)


def trip_duration_stats(df):
    """Displays statistics on the total and average trip duration."""

    print('\nCalculating Trip Duration...\n')
    start_time = time.time()

    # TO DO: display total travel time
    print('the total travel time is:',df['travel time'].sum())
    


    # TO DO: display mean travel time
	print('the display mean travel time is:',df['travel time'].mean())
    
    

    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)


def user_stats(df):
    """Displays statistics on bikeshare users."""

    print('\nCalculating User Stats...\n')
    start_time = time.time()

    # TO DO: Display counts of user types
	print('the number of user type counts is:',df['user type'].value_counts())
    

    # TO DO: Display counts of gender
	print('the number of gender counts is:'df['gender'].value_counts())
    

    # TO DO: Display earliest, most recent, and most common year of birth
	print('the earliest yaer of birth is:'.df['birth year'].min())
    print('the most recent yaer of birth is:'.df['birth year'].max())
    print('the most common yaer of birth is:'.df['birth year'].mode())
  

    
    
    
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
