from django.urls import path
from .views import PatientViewSet, AppointmentViewSet, DoctorViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('patient', PatientViewSet, basename='patient')
router.register('appointment', AppointmentViewSet, basename='appointment')
router.register('doctor_list', DoctorViewSet, basename='doctor_viewset')

urlpatterns = [
]

urlpatterns += router.urls
