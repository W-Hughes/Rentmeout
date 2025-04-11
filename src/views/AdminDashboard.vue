<template>
  <div class="dashboard-container">
    <h2>Welcome, {{ currentUserName }}!</h2>
    <p>Role: {{ userRole }}</p>

    <!-- Conditional rendering based on role -->
    <div v-if="userRole === 'farmer'">
      <h3>Farmer Tools</h3>
      <p>Access loans, track income, etc.</p>
    </div>
    <div v-else-if="userRole === 'dealer'">
      <h3>Input Dealer Tools</h3>
      <p>Manage supply, view farmer requests, etc.</p>
    </div>
    <div v-else-if="userRole === 'financial-org'">
      <h3>Financial Org Tools</h3>
      <p>Approve loans, monitor accounts, etc.</p>
    </div>
    <div v-else-if="userRole === 'admin'">
      <h3>Admin Panel</h3>
      <p>Add users, manage stakeholders, etc.</p>
    </div>
    <div v-else-if="userRole === 'participant'">
      <h3>Participant Dashboard</h3>
      <p>View your participant-specific tools here.</p>
    </div>
    <div v-else>
      <p>Role not recognized. Please contact support.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DashboardComponent",
  computed: {
    ...mapGetters(["currentUserName", "userRole"]), // Use Vuex getters
  },
};
</script>

<style scoped>
.dashboard-container {
  max-width: 800px;
  padding: 20px;
  text-align: center;
}
</style>
