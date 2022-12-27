<script setup>
import { useCategoriesStore } from '@/stores/categories';
import { storeToRefs } from 'pinia';
const props = defineProps({
  option: {
    type: Object,
    default: null,
  },
});
const categoriesStore = useCategoriesStore();
const { form } = storeToRefs(categoriesStore);
const fetchedOption = ref(null);
const loading = ref(false);
watch(
  () => form.value.options[props.option.slug],
  async (val) => {
    if (fetchedOption.value && form.value.options[fetchedOption.value.slug])
      delete form.value.options[fetchedOption.value.slug];
    fetchedOption.value = null;

    if (val && val.child) {
      loading.value = true;
      let { data } = await categoriesStore.fetchOptionChild(val.id);
      data = data.value.data;
      fetchedOption.value = data.length ? data[0] : null;
      loading.value = false;
    }
  }
);
</script>

<template>
  <v-col style="min-width: 300px">
    <v-autocomplete
      variant="solo"
      :loading="loading"
      :label="props.option.name"
      return-object
      clearable
      :hide-details="form.options[props.option.slug]?.id !== 'other'"
      item-title="name"
      item-value="id"
      :items="props.option.options"
      v-model="form.options[props.option.slug]"
      color="primary"
      max-height="100px"
      eager
    ></v-autocomplete>
  </v-col>
  <v-slide-y-transition>
    <v-col
      style="min-width: 300px"
      v-if="form.options[props.option.slug]?.id == 'other'"
    >
      <v-text-field
        variant="solo"
        color="primary"
        v-model="form.options[props.option.slug].other_value"
        :label="`${props.option.name} value`"
      ></v-text-field>
    </v-col>
  </v-slide-y-transition>
  <CategoryOption v-if="fetchedOption" :option="fetchedOption" />
</template>
