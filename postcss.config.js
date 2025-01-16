module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      unitToConvert: "px", // 要转换的单位
      viewportWidth: 1536, // 设计稿的宽度
      viewportHeight: 703, // 设计稿的高度
      unitPrecision: 5, // 转换后保留的小数位数
      viewportUnit: "vw", // 需要转换成的视窗单位
      fontViewportUnit: "vw", // 字体使用的视口单位
      selectorBlackList: ["ignore", "tab-bar", "tab-bar-item"], // 忽略转换的类
      minPixelValue: 1, // 小于或等于1px不转换
      mediaQuery: false, // 是否允许在媒体查询中转换px
      replace: false, // 是否直接更换属性值，而不是添加备用属性
      exclude: [/node_modules/], // 忽略某些文件夹下的文件
    },
  },
};
