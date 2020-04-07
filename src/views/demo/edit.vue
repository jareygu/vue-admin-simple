<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="id">
        <el-input v-model="id"></el-input>
      </el-form-item>
      <el-form-item label="名字">
        <el-input v-model="name"></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button size="mini" @click="close">取消</el-button>
      <el-button type="primary" size="mini" @click="save">保存</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Edit",
  props: {
    id: Number,
    name: String
  },
  created() {
    // 请求详情数据
    console.log("触发created钩子");
  },
  mounted() {
    // console.log("触发mounted钩子");
  },
  destroyed() {
    console.log("触发destroyed钩子");
  },
  methods: {
    close() {
      // 默认返回false
      this.$dialog.close();
    },
    save() {
      // 调接口

      // 保存数据

      this.$dialog.close({
        id: this.id,
        name: this.name
      });
    }
  }
};
</script>