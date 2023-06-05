<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue';
import type { RouterLink } from 'vue-router';
</script>

<template>
<main class="mt-16">
<p class="text-5xl font-semibold text-center text-black font-raleway">Bienvenu sur</p>
<div class="flex justify-center mt-8">
<IconLogo />
</div>

<div class="w-[340px] h-28 rounded-[20px] bg-[#3c5266] mx-auto mt-16 p-4">
<p class="w-[281px] text-base font-raleway font-semibold text-center text-white">
  <span class="w-[281px] text-base font-semibold text-white">Montrez ce dont vous êtes capables ! </span>
  <br />
  <span class="w-[281px] text-base font-semibold text-white">
    invitez vos amis, trouvez un terrain libre et commencez à jouer !
  </span>
</p>
</div>

<RouterLink to="/events">
<div class="w-[263px] h-[54px] rounded-[20px] bg-[#b6fa8c] mx-auto my-12">
<p class="text-2xl font-semibold text-left text-black px-8 py-2">Organiser un five</p>
</div>
</RouterLink>

<p class="text-2xl font-semibold text-black text-center my-12">Notre équipe</p>

<div class="w-[349px] h-[248px] relative mx-auto mt-4 mb-2">
  <div
    class="w-[349px] h-[248px] absolute left-[-0.91px] top-[-0.91px] rounded-[10px] bg-[#333]"
    style="box-shadow: 0px 20px 20px 0 rgba(0,0,0,0.25);"
  ></div>
  <svg
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute left-[11px] top-[17px]"
    preserveAspectRatio="none"
  >
    <circle cx="48" cy="48" r="48" fill="#D9D9D9"></circle></svg>
    <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-10 h-10 absolute left-56 top-[182px]"
    preserveAspectRatio="none"
  >
    <path
      d="M38.3334 5.00001C36.7374 6.1258 34.9703 6.98685 33.1001 7.55001C32.0963 6.39586 30.7623 5.57783 29.2785 5.20655C27.7946 4.83527 26.2326 4.92866 24.8035 5.47409C23.3745 6.01952 22.1475 6.99067 21.2884 8.2562C20.4293 9.52173 19.9796 11.0206 20.0001 12.55V14.2167C17.0711 14.2926 14.1689 13.643 11.5518 12.3257C8.93465 11.0085 6.68394 9.0644 5.00008 6.66667C5.00008 6.66667 -1.66658 21.6667 13.3334 28.3333C9.90096 30.6633 5.81201 31.8316 1.66675 31.6667C16.6667 40 35.0001 31.6667 35.0001 12.5C34.9985 12.0358 34.9539 11.5727 34.8667 11.1167C36.5678 9.43916 37.7681 7.32119 38.3334 5.00001Z"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path></svg
  ><svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-10 h-10 absolute left-[155px] top-[182px]"
    preserveAspectRatio="none"
  >
    <path
      d="M30.0001 3.33334H25.0001C22.7899 3.33334 20.6703 4.21132 19.1075 5.77412C17.5447 7.33692 16.6667 9.45654 16.6667 11.6667V16.6667H11.6667V23.3333H16.6667V36.6667H23.3334V23.3333H28.3334L30.0001 16.6667H23.3334V11.6667C23.3334 11.2246 23.509 10.8007 23.8216 10.4882C24.1341 10.1756 24.5581 10 25.0001 10H30.0001V3.33334Z"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path></svg
  ><svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-10 h-10 absolute left-[88px] top-[182px]"
    preserveAspectRatio="none"
  >
    <path
      d="M28.3333 3.33334H11.6666C7.06421 3.33334 3.33325 7.0643 3.33325 11.6667V28.3333C3.33325 32.9357 7.06421 36.6667 11.6666 36.6667H28.3333C32.9356 36.6667 36.6666 32.9357 36.6666 28.3333V11.6667C36.6666 7.0643 32.9356 3.33334 28.3333 3.33334Z"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M26.6667 18.95C26.8724 20.3371 26.6355 21.7537 25.9897 22.9984C25.3438 24.243 24.322 25.2524 23.0695 25.8828C21.8169 26.5132 20.3975 26.7327 19.0131 26.5099C17.6286 26.2871 16.3497 25.6335 15.3581 24.6419C14.3666 23.6504 13.713 22.3715 13.4902 20.987C13.2674 19.6026 13.4869 18.1832 14.1173 16.9306C14.7477 15.6781 15.7571 14.6562 17.0017 14.0104C18.2464 13.3646 19.663 13.1277 21.0501 13.3333C22.465 13.5432 23.7748 14.2025 24.7862 15.2139C25.7976 16.2253 26.4569 17.5351 26.6667 18.95Z"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M29.1667 10.8333H29.1834"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
  <p class="absolute left-[159px] top-2.5 text-2xl text-left text-white">Dalil Hammachi</p>
  <p class="w-[197px] h-[118px] absolute left-[125px] top-[55px] text-xl text-left text-white">
    1 ere année BUT MMI spécialiste Développement
  </p>
