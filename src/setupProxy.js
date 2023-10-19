const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/auth/login",
    createProxyMiddleware({
      target: "https://app-team-6.shinhansec-pda.net",
      changeOrigin: true,
    }),
  );
  app.use(
    "/auth/reissue",
    createProxyMiddleware({
      target: "https://app-team-6.shinhansec-pda.net",
      changeOrigin: true,
    }),
  );
};
