import httpInstance from '@/utils/http'

// 获取分类数据
export function getCategoryAPI() {
  return httpInstance({
    url: '/home/category/head'
  })
}
