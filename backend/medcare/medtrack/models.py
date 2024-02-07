from django.db import models
from django.utils import timezone
from datetime import date
from django.contrib.auth.models import User
# Create your models here.

class Doctor(models.Model):
    user_id = models.ForeignKey(User, on_delete= models.CASCADE, null=False)
    name = models.CharField(max_length=255, null=False)
    specialization = models.CharField(max_length=255, null=False)
    date_joined = models.DateTimeField(default=timezone.now)
    still_member = models.BooleanField(default=True)
    def __str__(self):
        return self.name

class Patient(models.Model):
    BLOOD_TYPES = [
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('A+', 'A+'),
        ('B-', 'B-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
    ]
    SEX = [
        ('male','male'),
        ('female','female'),
    ]
    SUBSCRIPTION_PLANS = [
        ("basic", "basic"),
        ("standard", "standard"),
        ("premium", "premium"),
    ]
    username = models.ForeignKey(User, on_delete= models.CASCADE, null=False)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(default='')
    phone_number = models.CharField(max_length=50, default='')
    blood_type = models.CharField(max_length=10, choices=BLOOD_TYPES)
    sex= models.CharField(max_length = 10, choices=SEX)
    height = models.IntegerField()
    weight = models.FloatField()
    allergies_exist = models.BooleanField()
    allergies = models.TextField()
    date_of_birth = models.DateField()
    registered_date = models.DateField(auto_now_add=True)
    sub_plans= models.CharField(max_length = 10, choices=SUBSCRIPTION_PLANS)
    address = models.CharField(max_length =200, default="")


    def age(self):
        today = date.today()
        return today.year - self.date_of_birth.year - ((today.month, today.day) < (self.date_of_birth.month, self.date_of_birth.day))
    def __str__(self):
        return self.first_name + " " + self.last_name

class Documents(models.Model):
    patient = models.ForeignKey(Patient, on_delete= models.CASCADE, null=True)
    doctor = models.ForeignKey(Doctor, on_delete= models.CASCADE, null=True)
    pdf_file = models.FileField(upload_to = 'pdfs/')
    def __str__(self):
        return self.name


class Appointment(models.Model):
    APPOINTMENT_CHOICES = [
        ('checkup', 'checkup'),
        ('surgery', 'surgery'),
    ]
    patient = models.ForeignKey(Patient, on_delete= models.CASCADE)
    reason = models.CharField(max_length=255, null=False)
    doctor = models.ForeignKey(Doctor, on_delete= models.SET('deleted doctor'))
    description = models.TextField()
    medicine_prescribed= models.TextField()
    date = models.DateField(default=timezone.now)
    time = models.TimeField(default=timezone.now)
    need_surgery = models.BooleanField()
    appointment_type = models.CharField(max_length=20, choices=APPOINTMENT_CHOICES)
    upcoming = models.BooleanField()
    notes = models.TextField()
    # checkup /  follow-up / surgery
    def __str__(self):
        return self.reason
    def save(self, *args, **kwargs):
        if self.appointment_type == 'surgery':
            self.need_surgery = False
        super().save(*args, **kwargs)

