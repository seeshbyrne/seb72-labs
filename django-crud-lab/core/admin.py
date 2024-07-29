from django.contrib import admin
from .models import Turtle, Suntime

# Register your models here.

admin.site.register(Turtle)  # please give me access to the crud app when i log into the portal
admin.site.register(Suntime)  # You need to register each one individually