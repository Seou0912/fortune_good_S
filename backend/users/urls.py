from django.urls import path
from users.views import KakaoLoginView, signup

urlpatterns = [
    path("signup", signup, name="signup"),
    path("kakao_login", KakaoLoginView.as_view(), name="kakao_login"),
    # path("kakao_logout", KakaoLogoutView.as_view(), name="kakao_logout"),
]
