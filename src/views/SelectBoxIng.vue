<template>
  <div class="cus-select-box">
    <div class="select-head" v-on:click="toggle">
      <input type="text" class="selected-item" :value="selectedItemString" readonly>
    </div>
    <div class="select-body" v-show="open">
      <div class="search-wrap" style="display:none">
        <input type="text" class="search"/>
      </div>
      <div class="default-list" v-if="itemList.length > 0">
        <vue-scrollbar classes="list-area" ref="Scrollbar">
          <ul class="list-items">
            <li v-for="item in itemList" :key="item.index" @click="setSelectedItemIdx(item.index)">
              <a href="#">{{item.name}}</a>
            </li>
          </ul>
        </vue-scrollbar>
      </div>
    </div>
  </div>
</template>
<script>
import VueScrollbar from 'vue2-scrollbar'
import Icon from 'vue-awesome/components/Icon.vue'

export default{
  components: {
    VueScrollbar,
    Icon
  },
  props: {
    itemList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedItemIdx: 0,
      open: false
    }
  },
  computed: {
    selectedItemString() {
      if(this.itemList && this.itemList.length) {
        return this.itemList[this.selectedItemIdx].name
      }else{
        return ''
      }
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    setSelectedItemIdx(idx) {
      console.log(idx)
      this.selectedItemIdx = idx
      this.toggle()
    }
  }
}
</script>

