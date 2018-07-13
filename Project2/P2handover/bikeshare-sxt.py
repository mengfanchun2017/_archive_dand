
# coding: utf-8

# In[3]:


import time
import pandas as pd
import numpy as np


# In[4]:


CITY_DATA = { 'chicago': 'chicago.csv',
              'new york city': 'new_york_city.csv ',
              'washington': 'washington.csv' }


# In[5]:


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
    city = input('Would you like to see data for Chicago, New York, or Washington?\n').lower()
    while city not in ['chicago', 'new York', 'washington']:
        city = input('Error Input,Would you like to see data for Chicago, New York, or Washington?\n').lower()
   
   # TO DO: get user input for month (all, january, february, ... , june)
    month = input('Would you like to filter the data by month, day, both,or not at all? Type "None" for no time filter.\n')
    while month not in ['january', 'february', 'march', 'april', 'may', 'june', 'all']:
        month = input( 'Would you like to filter the data by month, day, both,or not at all? Type "None" for no time filter.\n').lower()
   
   
    # TO DO: get user input for day of week (all, monday, tuesday, ... sunday)
    
    day = input('Which day? Please type a day M. Tu. W. Th. F. Sa. Su. \n')
    while day not in ['monday', 'tuesday', 'wednesday', 'thursday',  'friday',  'saturday', 'sunday']:
        day = input('Which day? Please type a day M. Tu. W. Th. F. Sa. Su. \n').lower()
    print('-'*40)
    return city, month, day


# In[6]:


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
    df = pd.read_csv(CITY_DATA[city.lower()])
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


# In[7]:


def time_stats(df):
    """Displays statistics on the most frequent times of travel."""

    print('\nCalculating The Most Frequent Times of Travel...\n')
    start_time = time.time()
    df['Start Time'] = pd.to_datetime(df['Start Time'])
    
    # TO DO: display the most common month
    df['month'] = df['Start Time'].dt.month
    popular_month = df['month'].mode()[0]
    print('Most Popular Start Month:', popular_month)
    
    # TO DO: display the most common day of week
    df['day'] = df['Start Time'].dt.weekday_name
    popular_day = df['day'].mode()[0]
    print('Most Popular Start Day:', popular_day)
    
    # TO DO: display the most common start hour
    df['hour'] = df['Start Time'].dt.hour
    popular_hour = df['hour'].mode()[0]
    print('Most Popular Start Hour:', popular_hour)

    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)


# In[8]:


def station_stats(df):
    """Displays statistics on the most popular stations and trip."""

    print('\nCalculating The Most Popular Stations and Trip...\n')
    start_time = time.time()
    start_station= df['Start Station']
    end_station = df['End Station']
    # TO DO: display most commonly used start station
    most_start = start_station.value_counts().argmax()
    print('Most commonly used start station:',most_start)
    # TO DO: display most commonly used end station
    most_end = end_station.value_counts().argmax()
    print('most commonly used end station:',most_end)
    # TO DO: display most frequent combination of start station and end station trip
    most_freq_comb = (start_station+end_station).value_counts().argmax()
    print('Most Trip:',most_freq_comb)
    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)


# In[9]:


def trip_duration_stats(df):
    """Displays statistics on the total and average trip duration."""

    print('\nCalculating Trip Duration...\n')
    start_time = time.time()

    # TO DO: display total travel time
    total_duration = df['Trip Duration'].sum()
    print('Total Duration:',total_duration)
     
    # TO DO: display mean travel time
    avg_duration = df['Trip Duration'].mean()
    print('Average Duration:',avg_duration)
    
    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)


# In[10]:


def user_stats(df):
    """Displays statistics on bikeshare users."""

    print('\nCalculating User Stats...\n')
    start_time = time.time()

    # TO DO: Display counts of user types
    user_types = df['User Type'].value_counts()
    print('User Type:',user_types)
    try: 
        # TO DO: Display counts of gender
        gender = df['Gender'].value_counts()
        print('Gender:',gender)
        # TO DO: Display earliest, most recent, and most common year of birth
        birth_year = df['Birth Year']
        earliest_birth = birth_year.min()
        most_recent_birth = birth_year.max()
        most_common_birth = birth_year.value_counts().argmax()
        print('Earliest year of birth:',earliest_birth)
        print('Most recent year of birth:',most_recent_birth)
        print('Most common year of birth:',most_common_birth)
    
    except: 
        print('No DATA\n')
    
    print("\nThis took %s seconds." % (time.time() - start_time))
    print('-'*40)



# In[ ]:


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

