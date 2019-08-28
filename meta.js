exports.complete = function(data, { chalk }) {
  console.log(
    chalk.cyan(`
    ┌────────────────────────────────${`─`.repeat(data.filename.length)}──┐
    │  To get started: ${chalk.yellow(`nodeppt serve ${data.filename}`)}  │
    └────────────────────────────────${`─`.repeat(data.filename.length)}──┘

    `)
  )
}

exports.prompts = {
  title: {
    type: 'string',
    required: true,
    label: '请填写演讲的主题：'
  },
  speaker: {
    type: 'string',
    label: '请填写演讲人：',
    default: '{{username}}'
  },
  theme: {
    type: 'list',
    choices: [
      'dark',
      'coy',
      'funky',
      'okaidia',
      'tomorrow',
      'solarizedlight',
      'twilight'
    ],
    default: 'okaidia',
    label: '请选择代码格式主题：'
  },
  extensions: {
    type: 'checkbox',
    choices: [{ name: 'echarts' }, { name: 'mermaid' }, { name: 'ketex' }],
    label: '请选择插件：'
  }
}
