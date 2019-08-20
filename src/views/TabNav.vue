<template>
  <div>
      <div class="advanced-tabmenu-wrap">
        <ul class="lnb-tabmenu-wrap">
          <li class="lnb-tab" @click="activeTab(0)">
            <a href="#" :class="{'selected':activeTabIdx === 0}">Table info</a>
          </li>
          <li class="lnb-tab" @click="activeTab(1)">
            <a href="#" :class="{'selected':activeTabIdx === 1}">My Temp</a>
          </li>
        </ul>
      </div>

      <div class="wrap_select">
        <select-box-ing :itemList="upperSelectorItems"></select-box-ing>
        <table-list></table-list>
      </div>
    </div>
</template>
<script>
import SelectBoxIng from './SelectBoxIng'
import TableList from './TableList'

export default {
  data() {
    return {
      activeTabIdx: 0,
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
    }
  },
  components: {
    SelectBoxIng,
    TableList
  },
  methods: {
    activeTab(idx) {
      this.activeTabIdx = idx
      console.log(idx)
    }
  }
}
</script>

<style lang="scss">
.advanced-tabmenu-wrap {
  display: table;
  table-layout: fixed;
  width: 100%;
  margin:0 0 10px 0;
  color: #adafb3;
  font-size:13px;
  overflow: hidden;
  .lnb-tab {
    float: left;
    display: table-cell;
    position: relative;
    width:50%;
    padding:0;
    text-align: center;
    font-family: 'Roboto';
    font-weight: 500;
    color: #adafb3;
    > a {
      display: block;
      height: 42px;
      line-height: 42px;
      background-color: #f2f4f7;
      box-sizing: border-box;
      color: #adafb3;
      &.selected {
        color: #32353b;
        background-color: #fff;
      }
    }
    &:after {
      content: ' ';
      display: table;
      clear:both;
    }
  }
}
.wrap_select {
  padding: 0 20px 20px 20px;
  border-bottom:1px solid #d1d8e4;
}
</style>