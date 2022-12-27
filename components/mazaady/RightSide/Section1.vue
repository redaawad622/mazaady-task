<template>
  <div class="d-flex">
    <v-slide-group
      v-model="model"
      selected-class="bg-success"
      show-arrows
      direction="vertical"
      mandatory
      max="3"
      centerActive
    >
      <v-slide-group-item
        v-for="(img, n) in images"
        :key="n"
        v-slot="{ isSelected, toggle }"
      >
        <v-img
          @click="toggle"
          cover
          class="mb-2 rounded-lg mx-auto"
          width="78px"
          :src="img"
          height="78px"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="primary"
                size="24"
                icon="mdi-check"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-img>
      </v-slide-group-item>
    </v-slide-group>

    <v-card width="100%" class="mr-2">
      <v-img height="380" :src="images[model]" cover class="text-white">
        <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
          <template v-slot:prepend> </template>

          <template v-slot:append>
            <div class="d-flex" style="gap: 10px">
              <v-btn
                color="#707070b8"
                size="48"
                variant="elevated"
                icon="mdi-flag-outline"
              ></v-btn>
              <v-btn
                color="#707070b8"
                size="48"
                variant="elevated"
                icon="mdi-heart-outline"
              ></v-btn>
              <v-btn
                color="#707070b8"
                size="48"
                variant="elevated"
                icon="mdi-share-variant-outline"
              ></v-btn>
            </div>
          </template>
        </v-toolbar>
      </v-img>

      <v-card-text>
        <div class="font-weight-bold ml-1 mb-2">Today</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    images: [
      'images/banner.png',
      'https://www.topgear.com/sites/default/files/2022/09/1-BMW-3-Series.jpg',
      'https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg',
      'https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg',
      'https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg',
      'https://www.topgear.com/sites/default/files/2022/09/1-BMW-3-Series.jpg',
    ],
  }),
};
</script>

<style></style>
