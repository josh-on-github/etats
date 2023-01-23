from api.models import Api


class ApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Api
        fields = (
            'id',
            'state_name',
            'tax_rate',
            'tax_rank',
            'political_affiliation',
            'median_home_value',
            'home_rank',
            'crime_rate',
            'crime_rank', 
            'weighted_rank',
        )