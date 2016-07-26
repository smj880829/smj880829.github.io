---
layout: page
title: CHAT
permalink: /chat/
---
<div ng-controller='appCtl'>

<div ng-scrollable="{scrollX:'none'}" class='chat' >
  <div class="ani-repeat" ng-repeat='log in chat_logs' align='[[log.ali]]'>
    <div class="log"  >
      [[log.message]]
    </div>
  </div>

  <div id="chat_bottom">
  </div>
</div>


<form class="form-group">
    <div class="col-md-10">
      <input type="text" class="form-control" ng-model='message' my-Enter="chat_push()">
    </div>
      <button type="button" class="btn btn-default" ng-click='chat_push()'>Send</button>
</form>

</div>
