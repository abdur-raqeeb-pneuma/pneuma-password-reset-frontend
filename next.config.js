/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    developerResetPasswordEndpoint: process.env.DEVELOPER_RESET_PASSWORD_ENDPOINT,
    labResetPasswordEndpoint: process.env.LABORATORY_RESET_PASSWORD_ENDPOINT
  }
};
