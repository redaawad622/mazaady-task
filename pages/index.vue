<script setup>
import { useCategoriesStore } from '@/stores/categories';
import { storeToRefs } from 'pinia';
const categoriesStore = useCategoriesStore();
const { submitting, form } = storeToRefs(categoriesStore);
const catForm = ref();
const submitForm = async () => {
  const { valid } = await catForm.value.validate();
  if (valid) {
    categoriesStore.submitForm();
  }
};
</script>

<template>
  <v-form lazy-validation ref="catForm" @submit.prevent="submitForm()">
    <CategoryMain />
    <v-btn
      :loading="submitting.loading"
      type="submit"
      block
      color="success"
      size="large"
      variant="elevated"
      class="mt-4"
      >Send Form</v-btn
    >
  </v-form>
  <CategoryTable v-if="submitting.submitted" />
</template>

<style scoped></style>
