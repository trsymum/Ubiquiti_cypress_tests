# Cypress Test Suite for SauceDemo

## Overview

This project is a Cypress-based end-to-end (E2E) test suite for the SauceDemo website. It includes tests for login functionality, purchasing products, and navigating to the "About" page. The tests are designed with reusability and modularity in mind, showcasing modern testing practices such as session management and cross-origin handling.

## Features

- **Login Tests**: Validates login functionality for standard and locked-out users.
- **Purchase Tests**: Simulates sorting, adding products to the cart, and completing a purchase.
- **About Page Test**: Verifies navigation and content visibility on the "About" page.

## Prerequisites

1. [Node.js](https://nodejs.org/) installed on your machine.
2. Cypress installed as a dev dependency in your project.
3. A code editor like [Visual Studio Code](https://code.visualstudio.com/).

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd <project-folder>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Tests

To run all tests:

```bash
npx cypress open
```

This command opens the Cypress Test Runner, allowing you to select and run individual tests.

Alternatively, to run tests headlessly:

```bash
npx cypress run
```

## Test Commands

- Run all tests in the `login.spec.js` file:
  ```bash
  npx cypress run --spec cypress/e2e/login.spec.js
  ```
- Run all tests in the `purchase.spec.js` file:
  ```bash
  npx cypress run --spec cypress/e2e/purchase.spec.js
  ```
- Run the "About Page" test:
  ```bash
  npx cypress run --spec cypress/e2e/about.spec.js
  ```

## Troubleshooting

### Known Issue: 401 Error Causing Page Load Timeout

In some cases, tests may fail due to a `Timed out after waiting...` error. This issue is not directly related to page load timeout but occurs due to a `401 Unauthorized` error on a POST call while loading the page, which later causes the timeout.

**Solution**:

1. Delete the following folder:

   - **Mac/Linux**: `~/Library/Application Support/Cypress/cy/production/browsers/chrome-stable/interactive/Default/Service Worker/CacheStorage`
   - **Windows**: `C:\Users\<YourUsername>\AppData\Local\Cypress\cy\production\browsers\chrome-stable\interactive\Default\Service Worker\CacheStorage`

2. Retry running the tests.


## Additional Notes

- The test suite includes modular utilities (e.g., `login` function) to reduce redundancy and improve maintainability.
- Cypress's `cy.origin` is used for handling cross-origin navigation, such as visiting the Sauce Labs website from SauceDemo.

## Skills Demonstrated

- E2E test automation with Cypress.
- Modular test design and reusable utilities.
- Handling cross-origin testing scenarios.
- Debugging and troubleshooting common Cypress issues.


