export default () => ({
  authKey: process.env.AUTH_KEY,
  port: parseInt(process.env.APP_PORT, 10) || 9000,
});
