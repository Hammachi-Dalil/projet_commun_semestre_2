<script lang="ts">
import modifCompte from '@/components/icons/modifCompte.vue';
import IconLogo from '@/components/icons/IconLogo.vue';
</script>

<template>

<main class="mt-16">
<div>
<IconLogo />
<modifCompte />
</div>
<p class="w-[100px] h-[31px] text-base font-semibold text-black mx-auto">Prénom Nom</p>

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