<script setup lang="ts">
import { ref } from "vue";
import puzzleImage from "../assets/homeImage.jpeg";
import TagnyaImage from "../assets/TagnyaImage.jpeg";
import englishCourseImage from "../assets/englishCourseImage.jpeg";
import aboutUs from "@/views/HomePage/aboutUs.vue";
import PuzzleInNumbers from "~/views/HomePage/PuzzleInNumbers.vue";

const slides = ref([
  {
    src: `${puzzleImage}`,

  },
  {
    src: `${TagnyaImage}`
  }
  

]);
</script>

<template>
  <v-parallax>

    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows="hover"
      
    >
      <v-carousel-item
      cover
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide.src"
      
        
      >
      </v-carousel-item>
    </v-carousel>
  </v-parallax>

  <aboutUs/>
  <PuzzleInNumbers/>
</template>
