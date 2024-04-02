import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      // 개발 설정
      root,
      base: './',
      plugins: [
        handlebars({
          partialDirectory: resolve(__dirname, '_partials'),
        }),
      ],
    }
  } else {
    // 배포 설정
    return {
      root,
      publicDir: root,
      plugins: [
        handlebars({
          partialDirectory: resolve(__dirname, '_partials'),
        }),
      ],
      // 빌드 설정
      build: {
        emptyOutDir: true,
        outDir: '../dist',
      },
    }
  }
})
