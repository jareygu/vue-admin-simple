<template>
  <el-form
    ref="customForm"
    style="width:100%;display:flex;flex-wrap:wrap"
    :size="size || 'mini'"
    :model="data"
    :label-width="labelWidth"
  >
    <el-form-item
      v-for="(item, index) in formItems"
      :key="`form_item_${index}`"
      :rules="item.rules"
      :style="{ width: `${item.span ? (item.span * 100) / 24 : 100}%` }"
      :prop="item.value"
      :label="item.label"
      :label-width="item.labelWidth"
    >
      <!-- 普通输入框 -->
      <el-input
        v-if="item.typ === 'input'"
        v-model="data[item.value]"
        :type="item.inputType || 'text'"
        :disabled="item.disabled || false"
      >
        <template v-if="item.slot" :slot="item.slot.position">{{
          item.slot.text
        }}</template>
        <el-select
          v-else-if="item.selectSlot"
          :slot="item.selectSlot.position || 'append'"
          v-model="data[item.selectSlot.value]"
          :style="item.selectSlot.width ? { width: item.selectSlot.width } : {}"
        >
          <el-option
            v-for="(option, index) in item.selectSlot.options"
            :key="`form_item_select_slot_${index}`"
            :label="option.label"
            :value="option.value"
          ></el-option>
        </el-select>
      </el-input>

      <!-- 数字类型输入框 -->
      <el-input
        v-if="item.typ === 'inputNumber'"
        v-model.number="data[item.value]"
        :type="item.inputType"
        :disabled="item.disabled || false"
      >
        <template v-if="item.slot" :slot="item.slot.position || 'append'">{{
          item.slot.text
        }}</template>
        <el-select
          v-else-if="item.selectSlot"
          :slot="item.selectSlot.position || 'append'"
          v-model="data[item.selectSlot.value]"
          :style="item.selectSlot.width ? { width: item.selectSlot.width } : {}"
        >
          <el-option
            v-for="(option, index) in item.selectSlot.options"
            :key="`form_item_select_slot_${index}`"
            :label="option.label"
            :value="option.value"
          ></el-option>
        </el-select>
      </el-input>

      <!-- 选择框 -->
      <el-select
        v-else-if="item.typ === 'select'"
        v-model="data[item.value]"
        :style="{ width: item.width || '100%' }"
      >
        <el-option
          v-for="(each, index) in item.options"
          :key="`${each.value}_select_index_${index}`"
          :label="each.label"
          :value="each.value"
        />
      </el-select>

      <!-- 日期选择框 -->
      <el-date-picker
        :style="{ width: item.width || '100%' }"
        v-else-if="item.typ === 'date'"
        v-model="data[item.value]"
        :type="item.dateType || 'date'"
      />

      <!-- 单选框 -->
      <el-checkbox
        v-else-if="item.typ === 'checkbox'"
        v-model="data[item.value]"
        :disabled="item.disabled || false"
        >{{ item.text }}</el-checkbox
      >

      <!-- 搜索提示输入框 -->
      <el-autocomplete
        v-else-if="item.typ === 'autocomplete'"
        v-model="data[item.value]"
        :style="{ width: item.width || '100%' }"
        :fetch-suggestions="item.handleFetch"
        @select="item => handleSelect(item, index)"
      ></el-autocomplete>

      <!-- 文字显示 -->
      <span v-else-if="item.typ === 'text'">
        <span>{{ data[item.value] }}</span>
      </span>

      <!-- 按钮 -->
      <el-button
        v-else-if="item.typ === 'button'"
        @click="item.handleClick"
        :type="item.btnType"
        :size="item.size"
        :loading="item.loading || false"
      >
        {{ item.text }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    data: Object,
    formItems: Array,
    labelWidth: String,
    size: String
  },
  methods: {
    validAll() {
      return this.$refs.customForm.validate().catch(() => false);
    },
    // 重置校验
    clearValid() {
      this.$refs.customForm.resetFields();
    },
    handleSelect(item, index) {
      const formItem = this.formItems[index];
      if (formItem.onSelect) {
        this.data[formItem.value] = formItem.onSelect(item);
      } else {
        this.data[formItem.value] = item.value;
      }
    }
  },
  beforeMount() {
    for (let item of this.formItems) {
      let val =
        item.default !== null || item.default !== undefined ? item.default : "";
      if (this.data[item.value] === undefined) {
        this.$set(this.data, item.value, val);
      }
    }
  }
};
</script>
