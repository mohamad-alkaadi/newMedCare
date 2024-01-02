from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Patient
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
    