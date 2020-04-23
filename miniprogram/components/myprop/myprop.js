// components/myprop/myprop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title: String,
    title:{
      type: String,
      value: '我是默认的标题'
    },
    content:{
      type: String,
      value: '我是默认的内容'
    },
  },
  externalClasses:['titleclass']
})
