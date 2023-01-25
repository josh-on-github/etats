from django.shortcuts import render
from django.http import HttpResponse
from .models import Rank

def index(request):
    print(Rank.objects.all())
    return HttpResponse("Hello, world")