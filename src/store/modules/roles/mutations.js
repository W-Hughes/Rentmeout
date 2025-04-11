export default {
  setRoles(state, roles) {
    state.roles = roles;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setError(state, error) {
    state.error = error;
  },
  setCurrentRoleIndex(state, index) {
    state.currentRoleIndex = index;
  },
};
