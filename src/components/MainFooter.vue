<!-- MainFooter.vue -->
<template>
  <!-- Footer container with primary background and padding -->
  <footer
    class="footer__container bg-slate-200 text-primary-dark py-8 w-full h-auto border-t border-solid border-tertiary-light"
  >
    <!-- Inner container for max-width and centering -->
    <div class="footer__inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Flex container for list groups, responsive layout -->
      <div class="footer__bran">
        <div class="brand__wrappers">
          <font-awesome-icon :icon="['fab', 'twitter']" class="brand__icon" />
          <font-awesome-icon
            :icon="['fab', 'linkedin-in']"
            class="brand__icon"
          />
          <font-awesome-icon :icon="['fab', 'instagram']" class="brand__icon" />
        </div>
      </div>
      <div
        class="footer__content flex flex-col md:flex-row justify-between gap-4"
      >
        <!-- First list group: Privacy-related links -->
        <div class="footer__list-group">
          <h3
            class="footer__list-title text-lg font-semibold text-start mb-[0.5rem]"
          >
            Privacy & Cookies
          </h3>
          <ul
            class="footer__list w-full flex flex-col md:flex-row gap-4 text-center"
          >
            <li class="footer__list-item">
              <a
                href="/privacy"
                class="footer__link text-sm transition-colors duration-300 anim-underline--links"
              >
                Privacy
              </a>
            </li>
            <li class="footer__list-item">
              <a
                href="/privacy-choices"
                class="footer__link text-sm anim-underline--links transition-colors duration-300"
              >
                Your privacy choices
              </a>
            </li>
            <li class="footer__list-item">
              <a
                href="/cookie-preferences"
                class="footer__link text-sm anim-underline--links transition-colors duration-300"
              >
                Cookie preferences
              </a>
            </li>
          </ul>
        </div>

        <!-- Second list group: Legal and general links -->
        <div class="footer__list-group">
          <h3
            class="footer__list-title text-lg font-semibold mb-2 text-end md:text-right"
          >
            Legal & About
          </h3>
          <ul
            class="footer__list space-y-2 flex flex-col md:flex-row gap-4 items-center w-full text-end md:text-right"
          >
            <li class="footer__list-item">
              <a
                href="/terms"
                class="footer__link text-sm hoanim-underline--links transition-colors duration-300"
              >
                Terms
              </a>
            </li>
            <li class="footer__list-item">
              <p class="footer__copyright text-sm text-primary">
                © 2025 RentMeOut, LLC. All rights reserved.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style scoped>
.footer__link {
  @apply inline-block;
}

.footer__copyright {
  @apply leading-relaxed;
}

@media (max-width: 768px) {
  .footer__list-group {
    @apply w-full;
  }
  .footer__list {
    @apply flex-col items-start; /* Stack items vertically on mobile */
  }
}

.footer__bran {
  @apply w-full h-[2rem] mb-[2rem];
}
.brand__wrappers {
  @apply flex items-center;
}
.brand__icon {
  @apply text-[1.25rem] px-[0.45rem] border border-solid text-primary border-primary mr-[1rem] py-[0.35rem] rounded-[4px];
}
.anim-underline--links {
  @apply relative pb-[0.875rem];
}
.anim-underline--links::after {
  @apply h-[0.02rem] w-0 bg-primary-dark;
  content: "";
  position: absolute;
  bottom: 15px;
  left: 0;
  transition: width 0.3s ease-in-out;
}
.anim-underline--links:hover::after {
  @apply w-full;
}
</style>
