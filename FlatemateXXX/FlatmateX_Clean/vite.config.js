import { defineConfig } from 'vite';
import reactSwc from '@vitejs/plugin-react-swc'; // Correct import for SWC plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactSwc()], // Use the SWC plugin
});