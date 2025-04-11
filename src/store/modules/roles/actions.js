const initialRoles = [
  {
    title: "Listing Creation",
    abbr: "LCR",
    description:
      "Share your machinery with the world and turn idle assets into income.",
    image: require("@/assets/images/create__listing.png"),
    details: [
      {
        subtitle: "Empower Wealth Creation",
        text: "As a lister, you’ll transform idle machinery into a source of passive income, enabling you to earn money effortlessly while your equipment isn’t in use.",
      },
      {
        subtitle: "Showcase Your Assets",
        text: "Create detailed listings with titles, categories, prices, availability dates, and pictures, ensuring renters can see the value of your machinery at a glance.",
      },
      {
        subtitle: "Support Sustainable Sharing",
        text: "By listing your machinery, you’re contributing to a sharing economy that reduces waste and helps others complete their projects without needing to buy new equipment.",
      },
      {
        subtitle: "Connect with Renters",
        text: "Join a community where your listings reach renters in need, fostering connections that benefit both parties and make resources accessible to all.",
      },
    ],
  },
  {
    title: "Listing Discovery",
    abbr: "LDS",
    description:
      "Explore a wide range of listings to find the perfect home or tool for your needs.",
    image: require("@/assets/images/discover__listing.png"),
    details: [
      {
        subtitle: "Discover with Ease",
        text: "Browse a diverse catalog of listings, using category filters to quickly find machinery or homes that match your specific requirements.",
      },
      {
        subtitle: "View Detailed Options",
        text: "Access comprehensive listing details, including photos, prices, and availability, so you can make informed decisions without guesswork.",
      },
      {
        subtitle: "Save Time and Effort",
        text: "Our intuitive search tools ensure you find what you need fast, whether it’s a tool for a quick project or a home for a short stay, streamlining your planning process.",
      },
      {
        subtitle: "Join a Resourceful Community",
        text: "Engage with a platform that connects you to listers, promoting a shared economy where resources are accessible and projects are completed efficiently.",
      },
    ],
  },
  {
    title: "Booking Management",
    abbr: "BKM",
    description:
      "Secure the tools or spaces you need, exactly when you need them.",
    image: require("@/assets/images/book__listing.png"),
    details: [
      {
        subtitle: "Plan with Confidence",
        text: "Book listings for specific dates, ensuring you have the machinery or home you need precisely when your project or stay requires it.",
      },
      {
        subtitle: "Secure Your Reservation",
        text: "Use our straightforward booking system to lock in your dates, giving you peace of mind that your resource is reserved and ready for use.",
      },
      {
        subtitle: "Support Lister Connections",
        text: "By booking, you’re directly supporting listers, creating a mutually beneficial relationship that keeps the RentMeOut community thriving.",
      },
      {
        subtitle: "Achieve Your Goals",
        text: "Whether it’s completing a construction project or enjoying a getaway, your role in booking ensures every plan comes to life with the right resources at the right time.",
      },
    ],
  },
];

export default {
  async fetchRoles({ commit }) {
    commit("setLoading", true);
    try {
      const roles = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(initialRoles);
        }, 2000);
      });
      commit("setRoles", roles);
      commit("setLoading", false);
    } catch (error) {
      commit("setError", error.message);
      commit("setLoading", false);
    }
  },
  startRoleCycle({ commit, state }) {
    const intervalId = setInterval(() => {
      const nextIndex = (state.currentRoleIndex + 1) % state.roles.length;
      commit("setCurrentRoleIndex", nextIndex);
    }, 5000);
    return intervalId; // Return the interval ID to clear it later
  },
  stopRoleCycle({ commit }, intervalId) {
    clearInterval(intervalId);
    commit("setCurrentRoleIndex", 0); // Reset to the first role
  },
};
