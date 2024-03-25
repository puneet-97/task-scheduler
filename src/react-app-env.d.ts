/// <reference types="react-scripts" />

// Augment the NodeJS namespace with additional properties
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test"; // Environment variables available during development, production, and testing
    REACT_APP_API_URL: string; // Example environment variable used to store API URL
  }
}

// Extend the Document interface with custom properties
interface Document {
  fullscreenEnabled: boolean; // Example: Fullscreen API property extension
}
