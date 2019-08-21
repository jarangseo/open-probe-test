import { shallowMount, createLocalVue } from '@vue/test-utils'
import { mount } from '@vue/test-utils';
import LeftMenu from '@/views/LeftMenu.vue'
import SelectBoxIng from '@/views/SelectBoxIng'
import TabNav from '@/views/TabNav'
import { queryEventBus } from '@/shared/events/QueryEventBus'
import App from '@/App'
import Vuex from 'vuex'
import * as types from '@/shared/stores/types'

let LeftMenuWrapper;
let SelectBoxIngWrapper;
let TabNavWrapper;
let queryEventBusWrapper;
let AppWrapper;

let localVue = createLocalVue()
localVue.use(Vuex)
let actions
let store

beforeEach(() => {
  actions = {
    [types.SAVED_HISTORY]: jest.fn()
  }
  store = new Vuex.Store({
    state: {},
    actions
  })

  TabNavWrapper = shallowMount(TabNav, {
    localVue,
    store
  })
  expect(actions[types.SAVED_HISTORY]).toHaveBeenCalled();

  LeftMenuWrapper = shallowMount(LeftMenu)
  SelectBoxIngWrapper = shallowMount(SelectBoxIng)
  // queryEventBusWrapper = mount(queryEventBus)
  AppWrapper = shallowMount(App)
});

describe('LeftMenu.vue', () => {
  it('renders', () => {
    expect(LeftMenuWrapper.isVueInstance()).toBeTruthy()
    expect(SelectBoxIngWrapper.isVueInstance()).toBeTruthy()
  })
})

describe('[SelectBoxIng] Hive/Impala 변경', () => {
  it('UI는 동일', () => {
    const prevOpenBool = SelectBoxIngWrapper.vm.open
    SelectBoxIngWrapper.find('.select-head').trigger('click')
    expect(typeof SelectBoxIngWrapper.vm.toggle).toBe('function')
    expect(SelectBoxIngWrapper.vm.open).toBe(!prevOpenBool)
  })
  it('히스토리는 각각 저장됨', () => {
    const mockFn = jest.fn()
    SelectBoxIngWrapper.setMethods({
      toggle: mockFn
    })
    SelectBoxIngWrapper.find('.select-head').trigger('click')
    expect(mockFn).toBeCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})

describe('Menu영역의 Menu명 클릭시', () => {
  it('해당 Tab Menu가 없는 경우 > Contents영역이 Tab으로 추가', () => {
    const mockFn = jest.fn()
    queryEventBus.addTab = mockFn
    LeftMenuWrapper.find('.menu-group li').trigger('click')
    expect(mockFn).toBeCalled()
    expect(mockFn).toBeCalledWith(0)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
  it('해당 Tab Menu가 있는 경우 > 활성화됨', () => {
    expect(SelectBoxIngWrapper).toMatchSnapshot()
    expect(LeftMenuWrapper).toMatchSnapshot()
  })
})

describe('Table Info > select', () => {
  it('select box 변경시 하단 Table List변경', () => {

  })
  it('검색어 입력하여 table list검색', () => {

  })
})

describe('Table Info > table list', () => {
  it('클릭 > Table내 컬럼을 fold/unfold', () => {

  })
  it('클릭 > 해당 Table의 Column 리스트 정보 없는경우 API 호출', () => {

  })
  it('더블 클릭 > Editor창 커서 위에 입력하되 형식은 Database.table형태', () => {

  })
  it('EYE 버튼 클릭 > 우 하단 Contants영역 Tab추가되며 Preview 노출', () => {
    const mockFn = jest.fn()
    queryEventBus.addTab = mockFn
    // LeftMenuWrapper.find('.menu-group li').trigger('click')
    expect(mockFn).toBeCalled()
    expect(mockFn).toBeCalledWith(0)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
  it('Preview버튼 클릭 > 우 하단 Contants영역 Tab추가되며 Preview 노출', () => {
    const mockFn = jest.fn()
    queryEventBus.addTab = mockFn
    LeftMenuWrapper.find('.menu-group li').trigger('click')
    expect(mockFn).toBeCalled()
    expect(mockFn).toBeCalledWith(0)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
  it('Column명 더블 더블클릭 > Column명을 Editor창 커서 위치에 입력', () => {

  })
})