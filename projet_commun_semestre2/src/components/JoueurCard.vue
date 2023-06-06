<script setup lang="ts">
import { pb } from '@/backend';
import type { JoueurResponse } from '@/pocketbase-types'
const url = `/events/${props.id}`


</script>

<template>
    <RouterLink class="" :to="`${url}`">
            <p class="pl-6 font-jaldi">Nom : {{ nom }}</p>
    </RouterLink>

</template>