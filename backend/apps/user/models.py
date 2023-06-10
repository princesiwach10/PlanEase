from django.db import models
from apps.core.models import BaseModel
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from apps.core.validators import NameValidator, UsernameValidator


class User(AbstractUser, BaseModel):

    username_validator = UsernameValidator()

    username = models.CharField(
        _("username"), 
        max_length=150, 
        unique=True, 
        validators=[username_validator], 
        error_messages={
            "unique": _("A user with that username already exists."),
        }
    )
    first_name = models.CharField(
        _("First Name"), 
        max_length=100, 
        validators=[NameValidator()]
    )
    last_name = models.CharField(
        _("Last Name"), 
        max_length=100, 
        validators=[NameValidator()]
    )
    email = models.EmailField(_("Email Address"))
    created_by = models.ForeignKey(
        "self", 
        on_delete=models.PROTECT, 
        related_name='%(class)s_created_by', 
        verbose_name="Created By", 
        blank=True, 
        null=True
    )
    
    date_joined = None


