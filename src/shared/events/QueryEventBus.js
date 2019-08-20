import Vue from 'vue'

export const queryEventBus = new Vue({
  methods: {
    addTab (data) {
      this.$emit('addTab', data)
    }
  }
})