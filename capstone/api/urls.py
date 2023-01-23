from django.urls import path

from . import *

app_name = 'api'
urlpatterns = [
    path('', StateAPIView.as_view()),
    path('new/', CreateState.as_view()),
    path('<int:pk>/', StateView.as_view()),
    path('', views.index, name='index'),
]