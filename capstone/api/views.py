import json
# import requests
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
    soup_tax = BeautifulSoup(response, 'html.parser')   # parses HTML data from webpage listed above

# Opens JSON files to access state data
politics_json = 'capstone\api\static\api\politics.json'
with open(politics_json, 'r') as file:
    politics_list = json.load(file)

homes_json = 'capstone\api\static\api\homes.json'
with open(homes_json, 'r') as file:
    homes_list = json.load(file)

crime_json = 'capstone\api\static\api\crime.json'
with open(crime_json, 'r') as file:
    crime_list = json.load(file)