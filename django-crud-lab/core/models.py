from django.db import models
from django.urls import reverse

# Create your models here.

class Turtle(models.Model):
    name = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    description = models.TextField(max_length=250)
    age = models.IntegerField()

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse('turtle-detail', kwargs={'turtle_id': self.id})
    
TIMES = (
    ('M', 'Morning'),
    ('A', 'Afternoon')
)
    

class Suntime(models.Model):
    date = models.DateField('Sun time')
    suntime = models.CharField(
        max_length=1,
        choices=TIMES,
        default=TIMES[0][0] # saying the default is M (Morning)
    ) # 'M', 'A'

    turtle = models.ForeignKey(Turtle, on_delete=models.CASCADE)

    class Meta:
        ordering = ['-date'] # newest appears first

    def __str__(self):
        return f"{self.get_time_display()} on {self.date}" # this gets the actual word not the letter