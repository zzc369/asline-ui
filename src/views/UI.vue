<template>
  <div class="wms-table">
    <div class="page-header">
      <SDetailPage
        v-if="pageHeader.type === 'PageHeader'"
        :pageHeaderProps="pageHeader.pageHeaderProps"
      />
    </div>
    <div :style="{display: 'flex'}">
      <div class="table">
        <SProTable
            v-if="table.type === 'Table'"
            :request="table.request"
            :columns="table.columns"
            :stickyTop="table.stickyTop"
            :stickyScrollBar="table.stickyScrollBar"
            :pagination="table.pagination"
        />
      </div>
      <div class="trackingLog">
        <SDetailPage
          v-if="trackingLog.type === 'TrackingLog'"
          :trackingHistoryProps="trackingLog.trackingHistoryProps"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
        pageHeader: {
            type: 'PageHeader',
            pageHeaderProps: {
            infoSchemas: [
                { label: 'Source From', key: 'source_from' },
                { label: 'Source ID', key: 'source_id' },
                { label: 'Type', key: 'type' },
                { label: 'Operate Function', key: 'Operate_function' },
                { label: 'DynamicCycle Count', key: 'dynamic' },
                { label: 'Blind Count', key: 'blind_count' },
                { label: 'One By One', key: 'one_by_one' },
                { label: 'Create Time', key: 'create_time' },
                { label: 'Creator', key: 'creator' },
                { label: 'Cycle Count Method', key: 'cycle_count_method' }
            ],
            infoValues: {
                source_from: 'Manual Creation',
                source_id: '-',
                type: 'SKU_CC',
                Operate_function: 'Normal',
                dynamic: 'Y',
                blind_count: 'Y',
                one_by_one: 'Y',
                create_time: '2021-01-01 12:12:12',
                creator: 'ling@shopee.com',
                cycle_count_method: 'Express Cycle Count',
            },
            titleInfo: {
                label: '',
                value: 'CC 2021010112345',
                status: 'Pending',
                statusType: 'primary',
            },
            },
            width: 1125,
            height: 216,
            x: 0,
            y: 0,
        },
        table: {
            type: 'Table',
            request: this.getData,
            columns: [
            { label: 'NO', key: 'no', width: 56 },
            { label: 'SKU ID', key: 'sku_id', width: 320 },
            { label: 'SKU Name', key: 'sku_name', width: 200 },
            { label: 'Location', key: 'location', width: 276 },
            { label: 'On-handQty', key: 'on_hand_qty', width: 200 },
            ],
            stickyTop: 0,
            stickyScrollBar: 24,
            pagination: {
            pageSizes: [20, 50, 100],
            pageSize: 20,
            currentPage: 1,
            showTotal: true,
            showSizer: true,
            showJumper: true,
            },
            width: 694,
            height: 440,
            x: 23,
            y: 240,
        },
        trackingLog: {
            type: 'TrackingLog',
            trackingHistoryProps: {
            title: 'Order Tracking History',
            list: [
                {
                time: '18:00:22',
                date: '2021-11-23',
                status: 'string; // 选填，缺省时不显示',
                statusType: 'default',
                contents: [
                    {
                    label: 'Message',
                    value: 'LineContent[]; // 选填，按顺序展示每一行内容',
                    },
                    {
                    label: 'Oprater',
                    value: 'LineContent[]; // 选填，按顺序展示每一行内容',
                    },
                ],
                splitLineText: 'New Order',
                },
                {
                time: '18:00:22',
                date: '2021-11-23',
                status: 'string; // 选填，缺省时不显示',
                statusType: 'default',
                contents: [
                    {
                    label: 'Message',
                    value: 'LineContent[]; // 选填，按顺序展示每一行内容',
                    },
                    {
                    label: 'Oprater',
                    value: 'LineContent[]; // 选填，按顺序展示每一行内容',
                    },
                ],
                splitLineText: 'New Order',
                },
                {
                time: '18:00:22',
                date: '2021-11-23',
                status: 'string; // 选填，缺省时不显示',
                statusType: 'default',
                contents: [
                    {
                    label: 'Message',
                    value: 'LineContent[]; // 选填，按顺序展示每一行内容',
                    },
                    {
                    label: 'Oprater',
                    value: 'LineContent[]; // 选填，按顺序展示每一行内容',
                    },
                ],
                splitLineText: 'New Order',
                },
            ],
            },
            width: 376,
            height: 480,
            x: 749,
            y: 224,
        },
        schema:[
            {
                type: 'PageHeader',
                pageHeaderProps: {
                    infoSchemas: [
                    { label: 'Source From', key: 'source_from' },
                    { label: 'Source ID', key: 'source_id' },
                    { label: 'Type', key: 'type' },
                    { label: 'Operate Function', key: 'Operate_function' },
                    { label: 'DynamicCycle Count', key: 'dynamic' },
                    { label: 'Blind Count', key: 'blind_count' },
                    { label: 'One By One', key: 'one_by_one' },
                    { label: 'Create Time', key: 'create_time' },
                    { label: 'Creator', key: 'creator' },
                    { label: 'Cycle Count Method', key: 'cycle_count_method' }
                    ],
                    infoValues: {
                    source_from: 'Manual Creation',
                    source_id: '-',
                    type: 'SKU_CC',
                    Operate_function: 'Normal',
                    dynamic: 'Y',
                    blind_count: 'Y',
                    one_by_one: 'Y',
                    create_time: '2021-01-01 12:12:12',
                    creator: 'ling@shopee.com',
                    cycle_count_method: 'Express Cycle Count',
                    },
                    titleInfo: {
                    label: '',
                    value: 'CC 2021010112345',
                    status: 'Pending',
                    statusType: 'primary',
                    },
                },
                width: 1125,
                height: 216,
                x: 0,
                y: 0,
            },
            {
                type: 'Div',
                children: [
                    {
                        type: 'Table',
                        request: this.getData,
                        columns: [
                            { label: 'NO', key: 'no', width: 56 },
                            { label: 'SKU ID', key: 'sku_id', width: 320 },
                            { label: 'SKU Name', key: 'sku_name', width: 200 },
                            { label: 'Location', key: 'location', width: 276 },
                            { label: 'On-handQty', key: 'on_hand_qty', width: 200 },
                        ],
                        stickyTop: 0,
                        stickyScrollBar: 24,
                        pagination: {
                            pageSizes: [20, 50, 100],
                            pageSize: 20,
                            currentPage: 1,
                            showTotal: true,
                            showSizer: true,
                            showJumper: true,
                        },
                        width: 694,
                        height: 440,
                        x: 23,
                        y: 240,
                    },
                    {
                    type: 'TrackingLog',
                    trackingHistoryProps: {
                        title: 'Order Tracking History',
                        list: [
                        {
                            time: '18:00:22',
                            date: '2021-11-23',
                            status: 'string; // 选填，缺省时不显示',
                            statusType: 'default',
                            contents: [
                            {
                                label: 'Message',
                                value: 'LineContent[]; // 选填，按顺序展示每一行内容',
                            },
                            {
                                label: 'Oprater',
                                value: 'LineContent[]; // 选填，按顺序展示每一行内容',
                            },
                            ],
                            splitLineText: 'New Order',
                        },
                        {
                            time: '18:00:22',
                            date: '2021-11-23',
                            status: 'string; // 选填，缺省时不显示',
                            statusType: 'default',
                            contents: [
                            {
                                label: 'Message',
                                value: 'LineContent[]; // 选填，按顺序展示每一行内容',
                            },
                            {
                                label: 'Oprater',
                                value: 'LineContent[]; // 选填，按顺序展示每一行内容',
                            },
                            ],
                            splitLineText: 'New Order',
                        },
                        {
                            time: '18:00:22',
                            date: '2021-11-23',
                            status: 'string; // 选填，缺省时不显示',
                            statusType: 'default',
                            contents: [
                            {
                                label: 'Message',
                                value: 'LineContent[]; // 选填，按顺序展示每一行内容',
                            },
                            {
                                label: 'Oprater',
                                value: 'LineContent[]; // 选填，按顺序展示每一行内容',
                            },
                            ],
                            splitLineText: 'New Order',
                        },
                        ],
                    },
                    width: 376,
                    height: 480,
                    x: 749,
                    y: 224,
                    },
                ]
            },
        ]
    }
  },
  methods: {
    getData: () => {
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
    }
  }
}
</script>
<style scoped>
.wms-table {
  width: 1125px;
  height: 704px;
}
</style>
