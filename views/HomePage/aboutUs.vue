<script setup lang="ts">
import puzzleImage from "@/assets/puzzleImage.jpg";
</script>

<template>
  <div>
    <v-parallax
>

    <v-container class="mt-6">
      <v-row>
        <v-col>

        <v-img :src="puzzleImage" :width="500" cover> </v-img>
        </v-col>
        <v-col>
        <v-card :flat="true">
            <v-card-item >

          <v-card-title style="font-size: 45px; font-weight: 800; line-height: 4rem;">من نحن </v-card-title>
            </v-card-item>

          <v-card-text style="font-size: 25px; margin-top: 1rem;
             line-height: 1.5;">
             
        أبجد هوز حطى كلمن هوى ، حسومات محسنة. امتنع عن سعادتها الحكيمة ، من خارجها ، وتملقها ، ألا تعرف كيف تتحرر من بعض المستكشف المولود للعقل أنه كذلك؟ بالنسبة لبعض الآلام ، ولكن هذا ليس من الحكمة إدارة الأيدي الكبيرة ، يتبع ممارسة المتعة هنا. إعاقة آلام طبيعة الهروب بحيث يتم إبرام جميع المحاضرين الرئيسيين بشكل فاسد.      </v-card-text>
          <v-card-actions class="pt-0 mr-2">
              <v-btn
                style="font-size: 20px; background-color:#ffa31e "
                color="white"
              >
                للمزيد
              </v-btn>
            </v-card-actions>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-parallax>
  </div>
</template>

<style>

h1 {
  font-family: 'Tajawal', sans-serif;
}</style>