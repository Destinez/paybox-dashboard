# Paybox Dashboard

A responsive fintech wallet dashboard UI built with React and Vite. It is a front-end only implementation — all figures are static sample data (amounts in Naira, ₦).

## Features

- **Wallet balance card** with Add Fund / Withdraw actions and a show/hide toggle for the balance
- **Summary cards** — savings balance, customers, POS terminals, transfers, inflow, transactions, cash-out, transaction status (successful vs failed), average transaction value/count and commissions
- **Transaction comparison doughnut chart** (Send Money / Cash-out / Utilities & Bills) built with Chart.js
- **Collapsible sidebar** navigation with sub-menus, hidden on small screens
- **Top navbar** with notifications and user avatar
- Thousands-separator formatting for all figures

## Stack

| | |
|---|---|
| Framework | React 18 + Vite 4 |
| State | Redux Toolkit + React Redux (store wired up for UI state) |
| UI | Bootstrap 5 / reactstrap layout, Material UI icons (`@mui/icons-material`), iconsax-react, Sass |
| Charts | Chart.js 4 via `react-chartjs-2` |
| Routing | React Router 6 |
| Tooling | ESLint, `gh-pages` deploy script |

## Getting started

Requires Node.js 18+.

```bash
git clone https://github.com/Destinez/paybox-dashboard.git
cd paybox-dashboard
npm ci
npm run dev       # http://localhost:5173
```

Other scripts:

```bash
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint
```

## Project structure

```
src/
  components/   Cards, Chart, Navbar, Sidebar
  layouts/      Layout wrapper
  pages/        Dashboard (assembles the grid of cards)
  redux/        Redux Toolkit store and slices
  assets/       SCSS partials, images, SVGs
```
