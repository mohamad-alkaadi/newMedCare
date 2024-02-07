from rest_framework import serializers
from .models import Appointment, Doctor, Patient, Documents

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = "__all__"

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Documents
        fields = "__all__"

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields= '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    doctor = DoctorSerializer()

    class Meta:
        model = Appointment
        fields = '__all__'


class DoctorListSerializer(serializers.ModelSerializer):
    doctor = DoctorSerializer()

    class Meta:
        model = Appointment
        fields = ['doctor']
