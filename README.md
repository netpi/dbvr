## 多乐VR 实现

线上演示地址  https://dlvr.now.sh   源码见附件

![](https://olxvlcccu.qnssl.com/blog/8gn7j.png?imageslim)

---

### 技术选型

`vue`  `vuex` 

`bulma` 作为UI框架

`slick-carousel` 来做图片滑动轮播

`animate.css` 来实现动画效果 (弹性滑动 / 淡入淡出)

`vue-router` 实现浏览器 history 模式


## 主要实现思路

#### 1：首屏上半部分的广告轮播，可以左右滑动广告 和 自动轮播。

利用 `slick-carousel` 实现

#### 2: 中部的几个图标点进去，各自展示各自的内容，在打开的页面上，可以返回。

* 利用vue-router 实现history模式

* 判断页面深度 pathdeep<=1 => 目录导航 否则 导航部分替换成`回退导航`

  ```javascript
  // 判断页面深度部分
  pathDeep(){
    const patharr =  this.$route.path.match(/(\/[^/]+)/g)||[]
    return patharr.length
  }
  ```

### 3: 内容点进去 是各个不同的频道，这些频道可以轮播效果。

 `zepto` + `vue-router` **实现页面滑动轮播, 具体实现如下**

- 利用`vue-router`获取到 `path`
- `zepto` 监听滑动事件
- 判断下次跳转目标 利用 `router.replace(location)` 实现更换地址

> 部分代码

```javascript
$("#wrap").on('swipeRight',function(){      
  nextTo(path,'right')
})
$("#wrap").on('swipeLeft',function(){
  nextTo(path,'left')
})

function nextTo(pathname,direction="left") {
  const arr = ["/all","/cartoon","/game","/movie","/try","/scenery"]
  let index = arr.findIndex(item => item == pathname)
  let nextIndex = 0
  console.log('pathname',pathname)
  if(direction === 'left'){
    nextIndex = index == arr.length-1
    ? 0
    : index+1
  }
  if(direction === 'right'){
    nextIndex = index === 0
    ? arr.length-1
    : index-1
  }
  router.replace(arr[nextIndex])
}
```

