Page({
  data: {
    idcardFrontUrl: '/static/images/avatar_1.jpg',
    idcardBackUrl: '/static/images/avatar_2.jpg',
  },

  removePicture(ev) {
    // 移除图片的类型（身份证正面或反面）
    const type = ev.mark?.type;
    this.setData({ [type]: '' });
  },
});
