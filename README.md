# Modern Market - Premium Ecommerce Experience

Welcome to **Modern Market**, a sleek and responsive ecommerce application built with Angular 11 and Bootstrap. This project showcases a modern shopping experience with high-quality visuals and intuitive navigation.

## 🚀 Key Features

- **Hero Carousel**: A dynamic landing page featuring a stunning hero carousel with "Premium Collection" (Fashion), "Cutting Edge Tech" (Electronics), and "Athletic Excellence" (Sportswear).
- **Product Catalog**: Explore a curated list of products including groceries (Milk, Eggs, Pasta), healthy choices (Quinoa), and essentials.
- **Shopping Cart**: Fully functional cart management system for adding and tracking purchases.
- **Glassmorphism UI**: Modern aesthetic using semi-transparent "glass-panel" components and subtle shadows for a premium feel.
- **Responsive Design**: Optimized for different screen sizes using Bootstrap's grid system and utility classes.
- **Smooth Animations**: Integrated animations for buttons and transitions to enhance user engagement.

## 🛠️ Tech Stack

- **Framework**: [Angular 11](https://angular.io/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/)
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com/)
- **State Management**: RxJS & Angular Services
- **Dev Tools**: Angular CLI, TypeScript

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Version compatible with Angular 11)
- [Angular CLI](https://github.com/angular/angular-cli) installed globally (`npm install -g @angular/cli@11`)

### Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.

### Development Server

Run `ng serve` (or `npm start`) for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## 🏗️ Project Structure

```text
src/app/
├── models/         # TypeScript interfaces/models (e.g., Product)
├── pages/
│   ├── home/       # Home page with hero carousel
│   ├── products/   # Product listing and details
│   ├── list/       # Shopping cart view
│   └── shared/     # Navbar, Footer, and common components
└── products.service.ts  # Core service for product and cart management
```

## 🧪 Testing

- **Unit Tests**: Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- **End-to-end Tests**: Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## 📜 Commands

- `ng build`: Build the project (artifacts in `dist/`). Use `--prod` for production.
- `ng lint`: Run code linting.
- `ng generate component component-name`: Create new components.

---

*This project was generated with Angular CLI version 11.2.9.*
