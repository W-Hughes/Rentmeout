<template>
  <!-- Container for the user profile section, aligning items to the right -->
  <div class="profile__container">
    <!-- Icon button displayed alongside the profile -->
    <div
      class="icon-button icon-button--small icon-button--tertiary mr-[0.5rem]"
    >
      <img
        src="@/assets/logos/al-icon.png"
        alt=""
        class="icon-button__image w-[1.25rem] place-self-right"
      />
    </div>
    <!-- User profile section -->
    <div class="user__profile">
      <!-- Display profile menu when user is logged in -->
      <div
        v-if="isLoggedIn"
        :class="{ 'user__profile--active': showDropdown }"
        class="user__profile-menu"
        @click="toggleUserDropdown"
      >
        <!-- Small profile image for the menu -->
        <profile-image type="sm" />
        <!-- Dropdown arrow icon -->
        <font-awesome-icon
          :icon="['fas', 'angle-down']"
          class="user__profile-menu__icon"
        />

        <!-- Dropdown card shown when showDropdown is true -->
        <div v-show="showDropdown" class="profile__card">
          <!-- Wrapper for large profile image and greeting -->
          <div class="profile-image__wrapper">
            <profile-image class="profile-image" type="lg" />
            <div class="profile__greeting">Hi, {{ currentUserName }}!</div>
          </div>
          <!-- Menu item for settings -->
          <div class="profile__menu--list">
            <font-awesome-icon :icon="['fas', 'gear']" class="pr-[0.5rem]" />
            <p>Settings & privacy</p>
          </div>
          <!-- Menu item for dashboard navigation -->
          <div class="profile__menu--list" @click="goToDashboard">
            <font-awesome-icon
              :icon="['fas', 'gauge-high']"
              class="pr-[0.5rem]"
            />
            <p>Dashboard</p>
            <font-awesome-icon
              :icon="['fas', 'angle-right']"
              class="pr-[0.5rem] w-full place-self-right ml-[3.5rem]"
            />
          </div>
          <!-- Logout button using ActionButton -->
          <div class="profile__menu--list">
            <action-button
              text="Logout"
              type="btn--secondary"
              event-type="logout-click"
              @logout-click="logout"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Login button shown when user is not logged in -->
      <action-button
        v-else
        text="Login"
        type="btn--primary"
        event-type="login-click"
        @login-click="handleLoginClick"
        class="max-w-[6rem]"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ActionButton from "@/components/shared/ActionButton.vue";
import ProfileImage from "@/components/shared/ProfileImage.vue";

export default {
  name: "UserProfile",

  // Define components used in the template
  components: {
    ActionButton,
    ProfileImage,
  },

  setup() {
    // Initialize Vuex store for state management
    const store = useStore();
    // Initialize Vue Router for navigation
    const router = useRouter();

    // Reactive state for controlling dropdown visibility
    const showDropdown = ref(false);

    // Computed properties to access Vuex getters
    const isLoggedIn = computed(() => store.getters.isLoggedIn);
    const user = computed(() => store.getters.user);
    const userRole = computed(() => store.getters.userRole);
    const currentUserName = computed(() => store.getters.currentUserName);

    // Toggle the dropdown menu visibility
    const toggleUserDropdown = () => {
      showDropdown.value = !showDropdown.value;
    };

    // Handle login button click, navigating to the login page
    const handleLoginClick = () => {
      router.push({ name: "Login" });
    };

    // Handle logout, clearing user session and redirecting to home
    const logout = () => {
      showDropdown.value = false; // Close dropdown
      store.dispatch("logout"); // Dispatch Vuex logout action to clear state and storage
      router.push("/"); // Navigate to home page
    };

    // Navigate to appropriate dashboard based on user role
    const goToDashboard = () => {
      showDropdown.value = false; // Close dropdown
      if (userRole.value === "admin") {
        router.push({ name: "AdminDashboard" }); // Admin dashboard
      } else if (userRole.value === "participant") {
        router.push({ name: "Participants" }); // Participant dashboard
      } else {
        router.push("/"); // Fallback to home page
      }
    };

    // Return reactive state, computed properties, and methods for template use
    return {
      showDropdown,
      isLoggedIn,
      user,
      userRole,
      currentUserName,
      toggleUserDropdown,
      handleLoginClick,
      logout,
      goToDashboard,
    };
  },
};
</script>

<style scoped>
/* Container styles for aligning profile elements */
.profile__container {
  @apply flex justify-end items-center w-auto;
}

/* Icon styling for the dropdown arrow */
.user__profile-menu__icon {
  @apply w-[0.75rem] pl-[1.5rem] pr-[0.5rem] mr-[0.25rem] h-full text-white;
}

/* User profile container */
.user__profile {
  @apply h-full flex items-center cursor-pointer shrink-0;
}

/* Hidden search header for smaller screens */
.header__search {
  @apply mx-0 hidden sm:block;
}

/* Profile menu styling with hover effects */
.user__profile-menu {
  @apply relative cursor-pointer flex items-center bg-primary hover:bg-primary-dark transition-colors duration-300 rounded-full h-[2.6rem] border border-solid border-gray-300;
}

/* Active state for profile menu */
.user__profile--active.user__profile-menu {
  @apply bg-primary-dark transition-colors duration-300 shadow-md;
}

/* Dropdown card styling */
.profile__card {
  @apply z-10 absolute top-[3rem] right-[0.5rem] p-[0.5rem] bg-primary bg-opacity-90 h-[18rem] pb-[0.5rem] w-[12rem] rounded-xl shadow-xl;
}

/* Wrapper for profile image in dropdown */
.profile-image__wrapper {
  @apply cursor-pointer bg-tertiary-light bg-opacity-90 py-[1.25rem] shadow-sm rounded-lg;
}

/* Large profile image styling */
.profile-image {
  @apply place-self-center h-[4rem];
}

/* Greeting text in dropdown */
.profile__greeting {
  @apply text-center pt-[0.5rem] text-[0.875rem] font-semibold tracking-tight;
}

/* Menu list items in dropdown */
.profile__menu--list {
  @apply cursor-pointer text-[0.75rem] font-semibold flex items-center py-[0.5rem] mt-[0.5rem] bg-tertiary-light bg-opacity-60 hover:shadow-lg transition-colors duration-200 ease-in hover:bg-opacity-100 shadow-sm px-[0.5rem] rounded-xl;
}
</style>
