import { createRouter, createWebHistory } from "vue-router";
import ListingCreationForm from "../components/ListingCreationForm.vue";
import UserPage from "@/views/UserPage.vue";
import FindYourRole from "@/components/FindYourRole.vue";
import AdminDashboard from "@/views/AdminDashboard.vue";
import BrowseListings from "../components/BrowseListings.vue";
import ListingDetail from "../components/ListingDetail.vue";
import Dashboard from "../components/Dashboard.vue";
import LoginPage from "@/views/LoginPage.vue";
import HomeView from "@/views/HomeView.vue";
import SignInPage from "@/views/SignInPage.vue";

// Define the routes for the RentMeOut application
const routes = [
  {
    path: "/",
    redirect: "/roles", // Redirect root to the landing page
  },
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/roles",
    name: "FindYourRole",
    component: FindYourRole, // Landing page component
  },
  {
    path: "/admin-dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
    meta: { requiresAuth: true, role: "admin" }, // Restrict access to admin users
    children: [
      {
        path: "users",
        name: "ManageUsers",
        component: () => import("../views/ManageUsers.vue"), // Lazy-loaded component for managing users
      },
    ],
  },
  {
    path: "/user",
    name: "User",
    component: UserPage,
    meta: { requiresAuth: true, role: "user" }, // Restrict access to regular users
  },
  {
    path: "/create-listing",
    name: "CreateListing",
    component: ListingCreationForm, // Component for creating new listings
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage, // Login page for user authentication
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignInPage, // Login page for user authentication
  },
  {
    path: "/browse",
    name: "BrowseListings",
    component: BrowseListings, // Component for browsing available listings
  },
  {
    path: "/listing/:id",
    name: "ListingDetail",
    component: ListingDetail, // Component for viewing a specific listing's details
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard, // User dashboard component
  },
  {
    path: "/feature",
    name: "Features",
    component: Dashboard, // User dashboard component
  },
  {
    path: "/about",
    name: "About",
    component: Dashboard, // User dashboard component
  },
  {
    path: "/roles/:abbr",
    name: "RoleDetail",
    redirect: (to) => {
      const abbr = to.params.abbr.toUpperCase();
      if (abbr === "LCR") return "/create-listing"; // Redirect to listing creation for "LCR" role
      return "/browse"; // Default redirect to browse listings
    },
  },
];

// Create the router instance with history mode
const router = createRouter({
  history: createWebHistory("/rentmeout/"), // Base URL for GitHub Pages deployment
  routes,
});

// Navigation guard to handle authentication and role-based access
router.beforeEach((to, from, next) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // Retrieve user data from localStorage
  const isAuthenticated = loggedInUser && loggedInUser.rememberMe; // Check if user is authenticated
  const userRole = loggedInUser?.role || null; // Get user role, default to null if not present
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login"); // Redirect to login if authentication is required but user is not logged in
  } else if (to.meta.role && to.meta.role !== userRole) {
    next("/"); // Redirect to root if user role doesn't match the required role
  } else {
    next(); // Proceed to the requested route
  }
});

export default router;
