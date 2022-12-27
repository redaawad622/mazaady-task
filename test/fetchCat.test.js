import { describe, test } from 'vitest';
import { setup, $fetch } from '@nuxt/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import { useCategoriesStore } from '../stores/categories';
import { loadNuxt } from 'nuxt';
describe('ApiCall', async () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    loadNuxt()
  });
  await setup();

  test('test fetching categories', async () => {
    const catStore = useCategoriesStore();
    await catStore.fetchCategories();
    expect(!!catStore.categories.length).toBeTruthy();
  });
});
