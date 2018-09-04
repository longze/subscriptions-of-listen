//index.js
// 播放器控件
//获取应用实例
const app = getApp()
const data = require('./data.js');
let innerAudioContext;
Page({
  data: {
    dataList: [],
    nowSoundName: '',
    nowSoundTime: '00:00',
    nowPlay: false,
    nowid: 0,
    listSound: [],
    listId: 0,
    isPase: false,
    isFirst: true,
    defaultTime: 1535472000000
  },
  onShow: function () {
    // 获取用户信息
    wx.getUserInfo((userInfo)=>{
      console.log(userInfo)
    })
    // 根据时间自动更新物料
    let nowTime = +new Date()
    let jetlag = Math.ceil((nowTime - this.data.defaultTime) / 86400000)
    let dataList = []
    for (let i = 0; i < jetlag; i++) {
      dataList.push(data.soundList[i])
    }
    this.setData({
      dataList
    })
    // list reday
    this.listReady();
    // 将列表第一首歌放到 播放器

    innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = false
    innerAudioContext.src = this.data.listSound[0].soundUrl
    this.setData({
      nowSoundName: this.data.listSound[0].name
    })
    // 开启监听正常播放的BC
    innerAudioContext.onPlay(() => {
      this.setData({
        nowPlay: true
      })
    })
    // 监听正常播放结束的BC
    innerAudioContext.onEnded(() => {
      this.listPlay()
    })
    // 监听失败的回调。
    innerAudioContext.onError((res) => {
      this.setData({
        nowSoundTime: '00:00'
      }, ()=> {
        setTimeout(() => {
          this.listPlay()
        }, 1000)
      })
    })
  },
  // 列表准备
  listReady: function (now = 0) {
    // 将声音放到列表中
    let arr = [];
      this.data.dataList[now].soundInfo.map((item, index) => {
        arr.push(item)
      })
    this.setData({
      listSound: arr
    })
  },
  // 切换声音
  changgeMucis: function (e) {
    if (this.data.listId === e.currentTarget.dataset.data.id && !this.data.isFirst) {
      return false
    }
    // 判断是否在自己的列表中

    // 判断当前播放的声音在列表的何处
    let a = this.data.listSound.filter((item) => {
      return item.id === e.currentTarget.dataset.data.id
    })
    let b = this.data.listSound.indexOf(a[0])
    this.setData({
      listId: b
    })
    innerAudioContext.src = e.currentTarget.dataset.data.soundUrl
    this.setData({
      nowSoundName: e.currentTarget.dataset.data.name,
      nowid: e.currentTarget.dataset.data.id
    })
    this.palySound()
  },
  // 播放声音
  palySound: function () {
    if (!this.data.isPase) {
      setTimeout(() => {
        if (innerAudioContext.duration === 0) {
          this.palySound()
        } else {
          innerAudioContext.play()
          this.timeS(Math.floor(innerAudioContext.duration))
        }
      }, 200)
    } else {
      innerAudioContext.play()
    }
    this.setData({
      isFirst: false
    })
  },
  // 暂停声音
  stopSound: function () {
    innerAudioContext.pause()
    this.setData({
      nowPlay: false,
      isPase: true
    })
  },
  // 列表循环
  listPlay: function () {
    this.setData({
      listId: this.data.listId + 1,
      isPase: false
    })
    innerAudioContext.src = this.data.listSound[this.data.listId].soundUrl
    this.setData({
      nowSoundName: this.data.listSound[this.data.listId].name,
      nowid: this.data.listSound[this.data.listId].id
    })
    console.log(this.data)
    this.palySound()
  },
  // 时间处理
  timeS: function (s) {
    var t = '';
    if (s > -1) {
      var min = Math.floor(s / 60) % 60;
      var sec = s % 60;
      if (min < 10) { t += "0"; }
      t += min + ":";
      if (sec < 10) { t += "0"; }
      t += sec
    }
    this.setData({
      nowSoundTime: t
    })
  }
})