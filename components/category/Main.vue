<script setup>
import { useCategoriesStore } from '@/stores/categories';
import { storeToRefs } from 'pinia';
const categoriesStore = useCategoriesStore();
const { categories, form } = storeToRefs(categoriesStore);
categoriesStore.fetchCategories();
watch(
  () => form.value.main,
  () => {
    form.value.sub = null;
  }
);
</script>

<template>
  <v-row>
    <v-col cols="12" :md="form.main ? 6 : 12">
      <v-autocomplete
        label="Categories"
        placeholder="Choose Category"
        :items="categories"
        item-title="name"
        item-value="id"
        return-object
        v-model="form.main"
        :rules="[useRequiredValidator]"
      ></v-autocomplete>
    </v-col>
    <v-col cols="12" md="6" v-if="form.main">
      <v-autocomplete
        :label="form.main.name"
        placeholder="Choose Category"
        :items="form.main.children"
        item-title="name"
        item-value="id"
        return-object
        v-model="form.sub"
        :rules="[useRequiredValidator]"
      >
      </v-autocomplete>
    </v-col>
  </v-row>
  <CategoryOptionList />
</template>
