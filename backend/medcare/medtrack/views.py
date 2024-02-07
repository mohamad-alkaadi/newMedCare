from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
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
        doctor_list = self.request.query_params.get("doctor_list")

        if patient:
            queryset = queryset.filter(patient=patient)
        if appointment_type:
            queryset = queryset.filter(appointment_type=appointment_type)
        if upcoming:
            queryset = queryset.filter(upcoming=upcoming)
        if doctor_list:
            queryset = queryset.values_list('doctor').distinct()
        return queryset


class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = serializer.DoctorListSerializer
    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = queryset.distinct()

        return queryset



    # queryset = Appointment.values_list('doctor').distinct()
        # queryset = queryset.values_list('doctor').distinct()

    # def get_queryset(self):
    #     queryset = super().get_queryset()
    #     doctor_list = self.request.query_params.get("doctor_list")
    #     if doctor_list:
    #         queryset = queryset.values_list('doctor').distinct()
    #     return queryset

# @api_view(['GET'])
# def get_patient_doctors(request, patient_id):
#     try:
#         patient = Patient.objects.get(id=patient_id)
#     except Patient.DoesNotExist:
#         return Response({"error": "Patient not found"}, status=404)

#     doctors_ids = patient.appointment_set.values_list('doctor', flat=True).distinct()

#     # Now you have a list of unique doctor IDs associated with the patient
#     return Response({"doctor_ids": list(doctors_ids)})