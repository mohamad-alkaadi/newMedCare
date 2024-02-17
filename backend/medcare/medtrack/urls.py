
from django.urls import path
from .views import PatientViewSet, AppointmentViewSet, DoctorViewSet, MedicationViewSet, FileViewSet, ListFilesViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('patient', PatientViewSet, basename='patient')
router.register('appointment', AppointmentViewSet, basename='appointment')
router.register('doctor_list', DoctorViewSet, basename='doctor')
router.register('medication', MedicationViewSet, basename='medication')
router.register('list_files', ListFilesViewSet, basename='list_files')

urlpatterns = [
    path('file/', FileViewSet.as_view(), name='file'),
]

urlpatterns += router.urls
