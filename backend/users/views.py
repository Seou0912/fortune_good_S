from django.core.mail import EmailMessage
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login as django_login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status
import requests
from .models import User  
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from faker import Faker

fake = Faker()

fake_email = fake.email()
fake_birthdate = fake.date_of_birth(minimum_age=18, maximum_age=65)


def signup(request):
    if request.user.is_authenticated:
        return redirect('login')

    form = UserCreationForm(request.POST or None, files=request.FILES or None)
    if form.is_valid():
        user = form.save()
        django_login(request, user, backend='django.contrib.auth.backends.ModelBackend')
        return redirect('login')  # 로그인 페이지나 다른 페이지로 리디렉션

    context = {'form': form}

    return render(request, 'kakao_login.html', context)


class KakaoLoginView(APIView):
    permission_classes = [AllowAny]

    def kakao_login(self, request, *args, **kwargs):
        try:
            access_token = request.data.get("ef2b2131f360b21d83aa27312882d563")  # 받은 access_token
            account_info = requests.get(
                "https://kapi.kakao.com/v2/user/me",  # Kakao API 엔드포인트 업데이트
                headers={"Authorization": f"Bearer {access_token}"}
            ).json()

            email = account_info.get("kakao_account", {}).get("email")

            account = User.objects.get_or_create(email=email)

            # 서비스의 토큰 발급
            token = TokenObtainPairSerializer.get_token(account)
            access_token = str(token.access_token)
            refresh_token = str(token)

            return Response(
                {
                    "message": "로그인 되었습니다.",
                    "access_token": access_token,
                    "refresh_token": refresh_token,
                },
                status=status.HTTP_200_OK,
            )
        except KeyError:
            return Response({"message": "Key error"}, status=status.HTTP_400_BAD_REQUEST)

# class KakaoLogoutView(APIView):
#     permission_classes = [AllowAny]

#     def kakaoLogout(self, request, *args, **kwargs):