<style lang="scss">
  @import "~@/assets/styles/_variables.scss";
  //selectbox
  .cus-select-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    &.cal-l {
      width:400px;
      .select-head {
        height: 36px;
        padding: 0 28px 4px 12px;
        &:after {
          width: 28px;
          height: 34px;
        }
        &:before {
          top:14px;
          right:11px;
          vertical-align: middle;
        }
      }
      .selected-item {
        height: 29px;
        font-size:14px;
      }
    }
    &.cal-m {
      width:300px;
      .selected-item {
        font-size:$default-form-text-size;
      }
    }
    &.cal-s {
      width:160px;
      .selected-item {
        font-size:$default-form-text-size;
      }
    }
    &.cal-param {
      width:140px;
      .selected-item {
        font-size:$default-form-text-size;
      }
    }
    &.open {
      .select-head {
        &:before {
          background: url("~@/assets/images/basic-img.png");
          background-position: -115px -12px;
        }
      }
    }
    .select-head {
      overflow: hidden;
      height: 28px;
      padding: 0 28px 4px 12px;
      background-color: $default-form-bgcolor;
      border-top:1px solid $form-bdtop-color;
      border-right:1px solid $form-bdright-color;
      border-bottom:1px solid $form-bdright-color;
      border-left:1px solid $form-bdleft-color;
      box-sizing: border-box;

      &.disabled {
        background-color:#e5e5e5 !important;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        width: 22px;
        height: 26px;
        top: 0;
        right: 0;
        border-top:1px solid #d7d7d7;
        border-right:1px solid #c7c7c7;
        border-bottom:1px solid #c7c7c7;
        border-left:1px solid #d7d7d7;

      }
      &:before {
        content: '';
        display: inline-block;
        position: absolute;
        top:11px;
        right:8px;
        vertical-align: middle;
        width:9px;
        height:6px;
        background: url("~@/assets/images/basic-img.png");
        background-position: -115px -3px;
      }
    }
    .select-body {
      z-index:10;
      position: absolute;
      width:100%;
      margin-top: -1px;
      //border-width:1px 1px 1px 1px;
      border:1px solid #cacaca;
      background-color: #fafafa;
      box-sizing: border-box;
      .search-wrap {
        .search {
          width:100%;
          height: 27px;
          border-width:0 0 1px 0;
          border-style:solid;
          border-color:$selectbox-border-color;
          box-sizing: border-box;
        }
      }
    }

    .select-footer {
      height: 40px;
      padding-left: 12px;
      line-height: 40px;
      font-size:12px;
      border-top:1px solid #d9d9d9;
      > label {
        display: inline-block;
        width:inherit;
        padding: 0;
        text-decoration: underline;
        background-color: transparent;
        box-sizing: border-box;
      }
      .cb-counter {
        float: right;
        color: #95c8ff;
        margin-right: 8px;
        font-family:'Roboto';
        font-weight: normal;
        &:after{
          content: '';
          display: table;
          clear:both;
        }
      }
    }
    .list-area {
      width:100%;
      max-height: 182px;
      margin-bottom:6px;
      box-sizing: border-box;
      .list-items {
        width:100%;
        padding-top:6px;
        min-height: 40px;
        box-sizing: border-box;
        font-size: 12px;
        font-weight: bold;
        font-weight: 500;
      }
      .list-items > li {
        position: relative;
        a {
          display: inline-block;
          padding-right:20px;
          height: $default-form-height;
          line-height: $default-form-height;
          color:#86888c;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: break-all;
          word-wrap: break-word;
        }
      }
    }

    // list -- width
    .default-list {
      .list-area {
        width:100%;
      }
    }
    .multiple-list {
      .list-area {
        width:100%;
      }
    }
    .description-list {
      .list-area {
        width:178px;
        display: inline-block;
        vertical-align: top;
      }
    }
    .description-view {
      .list-area {
        display: inline-block;
        width:100%;
        vertical-align: top;
        padding:6px 18px 0 14px;
        word-wrap:break-word;
        word-break: keep-all;
        box-sizing: border-box;
      }
    }

    .default-list .list-area .list-items > li a,
    .description-list .list-area .list-items > li a {
      padding-left: 12px;
      width:100%;
      &.on,
      &:hover{
        color:#32353b;
        background-color: $body-color;
      }
    }
    .multiple-list .list-area .list-items > li label {
      vertical-align: top;
      height: $default-form-height;
      line-height: $default-form-height;
      color:#86888c;
    }

    .description-view {
      display: inline-block;
      width:116px;
      height: 182px;
      border-left: 1px solid #cacaca;
      background-color: #fff;
      vertical-align: top;
      box-sizing: border-box;
      p {
        font-size:12px;
        color:#86888c;
        line-height: 22px;
        > span {
          font-weight: 500;
          display: block;
        }
      }
    }
    .no-result {
      width:100%;
      height: 170px;
      text-align: center;
      line-height: 170px;
    }
    .multiple-tag-area {
      overflow: hidden;
      position: absolute;
      width:257px;
      display: inline-block;
      height: 26px;
      white-space: nowrap;
    }
    .selected-tag {
      display: inline-block;
      margin:4px 4px 0 0;
      padding:3px 3px 2px 4px;
      font-size: 12px;
      font-weight: bold;
      color: #32353b;
      background-color: #dee3eb;
      > a {
        display: inline-block;
        margin:0 0 0 2px;
        padding:0;
        vertical-align: middle;
        color:#32353b;
        opacity: 0.4;
        &:hover {
          color:#32353b;
        }
        .ico-s {
          width:8px;
          height:8px;
        }
      }
    }
    .selected-item {
      height:22px;
      width:99%;
      margin:2px 0 -2px -1px;
      padding: 0 $default-form-padding 0 0;
      font-family: inherit;
      font-weight: 500;
      color: $basic-menu-active-color;
      border:none;
      background:transparent;
      &::placeholder{
        color:$dark-font-color;
      }
      &[disabled]{
        cursor: default;
        color: rgba(0,0,0,.3);
        background-color: $default-form-dimmed-bgcolor;
      }
    }
    .disabled {
      .selected-item {
        color: rgba(0,0,0,.3);
        &::placeholder {
          color: rgba(0,0,0,.3);
        }
      }
    }
    .ovrlay-body {
      z-index: 2;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  .vue-scrollbar__scrollbar-vertical {
    width: 8px;
    top: 0;
    right: 7px;
    bottom: 0;
    margin-bottom: 0px;
  }
  .nodata-text {
    margin: 9px 0 0 0;
    text-align: center;
    vertical-align: middle;
  }
  .nodata-text-nl {
    margin: 5px 0;
    text-align: center;
    vertical-align: middle;
    line-height: 18px;
  }
}// end cus-select-box
</style>
