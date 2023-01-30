from django.urls import path

from . import views

app_name = 'etats'
urlpatterns = [
    path('', views.index, name='index'),
    path('taxes/', views.taxes, name='taxes'),
    path('politics/', views.politics, name='politics'),
    path('housing/', views.housing, name='housing'),
    path('crime/', views.crime, name='crime'),
    path('weighted/', views.weighted, name='weighted'),
]