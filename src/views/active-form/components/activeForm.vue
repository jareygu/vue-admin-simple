<template>
  <div class="active-form">
    <el-form v-bind="$attrs" v-on="$listeners">
      <el-row>
        <slot />
      </el-row>
      <slot name="tab" />
    </el-form>
  </div>
</template>

<script>
import FormItem from './activeFormItem'
export default {
  components: { FormItem },

  provide () {
    return { config: this.data }
  },

  props: {

    formData: {
      type: Object,
      default: () => ({})
    },

    data: Object,

    isDetail: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
    }
  }

}
</script>

<style lang="scss" scoped>
@import "./active-form.scss";
</style>