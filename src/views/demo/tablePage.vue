<template>
  <div class="table-page">
    <el-table :data="tableData" border height="calc(100vh - 200px)">
      <el-table-column
        v-for="each in columnData"
        :prop="each.prop"
        :label="each.label"
        v-bind="each.other"
      ></el-table-column>
      <el-table-column ref="operation" prop="operation" label="操作" width="200px">
        <template slot-scope="scope">
          <slot name="row" :data="scope.row"></slot>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="page"
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, prev, pager, next, sizes"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "TablePage",
  props: {
    data: Array,
    option: Array,
    total: Number
  },
  data() {
    return {
      pagesize: 10,
      currentPage: 1
    };
  },
  methods: {
    currentChange(currentPage) {
      this.currentPage = currentPage;
    },
    sizeChange(pagesize) {
      this.pagesize = pagesize;
    }
  },
  computed: {
    tableData: function() {
      return this.data.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      );
    },
    columnData: function() {
      return this.option.map(each => {
        let _item = {};
        if (typeof each === "string") {
          _item = {
            prop: each,
            label: each
          };
        } else if (typeof each === "object") {
          let { prop, label, ...other } = each;
          _item = { prop, label, other: other };
        } else {
          _item = { prop: "", label: "未取得属性" };
        }
        return _item;
      });
    }
  }
};
</script>