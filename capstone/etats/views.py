from django.shortcuts import render
from django.http import HttpResponse
from .models import State

def index(request):
    print(State.objects.all())
    return HttpResponse("Hello, world")