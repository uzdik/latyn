<<<<<<< HEAD
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('admin/', admin.site.urls),
    path('latyn/', TemplateView.as_view(template_name='latyn.html'), name='latyn'),
    path('race/', TemplateView.as_view(template_name='race.html'), name='race'),
    path('courses/', TemplateView.as_view(template_name='courses.html'), name='courses'),
] 

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
=======
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('latyn/', TemplateView.as_view(template_name='latyn.html'), name='latyn'),
]
>>>>>>> origin/main
