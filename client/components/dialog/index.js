// components/dialog/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 标题 【必填字段】
    title: {
      type: String,
      value: '提示'
    },
    // 是否展示
    hidden: {
      type: Boolean,
      value: true
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    cancelColor: {
      type: String,
      value: '#000000'
    },
    showConfirm: {
      type: Boolean,
      value: true
    },
    confirmText: {
      type: String,
      value: '确定'
    },
    confirmColor: {
      type: String,
      value: '#3CC51F'
    },
    success: {
      type: Function,
      value: () => {}
    },
    fail: {
      type: Function,
      value: () => {}
    },
    complete: {
      type: Function,
      value: () => {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    close() {
      this.setData({
        hidden: true
      });
    },
    // 取消按钮事件
    cancel() {
      this.fail();
      this.complete();
      this.close();
    },
    // 确认按钮事件
    confirm() {
      if (this.success() === false) {
        return;
      }

      this.complete();
      this.close();
    }
  }
});
