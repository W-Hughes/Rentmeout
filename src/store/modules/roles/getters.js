export default {
  allRoles: (state) => state.roles,
  currentRole: (state) => state.roles[state.currentRoleIndex] || null,
  isLoading: (state) => state.loading,
  error: (state) => state.error,
};
