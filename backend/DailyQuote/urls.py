from django.urls import path
from .views import todays_message

urlpatterns = [
    path("todays-message/", todays_message, name="todays_message"),
]
