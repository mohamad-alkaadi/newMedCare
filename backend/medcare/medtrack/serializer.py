from rest_framework import serializers
from .models import Appointment, Doctor, Patient, Medication, Files

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = "__all__"

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Files
        fields = "__all__"

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields= '__all__'
class MedicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medication
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
