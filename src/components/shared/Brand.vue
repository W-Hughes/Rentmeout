<template>
  <div class="brand">
    <router-link to="/">
      <div class="brand__logo">
        <img
          src="@/assets/logos/logo_03.png"
          alt="brand log"
          class="w-[4rem] md:w-[3.5rem] relative left-[0.2rem]"
        />
      </div>
      <div
        class="brand__title font-bold text-[0.8rem] relative bottom-[0.625rem]"
      >
        RentMeOut
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BrandComponent",
};
</script>

<style>
/* HEADER BRAND */
.brand {
  @apply mx-[1rem] w-[6rem] h-[3rem] border border-solid border-primary-dark shadow-sm flex flex-col items-center;
}
</style>
