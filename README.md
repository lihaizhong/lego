# lego

> 项目模板工具

## meta.js

主要是定义模板的一些配置，目前可定义的字段如下：

- prompts：收集用户自定义数据
- filters：根据条件过滤文件
- completeMessage：模板渲染完成后给予的提示信息，支持`handlebars`的`mustaches`表达式
- complete：模板渲染完成后的回调函数，优先于`completeMessage`
- helpers：自定义的`handlebars`辅助函数

## 命令使用

```shell
vue init lihaizhong/lego project-name
```
