from django.shortcuts import render
from rest_framework import status
from django.http import JsonResponse
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets
from .models import Patient, Doctor, Appointment, Medication, Files
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
        # doctor_list = self.request.query_params.get("doctor_list")
        doctor_list_distinct = self.request.query_params.get("doctor_list_distinct")
        date = self.request.query_params.get("date")
        if patient:
            queryset = queryset.filter(patient=patient)
        if appointment_type:
            queryset = queryset.filter(appointment_type=appointment_type)
        if upcoming:
            queryset = queryset.filter(upcoming=upcoming)
        if date:
            queryset = queryset.filter(date=date)
        # if doctor_list:
        #     queryset = queryset.values_list('doctor', flat=True).distinct()
        if doctor_list_distinct:
            queryset = queryset.QuerySet("doctor", flat=True).distinct()
        return queryset


class FileViewSet(APIView):
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = serializer.FileSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            # you can access the file like this from serializer
            # uploaded_file = serializer.validated_data["file"]
            serializer.save()
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )
class ListFilesViewSet(viewsets.ModelViewSet):
    queryset = Files.objects.all()
    serializer_class = serializer.FileSerializer

class MedicationViewSet(viewsets.ModelViewSet):
    queryset = Medication.objects.all()

    serializer_class = serializer.MedicationSerializer
    def get_queryset(self):
        queryset = super().get_queryset()
        patient = self.request.query_params.get("patient")
        if patient:
            queryset = queryset.filter(patient=patient)
        return queryset



class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = serializer.DoctorSerializer

    # def get_queryset(self):
    #     queryset = super().get_queryset()
    #     return queryset
    # def get_queryset(self):
    #     queryset = super().get_queryset()
    #     # queryset = queryset.distinct()

    #     return queryset




# @api_view(['GET'])
# def get_patient_doctors(request, patient_id):
#     try:
#         doctors = Appointment.objects.values('doctor').distinct()
#     except Patient.DoesNotExist:
#         return Response({"error": "Patient not found"}, status=404)

#     doctors_ids = patient.appointment_set.values_list('doctor', flat=True).distinct()

#     # Now you have a list of unique doctor IDs associated with the patient
#     return Response({"doctor_ids": list(doctors_ids)})