// rollup.config.js
import typescript from "rollup-plugin-typescript2";
export default {
  // 入口
  input: 'src/index.ts',
  output: {
    // 打包后文件
    file: 'dist/mobile-image-viewer.esm.js',
    // 编译格式 commonjs umd amd
    format: 'esm',
  },
  plugins: [
    typescript()
  ],
}