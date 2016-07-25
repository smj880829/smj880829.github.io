---
layout: page
title: chat
permalink: /chat/
---
<div class='chat' ng-controller='appCtl'>
  <div class="chat_mid">
    <ul class="log">
      <li ng-repeat='log in chat_logs'>
        [[log.message]]
    </ul>
  </div>

  <div class="chat_bot">
      <div class='col-md-11 chat_op'>
        <input type="text" class="form-control" ng-model="msg" my-Enter="insertmsg_angular()">
      </div>
      <div class='col-md-1 chat_op' >
        <button type="button" class="btn btn-primary center-block" ng-click='insertmsg_angular()' >채팅 보내기</button>
      </div>
  </div>
</div>
