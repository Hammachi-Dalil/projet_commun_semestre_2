<script setup lang="ts">
import { pb } from '@/backend'
import type { JoueurResponse } from '@/pocketbase-types'
const props: JoueurResponse = defineProps<JoueurResponse>()
import ImageJoueur from './icons/ImageJoueur.vue';



const url = `/events/${props.id}`
</script>

<template>

    <main class="py-16 ">
        <div class="lg:text-xl mx-20 rounded-lg text-base border-4 border-couleur-tonique-1">

            <RouterLink class="" :to="`${url}`">
                <ImageJoueur class="m-4"/>
            <p class="pl-6 font-raleway font-bold text-left"> {{ Nom }}</p>
            </RouterLink>
        </div>
    </main>
    </template>