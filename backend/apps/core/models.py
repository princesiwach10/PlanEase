from django.db import models
from django.conf import settings
from django.utils import timezone
from shortuuid.django_fields import ShortUUIDField
from django.utils.translation import gettext_lazy as _

user_model = settings.AUTH_USER_MODEL

class BaseModel(models.Model):
    id = ShortUUIDField(_("Id"), primary_key=True)
    is_active = models.BooleanField(_("Active"), default=True)
    date_of_creation = models.DateTimeField(_("Date of creation"), default=timezone.now)
    last_modified = models.DateTimeField(_("Last Modified"), auto_now=True)
    created_by = models.ForeignKey(user_model, on_delete=models.PROTECT, related_name='%(class)s_created_by', verbose_name="Created By")
    updated_by = models.ForeignKey(user_model, on_delete=models.PROTECT, related_name='%(class)s_updated_by', verbose_name="Updated By")

    class Meta:
        abstract = True
