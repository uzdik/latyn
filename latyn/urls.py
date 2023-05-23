from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('latyn/', TemplateView.as_view(template_name='latyn.html'), name='latyn'),
]
