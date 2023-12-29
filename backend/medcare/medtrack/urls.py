from django.urls import path
from .views import PatientViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('patient', PatientViewSet, basename='patient')

urlpatterns = [
]

urlpatterns += router.urls
