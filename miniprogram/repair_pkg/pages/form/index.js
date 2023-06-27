Page({
  data: {
    currentDate: Date.now(),
    isHouseLayerShow: false,
    isRepairLayerShow: false,
    isDateLayerShow: false,
    repairHouseList: [
      { name: '北京西三旗花园1号楼 101' },
      { name: '北京东村家园3号楼 302' },
      { name: '北京育新花园3号楼 703' },
      { name: '北京天通苑北苑8号楼 403' },
    ],
    repairItemList: [
      { name: '水路卫浴' },
      { name: '电路灯具' },
      { name: '管道疏通' },
      { name: '开锁换锁' },
    ],
    attachment: [
      { url: '/repair_pkg/static/uploads/attachment.jpg' },
      { url: '/repair_pkg/static/uploads/attachment.jpg' },
      { url: '/repair_pkg/static/uploads/attachment.jpg' },
    ],
  },
  openHouseLayer() {
    this.setData({ isHouseLayerShow: true });
  },
  closeHouseLayer() {
    this.setData({ isHouseLayerShow: false });
  },
  openRepairLayer() {
    this.setData({ isRepairLayerShow: true });
  },
  closeRepairLayer() {
    this.setData({
      isRepairLayerShow: false,
    });
  },

  openDateLayer() {
    this.setData({ isDateLayerShow: true });
  },
  closeDateLayer() {
    this.setData({ isDateLayerShow: false });
  },
  handleRepairSubmit() {
    wx.reLaunch({
      url: '/repair_pkg/pages/list/index',
    });
  },
});
