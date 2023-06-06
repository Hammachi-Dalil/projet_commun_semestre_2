<script setup lang="ts">
import { pb } from '@/backend'
import type { JoueurResponse } from '@/pocketbase-types'
const props: JoueurResponse = defineProps<JoueurResponse>()



const url = `/events/${props.id}`
</script>

<template>

    <main class="py-16">
        <div class="lg:text-xl bg-couleur-tonique-2 mx-20 rounded-lg text-base">

            <RouterLink class="" :to="`${url}`">
            <p class="pl-6 font-raleway font-bold">Nom : {{ Nom }}</p>
            <p class="pl-6 font-raleway">Age : {{ Age }}</p>
            <p class="pl-6 font-raleway">Post : {{ post }}</p>
            <p class="pl-6 font-raleway">Post : {{ equipe }}</p>
            </RouterLink>
        </div>
    </main>
    </template>