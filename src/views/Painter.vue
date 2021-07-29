<template>
  <div class="page">
    <div class="nav">
      <div
        v-for="button in rawData1"
        :h="38"
        @click="addComponent"
        :key="button.type">
        <div class="component-label">{{button.type}}</div>
      </div>
    </div>
    <div class="painter">
      <img src="../assets/download.svg" width="20" height="20" class="download-icon" @click="downloadFile"/>
      <vdr
        v-for="component in rawData2"
        @activated="onActivated"
        @deactivated="onDeactivated"
        :key="component.type"
        :componentName="component.type"
        :w="component.width"
        :h="component.height"
        :x="component.x"
        :y="component.y"
        v-on:dragstop="dragStop"
        v-on:resizestop="resizeStop"
        v-on:resizing="onResize"
        :parent="true"
        :is-conflict-check="true"
        @refLineParams="getRefLineParams"
        :snap="true"
        :grid="[8,8]">
        <SDetailPage
          :style="{width: component.width, height: component.height}"
          v-if="component.type === 'PageHeader'"
          :pageHeaderProps='component.pageHeaderProps'
        />
        <SProTable
          v-if="component.type === 'Table'"
          :request="component.request"
          :columns='component.columns'
          :stickyTop="component.stickyTop"
          :stickyScrollBar="component.stickyScrollBar"
          :pagination='component.pagination'
        />
        <SDetailPage
          v-if="component.type === 'TrackingLog'"
          :style="{width: component.width, height: component.height}"
          :trackingHistoryProps='component.trackingHistoryProps'
        />
      </vdr>
      <!--辅助线START-->
      <span class="ref-line v-line"
        v-for="(item, index) in vLine"
        :key="index"
        v-show="item.display"
        :style="{ left: item.position, top: item.origin, height: item.lineLength}"
      />
      <span class="ref-line h-line"
        :key="index + 100"
        v-for="(item, index) in hLine"
        v-show="item.display"
        :style="{ top: item.position, left: item.origin, width: item.lineLength}"
       />
      <!--辅助线END-->
    </div>
    <div class="code-paint">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import layout from '../utils/layout';
