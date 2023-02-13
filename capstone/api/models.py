from django.db import models

class State(models.Model):
    state_name = models.CharField(max_length=25)
    tax_rate = models.DecimalField(max_digits=4, decimal_places=2, null=True)
    tax_rank = models.SmallIntegerField(null=True)
    political_affiliation = models.CharField(max_length=15, null=True)
    median_home_value = models.SmallIntegerField(null=True)
    crime_rate = models.DecimalField(max_digits=7, decimal_places=3, null=True)
    crime_rank = models.SmallIntegerField(null=True)
    tourism_site = models.CharField(max_length=50, null=True)

    def __str__(self):
        return f'''
        State: {self.state_name}
        Tax Rate: {self.tax_rate}%
        Tax Rank: {self.tax_rank}
        Political Party: {self.political_affiliation}
        Median Home Price: ${str(self.median_home_value)[0:3] + ',' + str(self.median_home_value)[3:]}
        Crime Rate: {round(self.crime_rate)} per 100,000
        Crime Rank: {self.crime_rank}
        Tourism Site: {self.tourism_site}
        '''