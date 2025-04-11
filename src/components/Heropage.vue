<template>
  <main class="hero__section">
    <div class="hero__banner">
      <div class="banner__wrapper">
        <form @click.prevent class="mt-[5rem] xl:mt-[10rem]">
          <div class="banner__header text-white px-[1rem] text-center">
            <h2
              class="banner__title shadow-xl leading-[3.5rem] xl:leading-0 text-[3rem] xl:text-[3rem] font-bold pb-[1rem] tracking-wide"
            >
              <span class="text-primary">Rent</span> it! List it! Win&nbsp;it!
            </h2>
            <p class="banner__description text-[1.25rem] pb-[1rem]">
              Access tools, homes, and machinery—or turn your idle gear into
              cash. Start today.
            </p>
          </div>
          <header class="banner__body">
            <div
              class="search-input__group banner__search--category w-full sm:w-[18rem] md:w-[20rem] lg:w-[32rem] px-[1.5rem]"
            >
              <select name="category" id="" class="w-full focus:outline-none">
                <option value="">-- Select category --</option>
                <option class="" value="1">Real estate</option>
                <option value="2">Machineries</option>
                <option value="2">Machineries</option>
              </select>
            </div>
            <div class="search-input__group banner__search--location border">
              <font-awesome-icon
                :icon="['fas', 'location-dot']"
                class="banner__search-icon text-[1.5rem]"
              />
              <input
                type="text"
                placeholder="Location"
                class="banner__search-input focus:outline-none"
              />
              <button
                type="submit"
                class="bg-primary hover:bg-primary-dark-2 px-[1.5rem] py-[0.75rem] rounded-full text-white ml-auto text-[0.75rem] transition-colors duration-300 ease-in"
              >
                Search
              </button>
            </div>
          </header>
        </form>
      </div>
    </div>
    <user-stories />
    <section>
      <!-- <user-stories /> -->
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import UserStories from "@/components/user/UserStories.vue";
export default {
  components: { UserStories },
  name: "HeroPage",
  setup() {
    const bannerImage = ref(require("@/assets/images/hero_001.jpg"));
    return { bannerImage };
  },
};
</script>

<style>
.hero__section {
  @apply mx-0;
}
.hero__banner {
  @apply relative  mx-0 bg-[url(@/assets/images/hero_002.jpg)] flex justify-center w-full bg-cover h-[39.95rem];
}
.banner__wrapper {
  @apply absolute bg-opacity-50 w-full bg-black h-full top-0 left-0 pt-[3.5rem] md:pt-[4rem] flex justify-center;
}

/* Body */
.banner__body {
  @apply sm:flex gap-x-2 h-auto px-[1rem] w-full  mt-[1.5rem] text-sm;
}

/* Search INput Group */
.search-input__group {
  @apply w-full text-sm border mb-[2rem] sm:mb-0 bg-white border-solid border-gray-400 rounded-full h-[3.5rem] flex overflow-x-hidden px-0;
}

.banner__search-input {
  @apply p-[0.95rem] text-primary w-full focus:outline-none;
}
.banner__search-icon {
  @apply p-[0.95rem] text-primary text-[0.5rem];
}
.banner__search--location {
  @apply flex-grow overflow-y-hidden;
}
.banner__search--category {
  @apply flex-grow sm:w-[6rem];
}
</style>
