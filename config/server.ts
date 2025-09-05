export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('URL'),
  proxy: true,
  // Trust proxy headers for secure cookie handling
  trustProxy: true,
  // Ensure secure cookies work behind proxy
  secure: env.bool('NODE_ENV') === 'production',
});
