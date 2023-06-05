<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { RouterLink } from 'vue-router';

const activeMenu = ref(false)

function closeMenu() {
	  activeMenu.value = false
	}
</script>

<template>
    <header class="absolute top-0 z-10 flex w-full translate-y-0 items-stretch justify-between bg-couleur-tonique-1 px-6 py-2 transition-all duration-300 ease-in-out lg:py-0">
    <div class="fles items-center">
      <a href="/">
        <p class="text-couleur-tonique-2 font-italiana text-3xl">FiveOn</p>
      </a>
    </div>

    <div class="flex items-center gap-4 lg:flex-row-reverse">
        <button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden" @click="activeMenu = !activeMenu">
        <div class="ease h-[2px] w-full transform rounded-full bg-white transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-white': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-white transition duration-300" :class="{ 'bg-white opacity-0': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-white transition duration-300"  :class="{ '-translate-y-[9px] -rotate-45 bg-white': activeMenu }"></div>
      </button>

			<nav  class=" invisible opacity-0 fixed inset-0 h-screen w-screen bg-couleur-tonique-1 text-2xl text-white transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100" :class="{ '!visible opacity-100': activeMenu }">
		    <ul class="mt-[25vh] ml-16 lg:m-0 lg:flex">
		      <li class="menu-item"><RouterLink class="menu-link" to="/" @click="closeMenu">Accueil</RouterLink></li>
          <li class="menu-item"><RouterLink class="menu-link" to="/events" @click="closeMenu">Jouer</RouterLink></li>
		      <li class="menu-item"><RouterLink class="menu-link" to="/Artistes" @click="closeMenu">Mon équipe</RouterLink></li>
          <li class="menu-item"><RouterLink class="menu-link" to="/MonCompte" @click="closeMenu">Mon compte</RouterLink></li>
		      <li class="menu-item"><RouterLink class="menu-link" to="/Contact" @click="closeMenu">Messagerie</RouterLink></li>
		    </ul>
		  </nav>
    </div>
  </header>
</template>