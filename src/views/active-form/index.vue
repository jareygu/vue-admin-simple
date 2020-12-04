<template>
  <div>
    <active-form
      :model="form"
      :data="config"
      label-width="80px"
      label-suffix="："
    >
      <active-form-item label="姓名" prop="name">
        <template v-slot:default="{ placeholder }">
          <el-input :placeholder="placeholder" v-model="form.name" />
        </template>
      </active-form-item>
      <active-form-item label="年龄" prop="age">
        <el-input style="width: 200px" v-model.number="form.age" />
        <el-tag>标签一</el-tag>
      </active-form-item>
      <template #tab>
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="健康" name="1">
            <active-form-item label="身高" prop="health.height">
              <el-input v-model="form.health.height" />
            </active-form-item>
            <active-form-item label="体重" prop="health.weight">
              <el-input v-model="form.health.weight" />
            </active-form-item>
          </el-tab-pane>
          <el-tab-pane label="成绩" name="2">
            <active-form-item label="语文" prop="grades.Chinese">
              <el-input v-model="form.grades.Chinese" />
            </active-form-item>
            <active-form-item label="数学" prop="grades.Math">
              <el-input v-model="form.grades.Math" />
            </active-form-item>
          </el-tab-pane>
          <el-tab-pane label="性格" name="3">
            <active-form-item label="乐观" prop="happiness">
              <el-input v-model="form.happiness" />
            </active-form-item>
          </el-tab-pane>
        </el-tabs>
      </template>
    </active-form>
  </div>
</template>

<script>
import ActiveForm from './components/activeForm'
import ActiveFormItem from './components/activeFormItem'

import config from './config'
export default {
  components: { ActiveForm, ActiveFormItem },
  created () {
    console.log(config);
  },

  // 写在 mixins 里
  provide () {
    return { activeForm: this }
  },

  data () {
    return {
      config,
      activeName: '1',
      form: {
        name: '',
        age: '',
        health: {
          height: 0,
          weight: 0
        },
        grades: {
          Chinese: 0,
          Math: 0
        }

      }
    }
  },

  methods: {
    handleAgeValid (rule, value, callback) {
      const age = Number(value)
      if (!age) return callback('请输入年龄')
      if (age <= 0 || age > 200) return callback('请输入正确的年龄')

    },
    handleWeightValid (rule, value, callback) {
      const weight = Number(value)
      if (!weight) return callback('请输入体重')
      if (weight <= 0 || weight > 1000) return callback('请输入正确的体重')

    }
  }
}
</script>

