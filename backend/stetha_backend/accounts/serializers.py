from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers
from .models import Doctor, Specialization

User = get_user_model()

# Serializer for the custom User model.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'password', 'is_doctor', 'nationality')
        extra_kwargs = {'password': {'write_only': True}}

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            is_doctor=validated_data.get('is_doctor', False),
            nationality=validated_data.get('nationality', '')
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

# Serializer for the Doctor model.
class DoctorSerializer(serializers.ModelSerializer):
    user = UserSerializer()  

    class Meta:
        model = Doctor
        fields = ('user', 'specialization', 'license_number', 'hospital_affiliation', 'phone_number', 'years_of_experience', 'bio', 'area_of_residence')

    def validate_license_number(self, value):
        if Doctor.objects.filter(license_number=value).exists():
            raise serializers.ValidationError("A doctor with this license number already exists.")
        return value

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user_data['is_doctor'] = True
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        doctor = Doctor.objects.create(user=user, **validated_data)
        return doctor

# Serializer for doctor login.
class DoctorLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if user is None or not user.is_doctor:
            raise serializers.ValidationError("Invalid credentials or user is not a doctor.")
        return data
