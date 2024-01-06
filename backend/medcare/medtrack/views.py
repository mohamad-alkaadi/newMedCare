from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Patient, Doctor, Appointment
from . import serializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = serializer.PatientSerializer
    def get_queryset(self):
        queryset = super().get_queryset()
        id = self.request.query_params.get("id")
        sex = self.request.query_params.get("sex")
        if id:
            queryset = queryset.filter(id=id)
        if sex:
            queryset = queryset.filter(sex=sex)
        return queryset

# class DocumentViewSet(viewsets.ModelViewSet):

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = serializer.AppointmentSerializer
    def get_queryset(self):
        queryset = super().get_queryset()
        patient = self.request.query_params.get("patient")
        appointment_type = self.request.query_params.get("appointment_type")
        upcoming = self.request.query_params.get("upcoming")
        if patient:
            queryset = queryset.filter(patient=patient)
        if appointment_type:
            queryset = queryset.filter(appointment_type=appointment_type)
        if upcoming:
            queryset = queryset.filter(upcoming=upcoming)
        return queryset