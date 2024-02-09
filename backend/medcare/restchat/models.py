from django.db import models
# Create your models here.
from medtrack.models import Patient, Doctor

class Message(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete= models.CASCADE, null=False)
    patient = models.ForeignKey(Patient, on_delete= models.CASCADE, null=False)
    sender = models.CharField(max_length=10)
    message = models.TextField()
    date = models.DateField(auto_now_add=True)
