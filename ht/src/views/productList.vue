<template>
  <div>
    <el-collapse>
      <el-collapse-item title="条件查询">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-form-item label="商品名称">
            <el-input v-model="form.name" placeholder="商品名称/模糊查询"></el-input>
          </el-form-item>
          <el-form-item label="商品货号">
            <el-input v-model="form.brandId" placeholder="商品货号"></el-input>
          </el-form-item>
          <el-form-item label="品牌">
            <el-select v-model="form.brandName" placeholder="品牌">
              <el-option v-for="item in brandName" :key="item.id" :label="item.name" ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上架状态">
            <el-select v-model="form.publishStatus" placeholder="上架状态">
              <el-option label="上架" value="shangjia"></el-option>
              <el-option label="未上架" value="weishangjia"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态">
            <el-select v-model="form.verifyStatus" placeholder="审核状态">
              <el-option label="审核" value="shenhe"></el-option>
              <el-option label="未审核" value="noshenhe"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button class="reset">重置</el-button>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
    <div class="content">
      <el-button type="primary" size="mini">新增</el-button>
      <el-button type="primary" size="mini">导出商品列表excel文件</el-button>
      <el-table :data="tableData" border style="width: 100%;margin-top: 15px;">
        <el-table-column type="index" fixed="left"></el-table-column>
        <el-table-column prop="pic" label="商品图片" width="140px">
          <template slot-scope="scope">
            <img :src="scope.row.pic" alt="">
          </template>
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="350px">
          <template slot-scope="scope">
            <div>{{scope.row.name}}</div>
            <p>品牌:{{scope.row.brandName}}</p>
            <p>{{scope.row.description}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="province" label="商品价格" width="150px">
          <template slot-scope="scope">
            <p>原价：{{scope.row.originalPrice}}</p>
            <p>现价：{{scope.row.price}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="productCategoryName" label="商品类别">
        </el-table-column>
        <el-table-column label="标签" width="120px">
          <template slot-scope="scope">
            <p>最新：<el-switch v-model="scope.row.newStatus==1?true:false" active-color="#409eff" inactive-color="#dcdfe6">
            </el-switch></p>
            <p>推荐：<el-switch v-model="scope.row.recommendStatus==1?true:false" active-color="#409eff" inactive-color="#dcdfe6">
            </el-switch></p>
          </template>
        </el-table-column>
        <el-table-column label="标签2" width="120px">
          <template slot-scope="scope">
            <p>发布：<el-switch v-model="scope.row.publishStatus==1?true:false" active-color="#409eff" inactive-color="#dcdfe6">
              </el-switch>
            </p>
            <p>审核：<el-switch v-model="scope.row.verifyStatus==1?true:false" active-color="#409eff" inactive-color="#dcdfe6">
              </el-switch>
            </p>
          </template>
        </el-table-column>
        <el-table-column prop="zip" label="sku">
          <template slot-scope="scope">
            <p class="editSku">编辑sku</p>
          </template>
        </el-table-column>
        <el-table-column prop="weight" label="重量">
        </el-table-column>
        <el-table-column prop="sort" label="排序">
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="query.pagenum"
          :page-sizes="[10, 20, 30, 40]" :page-size="query.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
    </div>
  </div>
</template>

<script>
import { getTableList ,getBrand} from '@/utils/api';
export default {
  data() {
    return {
      form: {
        name: '',
        brandId: '',
        brandName: '',
        verifyStatus: '',
        region: ''
      },
      query: {
        pagesize: 10,
        pagenum: 1
      },
      tableData: [],
      total: 0,
      brandName:[]
    }
  },
  methods: {
    handleClick() { },
    handleSizeChange(val) {
      this.query.pagesize = val
      this.getList()
     },
    handleCurrentChange(val) {
      this.query.pagenum = val
      this.getList()
    },
    getList() {
      getTableList(this.query).then(res => {
        console.log(res);
        this.tableData = res.data.data.rows
        this.total = res.data.data.total
      })
    },
    getBrandList() {
      getBrand().then(res => {
        console.log(res, 'brand');
        this.brandName = res.data.data.items
      })
    }
  },
  created() {
    this.getList()
    this.getBrandList()
  },
}
</script>

<style lang='scss' scoped>
.el-collapse-item__content {
  padding: 15px;
}

::v-deep .el-collapse-item__header {
  padding-left: 20px;
}

.reset {
  margin-left: 700px;
}
.editSku{
  color: #409eff;
  cursor: pointer;
}
.content {
  background-color: #fff;
  margin-top: 30px;
  text-align: left;
  padding: 15px;
}
::v-deep .el-table td.el-table__cell{
  text-align: center;
}
::v-deep .el-table th.el-table__cell>.cell{
  text-align: center;
}
img {
  width: 100px;
  height: 100px;
}
</style>