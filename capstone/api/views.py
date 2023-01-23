import json
import requests
from csv import DictReader
from bs4 import BeautifulSoup
from urllib.request import urlopen
from rest_framework import generics
from .models import State
from .serializers import ApiSerializer


class StateAPIView(generics.ListAPIView):
    queryset = State.objects.all()
    serializer_class = ApiSerializer


class CreateState(generics.CreateAPIView):
    serializer_class = ApiSerializer


class StateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = State.objects.all()
    serializer_class = ApiSerializer


# Opens Tax Foundation website to webscrape effective tax burdens
with urlopen('https://taxfoundation.org/tax-burden-by-state-2022/#results') as response:
    soup_tax = BeautifulSoup(response, 'html.parser')   # parses HTML data webpage listed above

# Opens CSV files to access state data
politics_csv = r'C:\Users\joshg\pdx_code\class_opal\code\josh\python\josh_mini_capstone\politics.csv'
with open(politics_csv, 'r') as file:
    politics_dict = DictReader(file) # stores CSV data as dictionaries
    politics_list = list(politics_dict)  # stores dictionaries from CSV data in a list

homes_csv = r'C:\Users\joshg\pdx_code\class_opal\code\josh\python\josh_mini_capstone\homes.csv'
with open(homes_csv, 'r') as file:
    homes_dict = DictReader(file)
    homes_list = list(homes_dict)

crime_csv = r'C:\Users\joshg\pdx_code\class_opal\code\josh\python\josh_mini_capstone\crime.csv'
with open(crime_csv, 'r') as file:
    crime_dict = DictReader(file)
    crime_list = list(crime_dict)