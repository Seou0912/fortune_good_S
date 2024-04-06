from django.shortcuts import render
from .models import TodaysMessage


def todays_message(request):
    today_message = TodaysMessage.objects.order_by("-date").first()
    return render(request, "todays_message.html", {"today_message": today_message})
