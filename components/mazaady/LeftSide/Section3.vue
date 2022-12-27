<template>
  <v-sheet class="rounded py-5 px-2 d-flex flex-column" style="gap: 10px">
    <v-sheet
      class="d-flex pa-3 rounded"
      color="grey-lighten-4"
      v-for="item in items"
      :key="item.title"
    >
      <span class="font-weight-bold text-grey">{{ item.title }}</span>
      <v-spacer></v-spacer>
      <span class="text-h6 font-weight-bold text-grey-darken-2">{{
        item.subtitle
      }}</span>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        subtitle: '$5000',
        title: 'القيمة الابتدائية',
      },
      {
        subtitle: '$5000',
        title: 'القيمة الابتدائية',
      },
      {
        subtitle: '$5000',
        title: 'القيمة الابتدائية',
      },
      {
        subtitle: '$5000',
        title: 'القيمة الابتدائية',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.custom-list {
  :deep(.v-list-item-title) {
    white-space: pre-wrap;
  }
}
</style>
