<script setup lang="ts">

const props = defineProps<{ id: string }>();

console.log(props.id);
import { JoueurById } from '@/backend'
const unJoueur = await JoueurById(props.id)
console.log(unJoueur)


console.log(unJoueur);
import { pb } from '@/backend'
const urlImg0 = unJoueur.image ? pb.getFileUrl(unJoueur, unJoueur.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
</script>


    <template>
    <main class="mt-16 mb-16">
    <div class="flex flex-col lg:flex-row  justify-center">

          <div class="w-full mt-8">
            <p class="text-2xl font-bold text-couleur-tonique-1 mt-8 mb-4">{{ unJoueur.Nom }}</p>
            <h1 class="text-xl font-bold text-couleur-tonique-1 mt-8 mb-4">{{ unJoueur.Age }} ans</h1>
            <h1 class="text-xl font-bold text-couleur-tonique-1 mt-8 mb-4">Post préférentiel : {{ unJoueur.post }}</h1>

    </div>    
    </div>
</main>
</template>