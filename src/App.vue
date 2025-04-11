<!-- App.vue -->
<template>
  <!-- Main container with full viewport height and flex column -->
  <div class="app__container flex flex-col min-h-screen">
    <!-- Navigation and main content -->
    <main-nav />
    <!-- Main content area, takes up remaining space -->
    <main class="flex-grow">
      <router-view />
    </main>
    <!-- Footer pinned to the bottom -->
    <main-footer />
  </div>
</template>

<script>
import MainNav from "@/components/navigation/MainNav.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "App",
  components: {
    MainNav,
    MainFooter,
  },
};
</script>

<style scoped>
/* Ensure main content has padding to avoid overlap with footer */
main {
  @apply pb-8;
}
</style>
