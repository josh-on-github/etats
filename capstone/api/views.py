import json
# import requests
# from csv import DictReader
from bs4 import BeautifulSoup
from urllib.request import urlopen
from rest_framework import generics
from .models import State
from .serializers import ApiSerializer

# Opens Tax Foundation website to webscrape effective tax burdens
with urlopen('https://taxfoundation.org/tax-burden-by-state-2022/#results') as response:
    soup_tax = BeautifulSoup(response, 'html.parser')   # parses HTML data from webpage listed above

# Opens JSON files to access state data
politics_json = r'api\static\api\politics.json'
with open(politics_json, 'r') as file:
    politics_list = json.load(file)

homes_json = r'api\static\api\homes.json'
with open(homes_json, 'r') as file:
    homes_list = json.load(file)

crime_json = r'api\static\api\crime.json'
with open(crime_json, 'r') as file:
    crime_list = json.load(file)

class StateAPIView(generics.ListAPIView):
    queryset = State.objects.all()
    serializer_class = ApiSerializer


class CreateState(generics.CreateAPIView):
    serializer_class = ApiSerializer


class StateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = State.objects.all()
    serializer_class = ApiSerializer



def tax_burden(): # Assigns state name, tax rate, and tax rank to model fields
    for row in soup_tax.table.contents[5].find_all('tr'):   # loops selected table data in parse tree
        State.objects.create(
            state_name = row.contents[1].string,
            tax_rate = row.contents[3].string, # stores string of effective tax rate from table
            tax_rank = row.contents[5].string, # stores string of state rank (1 is lowest tax rate) from table
            political_affiliation = None,
            median_home_value = None,
            # home_rank = None,
            crime_rate = None,
            crime_rank = None,
        )


# print(State.objects.all())

# def politics():   # Assigns political party control of states when state names match object above
#     for item in politics_list:  # loops data from selected JSON array of objects
#         state_object = State.objects.filter(state_name=item['state'])
        # if item['state'] == state_object['state_name']:
            
        #     state_object.political_affiliation = item['control']

        # if State.objects.filter(state_name=item['state']) == True:
        #     State.objects.filter(political_affiliation=item['control'])

        #     State.objects.filter(state_name)


def homes():  # Returns state and median home price based upon user input for either state or price
    state_object = State.objects.all()
    for item in homes_list:
        if item['state'] == state_object.state_name:
            state_object.median_home_value = item['MedianValue']
            state_object.home_rank = item['fips']
        

def crime():  # Returns state(s) and crime rate (violent/property) based upon user input for either state or crime rate per 100k people
    state_object = State.objects.all()
    for item in crime_list:
        if item['state'] == state_object.state_name:
            state_object.crime_rate = item['rate']
            state_object.crime_rank = item['fips']