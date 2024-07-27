from django.shortcuts import render
from django.views.generic.edit import CreateView, UpdateView, DeleteView

from .models import Turtle

# Define the home view function
def home(request):
    # Send a HTML response
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def turtle_index(request):
    turtles = Turtle.objects.all()
    return render(request, 'turtles/index.html', {'turtles': turtles})

def turtle_detail(request, turtle_id):
    turtle = Turtle.objects.get(id=turtle_id)
    return render(request, 'turtles/detail.html', {'turtle': turtle})

# Class based views

class TurtleCreate(CreateView):
    model = Turtle
    fields = '__all__'

class TurtleUpdate(UpdateView):
    model = Turtle
    # Let's disallow the renaming of a Turtle by excluding the name field!
    fields = ['breed', 'description', 'age']

class TurtleDelete(DeleteView):
    model = Turtle
    success_url = '/turtles/'