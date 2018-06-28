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
    city = input('q1/3: which city do you want to know? chicago, new york city or washington? > ')

    # TO DO: get user input for month (all, january, february, ... , june)
    month = input('q2/3: which month do you want to know? choose from all, january, february, ... , june. > ')

    # TO DO: get user input for day of week (all, monday, tuesday, ... sunday)
    day = input('q3/3: which day do you want to know? choose from all, monday, tuesday, ... sunday. > ')


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
    filename = CITY_DATA['city']
    print(filename)


    return none

#print(get_filters())
print(load_data(get_filters()))