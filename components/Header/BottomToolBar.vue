<script setup>
const links = [
  {
    title: 'الرئيسية',
    to: '/',
  },

  {
    title: 'التصنيفات',
    to: '/Mazaady',
  },

  {
    title: 'مشترياتى',
    to: '/Mazaady',
  },
  {
    title: 'حسابى',
    to: '/Mazaady',
  },
];
</script>
<template>
  <v-toolbar flat height="73px" color="primary">
    <v-container class="fill-height d-flex align-center">
      <div class="d-flex justify-space-between" style="gap: 20px">
        <NuxtLink
          class="text-decoration-none text-white text-h6"
          v-for="link in links"
          :key="link.title"
          :to="link.to"
        >
          {{ link.title }}
        </NuxtLink>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        prepend-icon="mdi-chevron-down"
        rounded
        variant="flat"
        color="warning"
        class="me-1"
      >
        العربيه
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-cash</v-icon>
      </v-btn>
    </v-container>
  </v-toolbar>
</template>

<style></style>
