from django.db import models
from django.contrib.auth.models import User


class State(models.Model):
    state_name = models.CharField(max_length=2)
    # tax_rate = 
    # tax_rank = 
    # political_affiliation = models.CharField(max_length=10)
    # median_home_value = 
    # home_rank = 
    # crime_rate = 
    # crime_rank = 
    # weighted_rank = 
    
    
    def __str__ (self):
        return self.state_name