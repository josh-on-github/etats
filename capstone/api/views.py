from rest_framework import generics
from .models import State
from .serializers import ApiSerializer

class StateAPIView(generics.ListAPIView):
    queryset = State.objects.all()
    serializer_class = ApiSerializer


'''########## USE THE FOLLOWING CODE FOR ANNUAL UPDATE OF API DATA ##########'''

# import json
# from bs4 import BeautifulSoup
# from urllib.request import urlopen

# # Opens Tax Foundation website to webscrape effective tax burdens
# with urlopen('https://taxfoundation.org/tax-burden-by-state-2022/#results') as response:
#     soup_tax = BeautifulSoup(response, 'html.parser')   # parses HTML data from webpage listed above

# # Opens JSON files to access state data
# politics_json = r'api\static\api\politics.json'
# with open(politics_json, 'r') as file:
#     politics_list = json.load(file)

# homes_json = r'api\static\api\homes.json'
# with open(homes_json, 'r') as file:
#     homes_list = json.load(file)

# crime_json = r'api\static\api\crime.json'
# with open(crime_json, 'r') as file:
#     crime_list = json.load(file)

# tourism_sites.json = r'api\static\api\tourism_sites.json'
# with open(tourism_sites_json, 'r') as file:
#     tourism_sites_list = json.load(file)


# def tax_burden(): # Assigns state name, tax rate, and tax rank to model fields
#     for row in soup_tax.table.contents[5].find_all('tr'):   # loops selected table data in parse tree
#         State.objects.create(
#             state_name = row.contents[1].string,
#             tax_rate = row.contents[3].string, # stores string of effective tax rate from table
#             tax_rank = row.contents[5].string, # stores string of state rank (1 is lowest tax rate) from table
#             political_affiliation = None,
#             median_home_value = None,
#             crime_rate = None,
#             crime_rank = None,
#             tourism_site = None,
#         )


# def politics():   # Assigns political party control of states when state names match created object above
#     for item in politics_list:
#         State.objects.filter(state_name=item['state']).update(political_affiliation=item['control'])


# def homes():  # Assigns median home price of states when state names match created object above
#     for item in homes_list:
#         State.objects.filter(state_name=item['state']).update(median_home_value=item['MedianValue'])
        

# def crime():  # Assigns crime rate (violent/property) of states when state names match created object above
#     for item in crime_list:
#         State.objects.filter(state_name=item['state']).update(crime_rate=item['rate'])


# def tourism_sites():  #Assigns state tourism sites when state names match created object above
#     for item in tourism_sites_list
#         State.objects.filter(state_name=item['state']).update(tourism_site=item['tourism_site'])