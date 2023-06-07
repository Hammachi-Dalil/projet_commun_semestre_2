<script setup lang="ts">
import { pb } from '@/backend'
import type { EquipeResponse } from '@/pocketbase-types'
const props: EquipeResponse = defineProps<EquipeResponse>()



const url = `/monEquipe/${props.id}`
</script>

<template>

    <main class="py-16">
        <div class="lg:text-xl bg-couleur-tonique-2 mx-20 rounded-lg text-base border-2 border-couleur-tonique-1">

            <RouterLink class="" :to="`${url}`">
            <p class="pl-6 font-raleway">Nom : {{ nom }}</p>
            <p class="p-6 font-raleway text-sm flex justify-center lg:text-base">En savoir plus</p>
            </RouterLink>
        </div>
    </main>
    </template>