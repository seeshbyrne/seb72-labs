# Generated by Django 5.0.7 on 2024-07-29 07:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_suntime'),
    ]

    operations = [
        migrations.RenameField(
            model_name='suntime',
            old_name='time',
            new_name='suntime',
        ),
    ]