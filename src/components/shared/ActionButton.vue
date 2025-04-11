<!-- ActionButton.vue -->
<template>
  <button :class="[buttonClass, 'shrink-0']" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "btn",
      validator(value) {
        const validClasses = ["btn", "btn--primary", "btn--secondary"];
        const classes = value.split(" ");
        return classes.every((cls) => validClasses.includes(cls));
      },
    },
    eventType: {
      type: String,
      required: false,
      default: "button-click", // Ensure a safe default
    },
  },
  name: "ActionButton",

  setup(props, { emit }) {
    // Compute the button’s CSS class based on the type prop
    const buttonClass = computed(() => {
      return props.type;
    });

    // Handle button click, emitting the specified event
    const handleClick = () => {
      // Ensure eventType is a string before emitting
      const event = props.eventType || "button-click";
      emit(event, props.text);
    };

    return { buttonClass, handleClick };
  },
};
</script>

<style scoped>
.btn {
  @apply px-[2rem] py-[0.85rem] mx-[0.5rem] text-sm bg-red-600 hover:bg-opacity-70 text-white shrink-0 transition-colors duration-300;
}

.btn--primary {
  @apply text-white px-[2rem] py-[0.85rem] hover:bg-primary-dark-2 bg-primary transition-colors duration-300;
}

.btn--secondary {
  @apply text-white px-[2rem] py-[0.85rem] bg-gray-600 hover:bg-gray-700 transition-colors duration-300;
}
</style>
