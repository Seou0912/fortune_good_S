from django.db import models


class TodaysMessage(models.Model):
    message = models.TextField()
    date = models.DateField(auto_now_add=True)
