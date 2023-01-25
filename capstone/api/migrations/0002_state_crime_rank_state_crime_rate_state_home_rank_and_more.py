# Generated by Django 4.1.5 on 2023-01-24 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='state',
            name='crime_rank',
            field=models.SmallIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='state',
            name='crime_rate',
            field=models.DecimalField(decimal_places=3, max_digits=7, null=True),
        ),
        # migrations.AddField(
        #     model_name='state',
        #     name='home_rank',
        #     field=models.SmallIntegerField(null=True),
        # ),
        migrations.AddField(
            model_name='state',
            name='median_home_value',
            field=models.SmallIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='state',
            name='political_affiliation',
            field=models.CharField(max_length=15, null=True),
        ),
        migrations.AddField(
            model_name='state',
            name='tax_rank',
            field=models.SmallIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='state',
            name='tax_rate',
            field=models.DecimalField(decimal_places=2, max_digits=4, null=True),
        ),
        # migrations.AddField(
        #     model_name='state',
        #     name='weighted_rank',
        #     field=models.SmallIntegerField(null=True),
        # ),
        migrations.AlterField(
            model_name='state',
            name='state_name',
            field=models.CharField(max_length=25),
        ),
    ]