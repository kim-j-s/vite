import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  // base: "/",
  root,
  build: {
    // 배포 때 풀더 지우기
    emptyOutDir: true,
    outDir: '../dist',
  },
  plugins: [
    handlebars({
      // handlebar 경로 설정
      // partialDirectory: path.resolve(__dirname, "src/_partials"),
      partialDirectory: resolve(__dirname, '_partials'),
      // public 폴더를 처리할 수 있도록 rootDir 설정
      // rootDir: resolve(__dirname, "public"),
    }),
    // html({
    //   minify: true,
    //   // inject: {
    //   //   injectData: {
    //   //     title: 'My App',
    //   //   },
    //   // },
    //   // src/pages 디렉토리 내의 모든 HTML 파일을 가져와서 페이지로 처리합니다.
    //   pagesDir: 'src/pages',
    // }),
    // 단순 복사 배포
    // copy({
    //   targets: [
    //     // src/assets/css/lib 디렉토리 내의 파일을 dist/assets/css/lib 디렉토리로 복사합니다.
    //     { src: 'src/assets/css/lib/**/*', dest: 'dist/assets/css/lib' },
    //   ],
    // }),
  ],
});
