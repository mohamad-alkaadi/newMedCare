from django.urls import path
from .views import MessageViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', MessageViewSet, basename='message')


urlpatterns = [
]

urlpatterns += router.urls
