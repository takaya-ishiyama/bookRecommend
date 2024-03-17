import type { Preview } from "@storybook/react";

// import styles from "./styles/tailwind.css";
import styles from "../app/styles/tailwind.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
