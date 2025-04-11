<template>
  <div class="model__backdrop">
    <div class="backdrop">
      <slot>
        <p>--Default slot--</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackdropComponent",
};
</script>

<style>
.backdrop {
  @apply absolute top-0 left-0 bg-black bg-opacity-20 h-screen w-full flex justify-center pt-[10rem];
}
</style>
