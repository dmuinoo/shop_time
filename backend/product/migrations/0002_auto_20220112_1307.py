# Generated by Django 3.1.7 on 2022-01-12 13:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='date_creates',
            new_name='date_created',
        ),
    ]