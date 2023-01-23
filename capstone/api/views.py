from rest_framework import generics
from api.models import Api
from .serializers import ApiSerializer


class StateAPIView(generics.ListAPIView):
    queryset = Api.objects.all()
    serializer_class = ApiSerializer


class CreateState(generics.CreateAPIView):
    serializer_class = ApiSerializer


class StateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Api.objects.all()
    serializer_class = ApiSerializer