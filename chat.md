---
layout: page
title: chat
permalink: /chat/
---
<div ng-controller='appCtl'>
  <div>
    <ul>
      <li ng-repeat='log in chat_logs'>
        [[log.message]]
    </ul>
  </div>

  <div>
      <div>
        <input type="text" class="form-control" ng-model="msg" my-Enter="insertmsg_angular()">
      </div>
      <div>
        <button type="button" class="btn btn-primary center-block" ng-click='insertmsg_angular()' >채팅 보내기</button>
      </div>
  </div>
</div>
