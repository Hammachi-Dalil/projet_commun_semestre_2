<script setup lang="ts">

const props = defineProps<{ id: string }>();

console.log(props.id);
import { pb } from '@/backend'

import { EquipeById } from '@/backend'
const uneEquipe = await EquipeById(props.id)
console.log(uneEquipe)

</script>


    <template>
    <main class="mt-16 mb-16">
    <div class="flex flex-col lg:flex-row  justify-center">

          <div class="w-full">
            <p class="text-xl font-jaldi text-couleur-tonique-2 mt-8 mb-4">{{ uneEquipe.nom }}</p>

    </div>    
    </div>
</main>
</template>