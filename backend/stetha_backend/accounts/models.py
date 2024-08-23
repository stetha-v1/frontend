from django.contrib.auth.models import AbstractUser
from django.db import models

# Custom User model
class User(AbstractUser):
    is_doctor = models.BooleanField(default=False)
    is_patient = models.BooleanField(default=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    nationality = models.CharField(max_length=100, blank=True, null=True)  # Added nationality field

    def __str__(self):
        return self.username

# Doctor model
class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    specialization = models.CharField(max_length=255)  
    license_number = models.CharField(max_length=100, unique=True)
    hospital_affiliation = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    years_of_experience = models.PositiveIntegerField()
    bio = models.TextField()
    area_of_residence = models.CharField(max_length=255)  

    def __str__(self):
        return f"Dr. {self.user.get_full_name()} - {self.specialization}"

# Patient model
class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    date_of_birth = models.DateField()
    address = models.TextField(blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return self.user.get_full_name()

# Appointment model
class Appointment(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    appointment_date = models.DateTimeField()
    description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=[('Scheduled', 'Scheduled'), ('Completed', 'Completed'), ('Cancelled', 'Cancelled')])

    def __str__(self):
        return f"Appointment on {self.appointment_date} with Dr. {self.doctor.user.get_full_name()}"

# Specialization model
class Specialization(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

# Review model for doctor feedback
class Review(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField()  # Example: 1-5 rating
    comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review for Dr. {self.doctor.user.get_full_name()} by {self.patient.user.get_full_name()}"

# COmmand you can use to create the mysql dataabse for testing  purposes

#CREATE USER 'stetha'@'localhost' IDENTIFIED BY 'kali';
#GRANT ALL PRIVILEGES ON stetha.* TO 'stetha'@'localhost';
#FLUSH PRIVILEGES;
