import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

library.add(fas, fab);

if (!localStorage.getItem("users")) {
  const dummyUsers = [
    {
      mobileNumber: "123456789",
      password: "hawk@12345",
      rememberMe: false,
      role: "admin",
      name: "Hughes",
    },
    {
      mobileNumber: "987654321",
      password: "farm@54321",
      rememberMe: false,
      role: "participant",
      name: "Stephany",
    },
  ];
  localStorage.setItem("users", JSON.stringify(dummyUsers));
  console.log("Dummy users initialized in localStorage");
}

const loggedInUser = JSON.parse(
  localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser")
);
if (loggedInUser && loggedInUser.rememberMe) {
  store.dispatch("login", loggedInUser);
}

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
