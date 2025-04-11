<template>
  <article class="user__story">
    <div class="main__container">
      <h2 class="text-primary-dark py-[2rem] text-[2rem] font-light">
        Stories
      </h2>
      <ul class="user__story--item w-full flex flex-col">
        <li class="user__story--list">
          <media />
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import Media from "../shared/Media.vue";
export default {
  components: { Media },
  name: "UserStories",
};
</script>

<style>
.user__story {
  @apply bg-white text-white pb-[4.5rem] pt-[2rem];
}
.main__container {
  @apply px-[1.5rem] max-w-[75rem] mx-auto;
}

.user__story--item li:nth-child(2n) {
  @apply xl:place-self-end;
}
</style>
