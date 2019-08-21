import { http } from '@/shared/utils/httpaxios'
import * as types from '@/shared/stores/types'
import mockDatabaseListGet from '@mock/query/DatabaseListGet'

export const advancedModule = {
  state: {
    _savedHistory: {}
  },
  mutations: {
    [types.SAVED_HISTORY] (state, savedHistory) {
      state._savedHistory = savedHistory
    }
  },
  actions: {
    [types.SAVED_HISTORY] ({commit}) {
      // commit(types.SAVED_HISTORY, mockDatabaseListGet.result)
      http.getPromise('/common/database/list').then(res => {
        commit(types.SAVED_HISTORY, res.data)
      })
    }
  }
}