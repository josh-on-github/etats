from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from .models import Rank
from api.models import State


def summary(request):
    if request.method == 'POST':
        form_data = request.POST
        state_object = None
        for item in form_data:
            if item != 'csrfmiddlewaretoken' and form_data[item] != '':
                print(form_data[item])
                state_object = State.objects.filter(**{item: form_data[item]})
                print(state_object)
        context = {'state_object': state_object}
        return render(request, 'etats/summary.html', context)

    else:
        rank_list = Rank.objects.all()
        context = {'rank_list': rank_list}
        return render(request, 'etats/summary.html', context)


def taxes(request):
    state_object = State.objects.all()
    context = {'state_object' : state_object}
    return render(request, 'etats/taxes.html', context)


def politics(request):
    state_object = State.objects.all()
    context = {'state_object' : state_object}
    return render(request, 'etats/politics.html', context)


def housing(request):
    state_object = State.objects.all()
    context = {'state_object' : state_object}
    return render(request, 'etats/housing.html', context)
    

def crime(request):
    state_object = State.objects.all()
    context = {'state_object' : state_object}
    return render(request, 'etats/crime.html', context)


def weighted(request):
    state_object = State.objects.all()
    context = {'state_object' : state_object}
    return render(request, 'etats/weighted.html', context)


def index(request):
    state_object = State.objects.all()
    context = {'state_object' : state_object}
    return render(request, 'etats/index.html', context)