<template>
  <v-sheet class="rounded">
    <v-card-title class="text-h6 font-weight-bold">المتنافسون</v-card-title>
    <v-list :items="items" item-props lines="two">
      <template v-slot:subtitle="{ subtitle }">
        <div v-html="subtitle"></div>
      </template>
      <template v-slot:append
        ><v-sheet
          class="rounded px-3 py-1 text-usedC3-darken-2 text-h5 font-weight-bold"
          color="usedC3"
          >+20</v-sheet
        >
      </template>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        subtitle: '13:59:00',
        title: 'اسم المزايد',
      },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'اسم المزايد',
        subtitle: '13:59:00',
      },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '13:59:00',
      },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '13:59:00',
      },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '13:59:00',
      },
    ],
  }),
};
</script>

<style></style>
