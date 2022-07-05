import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import Register from '~/components/user/Register'

const vuetify = new Vuetify()
const wrapper = mount(Register, {
  vuetify,
})

const trueUsername = 'testName'
const trueEmail = 'name@test.com'
const truePassword = 'password'
const trueConfirm = 'password'
const errUsername = 'testNameERROR'
const errEmail = 'error.test.com'
const errPass = 'pass'
const errConfirm = 'passDifferent'
const emptry = ''

describe('nameRules', () => {
  it('nameが入力されている場合、有効', () => {
    const actual = wrapper.vm.nameRules[0](trueUsername)
    expect(actual).toBeTruthy()
  })

  it('nameが入力されている場合、バリデーションエラー', () => {
    const actual = wrapper.vm.nameRules[0](emptry)
    expect(actual).toBe('名前は必須項目です')
  })

  it('nameが１０文字以内の場合、有効', () => {
    const actual = wrapper.vm.nameRules[1](trueUsername)
    expect(actual).toBeTruthy()
  })

  it('nameが10文字以上の場合、バリデーションエラー', () => {
    const actual = wrapper.vm.nameRules[1](emptry)
    expect(actual).toBe('名前は１０文字以内にしてください')
  })
})

describe('emailRules', () => {
  it('emailが入力されている場合、有効', () => {
    const actual = wrapper.vm.emailRules[0](trueEmail)
    expect(actual).toBeTruthy()
  })

  it('emailが入力されていない場合、バリデーションエラー', () => {
    const actual = wrapper.vm.emailRules[0](emptry)
    expect(actual).toBe('メールアドレスは必須項目です')
  })

  it('emailの形式に沿ってる場合、有効', () => {
    const actual = wrapper.vm.emailRules[1](trueEmail)
    expect(actual).toBeTruthy()
  })

  it('emailの形式に沿っていない場合、バリデーションエラー', () => {
    const actual = wrapper.vm.emailRules[1](errEmail)
    expect(actual).toBe('無効なメールアドレスです')
  })
})

describe('passwordRules', () => {
  it('passwordが入力されている場合、有効', () => {
    const actual = wrapper.vm.passwordRules[0](truePassword)
    expect(actual).toBeTruthy()
  })

  it('passwordが入力されていない場合、バリデーションエラー', () => {
    const actual = wrapper.vm.passwordRules[0](emptry)
    expect(actual).toBe('パスワードは必須項目です')
  })

  it('passwordが８文字以上の場合、有効', () => {
    const actual = wrapper.vm.passwordRules[1](truePassword)
    expect(actual).toBeTruthy()
  })

  it('passwordが８文字以下の場合、バリデーションエラー', () => {
    const actual = wrapper.vm.passwordRules[1](errPass)
    expect(actual).toBe('パスワードは8文字以上にしてください')
  })
})

describe('confirmRules', () => {
  it('passwordとconfirmが同じの場合、有効', () => {
    wrapper.vm.passwordRules[0](truePassword)
    const actual = wrapper.vm.confirmRules[0](trueConfirm)
    expect(actual).toBeTruthy()
  })

  it('passwordとconfirmの文字が異なる場合、バリデーションエラー', () => {
    wrapper.vm.passwordRules[0](truePassword)
    const actual = wrapper.vm.confirmRules[0](errConfirm)
    expect(actual).toBe('パスワードと値が異なります')
  })
})

describe('フォームのバリデーション確認', () => {
  it('入力が有効な場合', async () => {
    await wrapper.findComponent('#inputUsername').setValue(trueUsername)
    await wrapper.findComponent('#inputEmail').setValue(trueEmail)
    await wrapper.findComponent('#inputPassword').setValue(truePassword)
    await wrapper.findComponent('#inputConfirm').setValue(trueConfirm)

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.valid).toBeTruthy()
  })

  it('バリデーションエラー', async () => {
    await wrapper.findComponent('#inputUsername').setValue(errUsername)
    await wrapper.findComponent('#inputEmail').setValue(errEmail)
    await wrapper.findComponent('#inputPassword').setValue(errPass)
    await wrapper.findComponent('#inputConfirm').setValue(errConfirm)

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.valid).toBe(false)
  })
})
