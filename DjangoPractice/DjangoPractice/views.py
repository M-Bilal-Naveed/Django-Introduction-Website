from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return render(request, 'website/home.html')

def about(request):
    return HttpResponse("Hello, world. You're at the DjangoPractice about.")

def contact(request):
    return HttpResponse("Hello, world. You're at the DjangoPractice contact.")