// store/filters.js
import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', () => {
  const { public: api } = useRuntimeConfig();
  const apiBase = api.apiBase;
  const categories = ref([]);
  const form = reactive({
    main: null,
    sub: null,
    options: {},
  });
  const submitting = reactive({
    loading: false,
    submitted: false,
  });
  const mainCatObj = computed(() =>
    categories.value.find((elm) => elm.id == form.main)
  );

  async function fetchCategories() {
    const data = await useFetch(`${apiBase}get_all_cats`);
    categories.value = data.data.value.data.categories;
  }
  async function fetchOptionsCategories(val) {
    return await useFetch(`${apiBase}properties?cat=${val}`);
  }
  async function fetchOptionChild(val) {
    return await useFetch(`${apiBase}get-options-child/${val}`);
  }
  function submitForm() {
    submitting.loading = true;
    submitting.submitted = false;
    setTimeout(() => {
      submitting.loading = false;
      submitting.submitted = true;
    }, 2000);
  }

  return {
    categories,
    form,
    fetchCategories,
    fetchOptionsCategories,
    mainCatObj,
    fetchOptionChild,
    submitting,
    submitForm,
  };
});
