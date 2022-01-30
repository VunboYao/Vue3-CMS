const rules = {
  name: [
    {
      type: 'string',
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[\da-z]{6,8}$/g,
      message: '用户名只能6-8位数字或者小写字母',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[\da-z]{6,}$/,
      message: '密码由数字与小写字母组成，不得少于6位',
      trigger: 'blur'
    }
  ]
}

export default rules
