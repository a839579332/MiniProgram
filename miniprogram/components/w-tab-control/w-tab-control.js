// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type: Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex : 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event) {
      // console.log(event.currentTarget.dataset.index)
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentIndex:index
      });
      // 通知外部消息 传出点击的坐标 和 标题
      this.triggerEvent("itemClick",
      {index:this.data.currentIndex,title:this.properties.titles[index]},
      {});
    }
  }
})
