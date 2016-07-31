---
layout: post
title:  "Facebook Login"
date:   2016-07-29 15:33:09 +0900
categories: [javis,facebook]
---

# 기본 소스
```
function statusChangeCallback(response) {
  if (response.status === 'connected') {
    $window.location.href = "/";
  } else if (response.status === 'not_authorized') {

  } else {

  }
}
```
접속 상태 확인


```
$window.fbAsyncInit = function() {
  FB.init({
    appId: '706997686105976',
    status: true,
    cookie: true,
    xfbml: true,
    version: 'v2.7'
  });
```
페이스북 엡 아이디를 입력, api 버전등 기본 설정 및 초기화

```
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};
```
초기화후 브라우저의 페이스북 접속 상태를 확인

```
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
```
connect.facebook.net 에 접속해서 페이스북 api 레퍼런스를 가져옴
