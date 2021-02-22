from .models import Product, Ingredient
from .serializers import ProductSerializer, IngredientSerializer
from rest_framework import generics, serializers


class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
