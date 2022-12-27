<template>
  <v-sheet class="rounded">
    <v-card-title class="text-h6 font-weight-bold"
      >المزادات المفضلة</v-card-title
    >
    <v-list class="custom-list" lines="two">
      <v-list-item v-for="item in items" :key="item.title" :title="item.title">
        <template v-slot:prepend>
          <v-avatar
            rounded
            class="rounded-lg"
            size="120"
            style="height: 90px"
            color="grey"
          >
          </v-avatar>
        </template>
        <v-list-item-subtitle class="d-flex mt-2">
          <span>اعلى سعر</span><v-spacer></v-spacer
          ><span class="text-usedC1 font-weight-bold">{{ item.subtitle }}</span>
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        subtitle: '$500',
        title:
          'سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة',
      },
      {
        subtitle: '$500',
        title:
          'سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة',
      },
      {
        subtitle: '$500',
        title:
          'سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة',
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
