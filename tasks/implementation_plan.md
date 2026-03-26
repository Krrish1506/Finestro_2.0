# Premium Navbar and Auth Refinement Plan

This plan outlines the technical implementation of a high-opacity triple-pill navbar and a new, animated Auth system.

## Proposed Changes

### [Navigation](file:///c:/Users/KRRISH/Design%20Thinking/Finestro/Finestro%20Website%20Prototype%20-%20Copy/src/components/Navigation.tsx)
- **Triple-Pill Layout**: Separate the logo, links, and CTA into three individual capsules with `bg-secondary/90`, `backdrop-blur-xl`, and `border-2 border-white/20`.
- **Expanding Logo**: Implement a hover interaction where the Logo capsule smoothly expands to reveal the "Finestro" brand text using `framer-motion`.
- **Animated Links**: The active navigation item will feature a constantly moving gradient background for a dynamic, premium feel. 
- **Desktop Focus**: All changes will be restricted to the desktop view as per instructions.

### [NEW] [AuthPage](file:///c:/Users/KRRISH/Design%20Thinking/Finestro/Finestro%20Website%20Prototype%20-%20Copy/src/components/AuthPage.tsx)
- Create a dedicated component for Login/Signup.
- High-budget animations with `framer-motion`.
- "Continue with Google" Button integrated into the form.

### [App](file:///c:/Users/KRRISH/Design%20Thinking/Finestro/Finestro%20Website%20Prototype%20-%20Copy/src/App.tsx)
- Update routing logic to handle the new `auth` state.

## Verification Plan
### Automated Tests
- Build verification: `npm run build`.
### Manual Verification
- Test logo hover expansion.
- Verify gradient animation on active links.
- Test login/signup form flow.
