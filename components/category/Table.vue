<script setup>
import { useCategoriesStore } from '@/stores/categories';
import { storeToRefs } from 'pinia';
const categoriesStore = useCategoriesStore();
const { form } = storeToRefs(categoriesStore);

const renderForm = Object.assign({}, form.value, form.value.options);
delete renderForm.options;
</script>

<template>
  <div class="mt-5">
    <v-divider></v-divider>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th class="text-left">Value</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, key) in renderForm" :key="key">
          <tr v-if="item">
            <td>{{ key }}</td>
            <td v-if="item?.name">{{ item.other_value || item.name }}</td>
          </tr>
        </template>
      </tbody>
    </v-table>
  </div>
</template>
