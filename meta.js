/**
 * @author Sky
 * @email 854323752@qq.com
 * @create date 2018-03-21 09:59:56
 * @modify date 2018-03-21 09:59:56
 * @desc 控制台问答模板
*/

const path = require('path')

module.export = {
  // 收集用户自定义数据
  prompts: {
    name: {
      type: 'input',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'input',
      required: false,
      message: 'Project description',
      default: 'A custom project template'
    },
    author: {
      type: 'input',
      message: 'Author'
    },
    autoInstall: {
      type: 'list',
      message: 'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        }
      ]
    }
  },
  // 根据条件过滤文件
  filters: {
  },
  // 模板渲染完成后消息
  completeMessage: '',
  // 模板渲染完成后的回调函数，优先于`completeMessage`属性
  complete (data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  },
  // 自定义的`handlebars`辅助函数
  helpers: {
  }
}