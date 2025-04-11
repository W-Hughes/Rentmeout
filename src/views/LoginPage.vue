<template>
  <section class="page-container--login">
    <backdrop class="backdrop">
      <section class="form-card mt-[4rem]">
        <font-awesome-icon
          :icon="['fas', 'xmark']"
          class="form__close-icon"
          @click="closeLoginForm"
        />
        <header class="form-card__header">
          <h2 class="form-card__title">Sign In to Your Account</h2>
        </header>
        <form
          @submit.prevent="handleSignIn"
          :class="[
            { 'form-card__error-alert': errorMessage },
            'form-card__body',
          ]"
        >
          <div class="form-card__group">
            <span class="form-card__prefix">+233</span>
            <div class="form-card__input-wrapper">
              <input
                type="text"
                placeholder="Mobile number"
                class="form-card__input"
                v-model="mobileNumber"
              />
              <img
                src="@/assets/icons/lock.svg"
                alt="lock icon"
                class="form-card__icon"
              />
            </div>
          </div>
          <input-error v-if="errorMessage" :errorMessage="errorMessage" />
          <div class="form-card__group">
            <div class="form-card__input-wrapper">
              <input
                type="password"
                placeholder="password"
                class="form-card__input"
                v-model="password"
              />
              <img
                src="@/assets/icons/eye-off.svg"
                alt="Hide password icon"
                class="form-card__icon"
              />
            </div>
          </div>
          <input-error v-if="errorMessage" :errorMessage="errorMessage" />
          <div class="form-card__options">
            <div class="link__list flex justify-between">
              <a
                href="/forgot-password"
                class="form-card__link anim-underline--link"
                >Forgot Password</a
              >
              <a
                href="/sign-in"
                class="form-card__link anim-underline--link ml-auto"
                >Don't have account? Register here</a
              >
            </div>
            <label for="remember-me" class="form-card__input-wrapper">
              <input
                type="checkbox"
                class="form-card__checkbox-input"
                id="remember-me"
                v-model="rememberMe"
              />
              <span class="form-card__checkbox-label">Remember Me</span>
            </label>
          </div>
          <button type="submit" class="form-card__button">Sign In</button>
        </form>
      </section>
    </backdrop>
  </section>
</template>

<script>
import Backdrop from "@/components/shared/Backdrop.vue";
import InputError from "@/components/shared/InputError.vue";
import { mapActions } from "vuex";
export default {
  name: "LoginPage",
  components: {
    Backdrop,
    InputError,
  },
  data() {
    return {
      mobileNumber: "",
      password: "",
      rememberMe: false,
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    async handleSignIn() {
      this.errorMessage = "";
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) =>
          u.mobileNumber === this.mobileNumber && u.password === this.password
      );
      if (!user) {
        this.errorMessage = "Invalid mobile number or password.";
        return;
      }
      const userData = { ...user, rememberMe: this.rememberMe };
      this.login(userData);

      if (this.rememberMe) {
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
      } else {
        sessionStorage.setItem("loggedInUser", JSON.stringify(userData));
      }
      localStorage.setItem("token", "dummy-token");
      localStorage.setItem("userRole", user.role);

      if (user.role === "admin") {
        this.$router.push("/admin-dashboard");
      } else if (user.role === "user") {
        this.$router.push("/user");
      }
    },
    closeLoginForm() {
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    errorClass() {
      return {
        "border-error-alert": this.errorMessage,
      };
    },
  },
};
</script>

<style>
/* Generic Classes */

.form-card__group {
  @apply border border-solid border-error-alert;
}
.page-container--login {
  @apply min-h-screen bg-[url(@/assets/images/bg-login__04.jpg)] bg-white w-full  bg-cover text-white flex justify-center h-screen scroll-my-0;
}

/* Login Form */
.form-card {
  @apply relative bg-white w-[20rem] h-[28.5rem] sm:w-[30rem] lg:w-[40rem] text-primary py-[3.5rem];
}

.form__close-icon {
  @apply text-[1.35rem] absolute top-[0.35rem] right-[1rem] text-text-green;
}

.form-card__header::before {
  @apply absolute w-full h-[0.2rem] bg-red-600 left-0 -top-[1.25rem];
  content: "";
  background: linear-gradient(to right, #c92222, #f9a825, #1f7823);
}

/* Card Header */
.form-card__header {
  @apply relative w-full text-center pt-[0.5rem];
}

.form-card__title {
  @apply font-bold text-text-green tracking-tight text-[1.25rem];
}

/* Card Body */
.form-card__body {
  @apply px-[2.5rem]  text-black text-sm;
}

.form-card__error-alert .form-card__group {
  @apply border-error-alert border-[0.09rem] hover:border-accent;
}
.form-card__group {
  @apply flex border-[0.09rem] border-solid border-gray_border mt-[2.5rem] text-[0.75rem] hover:border-blue-400;
}

.form-card__prefix {
  @apply bg-button-gray px-[0.75rem] py-[0.5rem];
}

.form-card__input-wrapper {
  @apply flex w-full text-[0.75rem];
}
.form-card__input {
  @apply w-full flex-grow focus:outline-0 pl-[0.725rem] text-forest-green-dark h-[2.25rem];
}

.form-card__icon {
  @apply h-[1.125rem] place-self-center pr-[0.25rem];
}

/* Form Options */
.form-card__options {
  @apply text-[0.625rem] mt-[0.725rem];
}
.form-card__link {
  @apply inline-block pt-[0.725rem] text-primary;
}

.form-card__checkbox-label {
  @apply text-[0.625rem];
}
/* Chackbox */
.form-card__checkbox-label {
  @apply ml-[0.25rem] text-[0.65rem] relative bottom-[0.0875rem] text-icon-gray font-medium;
}

/* Submit Button */
.form-card__button {
  @apply bg-forest-green hover:bg-forest-green-dark text-white w-full text-[0.875rem] sm:text-sm py-[0.875rem] mt-[1.25rem];
}

/* Reusable Animation */
.anim-underline--link {
  @apply relative pb-[0.875rem];
}
.anim-underline--link::after {
  @apply h-[0.02rem] w-0 bg-primary;
  content: "";
  position: absolute;
  bottom: 15px;
  left: 0;
  transition: width 0.3s ease-in-out;
}
.anim-underline--link:hover::after {
  @apply w-full;
}
</style>
