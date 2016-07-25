---
layout: page
title: chat
permalink: /chat/
---
<div ng-controller='appCtl'>

<div ng-init="checked=true" class='chat' >
  <label>
    <input type="checkbox" ng-model="checked" style="float:left; margin-right:10px;"> Is Visible...
  </label>
  <div ng-repeat='log in logs'>
    <div class="check-element sample-show-hide" ng-show="checked" style="clear:both;">
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
  <button type="button" class="btn btn-default" ng-click='send_server()'>event</button>
</div>
