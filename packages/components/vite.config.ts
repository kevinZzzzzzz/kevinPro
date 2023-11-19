import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    //忽略不需要打包的文件
    //打包后文件目录
    // outDir: "es",
    //压缩
    minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      input: ["index.ts"],
      output: [
        {
          // 打包格式
          format: "es", // esModule
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].mjs',
          // assetFileNames: '[name].[ext]',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../kevinPro/es',
        },
        {
          // 打包格式 CommonJs
          format: "cjs",
          entryFileNames: '[name].js',
          // assetFileNames: '[name].[ext]',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          dir: '../kevinPro/lib',
        },
        {
          // 打包格式 UMD规范pkg
          format: "umd",
          entryFileNames: '[name].js',
          name: '$xxx',
          exports: 'named',
          dir: '../kevinPro/dist',
        },
        {
          // 打包格式 iife规范
          format: "iife",
          name: '$xxx',
          entryFileNames: '[name].js',
          exports: 'named',
          dir: '../kevinPro/iife',
        }
      ]
    },
    lib: {
      entry: "./index.ts",
      name: "kevinPro",
      // fileName: "kevinPro",
      formats: ["es", "cjs"],
    },
  },
  plugins: [
    vue(),
    dts({
      outputDir: ["../kevinPro/es", '../kevinPro/lib'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "../../tsconfig.json",
    }),
    // {
    //   name: 'style',
    //   generateBundle(config, bundle) {
    //     //这里可以获取打包后的文件目录以及代码code
    //     const keys = Object.keys(bundle);

    //     for (const key of keys) {
    //       const bundler: any = bundle[key as any];
    //       //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

    //       this.emitFile({
    //         type: 'asset',
    //         fileName: key, //文件名名不变
    //         source: bundler.code.replace(/\.less/g, '.css')
    //       });
    //     }
    //   }
    // }
  ],
});
