from django.db import models

class State(models.Model):
    state_name = models.CharField(max_length=2)