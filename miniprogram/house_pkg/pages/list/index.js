Page({
  data: {
    isDialogShow: false,
  },

  handleSwipeClose(e) {
    // 观察事件对象e的属性思考你可以用他来做什么？
    console.log('swiper cell 关闭 事件对象', e);
    console.log('左滑删除被点击了')

    // TODO
    // 弹出对话框
    // 隐藏删除按钮
  },

  handleDialogClose(e) {
    // 观察事件对象参数
    console.log('对话框关闭事件对象', e);

    // TODO
    // 判断用户点击的是取消还是确定
  },

  handleHouseItemClick() {
    wx.navigateTo({
      url: '/house_pkg/pages/detail/index',
    });
  },

  addHouse() {
    wx.navigateTo({
      url: '/house_pkg/pages/locate/index',
    });
  },
});