</div>



<div class="w-[349px] h-[248px] relative mx-auto mt-4 mb-2">
  <div
    class="w-[349px] h-[248px] absolute left-[-0.91px] top-[-0.91px] rounded-[10px] bg-[#333]"
    style="box-shadow: 0px 20px 20px 0 rgba(0,0,0,0.25);"
  ></div>
  <svg
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute left-[11px] top-[17px]"
    preserveAspectRatio="none"
  >
    <circle cx="48" cy="48" r="48" fill="#D9D9D9"></circle></svg
  ><svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-10 h-10 absolute left-56 top-[182px]"
    preserveAspectRatio="none"
  >
    <path
      d="M38.3334 4.99997C36.7374 6.12577 34.9703 6.98682 33.1001 7.54998C32.0963 6.39583 30.7623 5.57779 29.2785 5.20652C27.7946 4.83524 26.2326 4.92863 24.8035 5.47406C23.3745 6.01949 22.1475 6.99064 21.2884 8.25617C20.4293 9.52169 19.9796 11.0205 20.0001 12.55V14.2166C17.0711 14.2926 14.1689 13.643 11.5518 12.3257C8.93465 11.0084 6.68394 9.06437 5.00008 6.66664C5.00008 6.66664 -1.66658 21.6666 13.3334 28.3333C9.90096 30.6633 5.81201 31.8315 1.66675 31.6666C16.6667 40 35.0001 31.6666 35.0001 12.5C34.9985 12.0357 34.9539 11.5726 34.8667 11.1166C36.5678 9.43913 37.7681 7.32116 38.3334 4.99997Z"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path></svg
  ><svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-10 h-10 absolute left-[155px] top-[182px]"
    preserveAspectRatio="none"
  >
    <path
      d="M30.0001 3.33331H25.0001C22.7899 3.33331 20.6703 4.21129 19.1075 5.77409C17.5447 7.33689 16.6667 9.45651 16.6667 11.6666V16.6666H11.6667V23.3333H16.6667V36.6666H23.3334V23.3333H28.3334L30.0001 16.6666H23.3334V11.6666C23.3334 11.2246 23.509 10.8007 23.8216 10.4881C24.1341 10.1756 24.5581 9.99998 25.0001 9.99998H30.0001V3.33331Z"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path></svg
  ><svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-10 h-10 absolute left-[88px] top-[182px]"
    preserveAspectRatio="none"
  >
    <path
      d="M28.3333 3.33331H11.6666C7.06421 3.33331 3.33325 7.06427 3.33325 11.6666V28.3333C3.33325 32.9357 7.06421 36.6666 11.6666 36.6666H28.3333C32.9356 36.6666 36.6666 32.9357 36.6666 28.3333V11.6666C36.6666 7.06427 32.9356 3.33331 28.3333 3.33331Z"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M26.6667 18.95C26.8724 20.3371 26.6355 21.7537 25.9897 22.9984C25.3438 24.243 24.322 25.2524 23.0695 25.8828C21.8169 26.5132 20.3975 26.7327 19.0131 26.5099C17.6286 26.2871 16.3497 25.6335 15.3581 24.6419C14.3666 23.6504 13.713 22.3715 13.4902 20.987C13.2674 19.6026 13.4869 18.1832 14.1173 16.9306C14.7477 15.6781 15.7571 14.6562 17.0017 14.0104C18.2464 13.3646 19.663 13.1277 21.0501 13.3333C22.465 13.5432 23.7748 14.2025 24.7862 15.2139C25.7976 16.2253 26.4569 17.5351 26.6667 18.95Z"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M29.1667 10.8333H29.1834"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
  <p class="absolute left-[159px] top-2.5 text-2xl text-left text-white">Kubilay Yardimli</p>
  <p class="w-[197px] h-[118px] absolute left-[125px] top-[55px] text-xl text-left text-white">
    1 ere année BUT MMI spécialiste Design
  </p>
