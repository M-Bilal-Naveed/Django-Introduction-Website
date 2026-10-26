from django.shortcuts import render


def code(request):
    return render(request, 'code/code.html')