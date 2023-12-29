from rest_framework import serializers
from .models import Appointment, Doctor, Patient

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = "__all__"