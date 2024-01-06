from django.urls import path
from .views import PatientViewSet, AppointmentViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('patient', PatientViewSet, basename='patient')
router.register('appointment', AppointmentViewSet, basename='appointment')

urlpatterns = [
]

urlpatterns += router.urls
