<script setup lang="ts">

const props = defineProps<{ id: string }>();

console.log(props.id);
import { JoueurById } from '@/backend'
const unJoueur = await JoueurById(props.id)


console.log(unJoueur);
import { pb } from '@/backend'
const urlImg0 = unJoueur.image ? pb.getFileUrl(unJoueur, unJoueur.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
</script>


    <template>
    <main class="mt-16 mb-16">
    <div class="flex flex-col lg:flex-row  justify-center">

          <div class="w-full">
            <p class="text-xl font-jaldi text-couleur-tonique-2 mt-8 mb-4">{{ unJoueur.Nom }}</p>
            <h1 class="text-xl font-jaldi text-couleur-tonique-2 mt-8 mb-4">{{ unJoueur.Age }}</h1>
            <h1 class="text-xl font-jaldi text-couleur-tonique-2 mt-8 mb-4">{{ unJoueur.post }}</h1>

    </div>    
    </div>
</main>
</template>