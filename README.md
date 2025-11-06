# AliExpress Product Search Automation

_This README was generated with assistance from Claude AI_

## Overview

Automated testing framework for AliExpress product search functionality using Playwright and TypeScript. The project implements the Page Object Model pattern and follows Playwright best practices.

## Prerequisites

- Node.js (v18 or higher)
- npm

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in UI mode (interactive)
npm run test:ui

# View test report
npm run report
```

## Test Coverage

The test suite covers:
- Product search functionality
- Search results verification
- Pagination navigation
- Product card visibility validation
- Screenshot capture for reporting

## Project Structure

```
├── Pages/              # Page Object Model classes
│   ├── home-page.ts
│   └── products-page.ts
├── fixtures/           # Custom Playwright fixtures
│   └── index.ts
├── tests/              # Test specifications
│   └── search-products.spec.ts
└── playwright.config.ts
```

## Technologies

- **Playwright** - E2E testing framework
- **TypeScript** - Type-safe JavaScript
- **Page Object Model** - Design pattern for maintainable tests

## Test Execution

Tests run on Desktop Chrome by default. Configuration can be modified in `playwright.config.ts` to add additional browsers.
