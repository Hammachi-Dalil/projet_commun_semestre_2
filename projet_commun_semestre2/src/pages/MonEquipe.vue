<script setup lang="ts">
import IconEquipe from '@/components/icons/LogoEquipe.vue'
import plus from '@/components/icons/plus.vue'
import { allJoueur } from '@/backend';
import JoueurCard from '@/components/JoueurCard.vue';
import { allEquipe } from '@/backend';
import EquipeCard from '@/components/EquipeCard.vue'

const JoueurListe = await allJoueur();
const EquipeListe = await allEquipe();

</script>

<template>
    <main class="mt-24 mb-16">
        <p class="font-raleway text-xl font-bold ml-1">Créer ton équipe</p>
            <div class="my-4 ml-2"> 
            <IconEquipe />
            <plus class="ml-8" />
        </div>
        <p class="font-bold font-raleway ml-1">Mes équipes</p>
            <EquipeCard v-for="uneEquipe of EquipeListe" v-bind="{...uneEquipe}" class="text-xl"/>

        <p class="font-bold font-raleway ml-1">Découvrer des joueurs</p>
            <JoueurCard v-for="unJoueur of JoueurListe" v-bind="{...unJoueur}" class="text-xl"/>

    </main>
</template>