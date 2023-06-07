<script lang="ts">
import ImageJoueur from '@/components/icons/ImageJoueur.vue';
</script>

<template>

<main class="mt-24">
  
  <ImageJoueur class="pt-10"/>

<p class="w-[100px] h-[31px] text-base font-semibold text-black mx-auto">Prénom Nom</p>


<div class="">
<div class="flex justify-center mt-12">
<div class="w-[355px] h-[188px] lg:flex justify-center lg:w-[900px]">
  <div
    class="w-[355px] h-[188px] rounded-[20px] bg-[#3c5266] p-6 font-raleway lg:w-[900px]"
    style="box-shadow: 0px 10px 10px 0 rgba(0,0,0,0.25);">
  <p
    class="w-[103px] lg:text-center text-base font-semibold text-white"
  >
    Remportés :
  </p>
  <p
    class="w-[49px] text-base font-semibold text-white"
  >
    10/12
  </p>
  <p
    class="w-[200px]  text-base font-semibold text-white"
  >
    Pourcentage de victoire :
  </p>
  <p
    class="w-[33px] text-base font-semibold text-white "
  >
    83%
  </p>
  <p
    class="w-[105px] text-base font-semibold text-white"
  >
    Match joués :
  </p>
  <p
    class="w-[39px] h-[17p] text-base font-semibold text-white"
  >
    <span class="w-[39px] h-[17px] text-base font-semibold text-white">12</span><br />
  </p>
</div>
</div>
</div>
</div>

<div class="flex justify-center mb-12">

<div class="w-[355px] h-[155px] mt-10 lg:w-[900px] ">
  <div
    class="w-[355px] h-[155px] p-6 rounded-[20px] bg-[#3c5266] lg:w-[900px]"
    style="box-shadow: 0px 10px 10px 0 rgba(0,0,0,0.25);">
  <p
    class="w-[260px]  text-base font-semiboldt text-white"
  >
    Remporter au moins 10 match
  </p>
  <p class="w-[157px] text-base font-semibold text-white">
    Jouer 15 match
  </p>
  <p
    class="w-[150px] text-base font-semibold  text-white"
  >
    Objectifs du mois :
  </p>
</div>
</div>
</div>


<div  class="flex justify-center">
<div>
      <label width="50px">Login    : </label><input type="email" id="login">
      <p></p>
      <label width="50px">Password : </label><input type="password" id="passwd">
      <p></p>
      <label width="50px">Name : </label><input type="text" id="name">
      <p></p>
      <hr>
      <button v-on:click="register()">Register</button>
      <button v-on:click="login()">Login</button><p></p>
      <button v-on:click="reset_password()">Reset Password</button><p></p>
</div>
</div>


</main>
</template>