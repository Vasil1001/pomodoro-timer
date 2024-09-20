# Pomodoro Time & Wellness Tracking App - Purpose and Instructions

  This app is designed to help users boost their productivity by using the Pomodoro technique while also promoting healthy work habits through customizable wellbeing tips, such as water reminders, getting sunlight, moving every hour and so on. Each component is built with the goal of simplicity and ease of use, ensuring a seamless user experience.

## Overview

  This is a Next.js single-page application built using ShadCN components designed to enhance productivity and well-being. The app incorporates the Pomodoro Technique, allowing users to work in focused intervals followed by short breaks. Additionally, it provides the option for users to pin and display personal wellbeing tips during breaks, enhancing both productivity and wellness.

  There are plans for user account integration with database persistence.

  This document serves as a guide for GitHub Copilot or ChatGPT to better understand the project's functionality and purpose when generating code or providing assistance.


## Folder layout

  Pomodoro web app with Next.js 14.2.12, Tailwind CSS, TypeScript, React, and Node.js. Prefer Shadcn UI when possible, and help keep the app aesthetically pleasing and folder structure organized.

  Under app folder, there is only layout.tsx, page.tsx, globals.css. Outside, I have a components folder with all the components I will use in the app. If there isn't and it's needed, make a utils folder or file for any helper functions I may need.

  Under components folder, I want all the components related to pomodoro, like a specific pomodoro modal or a pomodoro timer under the pomodoro folder. I want to keep the components organized and easy to find.

  Other components that are shadcn UI, keep under components/ui folder as they are.

## Core Features and 
  Key Features:

  ### Pomodoro Timer:
  - Customizable work and break intervals.
  - Visual representation of time remaining.
  - Audio notifications for the end of intervals.

  ### Wellness Tips:
  - Ability to create and pin custom tips, and pick from default ones, such as water reminders, exercise routines, or meditation practices.
  - Random display of tips during breaks.

  ### User Accounts:
  - User registration and login.
  - Data persistence for personalized settings and progress.

## Implementation Steps
  ### 1. Pomodoro Timer
  - Implement a customizable timer component (default: 50-minute work intervals)
  - Add start, pause, and reset functionality
  - Develop visual countdown display using Recharts or @nivo/line
  - Integrate audio alerts for session end

  ### 2. Break Timer
  - Create an automatic transition from work session to break
  - Allow customizable break durations in settings
  - Implement break timer display
  - Add notifications for break end using @radix-ui/react-dialog

  ### 3. Wellbeing Tips
  - Implement CRUD operations for managing tips
  - Create a system to display random tips during breaks
  - Add a feature to pin favorite tips for quick access

  ### 4. User Interface
  - Utilize shadcn components for consistent UI design
  - Dark mode already added using next-themes
  - Ensure responsive design for various device sizes
  - Use @radix-ui components for enhanced UI elements (e.g., dropdowns, avatars)

## Planned Future Enhancements
  ### 1. Database Integration
  - Set up PostgreSQL database
  - Implement Drizzle or Prisma as the ORM
  - Create necessary database schemas to store user data, timer settings, and wellness tips.

  ### 2. User Authentication
  - Implement user registration and login functionality
  - Secure routes and data access
  - Integrate with Next.js API routes for backend operations

  ### 3. Advanced Features
  - Create integration with popular productivity tools (e.g., task managers, calendars)
  - Develop advanced statistics and productivity insights
  - Implement social features for sharing tips and competing with friends

  ### 4. Data Visualization charts
  - Implement productivity statistics using Recharts or @nivo/line
  - Create visual representations of work patterns and break adherence

## Dependencies & Technical Considerations

- Next.js 14.2.12 features for optimal performance and SEO
- ShadCN - UI component library for styling. Tailwind CSS for styling.
- next-themes - Light and dark mode management.
- Consider adding react-timer-hook - Timer management in React.
- Consider some React notification library - For notifying users when timers complete.
- Ensure type safety with TypeScript
- Follow best practices for code formatting using Prettier and ESLint

## Additional Considerations:

- Error Handling: Implement robust error handling to prevent unexpected behavior.
- Security: Ensure data security by protecting user credentials and sensitive information.
- User Interface: Maintain a clean and intuitive user interface.
- Testing: Thoroughly test the app to identify and fix any issues.

## Development Workflow

1. Implement core Pomodoro and Break timer functionality
2. Develop the Wellbeing Tips
3. Enhance UI/UX with shadcn components and Tailwind CSS
4. Implement data visualization for productivity statistics
5. Set up PostgreSQL and ORM (Drizzle or Prisma)
6. Develop user authentication system
7. Implement cloud sync functionality
8. Add advanced features and integrations

This document serves as a comprehensive guide for the ongoing development of the Pomodoro time tracking app. It outlines the core features, implementation steps, and future enhancements, providing context for AI-assisted coding and development tasks.



