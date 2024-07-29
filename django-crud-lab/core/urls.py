from django.urls import path
from . import views # import views to connect routes to view functions

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),

    # TURTLE STUFF BELOW
    path('turtles/', views.turtle_index, name='turtle-index'),
    path('turtles/<int:turtle_id>/', views.turtle_detail, name='turtle-detail'),
    # new route used to create a cat (BOTH GET AND POST REQUEST IN ONE)
    path('turtles/create/', views.TurtleCreate.as_view(), name='turtle-create'),
    path('turtles/<int:pk>/update', views.TurtleUpdate.as_view(), name='turtle-update'),
    path('turtles/<int:pk>/delete', views.TurtleDelete.as_view(), name='turtle-delete'),

    path('turtles/<int:turtle_id>/add_suntime/', views.add_suntime, name='add-suntime') # request for this page means they're trying to add a feeding
]