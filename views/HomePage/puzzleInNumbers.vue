<script setup lang="ts">

import volunteer from "@/assets/pics/volunteer.png"
import trainees from "@/assets/pics/trainees.jpg"
import image from "@/assets/pics/Learning-cuate.png"
import Seminar from "@/assets/pics/Seminar-pana.png"
</script>

<template>
  <div>
    
    <v-container class="mt-6">
      <v-card :flat="true">
        <v-card-item>
          <v-card-title
            style="
              font-size: 45px;
              font-weight: 800;
              line-height: 4rem;
              display: flex;
              justify-content: center;
            "
            > بازل  بالأرقام</v-card-title
          >
        </v-card-item>

        <v-row class="mt-2">
          <v-col>
           <card :image="volunteer" titleText=" المتطوعين" contentText="121"/>
          </v-col>
          <v-col>
           <card :image="trainees" titleText=" المتدربين" contentText="121"/>
          </v-col>
          <v-col>
           <card :image="image" titleText=" المتطوعين" contentText="121"/>
          </v-col>
          <v-col>
           <card :image="Seminar" titleText=" المتطوعين" contentText="121"/>
          </v-col>
        </v-row>
      </v-card>


    </v-container>
  </div>
</template>
