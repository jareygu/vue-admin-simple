<template>
  <el-dialog :title="title" :visible="visible" @close="close" @closed="closed" v-bind="option">
    <component :is="component" v-bind="props"></component>
  </el-dialog>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: "EditDialog",
  props: {
    visible: Boolean,
    title: String
  },
  methods: {
    close() {
      this.$store.dispatch("closeDialog");
      this.$store.commit("FINISH_PROMISE", false);
    },
    closed() {
      this.$store.dispatch("destroyComponent");
    }
  },
  computed: {
    option() {
      return this.$store.state.dialog.option || {};
    },
    ...mapGetters([
      'component',
      'props'
    ])
  }
};
</script>
