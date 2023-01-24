from django.db import models

class State(models.Model):
    state_name = models.CharField(max_length=25)
    tax_rate = models.DecimalField(max_digits=4, decimal_places=2)
    tax_rank = models.SmallIntegerField(max_length=2)
    political_affiliation = models.CharField(max_length=15)
    median_home_value = models.SmallIntegerField(max_length=6)
    home_rank = models.SmallIntegerField(max_length=2)
    crime_rate = models.DecimalField(max_digits=7, decimal_places=3)
    crime_rank = models.SmallIntegerField(max_length=2)
    weighted_rank = models.SmallIntegerField(max_length=2)