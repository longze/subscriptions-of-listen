// 过来人列表页
const app = getApp();
const data = require('./data.js');
const utils = require('../../utils/util.js');

Page({
  data: {
    userInfo: {},
    date: '',
    locationName: '百度科技园附近',
    dataList: data.dataList,
    classificationList: data.classificationList,
    activedClassificationId: 0,
    hidden: true,
    phoneNumber: '00'
  },
  onLoad() {
    wx.setStorage({
      key: 'dataList',
      data: data.dataList
    });

    wx.setStorage({
      key: 'classificationList',
      data: data.classificationList
    });

    this.setData({
      date: utils.formatTime(new Date)
    });
  },
  // 约过来人
  appoint(event) {
    const stagerId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/appointment/index?stagerId=' + stagerId
    });
  },
  // 成为过来人
  toBeStager() {
    wx.navigateTo({
      url: '/pages/to-be-stager/index'
    });
  },
  // 跳到详情页
  toStagerDetailPage(event) {
    const stagerId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/stager-detail/index?stagerId=' + stagerId
    });
  },
  // 改变分类
  onChangeClassification(event) {
    const classificationId = event.currentTarget.dataset.id;
    const list = [];
    data.dataList.forEach(item => {
      if (item.classificationId === classificationId || classificationId === 0) {
        list.push(item);
      }
    });
    this.setData({
      dataList: list,
      activedClassificationId: classificationId
    });
  },
  // 激活搜索状态
  activeSearch() {
    wx.navigateTo({
      url: '/pages/search/index'
    });
  },
  // 搜索操作
  search() {
    this.setData({
      isActivedSearch: false
    });
  }
  // getPhoneNumber(e) {
  //   // e.detail.encryptedData;
  //   // phoneNumber
  //   this.setData({
  //     phoneNumber: e.detail.encryptedData
  //   });
  // }
});
