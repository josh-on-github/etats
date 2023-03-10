from rest_framework import serializers
from api.models import State


class ApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = (
            'state_name',
            'tax_rate',
            'tax_rank',
            'political_affiliation',
            'median_home_value',
            'crime_rate',
            'crime_rank',
            'tourism_site',
        )