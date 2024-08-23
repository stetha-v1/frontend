from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import UserRegistrationView, DoctorRegistrationView, DoctorLoginView

urlpatterns = [
    # URL for user registration.
    path('register/', UserRegistrationView.as_view(), name='user-register'),
    # URL for login using JWT (JSON Web Token).
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # docs urls
    path('docs/register/', DoctorRegistrationView.as_view(), name='doctor-register'),
    path('docs/login/', DoctorLoginView.as_view(), name='doctor-login'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
]
