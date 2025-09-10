# Vitech Starter

基于 Vite + Vue 3 + TypeScript 的现代化项目模板。

## 简介

这是一个使用 Vite 和 Vue 3 构建的现代化项目模板，提供了完整的开发工具链和最佳实践，适合快速开发各种类型的前端项目。

## 技术栈

- **框架**: Vue 3.5.13
- **构建工具**: Vite 6.0.11
- **语言**: TypeScript 5.7.3
- **样式**: UnoCSS 65.4.3 + Sass 1.83.4
- **状态管理**: Pinia 2.3.1
- **路由**: Vue Router 4.5.0
- **测试**: Vitest 3.0.2 + Cypress 14.0.0
- **包管理**: pnpm 9.15.4

## 环境要求

- Node.js >= 18.0.0
- pnpm >= 9.15.4

## 配置

### 目录结构

```
vitech-starter/
├── src/
│   ├── assets/             # 静态资源
│   ├── components/         # 组件
│   ├── composables/        # 组合式函数
│   ├── layouts/            # 布局
│   ├── pages/              # 页面
│   ├── router/             # 路由
│   ├── stores/             # 状态管理
│   ├── types/              # 类型定义
│   ├── utils/              # 工具函数
│   └── main.ts             # 入口文件
├── public/                 # 公共资源
├── cypress/                # E2E 测试
├── dist/                   # 构建输出
└── package.json            # 项目配置
```

### Vite 配置
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
```

## 核心功能

### 1. 现代化开发
- Vue 3 Composition API
- TypeScript 支持
- 热重载
- 自动导入

### 2. 组件系统
- 组件自动注册
- 类型安全
- 组合式函数
- 响应式数据

### 3. 路由管理
- Vue Router 4
- 路由守卫
- 懒加载
- 动态路由

### 4. 状态管理
- Pinia 状态管理
- 持久化存储
- 模块化状态
- 开发工具

### 5. 样式系统
- UnoCSS 原子化 CSS
- Sass 预处理器
- 主题系统
- 响应式设计

### 6. 测试支持
- 单元测试 (Vitest)
- E2E 测试 (Cypress)
- 测试覆盖率
- 测试工具

## 脚本说明

### 开发模式
```bash
# 启动开发服务器
pnpm dev

# 指定端口启动
pnpm dev --port 3000
```

### 构建部署
```bash
# 构建应用
pnpm build

# 预览构建结果
pnpm preview
```

### 测试
```bash
# 单元测试
pnpm test:unit

# E2E 测试
pnpm test:e2e

# E2E 测试开发模式
pnpm test:e2e:dev
```

### 代码质量
```bash
# 代码检查
pnpm lint

# 代码格式化
pnpm format

# 类型检查
pnpm type-check
```

## 使用示例

### 页面组件
```vue
<!-- src/pages/Home.vue -->
<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('欢迎使用 Vitech Starter')
const description = ref('这是一个基于 Vite 和 Vue 3 的现代化项目模板')
</script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}
</style>
```

### 组合式函数
```typescript
// src/composables/useCounter.ts
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const doubleCount = computed(() => count.value * 2)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  return {
    count: readonly(count),
    doubleCount,
    increment,
    decrement,
    reset
  }
}
```

### 状态管理
```typescript
// src/stores/user.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const isLoggedIn = computed(() => !!user.value)
  
  const login = async (credentials: LoginCredentials) => {
    // 登录逻辑
    user.value = await api.login(credentials)
  }
  
  const logout = () => {
    user.value = null
  }
  
  return {
    user: readonly(user),
    isLoggedIn,
    login,
    logout
  }
})
```

### 路由配置
```typescript
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
```

## 部署相关

### 静态部署
```bash
# 构建应用
pnpm build

# 部署到静态托管服务
# 支持 Netlify, Vercel, GitHub Pages 等
```

### 服务端部署
```bash
# 构建应用
pnpm build

# 使用静态服务器托管 dist 目录
```

### Docker 部署
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 开发指南

### 添加新页面
1. 在 `src/pages/` 目录下创建 Vue 文件
2. 在 `src/router/index.ts` 中配置路由
3. 使用 `<script setup>` 语法

### 添加新组件
1. 在 `src/components/` 目录下创建组件
2. 组件自动注册，无需手动导入
3. 支持 TypeScript 类型提示

### 添加新功能
1. 在 `src/composables/` 目录下创建组合式函数
2. 在 `src/stores/` 目录下创建状态管理
3. 在 `src/utils/` 目录下创建工具函数

### 测试开发
1. 在 `src/` 目录下创建测试文件
2. 使用 Vitest 进行单元测试
3. 使用 Cypress 进行 E2E 测试

## 最佳实践

### 代码组织
- 使用组合式函数
- 保持组件简洁
- 合理使用状态管理
- 遵循单一职责原则

### 性能优化
- 使用懒加载
- 优化图片加载
- 使用 CDN 加速
- 启用缓存策略

### 类型安全
- 使用 TypeScript
- 定义清晰的类型
- 避免 any 类型
- 使用类型断言

## 许可证

MIT License

## 作者

toimc <brian@toimc.com>