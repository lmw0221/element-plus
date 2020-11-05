import { mount } from '@vue/test-utils'
import Rate from '../src/index.vue'

describe('Rate.vue', () => {
  test('create', () => {
    const wrapper = mount(Rate, {
      props: {
        max: 10,
      },
      global: {
        provide: {
          elForm: {},
        },
      },
    })
    const stars = wrapper.findAll('.el-rate__item')
    expect(stars.length).toEqual(10)
  })

  test('with texts', () => {
    const wrapper = mount(Rate, {
      props: {
        showText: true,
        modelValue: 4,
        texts: ['1', '2', '3', '4', '5'],
      },
      global: {
        provide: {
          elForm: {},
        },
      },
    })
    const text = wrapper.find('.el-rate__text').element
    expect(text.textContent).toEqual('4')
  })

  test('value change', async () => {
    const wrapper = mount(Rate, {
      props: {
        modelValue: 0,
      },
      global: {
        provide: {
          elForm: {},
        },
      },
    })
    const vm = wrapper.vm
    await wrapper.setProps({ modelValue: 3 })
    expect(vm.modelValue).toEqual(3)
  })

  test('click', () => {
    const wrapper = mount({
      template: `
        <div>
          <el-rate v-model="value1" />
        </div>
      `,
      props:{},
      data() {
        return {
          value1: 0,
        }
      },
      components: {
        'el-rate': Rate,
      },
    }, {
      global: {
        provide: {
          elForm: {},
        },
      },
    })
    const vm = wrapper.vm
    const thirdStar = wrapper.findAll('.el-rate__item')[2].element as HTMLElement

    thirdStar.click()
    expect(vm.value1).toEqual(3)
  })

  test('colors', () => {
    const wrapper = mount({
      template: `
        <div>
          <el-rate v-model="value" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
        </div>
      `,
      props:{},
      data() {
        return {
          value: 4,
        }
      },
      components: {
        'el-rate': Rate,
      },
    }, {
      global: {
        provide: {
          elForm: {},
        },
      },
    })
    // const vm = wrapper.vm
    const thirdStar = (wrapper.findAll('.el-rate__item')[2].element as HTMLElement).querySelector('.el-rate__icon') as any

    expect(thirdStar.style.color).toEqual('rgb(255, 153, 0)')
  })
})
