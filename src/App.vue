<script setup>
import { ref, reactive } from 'vue';

import TestInputText from '@/stories/TestInputText.vue'
import TestInputPassword from '@/stories/TestInputPassword.vue'

const form = reactive({
  account: '',
  password: '',
  birthday: '',
  gender: '',
  position: '',
  messageBoard: '',
})

const genderList = reactive({
  Male: '男',
  Female: '女',
  Secret: '不方便透漏',
})

const positionList = reactive({
  Management: '管理職',
  AIEngineer: 'AI工程師',
  DataScientist: '數據科學家',
  FullStackEngineer: '全端工程師',
  FrontEndEngineer: '前端工程師',
  BackendEngineer: '後端工程師',
  TestEngineer: '測試工程師',
  UIUXDesigner: 'UI/UX設計師',
})

</script>

<template>
  <div class="container">
    <div class="row">
      <span>帳號： </span>
      <TestInputText placeholder="請輸入帳號 ..." />
    </div>
    <div class="row">
      <span>密碼： </span>
      <TestInputPassword placeholder="請輸入密碼 ..." />
    </div>
    <div class="row">
      <span>生日： </span>
      <!-- <TestDatePicker /> -->
    </div>
    <div class="row">
      <span>性別： </span>
      <!-- <TestRadio /> -->
    </div>
    <div class="row">
      <span>職位： </span>
      <!-- <TestCheckbox /> -->

    </div>
    <div class="row">
      <span>留言板： </span>
      <!-- <TestTextarea /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  height: 100%;
  padding: 20px 30px;
}

.row {
  display: flex;
  align-items: center;
  gap: 5px;
  min-height: 42px;
  span {
    text-align: right;
    width: 100px;
  }
}
</style>
