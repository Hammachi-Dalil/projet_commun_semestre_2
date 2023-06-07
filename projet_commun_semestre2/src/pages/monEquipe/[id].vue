<script setup lang="ts">

const props = defineProps<{ id: string }>();

console.log(props.id);
import { pb } from '@/backend'
import type { JoueurResponse } from '@/pocketbase-types';

import { EquipeById } from '@/backend'
const uneEquipe = await EquipeById(props.id)
console.log(uneEquipe)
const joueur:JoueurResponse[] = uneEquipe.expand.joueur_link as JoueurResponse
import JoueurCard from '@/components/JoueurCard.vue';


</script>


    <template>
    <main class="mt-16 mb-16">
    <div class="flex flex-col lg:flex-row  justify-center">

<ImageJoueur class="m-4"/>


          <div class="w-full">
            <p class="text-3xl font-montserrat mt-8 mb-4 text-center">Voici les joueur qui constituent l'{{ uneEquipe.nom }}</p>
            <JoueurCard v-for="unJoueur of joueur" v-bind="{...unJoueur}"/>


    </div>    
    </div>
</main>
</template>