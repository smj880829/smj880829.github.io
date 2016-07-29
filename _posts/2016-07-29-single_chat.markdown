---
layout: post
title:  "session 과 engin view"
date:   2016-07-29 15:33:09 +0900
categories: single_chat
---
1. 로그인 세션
예전에 JSP 페이지에서 로그인 세션 작업보다는 확실히 편함.
express의 라우팅 기능이 상당히 좋아보이는 것을 느낌.



2. engin view 를 html 에서  ejs로 변경
angularjs 를 공부 할때만 해도 jade와 angularjs의 기능이 중복 된다고 생각됬으나
view 엔진 기능과 angularjs의 기능의 중복이라고 보기에는 문제가 있음.

view 엔진을 사용하면 하나의 페이지를 가지고
정적페이지 안에 있는 HTML 문을 수정 하고 페이지를 보내기가 좋음.
=> 하나의 페이지 틀을 계속해서 사용할 수 있다.

angularjs의 view 기능은 싱글페이지를 위한 기능으로
받아온 정적인 페이지를 좀더 동적인 기능을 추가하기 위한 기능.
=> 기존의 싱글뷰를 위한 라우팅 기능
