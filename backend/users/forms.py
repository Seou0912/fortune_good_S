from django import forms
from django.core.exceptions import ValidationError
from users.models import User


class LoginForm(forms.Form):
    username = forms.CharField(
        min_length=3,
        widget=forms.TextInput(
            attrs={"placeholder": "닉네임(3자리 이상)"},
        ),
    )
    password = forms.CharField(
        min_length=4,
        widget=forms.PasswordInput(
            attrs={"placeholder": "비밀번호(영문+숫자) 4자리 이상"},
        ),
    )


class SignupForm(forms.Form):
    ...
