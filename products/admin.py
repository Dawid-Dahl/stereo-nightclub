from django.contrib import admin
from .models import Product, Ingredient

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    pass


admin.site.register(Product)
admin.site.register(Ingredient)
