<template>
    <img :src="logoSrc" :alt="altText" :style="{ width: size, height: 'auto' }" />
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    logoSrc: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: 'Logo',
    },
    size: {
      type: [Number, String],
      default: '100px', // Set a default size here for the logo
    },
  });
  </script>
  
  <style scoped>
  /* Add any scoped styles here if needed */
  </style>
  