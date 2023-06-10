from django.core.validators import RegexValidator
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.validators import UnicodeUsernameValidator


class NameValidator(RegexValidator):
    """
    Validator to ensure that the field contains only alphabetic characters.
    """

    regex = r'^[a-zA-Z]+$'  # Allow only alphabets

    def __call__(self, value):
        field_name = self.field.verbose_name  # Get the verbose name of the field

        if self.message is None:
            self.message = _(f"Invalid {field_name}. Please ensure the {field_name} only contains letters.")

        super().__call__(value)  # Call the parent's __call__ method for validation


class UsernameValidator(UnicodeUsernameValidator):
    """
    Validator to ensure that the username contains only letters, numbers, dot (.), and underscore (_) characters.
    """

    regex = r'^[\w._]+$'  # Updated regular expression pattern
    message = _("Invalid Username. Please ensure the username contains only letters, numbers, dot(.) and underscore (_) characters.")
