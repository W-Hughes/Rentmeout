<template>
  <button
    class="icon-button"
    role="button"
    type="button"
    aria-label="Toggle sidebar menu"
  >
    <font-awesome-icon :icon="['fas', type]" />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  name: "IconButton",
};
</script>

<style>
.icon-button {
  @apply flex items-center justify-center rounded-full transition-colors duration-300 shrink-0 cursor-pointer;
}
.icon-button--primary {
  @apply hover:bg-primary-dark-2 bg-primary text-white;
}
.icon-button--tertiary {
  @apply text-tertiary hover:bg-tertiary-light;
}

.icon-button--large {
  @apply w-[3.125rem] h-[3.125rem] text-[1rem];
}
.icon-button--small {
  @apply w-[3rem] h-[3rem] text-[1rem];
}
</style>
