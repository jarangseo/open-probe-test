<template>
  <div>
    <div class="fixed-menu">
      <select-box-ing :itemList="upperSelectorItems"></select-box-ing>
      <ul class="menu-group">
        <li @click="viewSavedQueryTab(0)"><a href="#">Saved Query</a></li>
        <li @click="viewSavedQueryTab(1)"><a href="#">Recent Query</a></li>
      </ul>
    </div>
    <tab-nav></tab-nav>
  </div>
</template>
<script>
import * as types from '../shared/stores/types'
import SelectBoxIng from './SelectBoxIng'
import TableList from './TableList'
import Icon from 'vue-awesome/components/Icon.vue'
import TabNav from './TabNav'
import { queryEventBus } from '@/shared/events/QueryEventBus'

export default {
  components: {
    SelectBoxIng,
    TableList,
    TabNav,
    Icon
  },
  data() {
    return {
      upperSelectorItems: [
        {
          name: 'Hive',
          index: 0,
          selected: true
        },
        {
          name: 'Impala',
          index: 1,
          selected: false
        }
      ],
      queryMenuItems: [
        {
          name: 'Saved Query',
          index: 0,
          selected: false
        },
        {
          name: 'Recent Query',
          index: 1,
          selected: false
        }
      ],
      tabItems: [
        {
          name: 'Table info',
          index: 0,
          selected: true
        },
        {
          name: 'My Temp',
          index: 1,
          selected: false
        }
      ],
      searchInfo: {
        database: {
          selectedDBindex: 0,
          dbSearchString: ''
        },
        table:{
          tableSearchString: '',
          clickedTableIndex: -1
        }
      }
    }
  },
  methods: {
    viewSavedQueryTab(idx) {
      queryEventBus.addTab(idx)
    }
  },
  created() {
    
  },
  mounted() {
    
  }
}
</script>
<style lang="scss">
  .lnb {
    .cus-select-box {
      width:210px;
      max-width:210px;
      margin-bottom:8px;
      >.select-head {
        width:210px;
      }
    }
  }
  .fixed-menu {
    .cus-select-box {
      margin-left:20px;
      margin-bottom:10px;
    }
  }
  .tempdb {
    margin:0 auto 10px auto;
    width: 209px;
    color:#fff;
    background-color: #afb6bc;
    height: 28px;
    line-height: 28px;
    padding-left:31px;
    border:none;
    position: relative;
  }
  .wrap-refresh {
    position: relative;
    top: -36px;
    left: 10px;
    text-align: left;
    height: 0;
    line-height: 30px;
    > a {
      color:#fff;
    }
  }
  .loading-box {
    position:relative;
    width:100%;
    height:150px;
  }
  .nodata-text {
    margin:30px 0;
    text-align: center;
  }
  .table-list-area {
    margin-top:13px;
  }
  .table-name {
    font-weight: 500;
  }
  .no-data-area {
    position: relative;
    height: 180px;
    border: 1px solid #fff;
    .no-data-dsc {
      margin-top: 50%;
    }
  }
  .no-data-img-sm {
    width:45px;
    height:45px;
    background-position: -621px -54px !important;
    background: url("~@/assets/images/basic-img.png");
    margin:0 auto 40px auto;
  }
</style>
