# Generated by Django 5.1 on 2024-08-23 12:14

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_remove_doctor_available_slots_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='doctor',
            name='nationality',
        ),
        migrations.AlterField(
            model_name='doctor',
            name='specialization',
            field=models.CharField(default=django.utils.timezone.now, max_length=255),
            preserve_default=False,
        ),
    ]
