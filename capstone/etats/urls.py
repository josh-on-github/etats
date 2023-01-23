from django.urls import path

from . import views

app_name = 'etats'
urlpatterns = [
    path('', views.index, name='index'),
]