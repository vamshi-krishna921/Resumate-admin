export default {
  routes: [
    {
      method: "POST",
      path: "/generate-summary",
      handler: "ai.generateSummary",
      config: { auth: false },
    },
  ],
};
