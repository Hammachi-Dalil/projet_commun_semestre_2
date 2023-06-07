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

import ImageJoueur from '@/components/icons/ImageJoueur.vue';
</script>


    <template>
    <main class="mt-16 mb-16 ">
      <div class="lg:w-2/4 w-[349px] h-[auto] mx-auto mt-4 mb-2 rounded-[10px]">
    <div class="flex flex-col lg:flex-row justify-center border-4 border-couleur-tonique-1 mx-1/4">
          <div class="w-full mt-8 text-center ">
            <ImageJoueur class="relative w-[207.61px] h-[219.61px] mx-20 flex justify-center"/>
            <p class="text-2xl font-bold text-couleur-tonique-1 mt-8 mb-4">{{ unJoueur.Nom }}</p>
            <h1 class="text-xl font-bold text-couleur-tonique-1 mt-8 mb-4">{{ unJoueur.Age }} ans</h1>
            <h1 class="text-xl font-bold text-couleur-tonique-1 mt-8 mb-4">Post préférentiel : {{ unJoueur.post }}</h1>
          </div>

    </div>    
    </div>
</main>
</template>