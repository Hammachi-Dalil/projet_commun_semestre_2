<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue';
import type { RouterLink } from 'vue-router';
import IconInstagram from '@/components/icons/IconInstagram.vue';
import IconTwitter from '@/components/icons/IconTwitter.vue';
import IconMail from '@/components/icons/IconMail.vue';
</script>

<template>
<main class="mb-16 mt-24">
<p class="text-5xl font-semibold text-center text-black font-raleway">Bienvenu sur</p>
<div class="flex justify-center mt-8">
<IconLogo />
</div>

<div class="lg:text-center">
<div class="w-80 h-28 rounded-[20px] bg-[#3c5266] mx-auto mt-16 p-4 lg:h-auto lg:w-6/12">
<p class="text-base font-raleway font-semibold text-center text-white lg:text-xl">
  <span class="w-[281px] text-base font-semibold text-white">Montrez ce dont vous êtes capables ! </span>
  <br />
  <span class="w-[281px] text-base font-semibold text-white">
    invitez vos amis, trouvez un terrain libre et commencez à jouer !
  </span>
</p>
</div>
</div>

<RouterLink to="/events">
<div class="w-[263px] h-[54px] rounded-[20px] bg-[#b6fa8c] mx-auto my-12">
<p class="text-2xl font-semibold text-left text-black px-8 py-2">Organiser un five</p>
</div>
</RouterLink>

<p class="text-2xl font-semibold text-black text-center my-12">Notre équipe</p>


<div class="lg:w-2/4 w-[349px] h-[auto] mx-auto mt-4 mb-2 rounded-[10px] pt-4 bg-[#333]"
style="box-shadow: 0px 20px 20px 0 rgba(0,0,0,0.25);">
<div class="lg:flex">
<img
  src="../image/dalilFive.png"
  class=" relative w-[207.61px] h-[219.61px] rounded-[72.63px] mx-20 "
  style="box-shadow: 2px 0px 1px 0 rgba(0,0,0,0.05);"/>
  <div>
  <p class=" left-[159px] top-2.5 text-2xl text-left text-white m-3 ">Dalil Hammachi</p>
  <p class="w-[197px] h-[118px] left-[125px] top-[55px] text-xl text-left text-white lg:text-2xl lg:w-72   m-3">
    1 ere année BUT MMI spécialiste Développement
  </p>
  <div class="lg:flex justify center m-3 mx-20 flex">
    <IconInstagram  class="mr-8"/>
    <IconMail />
</div>
  </div>
</div>
</div>


<div class="lg:w-2/4 w-[349px] h-[auto] mx-auto mt-4 mb-2 rounded-[10px] pt-4 bg-[#333]"
style="box-shadow: 0px 20px 20px 0 rgba(0,0,0,0.25);">
<div class="lg:flex">
<img
  src="../image/div.tmm_photo.png"
  class=" relative w-[207.61px] h-[219.61px] rounded-[72.63px] mx-20 "
  style="box-shadow: 2px 0px 1px 0 rgba(0,0,0,0.05);"/>
  <div>
  <p class=" left-[159px] top-2.5 text-2xl text-left text-white m-3 ">Noah Ripert</p>
  <p class="w-[197px] h-[118px] left-[125px] top-[55px] text-xl text-left text-white lg:text-2xl lg:w-72   m-3">
    1 ere année BUT MMI spécialiste Communication  </p>
  <div class="lg:flex justify center m-3 mx-20 flex">
    <IconInstagram  class="mr-8"/>
    <IconMail />
</div>
  </div>
</div>
</div>


<div class="lg:w-2/4 w-[349px] h-[auto] mx-auto mt-4 mb-2 rounded-[10px] pt-4 bg-[#333]"
style="box-shadow: 0px 20px 20px 0 rgba(0,0,0,0.25);">
<div class="lg:flex">
<img
  src="../image/kubiFive.png"
  class=" relative w-[207.61px] h-[219.61px] rounded-[72.63px] mx-20 "
  style="box-shadow: 2px 0px 1px 0 rgba(0,0,0,0.05);"/>
  <div>
  <p class=" left-[159px] top-2.5 text-2xl text-left text-white m-3 ">Kubilay Yardimli</p>
  <p class="w-[197px] h-[118px] left-[125px] top-[55px] text-xl text-left text-white lg:text-2xl lg:w-72   m-3">
    1 ere année BUT MMI spécialiste Design  
  </p>
  <div class="lg:flex justify center m-3 mx-20 flex">
    <IconInstagram  class="mr-8"/>
    <IconMail />
</div>
  </div>
</div>
</div>






</main>

</template>
