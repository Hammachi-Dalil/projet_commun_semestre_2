<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LogoIcon from '@/components/icons/IconLogo.vue'
</script>

<template>
  <header class="bg-[#3C5266]">
    <div>
      <a href="/">
        <LogoIcon />
      </a>
    </div>

    <div>
      <button>
        <SearchIcon />
      </button>

      <button>
        <div></div>
        <div></div>
        <div></div>
      </button>

			<nav>
		    <ul class="text-white font-Montserrat">
		      <li><RouterLink to="/">Jouer</RouterLink></li>
		      <li><RouterLink to="/">Notre équipe</RouterLink></li>
		      <li><RouterLink to="/MonCompte">Mon Compte</RouterLink></li>
		      <li><RouterLink to="/">Messages</RouterLink></li>
		    </ul>
		  </nav>
    </div>
  </header>
</template>