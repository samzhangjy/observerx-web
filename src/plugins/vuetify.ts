/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "../styles/settings.scss";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#006c4a",
          "on-primary": "#ffffff",
          "primary-container": "#8bf8c4",
          "on-primary-container": "#002114",
          "primary-fixed": "#8bf8c4",
          "on-primary-fixed": "#002114",
          "primary-fixed-dim": "#6edba9",
          "on-primary-fixed-variant": "#005237",
          secondary: "#9c413c",
          "on-secondary": "#ffffff",
          "secondary-container": "#ffdad6",
          "on-secondary-container": "#410003",
          "secondary-fixed": "#ffdad6",
          "on-secondary-fixed": "#410003",
          "secondary-fixed-dim": "#ffb3ad",
          "on-secondary-fixed-variant": "#7e2a27",
          tertiary: "#855400",
          "on-tertiary": "#ffffff",
          "tertiary-container": "#ffddb7",
          "on-tertiary-container": "#2a1700",
          "tertiary-fixed": "#ffddb7",
          "on-tertiary-fixed": "#2a1700",
          "tertiary-fixed-dim": "#ffb95c",
          "on-tertiary-fixed-variant": "#653e00",
          error: "#ba1a1a",
          "on-error": "#ffffff",
          "error-container": "#ffdad6",
          "on-error-container": "#410002",
          background: "#fbfdf9",
          "on-background": "#191c1b",
          outline: "#707974",
          surface: "#f8faf7",
          "on-surface": "#191c1b",
          "surface-variant": "#dbe5de",
          "on-surface-variant": "#404944",
        },
      },
      dark: {
        colors: {
          primary: "#6edba9",
          "on-primary": "#003824",
          "primary-container": "#005237",
          "on-primary-container": "#8bf8c4",
          "primary-fixed": "#8bf8c4",
          "on-primary-fixed": "#002114",
          "primary-fixed-dim": "#6edba9",
          "on-primary-fixed-variant": "#005237",
          secondary: "#ffb3ad",
          "on-secondary": "#5f1413",
          "secondary-container": "#7e2a27",
          "on-secondary-container": "#ffdad6",
          "secondary-fixed": "#ffdad6",
          "on-secondary-fixed": "#410003",
          "secondary-fixed-dim": "#ffb3ad",
          "on-secondary-fixed-variant": "#7e2a27",
          tertiary: "#ffb95c",
          "on-tertiary": "#462a00",
          "tertiary-container": "#653e00",
          "on-tertiary-container": "#ffddb7",
          "tertiary-fixed": "#ffddb7",
          "on-tertiary-fixed": "#2a1700",
          "tertiary-fixed-dim": "#ffb95c",
          "on-tertiary-fixed-variant": "#653e00",
          error: "#ffb4ab",
          "on-error": "#690005",
          "error-container": "#93000a",
          "on-error-container": "#ffdad6",
          background: "#191c1b",
          "on-background": "#e1e3e0",
          outline: "#89938d",
          surface: "#111413",
          "on-surface": "#c4c7c4",
          "surface-variant": "#404944",
          "on-surface-variant": "#bfc9c3",
        },
        dark: true,
      },
    },
  },
  blueprint: md3,
});
