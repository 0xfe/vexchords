// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  if (mode === 'production') {
    return {
      build: {
        sourcemap: true,
        lib: {
          entry: './src/index.js',
          name: 'vexchords',
          filename: 'vexchords',
        },
        rollupOptions: {
          external: ['@svgdotjs/svg.js'],
          output: {
            // Global variables from externalized deps to use in the UMD build
            globals: {
              '@svgdotjs/svg.js': 'SVG',
            },
          },
        },
      },
    };
  }

  return {
    build: {
      sourcemap: true,
      outDir: 'demo'
    },
  };
});
