<template>
  <div v-if="errorMessage" class="form-card__error">
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  name: "InputError",
  props: {
    errorMessage: {
      type: String,
      required: false,
      default: "Input error",
    },
  },
};
</script>

<style>
.form-card__error {
  @apply absolute text-[0.7rem] text-orange-600 font-semibold;
}
</style>
