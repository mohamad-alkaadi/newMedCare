from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Message
from .serializer import MessageSerializer
# Create your views here.
class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    def get_queryset(self):
        queryset = super().get_queryset()
        patient = self.request.query_params.get("patient")
        doctor = self.request.query_params.get("doctor")
        sender = self.request.query_params.get("sender")
        message = self.request.query_params.get("message")
        patient_list = self.request.query_params.get("patient_list")
        if patient:
            queryset = queryset.filter(patient=patient)
        if doctor:
            queryset = queryset.filter(doctor=doctor)
        if sender:
            queryset = queryset.filter(sender=sender)
        if message:
            queryset = queryset.filter(message=message)
        if patient_list:
            queryset = queryset.values_list("patient", flat=True).distinct()

        return queryset
