<template>
  <header class="header">
    <div class="header__container">
      <div class="user__login--page"></div>
      <div class="header__brand flex w-auto">
        <div ref="containerRef">
          <icon-button
            type="bars"
            @click="sidebarControls.open"
            class="icon-button icon-button--large icon-button--tertiary"
          />
        </div>
        <brand />
      </div>
      <section>
        <div :class="[sidebarCollapsibleClass, 'sidebar']" ref="contentRef">
          <div class="sidebar__content">
            <header class="sidebar__header">
              <brand />
              <icon-button
                type="close"
                @click="sidebarControls.close"
                class="icon-button icon-button--small icon-button--tertiary text-primary-dark-2 ml-auto"
              />
            </header>
            <div class="sidebar__body">
              <ul class="sidebar-menu__list">
                <li
                  v-for="(menuItem, index) in menuItems"
                  :key="index"
                  class="sidebar-menu__item"
                >
                  <routerlink :to="menuItem.path">
                    {{ menuItem.item }}
                    <font-awesome-icon
                      v-if="menuItem.subMenuItems"
                      :icon="['fas', 'angle-right']"
                      class="nav-menu__icon ml-auto"
                    />
                  </routerlink>
                  <div v-if="menuItem.subMenuItems" class="sub-menu__container">
                    <ul class="sub-menu--items">
                      <li
                        v-for="(
                          subMenuItem, subMenuIndex
                        ) in menuItem.subMenuItems"
                        :key="subMenuIndex"
                        class="sub-menu--list"
                      >
                        <router-link
                          :to="subMenuItem.path"
                          @click="sidebarControls.close"
                        >
                          {{ subMenuItem.subItem }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div class="nav__container">
        <nav class="nav-menu">
          <ul class="nav-menu--item">
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              class="nav-menu--list relative"
            >
              <router-link :to="item.path" class="anim-underline">
                {{ item.item }}
                <font-awesome-icon
                  v-if="item.subMenuItems"
                  :icon="['fas', 'angle-down']"
                  class="ml-[0.45rem]"
                />
              </router-link>

              <ul class="dropdown--items">
                <li
                  v-for="(dropdownItem, dropdownIndex) in item.subMenuItems"
                  :key="dropdownIndex"
                  class="dropdown--list"
                >
                  <div>
                    {{ dropdownItem.subItem }}
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="header__user">
          <div class="header__search">
            <input
              type="text"
              v-model="searchQuery"
              class="search__input"
              placeholder="search"
            />
            <icon-button
              class="icon-button icon-button--small icon-button--primary"
              type="search"
            />
          </div>
        </div>

        <div
          class="user__profile flex items-center h-full max-w-[11rem] mr-[0.75rem]"
        >
          <user-profile-menu />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import IconButton from "../shared/IconButton.vue";
import { MENU_ITEMS } from "../menuItems";
import Brand from "@/components/shared/Brand.vue";
import { onMounted, onUpdated, computed, ref } from "vue";
import { userToggler } from "@/composables/useToggleMenu";
import UserProfileMenu from "@/components/user/UserProfileMenu.vue";
export default {
  name: "MainNav",
  components: {
    Brand,
    IconButton,
    UserProfileMenu,
  },
  setup() {
    const menuItems = ref(MENU_ITEMS);
    const contentRef = ref(null);
    const containerRef = ref(null);
    const isLoggedIn = ref(false);
    const isSidebarOpen = ref(false);

    const sidebarControls = userToggler(
      containerRef,
      contentRef,
      isSidebarOpen
    );
    onMounted(() => {
      console.log(isSidebarOpen.value);
    });
    onUpdated(() => {
      console.log(isSidebarOpen.value);
    });

    const sidebarCollapsibleClass = computed(() => ({
      "sidebar--expanded": isSidebarOpen.value,
    }));

    return {
      menuItems,
      isLoggedIn,
      sidebarControls,
      contentRef,
      containerRef,
      sidebarCollapsibleClass,
    };
  },
};
</script>

<style>
/* HEADER */
.header {
  @apply fixed bg-white w-full h-[3.5rem] sm:h-[4rem] text-sm  text-primary font-medium z-50;
}

.header__container {
  @apply relative bg-white flex h-full w-full pl-[0.5rem] py-[0.25rem] md:py-[0.5rem] pr-[0.25rem] md:pr-[0.5rem] border-b border-solid border-tertiary;
}

/* Search */
.header__search {
  @apply mr-[0.75rem] relative place-content-end pl-[1.7rem] w-[3rem] flex border border-solid border-primary-dark rounded-full h-[3rem] font-light text-sm;
  transition: all 0.5s ease-in-out;
}
.header__search:hover {
  @apply w-[18rem] transition-all duration-700;
}
.header__search:hover .search__input {
  @apply w-full duration-500 opacity-100;
}
.search__input {
  @apply focus:outline-none font-normal;
}

.search__input {
  @apply w-0;
}

/* Sidebar */

.sidebar {
  @apply bg-white shadow-xl absolute top-0 left-0 min-h-lvh w-auto;
}
.sidebar__header {
  @apply h-[4rem]  flex items-center border-b border-solid border-tertiary px-[0.5rem];
}
.sidebar__content {
  @apply h-screen max-w-0 overflow-x-hidden border-b font-[450] text-[0.875rem] tracking-wide border-r border-solid border-tertiary;
  transition: all 0.4s ease-in-out;
}
.sidebar--expanded .sidebar__content {
  @apply max-w-[16rem] opacity-100;
}
.sidebar__body {
  @apply py-[2rem] border-b border-solid border-tertiary;
}

.sidebar-menu__list {
  @apply w-[15rem] h-full text-blue-800 cursor-pointer;
}

.sidebar-menu__item {
  @apply pl-[1.5rem] py-[1.5rem] pr-[1rem] h-[2.5rem] my-[0.25rem] hover:bg-tertiary-light hover:shadow-lg flex items-center bg-transparent transition-all duration-[250ms] ease-in;
}
.sidebar-menu__item:hover {
  @apply pr-[0.75rem] pl-[1.25rem];
}

/* Nav SubMenu */
.sub-menu__container {
  @apply absolute left-[15.5rem] bg-tertiary-light w-full border border-solid border-tertiary-light shadow-lg max-h-0 overflow-y-hidden opacity-0 delay-200 transition-all duration-200 ease-in;
}
.sidebar-menu__item:hover .sub-menu__container {
  @apply max-h-[4rem] py-[0.75rem] pl-[1rem] opacity-100;
}

/* Navigation */
.nav__container {
  @apply w-full flex justify-end text-sm;
}
.nav-menu {
  @apply h-full pr-[0.725rem] lg:pr-[1rem] hidden xl:block;
}
.nav-menu--item {
  @apply flex h-full items-center;
}
.nav-menu--list {
  @apply relative h-full flex items-center mr-[1rem] last:mr-0 cursor-pointer px-[0.5rem];
}
.nav-menu--list:hover .dropdown__container {
  @apply delay-500 block max-h-[10rem];
}
.nav-menu--list:hover .dropdown__container {
  @apply delay-500 block max-h-[10rem];
}

.nav-menu--list:hover .nav-menu__icon {
  @apply rotate-180;
}

/* Nav Dropdown */
.dropdown__container {
  @apply absolute max-h-[0] overflow-y-hidden top-[3rem] bg-blue-200 w-[20rem] h-[6rem] pl-[1rem] border border-solid border-tertiary-light shadow-xl delay-300;
  transition: all 0.3s ease-in;
}

/* User Profile */
.user__profile {
  @apply flex h-full;
}
.header__user {
  @apply hidden lg:flex justify-end w-auto lg:w-[17rem];
}

.anim-underline::after {
  @apply h-[0.35rem] w-0 bg-primary;
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  transition: width 0.3s ease-in-out;
}
.anim-underline:hover::after {
  @apply w-full;
}
</style>
