# Futures Page Contexts and Providers

## Overview

This documentation covers the context providers and client-side components used in the Futures page implementation. The architecture follows a clean separation of concerns with centralized state management for common UI components.

## ClientProvider

### Description

The `ClientProvider` is a React component that wraps all content in the router layout. This component consolidates all necessary aspects that need to be loaded on every page, keeping the layout clean and minimizing imports throughout the application.

### Location
`components/ClientProvider.jsx`

### Implementation

```javascript
'use client';
import { PopUpProvider } from '@/context/PopUpContext';
import { Analytics } from "@vercel/analytics/react";

export default function ClientProviders({ children }) {
  return (
    <PopUpProvider>
      <Analytics />
      {children}
    </PopUpProvider>
  );
}
```

### Features

The `ClientProvider` component renders:
- **PopUpProvider context** - Provides popup state management throughout the app
- **Vercel Analytics component** - Handles analytics tracking
- **Children prop** - Where all your HTML content will be rendered

### Usage

Simply wrap your layout with the `ClientProvider` to enable all provided contexts and analytics.

## PopUpProvider

### Description

A React context that provides an easy-to-use popup management system throughout the application.

### Location
`context/PopUpContext.jsx`

### Custom Hook: usePopUpContext()

The context provides a custom hook that exposes the following state and functions:

- **`popUpValue`** - Boolean state indicating if popup is open/closed
- **`setPopUpValue`** - Function to directly set the popup state
- **`toggleValue`** - Function to toggle between open and closed popup states

### Usage Example

#### Creating a Popup Component

```javascript
'use client'
import { motion, AnimatePresence } from "framer-motion"
import { usePopUpContext } from "@/context/PopUpContext"
import { LoginPopup } from "./LoginPopup"

function MainPopup() {
  const { popUpValue } = usePopUpContext()
  
  return (
    <AnimatePresence>
      {popUpValue && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LoginPopup />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MainPopup
```

#### Triggering Popup from Any Component

```javascript
import { usePopUpContext } from "@/context/PopUpContext"

function SomeComponent() {
  const { toggleValue } = usePopUpContext()
  
  return (
    <button onClick={toggleValue}>
      Close PopUp
    </button>
  )
}
```

### Key Benefits

- **Centralized popup management** - Control popups from anywhere in your application
- **Simple API** - Easy-to-use hook with intuitive state management
- **Flexible implementation** - Use conditional rendering to show/hide popup components
- **Global accessibility** - Available throughout the entire application via context

### Implementation Pattern

1. Use `popUpValue` for conditional rendering of popup components
2. Use `toggleValue` function to switch between open/closed states
3. Use `setPopUpValue` for direct state control when needed
4. Combine with animation libraries (like Framer Motion) for smooth transitions