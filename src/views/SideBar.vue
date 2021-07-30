<template>
  <div class="left-side-bar">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="当前识别组件" name="1">
        <div v-for="button in curIdentifyCompData" :key="button.type">
          <el-button type="primary" size="small">{{ button.type }}</el-button>
        </div>
      </el-collapse-item>
      <el-collapse-item title="业务组件列表" name="2">
        <div v-for="button in compData" :key="button.type">
          <el-button type="primary" size="small">{{ button.type }}</el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  props: {
    // 当前识别组件列表
    curIdentifyCompData: {
      type: Array,
      default: () => []
    },
    // 业务组件列表
    compData: {
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    handleChange (val) {
      console.log(val);
    }
  }
}
</script>

<style lang="scss" scoped>
.left-side-bar {
  height: 100%;
  width: 100%;
  padding-left: 12px;
  ::v-deep .el-collapse-item__header {
    text-align: left;
  }
  ::v-deep .el-collapse-item__wrap {
    text-align: left;
  }
}
.collapse-title {
  height: 56px;
  background-color: red;
}
</style>