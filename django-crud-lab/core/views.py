from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView, UpdateView, DeleteView

from .forms import SuntimeForm

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
    suntime_form = SuntimeForm() # instantiate an object from the class
    return render(request, 'turtles/detail.html', {
        'turtle': turtle,
        'suntime_form': suntime_form
    })

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


# SUNTIME ################################################

def add_suntime(request, turtle_id):
    form = SuntimeForm(request.POST)
    if form.is_valid():
        suntime = form.save(commit=False) 
        suntime.turtle_id = turtle_id
        suntime.save()
    return redirect('turtle-detail', turtle_id=turtle_id)