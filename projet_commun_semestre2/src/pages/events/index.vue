<script setup lang="ts">
import { onMounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import inviter from '@/components/icons/inviter.vue';
import AjouterAmis from '@/components/icons/AjouterAmis.vue';
import IconEquipe from '@/components/icons/LogoEquipe.vue';


const mapContainer = ref(null);
const locations = [
  { latLng: [47.509849, 6.805154], name: 'L’arena 25, 2 Rue Pierre Donzelot, 25200 Montbéliard' },
  { latLng: [47.512911, 6.827492], name: 'Street soccer, 8 Rue des Sablières, 25400 Arbouans' },
  { latLng: [47.507601, 6.790427], name: 'City stade, 3 Rte de Bethoncourt, 25200 Montbéliard' }
];

onMounted(() => {
  const map = L.map(mapContainer.value).setView([47.5105, 6.7973], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);

  // Adding markers to the map
  locations.forEach(location => {
    L.marker(location.latLng).addTo(map).bindPopup(location.name);
  });
});

</script>



<template>

<div ref="mapContainer" class="mapContainer mx-auto mt-20 w-full h-[600px] relative"></div>


    <main class="mt-16">
        <p class="text-2xl font-semibold text-black text-center my-4">Organiser un five</p>

<div class="flex justify-center">
  <inviter />
</div>


<div class="flex justify-center my-4">
  <AjouterAmis />
  <p class="text-base font-semibold text-center text-black pl-2">inviter des amis</p>
</div>
<p class="font-montserrat font-bold text-center text-xl my-4">Rejoindre des amis</p>



<div class="flex justify-center my-4">
<div class="w-[298px] h-[133px] relative">
  <div
    class="w-[298px] h-[133px] absolute left-[-1px] top-[-1px] rounded-[5px] bg-couleur-tonique-1"
    style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);"
  ></div>
  <p class="w-[122px] h-[35px] absolute left-[93px] top-[11px] text-2xl text-left text-white">
    GROUPE 1
  </p>
  <p
    class="w-[232px] h-[25px] absolute left-[38px] top-12 text-base font-semibold text-left text-white">
    Avec Enes, Thomas et 5 autres
  </p>
<div class="absolute top-20 left-32">
  <IconEquipe />
</div>
</div>
</div>

<div class="flex justify-center my-4">
<div class="w-[298px] h-[133px] relative">
  <div
    class="w-[298px] h-[133px] absolute left-[-1px] top-[-1px] rounded-[5px] bg-couleur-tonique-1"
    style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);"
  ></div>
  <p class="w-[122px] h-[35px] absolute left-[93px] top-[11px] text-2xl text-left text-white">
    GROUPE 2
  </p>
  <p
    class="w-[232px] h-[25px] absolute left-[38px] top-12 text-base font-semibold text-left text-white">
    Avec Atnan, Yannis et 3 autres
  </p>
<div class="absolute top-20 left-32">
  <IconEquipe />
</div>
</div>
</div>

<div class="flex justify-center my-4">
<div class="w-[298px] h-[133px] relative">
  <div
    class="w-[298px] h-[133px] lg:w-[596] lg:h-[266] absolute left-[-1px] top-[-1px] rounded-[5px] bg-couleur-tonique-1"
    style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);"
  ></div>
  <p class="w-[122px] h-[35px] absolute left-[93px] top-[11px] text-2xl text-left text-white">
    GROUPE 3
  </p>
  <p
    class="w-[232px] h-[25px] absolute left-[38px] top-12 text-base font-semibold text-left text-white">
    Avec Sofiane, Oli et 5 autres
  </p>
<div class="absolute top-20 left-32">
  <IconEquipe />
</div>
</div>
</div>
    </main>
</template>

