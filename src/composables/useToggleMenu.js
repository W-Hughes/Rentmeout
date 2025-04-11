import { ref, watch, onBeforeUnmount } from "vue";

export function userToggler(containerRef, contentRef, externalIsOpen) {
  const isOpen = externalIsOpen || ref(false);

  const open = () => {
    isOpen.value = true;
  };
  const close = () => {
    isOpen.value = false;
  };

  const toggle = () => {
    isOpen.value = !isOpen.value;
    console.log("Sidebar toggled:", isOpen.value);
  };

  const closeOnOutsideCLick = (event) => {
    if (
      isOpen.value &&
      containerRef.value &&
      !containerRef.value.contains(event.target) &&
      contentRef.value &&
      !contentRef.value.contains(event.target)
    ) {
      isOpen.value = false;
    }
  };

  watch(isOpen, (newVal) => {
    if (newVal) {
      document.addEventListener("click", closeOnOutsideCLick);
    } else {
      document.removeEventListener("click", closeOnOutsideCLick);
    }
  });

  onBeforeUnmount(() => {
    document.removeEventListener("click", closeOnOutsideCLick);
  });

  return { open, close, toggle, closeOnOutsideCLick };
}
