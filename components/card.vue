<script setup lang="ts">
const props = defineProps({
  titleText: {
    type: String,
  },
  contentText: {
    type: String,
  },
  image: {
    type: String,
  },

  // size: {
  //   type: [Number, String],
  //   default: '100px', // Set a default size here for the logo
  // },
});
</script>

<template>
    
  <v-card :flat="true">
    
    <v-card-item style="display: flex; justify-content: center">
        
      <v-avatar size="130">
        
        <v-img
          style="width: 110px; "
          cover
          :src="image"
        ></v-img>
      </v-avatar>
      <v-card-title
        style="font-size: 30px; font-weight: 600; line-height: 4rem"
        >{{ titleText }}</v-card-title
      >
    </v-card-item>

    <v-card-text
      style="display: flex; justify-content: center; font-size: 25px"
    >
      {{ contentText }}
    </v-card-text>
  </v-card>
</template>
