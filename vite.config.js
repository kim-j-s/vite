import { resolve } from "path";
// import path from "path";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import handlebars from "vite-plugin-handlebars";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  // base: "/",
  root,
  build: {
    // 배포 때 풀더 지우기
    emptyOutDir: true,
    outDir: "../dist",
    // assetsInlineLimit: 0, // 모든 파일을 번들링하도록 설정
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, "index.html"),
    //   },
    // },
  },
  plugins: [
    handlebars({
      // handlebar 경로 설정
      // partialDirectory: path.resolve(__dirname, "src/_partials"),
      partialDirectory: resolve(__dirname, "_partials"),
      // public 폴더를 처리할 수 있도록 rootDir 설정
      // rootDir: resolve(__dirname, "public"),
    }),
    // createHtmlPlugin({
    //   minify: true,
    //   pagesDir: "src",
    // }),
  ],
});
