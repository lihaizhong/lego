# meta配置讲解

## meta.js的简单介绍

> *meta.js*是什么？

*meta.js*是*vue-cli*的配置文件。它主要提供了问答环节（`prompts`），模板过滤环节（`filters`），模板生成环节（`handlebars`），以及模板生成的后置函数（`complete/completeMessage`）。

## prompts

首先，我们讲讲*meta.js*中的`prompts`。这是*vue-cli*生成模板前的问答题，用于确定生成的模板到底需要哪些内容。*vue-cli*使用了[Inquirer.js](https://github.com/SBoudrias/Inquirer.js)作为控制台问答工具。[Inquirer.js](https://github.com/SBoudrias/Inquirer.js)会将所有的结果保存在`global metadata`字段中，以便于作为后续生成模板的判断条件。[Inquirer.js](https://github.com/SBoudrias/Inquirer.js)本身功能非常强大，而对于我们生成项目，我们主要用到的是它的`input`、`list`、`confirm`的功能。

> 如何配置一个`prompts`?

刚刚我们已经简单介绍了[Inquirer.js](https://github.com/SBoudrias/Inquirer.js)这个工具，那么我们怎么配置这个工具呢？[Inquirer.js](https://github.com/SBoudrias/Inquirer.js)本身具有很多参数。对于我们，常用的参数只有`type(String)`、`message`、`default`、`choices`和`when`。

*type*: `type`是回答问题的类型。默认是`input(输入)`，我们常用的还有`list(列表选项)`、`confirm(确认)`。

*message*: `message`是问题。

*default*: `default`是指问题的默认回答。

*choices*: `choices`是一个数组，表示所有的选项，`list`时有用。`choices`的每一项都是一个对象，包含三个参数（`name`、`value`、`short`）。*name*是选项的展示，*value*是选项对应的值，*short*是选择后在问题后面展示的选项信息。

*when*: `when`是指在什么时候开启这个选项。比如说，我对`是否需要安装测试`这个问题选择`no`，那么我就不想继续提问与测试相关的问题。这时候我们就可以使用`when`判断。

## filters

现在，我们来说下*meta.js*中的**filters**。这是*vue-cli*中过滤文件的操作，用于删除一些不必要存在的文件。该字段是一个对象，其中`key`为目录及文件的正则匹配，`value`为对应的**prompts**的属性。如果**prompts**的属性为`false`，就删除相应的文件及目录。

## handlebars

模板生成使用了一种常用的node服务端渲染语言（[handlebars](http://handlebarsjs.com/)），[handlebars](http://handlebarsjs.com/)会根据**prompts**的属性值，对文件内容进行处理。生成用户期望的模板。在*meta.js*的文件中，*helpers*字段是对handlebars内置指令的一种扩展，可以自定义指令，以方便你的判断处理。

## completeMessage

这是模板生成后的输出信息，如果你在生成模板完成后，没有特殊的处理，可以通过这个字段，提示用户模板已经生成。

## complete

这是模板生成后的回调函数，优先级高于**completeMessage**，如果你在模板生成后，还有特殊处理，可以在这个函数下进行操作。比如，我们想在模板生成后，自动帮用户下载他们需要的依赖包等操作。

## **深入学习，请参考**：

- [从vue-cli源码学习如何写模板](https://github.com/dwqs/blog/issues/56)
- [vue-cli](https://github.com/vuejs/vue-cli)
