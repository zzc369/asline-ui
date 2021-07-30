<template>
  <div class="page-header">
    <div class="left">
      <img class="wms-icon" src="../assets/shopee-wms.svg" alt="" />
    </div>
    <div class="center">
      <!-- <div class="action">
        <div class="group mr">
          <img src="../assets/undo.svg" alt="" class="action-icon" />
          <span>撤销</span>
        </div>
        <div class="group mr">
          <img src="../assets/redo.svg" alt="" class="action-icon" />
          <span>重做</span>
        </div>
        <div class="group">
          <img src="../assets/download.svg" alt="" class="action-icon" />
          <span>下载</span>
        </div>
      </div> -->
    </div>
    <div class="right">
      <div class="avatar-pic">
        <img src="../assets/default-header.png" alt="user-avatar" />
      </div>
      <span>autotest@shopee.com</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page-header {
  height: 56px;
  display: flex;
  background-color: #fff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  .left {
    width: 300px;
    .wms-icon {
      width: 112px;
      height: 22px;
      margin: 17px 64px;
    }
  }
  .center {
    flex: 1;
    align-items: center;
    margin: auto;
    .action {
      display: flex;
      justify-content: center;
      align-items: center;
      .group {
        display: flex;
        flex-direction: column;
        align-items: center;
        .action-icon {
          width: 24px;
          height: 24px;
          opacity: 0.5;
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    width: 300px;
    background-color: #fff;
    .avatar-pic {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 20px;
      margin-right: 8px;
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
}
.mr {
  margin-right: 32px;
}
</style>