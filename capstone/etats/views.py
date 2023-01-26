from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from .models import Rank
from api.models import State


# def index(request):
#     if request.method == 'POST':
#         form_data = request.POST
#         rank_object = Rank.objects.create(
#             state_name=form_data['state_name'], 
#             weighted_rank=form_data['weighted_rank'],
#         )
#         return HttpResponseRedirect(reverse('etats:index'))

#     else:
#         rank_list = Rank.objects.all()
#         context = {'rank_list': rank_list}
#         return render(request, 'etats/index.html', context)


def index(request):
    print(Rank.objects.all())
    return HttpResponse("Hello, world")