import { files, exportZip } from '../utils/file';
export default {
  data: function () {
    return {
      basicY: 64,
      basicX: 241,
      width: 0,
      height: 0,
      vLine: [],
      hLine: [],
      rawData1: [{
        type: 'TrackingLog',
        trackingHistoryProps: {
          title: 'Order Tracking History',
          list:[
            {
              time: '18:00:22',
              date:'2021-11-23',
              status:'string; // 选填，缺省时不显示',
              statusType:'default',
              contents:[{
                label:'Message',
                value:'LineContent[]; // 选填，按顺序展示每一行内容'
                },
                {
                  label:'Oprater',
                  value:'LineContent[]; // 选填，按顺序展示每一行内容'
                }
              ],
              splitLineText:'New Order'
            },
            {
              time: '18:00:22',
              date:'2021-11-23',
              status:'string; // 选填，缺省时不显示',
              statusType:'default',
              contents:[{
                label:'Message',
                value:'LineContent[]; // 选填，按顺序展示每一行内容'
                },
                {
                  label:'Oprater',
                  value:'LineContent[]; // 选填，按顺序展示每一行内容'
                }
              ],
              splitLineText:'New Order'
            },
            {
              time: '18:00:22',
              date:'2021-11-23',
              status:'string; // 选填，缺省时不显示',
              statusType:'default',
              contents:[{
                label:'Message',
                value:'LineContent[]; // 选填，按顺序展示每一行内容'
                },
                {
                  label:'Oprater',
                  value:'LineContent[]; // 选填，按顺序展示每一行内容'
                }
              ],
              splitLineText:'New Order'
            }
          ]
        },
        width: 376,
        height: 480,
        x: 749,
        y: 224,
        hasRow: false,
        hasColumn: false
      }],
      rawData2: [{
        type: 'PageHeader',
        pageHeaderProps: {
          'infoSchemas':[
            {'label':'Source From','key':'source_from'},
            {'label':'Source ID','key':'source_id'},
            {'label':'Type','key':'type'},
            {'label':'Operate Function','key':'Operate_function'},
            {'label':'DynamicCycle Count','key':'dynamic'},
            {'label':'Blind Count','key':'blind_count'},
            {'label':'One By One','key':'one_by_one'},
            {'label':'Create Time','key':'create_time'},
            {'label':'Creator','key':'creator'},
            {'label':'Cycle Count Method','key':'cycle_count_method'}
          ],
          'infoValues':{
            'source_from': 'Manual Creation',
            'source_id': '-',
            'type': 'SKU_CC',
            'Operate_function': 'Normal',
            'dynamic': 'Y',
            'blind_count': 'Y',
            'one_by_one': 'Y',
            'create_time': '2021-01-01 12:12:12',
            'creator': 'ling@shopee.com',
            'cycle_count_method': 'Express Cycle Count'
          },
          'titleInfo':{
            'label': '',
            'value': 'CC 2021010112345',
            'status': 'Pending',
            'statusType': 'primary'
          }
        },
        width: 1125,
        height: 216,
        x: 0,
        y: 0,
        hasRow: false,
        hasColumn: false
      }, {
        type: 'Table',
        request: this.request,
        columns: [
          {'label':'NO','key':'no','width':56},
          {'label':'SKU ID','key':'sku_id','width':320},
          {'label':'SKU Name','key':'sku_name','width':200},
          {'label':'Location','key':'location','width':276},
          {'label':'On-handQty','key':'on_hand_qty','width':200},
        ],
        stickyTop: null,
        stickyScrollBar: null,
        pagination: {
          pageSizes:[20,50,100],
          pageSize:20,
          currentPage:1,
          showTotal:true,
          showSizer:true,
          showJumper:true
        },
        width: 694,
        height: 440,
        x: 23,
        y: 240,
        hasRow: false,
        hasColumn: false
      }],
      schema: []
    }
  },
  methods: {
    request: () => {
      const data = [
        {
          'is_sn_mgt': 1,
          'location_id': 'zzzz',
          'on_hand_qty': 1,
          'picking_sequence': 'zzzz',
          'sku_id': 'zzzz',
          'sku_name': 'zzzz'
        },
        {
          'is_sn_mgt': 1,
          'location_id': 'zzzz',
          'on_hand_qty': 1,
          'picking_sequence': 'zzzz',
          'sku_id': 'zzzz',
          'sku_name': 'zzzz'
        },
        {
          'is_sn_mgt': 1,
          'location_id': 'zzzz',
          'on_hand_qty': 1,
          'picking_sequence': 'zzzz',
          'sku_id': 'zzzz',
          'sku_name': 'zzzz'
        },
        {
          'is_sn_mgt': 1,
          'location_id': 'zzzz',
          'on_hand_qty': 1,
          'picking_sequence': 'zzzz',
          'sku_id': 'zzzz',
          'sku_name': 'zzzz'
        },
        {
          'is_sn_mgt': 1,
          'location_id': 'zzzz',
          'on_hand_qty': 1,
          'picking_sequence': 'zzzz',
          'sku_id': 'zzzz',
          'sku_name': 'zzzz'
        },
        {
          'is_sn_mgt': 1,
          'location_id': 'zzzz',
          'on_hand_qty': 1,
          'picking_sequence': 'zzzz',
          'sku_id': 'zzzz',
          'sku_name': 'zzzz'
        }
      ]
      const total = 2
      return {
        data,
        total,
      }
    },
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    resizeStop: function (x, y, width, height, componentName) {
      const index = this.rawData2.findIndex(item => {
        return item.type === componentName
      })
      this.rawData2[index].width = width
      this.rawData2[index].height = height
      const result = layout(this.rawData2)
      console.log('resizeResult', result)
    },
    dragStop: function (x, y, componentName) {
      const index = this.rawData2.findIndex(item => {
        return item.type === componentName
      })
      this.rawData2[index].x = x
      this.rawData2[index].y = y
      const result = layout(this.rawData2)
      console.log('result', result)
    },
    getRefLineParams (params) {
      const { vLine, hLine } = params
      this.vLine = vLine
      this.hLine = hLine
    },
    removeComponent(e, elementKey) {
      if (e.keyCode === 8) {
        const rawData2 = this.rawData2.filter(item => {
          return item.type !== elementKey
        })
        this.rawData2 = rawData2
      }
    },
    onActivated (elementKey) {
      window.addEventListener('keyup', (e) => this.removeComponent(e, elementKey))
    },
    onDeactivated () {
      window.removeEventListener('keyup', this.removeComponent)
    },
    addComponent () {
      this.rawData2.push({
        type: 'TrackingLog',
        trackingHistoryProps: {
          title: 'Order Tracking History',
          list:[
            {
              time: '18:00:22',
              date:'2021-11-23',
              status:'string; // 选填，缺省时不显示',
              statusType:'default',
              contents:[{
                label:'Message',
                value:'LineContent[]; // 选填，按顺序展示每一行内容'
                },
                {
                  label:'Oprater',
                  value:'LineContent[]; // 选填，按顺序展示每一行内容'
                }
              ],
              splitLineText:'New Order'
            },
            {
              time: '18:00:22',
              date:'2021-11-23',
              status:'string; // 选填，缺省时不显示',
              statusType:'default',
              contents:[{
                label:'Message',
                value:'LineContent[]; // 选填，按顺序展示每一行内容'
                },
                {
                  label:'Oprater',
                  value:'LineContent[]; // 选填，按顺序展示每一行内容'
                }
              ],
              splitLineText:'New Order'
            },
            {
              time: '18:00:22',
              date:'2021-11-23',
              status:'string; // 选填，缺省时不显示',
              statusType:'default',
              contents:[{
                label:'Message',
                value:'LineContent[]; // 选填，按顺序展示每一行内容'
                },
                {
                  label:'Oprater',
                  value:'LineContent[]; // 选填，按顺序展示每一行内容'
                }
              ],
              splitLineText:'New Order'
            }
          ]
        },
        width: 376,
        height: 480,
        x: 749,
        y: 224,
        hasRow: false,
        hasColumn: false
      })
    },
    downloadFile() {
      exportZip(files);
    }
  },
}
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  .painter {
    position: relative;
    height: 720px;
    width: 1130px;
    border: 1px solid red;
    background-color: #808080;
    background: linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px);
    background-size: 8px 8px, 8px 8px;
    background-position: '8px 8px';

    .download-icon {
      position: absolute;
      right: 8px;
      top: 4px;
      z-index: 999;
      cursor: pointer;
    }
  }
  .nav {
    background-color: white;
    width: 200px;
    .component-label {
      height: 38px;
      background-color: red;
      line-height: 38px;
      border: 1px solid black;
    }
  }
}
.ssc-pro-table {
  height: inherit;
  overflow: auto;
}
.ssc-detail-page {
  height: inherit;
  overflow: auto;
}
</style>
<style>
.ssc-pro-table .pro-table-sticky-pagination:after {
  width: 0!important;
}
</style>
