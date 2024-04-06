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

from django.http import HttpResponse


def home(request):
    return HttpResponse("Welcome to the homepage!")


def signup(request):
    if request.user.is_authenticated:
        return redirect("login")

    form = UserCreationForm(request.POST or None, files=request.FILES or None)
    if form.is_valid():
        user = form.save()
        django_login(request, user, backend="django.contrib.auth.backends.ModelBackend")
        return redirect("login")  # 로그인 페이지나 다른 페이지로 리디렉션

    context = {"form": form}

    return render(request, "kakao_login.html", context)


class KakaoLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        code = request.data.get("code")  # 프론트엔드에서 전달받은 인가 코드
        client_id = "9ee0d285dac20ea6ec19791c1f513e9d"
        redirect_uri = "http://localhost:3000/kakao_callback"
        token_request = requests.get(
            f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={client_id}&redirect_uri={redirect_uri}&code={code}"
        )
        token_response_json = token_request.json()
        error = token_response_json.get("error", None)
        if error is not None:
            return Response({"message": "Failed to get token"}, status=400)

        access_token = token_response_json.get(
            "Jz-udLVvwT7RWv9Gegshg97vigocBXTotV4iDMkio2gn_Q4tVAaycP31adMKPXVaAAABjqclov7-oZq-Jypvmw"
        )

        headers = {"Authorization": f"Bearer {access_token}"}
        user_info_response = requests.post(
            "https://kapi.kakao.com/v2/user/me", headers=headers
        )
        user_info_json = user_info_response.json()
        email = user_info_json.get("kakao_account", {}).get("email")
        if email is None:
            return Response(
                {"message": "Email not provided"}, status=status.HTTP_400_BAD_REQUEST
            )

        # 사용자 정보를 기반으로 내부 처리 (예: 사용자 생성 또는 업데이트)
        user, created = User.objects.get_or_create(email=email)
        if created:
            user.nickname = user_info_json.get("properties", {}).get("nickname")
            user.birth_date = user_info_json.get("kakao_account", {}).get("birthday")
            user.save()

        return Response(
            {"message": "User logged in successfully"}, status=status.HTTP_200_OK
        )


#     def kakao_login(self, request, *args, **kwargs):
#         try:
#             access_token = request.data.get("ef2b2131f360b21d83aa27312882d563")  # 받은 access_token
#             account_info = requests.get(
#                 "https://kapi.kakao.com/v2/user/me",  # Kakao API 엔드포인트 업데이트
#                 headers={"Authorization": f"Bearer {access_token}"}
#             ).json()

#             email = account_info.get("kakao_account", {}).get("email")

#             account = User.objects.get_or_create(email=email)

#             # 서비스의 토큰 발급
#             token = TokenObtainPairSerializer.get_token(account)
#             access_token = str(token.access_token)
#             refresh_token = str(token)

#             return Response(
#                 {
#                     "message": "로그인 되었습니다.",
#                     "access_token": access_token,
#                     "refresh_token": refresh_token,
#                 },
#                 status=status.HTTP_200_OK,
#             )
#         except KeyError:
#             return Response({"message": "Key error"}, status=status.HTTP_400_BAD_REQUEST)

# # class KakaoLogoutView(APIView):
# #     permission_classes = [AllowAny]

# #     def kakaoLogout(self, request, *args, **kwargs):
