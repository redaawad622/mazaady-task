<script setup>
import { useCategoriesStore } from '@/stores/categories';
import { storeToRefs } from 'pinia';
const categoriesStore = useCategoriesStore();
const { form } = storeToRefs(categoriesStore);
const options = ref([]);
const loading = ref(false);
watch(
  () => form.value.sub,
  async (val) => {
    options.value = [];
    form.value.options = {};
    if (val) {
      loading.value = true;
      let { data } = await categoriesStore.fetchOptionsCategories(val.id);
      data = data.value.data;
      options.value = data.map((elm) => {
        elm.options.push({
          child: false,
          id: 'other',
          name: 'Other',
          slug: 'other',
        });
        return elm;
      });
      loading.value = false;
    }
  }
);
</script>

<template>
  <v-row class="flex-wrap" style="max-width: 100%">
    <v-col cols="12" v-if="loading" class="d-flex justify-center">
      <v-progress-circular indeterminate></v-progress-circular>
    </v-col>
    <template v-else v-for="option in options" :key="`option_${option.id}`">
      <CategoryOption :option="option" />
    </template>
  </v-row>
</template>
