# Generated by Django 5.0 on 2024-02-05 19:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('medtrack', '0003_rename_username_doctor_user_id_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='patient',
            old_name='user',
            new_name='username',
        ),
    ]