</div>


<div class="w-[349px] h-[248px] relative mx-auto mt-4 mb-24">
  <div
    class="w-[349px] h-[248px] absolute left-[-0.91px] top-[-0.91px] rounded-[10px] bg-[#333]"
    style="box-shadow: 0px 20px 20px 0 rgba(0,0,0,0.25);"
  ></div>
  <svg
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute left-[11px] top-[17px]"
    preserveAspectRatio="none"
  >
    <circle cx="48" cy="48" r="48" fill="#D9D9D9"></circle></svg
  ><svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-10 h-10 absolute left-56 top-[182px]"
    preserveAspectRatio="none"
  >
    <path
      d="M38.3334 5C36.7374 6.1258 34.9703 6.98685 33.1001 7.55C32.0963 6.39585 30.7623 5.57782 29.2785 5.20654C27.7946 4.83527 26.2326 4.92866 24.8035 5.47409C23.3745 6.01952 22.1475 6.99067 21.2884 8.25619C20.4293 9.52172 19.9796 11.0206 20.0001 12.55V14.2167C17.0711 14.2926 14.1689 13.643 11.5518 12.3257C8.93465 11.0085 6.68394 9.06439 5.00008 6.66667C5.00008 6.66667 -1.66658 21.6667 13.3334 28.3333C9.90096 30.6633 5.81201 31.8315 1.66675 31.6667C16.6667 40 35.0001 31.6667 35.0001 12.5C34.9985 12.0358 34.9539 11.5727 34.8667 11.1167C36.5678 9.43915 37.7681 7.32119 38.3334 5Z"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path></svg
  ><svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-10 h-10 absolute left-[155px] top-[182px]"
    preserveAspectRatio="none"
  >
    <path
      d="M30.0001 3.33333H25.0001C22.7899 3.33333 20.6703 4.21131 19.1075 5.77411C17.5447 7.33691 16.6667 9.45653 16.6667 11.6667V16.6667H11.6667V23.3333H16.6667V36.6667H23.3334V23.3333H28.3334L30.0001 16.6667H23.3334V11.6667C23.3334 11.2246 23.509 10.8007 23.8216 10.4882C24.1341 10.1756 24.5581 10 25.0001 10H30.0001V3.33333Z"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path></svg
  ><svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-10 h-10 absolute left-[88px] top-[182px]"
    preserveAspectRatio="none"
  >
    <path
      d="M28.3333 3.33333H11.6666C7.06421 3.33333 3.33325 7.06429 3.33325 11.6667V28.3333C3.33325 32.9357 7.06421 36.6667 11.6666 36.6667H28.3333C32.9356 36.6667 36.6666 32.9357 36.6666 28.3333V11.6667C36.6666 7.06429 32.9356 3.33333 28.3333 3.33333Z"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M26.6667 18.95C26.8724 20.3371 26.6355 21.7537 25.9897 22.9984C25.3438 24.243 24.322 25.2524 23.0695 25.8828C21.8169 26.5132 20.3975 26.7327 19.0131 26.5099C17.6286 26.2871 16.3497 25.6335 15.3581 24.6419C14.3666 23.6504 13.713 22.3715 13.4902 20.987C13.2674 19.6026 13.4869 18.1832 14.1173 16.9306C14.7477 15.6781 15.7571 14.6562 17.0017 14.0104C18.2464 13.3646 19.663 13.1276 21.0501 13.3333C22.465 13.5431 23.7748 14.2024 24.7862 15.2138C25.7976 16.2253 26.4569 17.5351 26.6667 18.95Z"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M29.1667 10.8333H29.1834"
      stroke="#B6FA8C"
      stroke-width="3.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
  <p class="absolute left-[159px] top-2.5 text-2xl text-left text-white">Noah Ripert</p>
  <p class="w-[197px] h-[118px] absolute left-[125px] top-[55px] text-xl text-left text-white">
    1 ere année BUT MMI spécialiste Communication
  </p>
</div>


</main>

</template>
