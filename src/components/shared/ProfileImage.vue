<template>
  <img
    :src="src"
    alt="user profile image"
    class="user__profile-image"
    :class="imageSizeClass"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  props: {
    src: {
      type: String,
      default: require("@/assets/images/profile.webp"),
    },

    type: {
      type: String,
      required: false,
      default: "sm",
      validator(value) {
        return ["lg", "sm"].includes(value);
      },
    },
  },

  computed: {
    imageSizeClass() {
      return `profile-image--${this.type}`;
    },
  },
};
</script>

<style>
.user__profile-image {
  @apply rounded-full object-cover shrink-0;
}
.profile-image--lg {
  @apply w-[4rem];
}
.profile-image--sm {
  @apply w-[2.5rem];
}
</style>
