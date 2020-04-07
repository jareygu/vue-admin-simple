<template>
  <el-container>
    <el-header>
      <el-button @click="show">测试弹框</el-button>
    </el-header>
    <!-- <el-main>
      <el-table :data="formData" border size="mini" style="width: 80%">
        <el-table-column prop="name" label="书签名"></el-table-column>
        <el-table-column prop="url" label="URL"></el-table-column>
        <el-table-column prop="operation" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>-->
    <el-main>
      <!-- <TablePage :data="data" :option="option" :total="total">
        <template v-slot:row>
          <el-button size="mini" @click="e()">编辑</el-button>
          <el-button size="mini">删除</el-button>
        </template>
      </TablePage> -->
    </el-main>
  </el-container>
</template>
<script>
import edit from "@/views/demo/edit";
import TablePage from "./tablePage";
export default {
  name: "demo",
  components: { TablePage },
  data() {
    return {
      pagesize: 10,
      currentPage: 1,
      total: 100,
      data: [
        { id: 123, name: "范围" },
        { id: 123, name: "" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" },
        { id: 123, name: "范围" }
      ],
      option: [
        "id",
        {
          prop: "name",
          label: "名字",
          width: "700px",
          formatter: function(row) {
            if (row.name == "") return "undefined";
            return row.name;
          }
        }
      ]
    };
  },
  methods: {
    async show() {
      let res = await this.$dialog.open({
        title: "测试弹框",
        component: edit,
        props: {
          id: 111,
          name: "方式分为"
        },
        width: "50%"
      });
      if (!res) return;
      console.log(res)
    },
    currentChange(currentPage) {
      this.currentPage = currentPage;
    },
    sizeChange(pagesize) {
      this.pagesize = pagesize;
    },
    e(row) {
      console.log(this.$slots);
      console.log("111" + row);
    }
  },
  computed: {
    formData: function() {
      return this.tableData.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      );
    }
  }
};
</script>