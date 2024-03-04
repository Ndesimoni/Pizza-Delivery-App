# PIZZA DELIVERY APP

### THIS PROJECT IS A SMALL PIZZA DELIVERY BUSINESS STARTUP CREATED REACT VITE

## Plugins

DEV DEPENDENCIES:

1. eslint
2. vite-plugin-eslint

3) types/react
4) @types/react-dom
5) @vitejs/plugin-react
6) eslint": "^8.57.0
7) eslint-config-react-app
8) eslint-plugin-react
9) eslint-plugin-react-hooks
10) eslint-plugin-react-refresh
11) 12 vite"
12) vite-plugin-eslint

## ABOUT THIS APPLICATION

DESCRIPTIONS AND REQUIREMENTS:

1. very simple application where users can order one or more pizzas from a menu
2. require no user account and no login: users just input their names before using the app

3) the pizza menu changes from time to time, so it should be loaded from and API
4) users can add multiple pizzas amount to a card before ordering them
5) ordering will require just a user's name, phone number and password so in case something goes wrong we can contact them
6) GPS location should also be provided to make delivery easier
7) users can mark their order as priorities for and additional 20% of the cart price
8) orders are made by sending a post request with the order data (user data + selected pizzas) to the API
9) payments are made on delivery so no payment processing is necessary in the app
10) each order will get a unique ID that should be displayed so the user can later look up their order based on the ID
11) users should be able to mark their order as priority order even after it has been place

## FEATURES CATEGORIES

1.  USER
2.  MENU
3.  CART
4.  ORDER

## PAGES

1. HOME PAGE (/)
2. PIZZA MENU (/menu)
3. CART (/cart)
4. PLACING A NEW ORDER (/order/menu)
5. LOOKING UP AN ORDER(/order/:orderID)

## CONNECT FEATURES TO PAGES

FEATURES = = = = = PAGES

1. USER ========= HOME PAGE

2) MENU ========= PIZZA MENU
3) CART ========= CART
4) ORDER ========= PLACING A NEW ORDER PAGE && LOOKING UP AND ORDER

## STATE MANAGEMENT AND TECHNOLOGY DECISION

STATE MANAGEMENT

1.  USER ===== Global UI state(no accounts , so state stays in app)
2.  MENU ===== Global remote state( menu is fetched from API server)
3.  CART ===== Global UI state( no need for API just stored state in app)
4.  ORDER ===== Global remote state (fetch and submitted to API)

TECHNOLOGY STACK DECISIONS

Routing ===== React Router
Styling ===== Tailwind css

Remote State Management === React Router : render-as-you-fetch instead of fetch-on-render
UI State management ==== Redux
