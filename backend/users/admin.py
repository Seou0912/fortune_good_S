from django.contrib import admin
from .models import User


@admin.register(User)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = (
        "email",
        "nickname",
        "mbti",
        "is_active",
        "is_staff",
        "is_superuser",
    )

    ordering = ("email",)

    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Permissions", {"fields": ("is_active", "is_staff", "is_superuser")}),
    )

    filter_horizontal = ()

    list_filter = ("is_active", "is_staff", "is_superuser")
