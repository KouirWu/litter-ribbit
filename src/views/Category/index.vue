<template>
  <div class="category">
    <h2>分类页面</h2>
    <div v-if="categoryList.length">
      <div v-for="item in categoryList" :key="item.id">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getCategoryAPI } from '@/apis/category'

const categoryList = ref([])

const getCategory = async () => {
  try {
    const res = await getCategoryAPI()
    categoryList.value = res.result
  } catch (error) {
    console.error('获取分类数据失败:', error)
  }
}

onMounted(() => {
  getCategory()
})
</script>

<style scoped>
.category {
  padding: 20px;
}
</style>
