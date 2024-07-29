from django import forms
from .models import Suntime

class SuntimeForm (forms.ModelForm):
    class Meta:
        model = Suntime
        fields = ['date', 'suntime']
        widgets = {
            'date': forms.DateInput(
                format=('%Y-%m-%d'),
                attrs={
                    'placeholder': 'Select a date',
                    'type': 'date'
                }
            )
        }