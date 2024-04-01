import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // emptyoutDir: false,
    // outDir : 배포 할 폴더를 설정
    outDir: "dist",
  },
});
