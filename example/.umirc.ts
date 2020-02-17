import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      name: 'model 测试',
      path: '/plugin-model',
      component: './plugin-model',
    },
    {
      name: 'initial-state 测试',
      path: '/plugin-initial-state',
      component: './plugin-initial-state',
    },
    {
      name: '首页',
      path: '/',
      component: './index',
    },
  ],
  presets: [require.resolve('../packages/preset-react/lib')],
  // plugins: [require.resolve('../packages/plugin-webpack-5/lib')],
});
