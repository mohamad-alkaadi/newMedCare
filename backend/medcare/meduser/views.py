from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import UserSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from medtrack.models import Patient, Doctor
# Create your views here.

@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data["username"])
    patient = Patient.objects.filter(username= user).values("id")
    if not user.check_password(request.data['password']):
        return Response({"detail": "not found"}, status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)
    # return Response({"token": token.key, "user": serializer.data, "patient": patient})
    return Response({"token": token.key, "patient": patient, "detail": "found"})


@api_view(['POST'])
def doctor_login(request):
    user = get_object_or_404(User, username = request.data["username"])
    doctor = Doctor.objects.filter(username= user).values("id")
    if not user.check_password(request.data['password']):
        return Response({"detail":"not found"}, status=status.HTTP_404_NOT_FOUND)
    return Response({"doctor": doctor, "detail": "found"})