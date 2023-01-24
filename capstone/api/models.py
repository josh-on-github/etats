from django.db import models

class State(models.Model):
    state_name = models.CharField(max_length=25)
    tax_rate = models.DecimalField(max_digits=4, decimal_places=2, null=True)
    tax_rank = models.SmallIntegerField(null=True)
    political_affiliation = models.CharField(max_length=15, null=True)
    median_home_value = models.SmallIntegerField(null=True)
    home_rank = models.SmallIntegerField(null=True)
    crime_rate = models.DecimalField(max_digits=7, decimal_places=3, null=True)
    crime_rank = models.SmallIntegerField(null=True)
    weighted_rank = models.SmallIntegerField(null=True)