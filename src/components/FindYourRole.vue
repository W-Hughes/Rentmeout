<template>
  <div class="roles__container relative top-0 left-0 pt-[2.5rem]">
    <div class="max-w-4xl mx-auto pt-[4rem]">
      <header class="text-center">
        <img
          src="@/assets/images/user_story.png
          "
          alt="RentMeOut Cover Image"
          class="w-full h-[24rem] object-cover rounded-lg mb-4"
        />

        <h1 class="text-4xl font-bold mb-2 pt-[1rem]">RentMeOut</h1>

        <p
          class="text-lg text-gray-600 mb-4 font-semibold text-[1.25rem] pt-[1rem]"
        >
          A platform to connect listers and renters for sharing resources.
        </p>
        <nav class="my-[2.5rem]">
          <router-link to="/features" class="text-primary mx-2 font-semibold"
            >Features</router-link
          >
          <router-link to="/about" class="text-primary font-semibold mx-2"
            >About</router-link
          >
        </nav>
        <!-- Button to deployed app (placeholder for now) -->
        <a
          href="/"
          class="bg-primary hover:bg-primary-dark-2 transition-colors duration-300 text-white px-[1.5rem] py-[0.75rem] mt-[4rem] rounded hover:bg-primary-2"
        >
          Visit RentMeOut App
        </a>
      </header>
      <section id="features" class="my-[6rem]">
        <h2 class="text-2xl font-bold mb-6 text-center">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="role in allRoles"
            :key="role.title"
            class="border p-4 rounded-lg shadow-md"
          >
            <img
              :src="role.image"
              :alt="role.title"
              class="w-full h-40 object-cover mt-2 rounded-md"
            />

            <h3 class="text-lg font-semibold mt-2">{{ role.title }}</h3>

            <p class="text-gray-600 mt-2">{{ role.description }}</p>
          </div>
        </div>
      </section>
      <section id="about" class="my-10">
        <h2 class="text-2xl font-bold mb-6 text-center">About RentMeOut</h2>
        <p class="text-gray-700 mb-4">
          RentMeOut was inspired by our desire to promote a sharing economy
          during our time at ALX. As part of our Portfolio Project for
          <a href="https://www.alxafrica.com" class="text-primary">ALX</a>, my
          team and I wanted to create a platform that allows people to share
          idle machinery and resources, reducing waste and fostering community
          connections. We started this project in March 2025, and despite
          challenges, we learned valuable lessons about teamwork and front-end
          development.
        </p>
        <h3 class="text-xl font-semibold mb-2">Meet the Team</h3>
        <div class="space-y-4">
          <div>
            <p><strong>Hughes</strong></p>
            <p>
              LinkedIn:
              <a href="#" class="text-primary">[Hughes's LinkedIn]</a> | GitHub:
              <a href="#" class="text-primary">[Hughes's GitHub]</a> | Twitter:
              <a href="#" class="text-primary">[Hughes's Twitter]</a>
            </p>
          </div>
        </div>
        <p class="mt-4">
          Check out our project repository on GitHub:
          <a href="#" class="text-primary">[Project GitHub Repo]</a>
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      cycleInterval: null,
    };
  },
  computed: {
    ...mapGetters("roles", ["allRoles", "isLoading", "error"]),
  },
  methods: {
    ...mapActions("roles", ["fetchRoles", "startRoleCycle", "stopRoleCycle"]),
    async initializeRoles() {
      await this.fetchRoles();
      if (this.allRoles.length > 0) {
        this.cycleInterval = this.startRoleCycle();
      }
    },
  },
  mounted() {
    this.initializeRoles();
  },
  beforeUnmount() {
    if (this.cycleInterval) {
      this.stopRoleCycle(this.cycleInterval);
    }
  },
};
</script>

<style scoped></style>
