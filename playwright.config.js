// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
// default time out 30 sec
const config = ({
  testDir: './tests',
  timeout: 15 * 1000,//global timeout
  expect: {
    timeout: 5 * 1000 // only for assertion

  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless : false,
    actionTimeout: 3000,
    navigationTimeout: 5000
  }
});
module.exports = config

