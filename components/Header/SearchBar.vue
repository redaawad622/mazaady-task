<template>
  <v-sheet width="75%" class="d-flex align-stretch">
    <v-btn height="48px" class="search-btn" color="primary" variant="flat"
      ><v-icon>mdi-magnify</v-icon></v-btn
    >
    <v-text-field
      bg-color="primary-lighten-5"
      hide-details
      variant="plain"
      class="search-input"
    ></v-text-field>
    <v-sheet width="20%" min-width="200px" class="d-flex align-stretch">
      <v-text-field
        bg-color="primary-lighten-5"
        hide-details
        variant="plain"
        class="search-list"
      >
        <template v-slot:label>
          <span class="text-primary text-h6">
            <v-icon icon="mdi-chevron-down"></v-icon>
            مزاد مباشر متعدد
          </span>
        </template>
      </v-text-field>
    </v-sheet>
  </v-sheet>
</template>

<script></script>

<style lang="scss" scoped>
.search-btn {
  position: relative;
  left: 4px;
  z-index: 1;
}
.search-input {
  :deep(.v-field--variant-plain.v-field) {
    --v-field-padding-start: 10px;
  }
}
.search-list {
  margin-left: 1px;
  border-radius: 0 0 10px 10px;
  :deep(.v-field--variant-plain.v-field) {
    --v-field-padding-start: 40px;
  }
}
</style>
