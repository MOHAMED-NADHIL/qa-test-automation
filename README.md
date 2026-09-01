# 🧪 QA Test Automation Framework

A professional end-to-end web test automation framework built using **Playwright and TypeScript**.

This project demonstrates practical experience in:

- Functional Testing
- Negative Testing
- Validation Testing
- Regression Testing
- Cross-Browser Testing
- Page Object Model (POM)
- Automated Test Reporting
- CI/CD with GitHub Actions

The automation suite is built against the **SauceDemo** web application.

---

## 🌐 Application Under Test

**SauceDemo**

https://www.saucedemo.com/

SauceDemo is a demo e-commerce application used for practicing software testing and test automation.

The automated framework covers the complete user journey:

```text
Login
  ↓
Products
  ↓
Add Product to Cart
  ↓
Cart
  ↓
Checkout
  ↓
Order Overview
  ↓
Order Completion
🚀 Tech Stack
Technology	Purpose
Playwright	Web UI Automation
TypeScript	Programming Language
Node.js	Runtime Environment
Git	Version Control
GitHub	Source Code Management
GitHub Actions	CI/CD
VS Code	Development Environment
📁 Project Structure
qa-test-automation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── CheckoutOverviewPage.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── products.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   └── order-completion.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
🧪 Test Coverage
🔐 Login Testing

The login module validates different authentication scenarios.

Login with valid credentials
Login with invalid password
Login with empty credentials
Login validation
Error message validation
Successful navigation to Products page
Invalid login handling
🛍️ Product Testing

The product module validates the main product listing and product interactions.

Verify Products page
Verify page title
Verify product information
Verify product visibility
Add products to cart
Verify cart badge
Product interaction validation
Multiple product selection
🛒 Cart Testing

The cart module validates shopping cart functionality.

Verify Cart page
Verify added products
Verify product details in cart
Remove products from cart
Verify cart count
Continue shopping
Cart validation
Empty cart validation
💳 Checkout Testing

The checkout module validates customer information and checkout functionality.

Navigate to Checkout
Verify Checkout page
Enter customer information
Validate required fields
Validate first name
Validate last name
Validate postal code
Checkout form validation
Continue to Checkout Overview
📦 Order Completion Testing

The order completion module validates the complete order workflow.

Verify Order Overview
Verify selected products
Verify payment information
Verify shipping information
Verify total price
Complete order
Verify order confirmation
Validate successful order completion workflow
🌐 Cross-Browser Testing

The framework executes the automated test suite across three major browsers:

Chromium
Firefox
WebKit
Browser Matrix
                Test Suite
                    │
        ┌───────────┼───────────┐
        │           │           │
        ▼           ▼           ▼
    Chromium     Firefox      WebKit
        │           │           │
        └───────────┼───────────┘
                    │
                    ▼
             Test Results
📊 Latest Test Execution

The latest complete test execution produced:

Running 45 tests using 1 worker
45 passed (2.0m)
Result
Total Tests: 45
Passed:      45
Failed:       0
Pass Rate:  100%

✅ 100% test pass rate

The 45 executions represent the current automated scenarios executed across the configured browser projects.

⚙️ Installation
1. Clone the Repository
git clone https://github.com/MOHAMED-NADHIL/qa-test-automation.git
2. Navigate to the Project
cd qa-test-automation
3. Install Dependencies
npm install
4. Install Playwright Browsers
npx playwright install
▶️ Running Tests
Run the Complete Test Suite
npx playwright test
Run Tests Using One Worker
npx playwright test --workers=1
Run Login Tests
npx playwright test tests/login.spec.ts
Run Product Tests
npx playwright test tests/products.spec.ts
Run Cart Tests
npx playwright test tests/cart.spec.ts
Run Checkout Tests
npx playwright test tests/checkout.spec.ts
Run Order Completion Tests
npx playwright test tests/order-completion.spec.ts
🌐 Run Tests on Specific Browsers
Chromium
npx playwright test --project=chromium
Firefox
npx playwright test --project=firefox
WebKit
npx playwright test --project=webkit
👀 Run Tests in Headed Mode

To watch the browser while tests are running:

npx playwright test --headed
🐛 Run a Specific Test

Example:

npx playwright test tests/login.spec.ts --grep "valid credentials"
📊 HTML Test Report

After executing the tests, open the Playwright HTML report:

npx playwright show-report

The HTML report provides:

Test execution results
Passed tests
Failed tests
Test duration
Browser information
Test steps
Error information
Screenshots when configured
Trace information when available
🏗️ Automation Architecture

This framework follows the Page Object Model (POM) design pattern.

                    Test Layer
                        │
        ┌───────────────┼────────────────┐
        │               │                │
        ▼               ▼                ▼
   Login Tests     Product Tests     Cart Tests
        │               │                │
        └───────────────┼────────────────┘
                        │
                        ▼
                Page Object Layer
                        │
        ┌───────────────┼────────────────────┐
        │               │                    │
        ▼               ▼                    ▼
   LoginPage       ProductsPage          CartPage
        │
        ├────────── CheckoutPage
        │
        └────────── CheckoutOverviewPage
                        │
                        ▼
                 SauceDemo Application
🧩 Page Objects
LoginPage

Responsible for:

Username input
Password input
Login button
Login error messages
Login actions
Navigation
ProductsPage

Responsible for:

Products page
Product listing
Product selection
Add to cart
Cart navigation
Product validation
CartPage

Responsible for:

Cart page
Cart items
Remove product
Continue shopping
Checkout navigation
Cart validation
CheckoutPage

Responsible for:

First name
Last name
Postal code
Checkout form
Required field validation
Continue button
CheckoutOverviewPage

Responsible for:

Order overview
Product information
Payment information
Shipping information
Total price
Finish order
Order confirmation
💡 Why Page Object Model?

Using the Page Object Model provides several advantages:

Reduces code duplication
Improves maintainability
Separates test logic from UI interaction
Centralizes locators
Improves code readability
Makes tests easier to understand
Makes the framework easier to scale
Simplifies future application changes
🎯 Testing Approach

The framework covers multiple software testing approaches.

Functional Testing

Verifies that application functionality works according to expected requirements.

Examples:

Login
Product selection
Add to cart
Checkout
Order completion
Negative Testing

Tests invalid inputs and incorrect user actions.

Examples:

Invalid password
Empty login fields
Missing checkout information
Invalid form submission
Validation Testing

Verifies that appropriate validation messages are displayed.

Examples:

Username required
Password required
First name required
Last name required
Postal code required
Regression Testing

The complete automated suite can be executed after application changes to verify that existing functionality continues to work.

Application Change
        ↓
Run Automation Suite
        ↓
45 Automated Tests
        ↓
Validate Existing Functionality
        ↓
Test Report
Cross-Browser Testing

The same automated scenarios are executed against:

Chromium
Firefox
WebKit

This helps identify browser-specific issues.

🔄 CI/CD with GitHub Actions

This project uses GitHub Actions to automatically execute Playwright tests when changes are pushed to the repository.

CI Pipeline
Developer Push
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions
      │
      ▼
Checkout Repository
      │
      ▼
Setup Node.js
      │
      ▼
Install Dependencies
      │
      ▼
Install Playwright
      │
      ▼
Run Automated Tests
      │
      ▼
Generate Test Report
      │
      ▼
Upload Report
⚙️ GitHub Actions Benefits

CI automation provides:

Automated regression testing
Early defect detection
Consistent test execution
Cross-browser validation
Automated reporting
Continuous integration
Faster feedback to developers
📈 Current Test Statistics
Metric	Result
Automated Test Executions	45
Passed	45
Failed	0
Pass Rate	100%
Browser Projects	3
Test Framework	Playwright
Language	TypeScript
Design Pattern	Page Object Model
CI/CD	GitHub Actions
🔍 QA Skills Demonstrated

This project demonstrates practical knowledge of:

Manual Testing Concepts
Test Case Design
Test Scenarios
Functional Testing
Negative Testing
Validation Testing
Regression Testing
Defect Identification
Test Execution
Test Reporting
Automation Skills
Playwright
TypeScript
Locator Strategies
Assertions
Page Object Model
Test Organization
Cross-Browser Testing
Test Reporting
Test Execution
DevOps / Tools
Git
GitHub
GitHub Actions
CI/CD
VS Code
Node.js
npm
📋 Example Test Case
TC_LOGIN_001

Test Case: Login with valid credentials

Test Data:

Username: standard_user
Password: secret_sauce

Expected Result:

User should successfully log in and navigate to the Products page.

Automation Result:

PASS ✅
📋 Example Negative Test
TC_LOGIN_002

Test Case: Login with invalid password

Test Data:

Username: standard_user
Password: WrongPassword123

Expected Result:

The application should display an appropriate authentication error message.

Automation Result:

PASS ✅
🛠️ Configuration

Playwright configuration is maintained in:

playwright.config.ts

The configuration includes:

Test directory
Browser projects
HTML reporter
Retry configuration
Worker configuration
Trace configuration
Browser device settings
📂 Test Organization

Tests are separated by application functionality:

tests/
│
├── login.spec.ts
│
├── products.spec.ts
│
├── cart.spec.ts
│
├── checkout.spec.ts
│
└── order-completion.spec.ts

This structure makes the automation suite:

Easy to navigate
Easy to maintain
Easy to debug
Easy to extend
🔐 Test Data

The current automation uses the publicly available SauceDemo test credentials.

Username: standard_user
Password: secret_sauce

Test data is used only for the demo application.

🚀 Future Improvements

Planned improvements include:

API testing with Playwright APIRequest
Postman API collections
UI + API integration testing
Environment-based configuration
Test data management
Custom Playwright fixtures
Reusable test utilities
Improved test reporting
Screenshot capture on failures
Video recording on failures
Trace collection
Parallel test execution
Authentication state management
More comprehensive test coverage
Docker integration
Advanced CI/CD pipeline
Test tagging and filtering
🎯 Project Goals

The main goal of this project is to demonstrate practical QA Automation skills and build a maintainable automation framework suitable for real-world software testing environments.

The project demonstrates:

Software Testing
       ↓
Test Case Design
       ↓
Automation Framework
       ↓
Page Object Model
       ↓
Cross-Browser Testing
       ↓
Regression Testing
       ↓
CI/CD
       ↓
Automated Reporting
👨‍💻 Author
Mohamed Nadhil

ICT Undergraduate | QA Automation Enthusiast

Interested in:

Quality Assurance
Test Automation
Playwright
TypeScript
Software Testing
Software Engineering
CI/CD
Web Application Testing
🔗 GitHub Repository
https://github.com/MOHAMED-NADHIL/qa-test-automation
📄 License

This project is created for educational, learning, and portfolio purposes.