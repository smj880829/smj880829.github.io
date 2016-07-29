---
layout: post
title:  "animation"
date:   2016-07-28 15:33:09 +0900
categories: single_chat
---
1. right_slide 생성.

메인 화면 우측에 보이지않는 DIV 생성.
이벤트 발생 시 line transition 으로 SHOW



2. right_slide 에 체팅 div 를 추가

문제 : hide 상태에서 체팅로그가 생성될때 scroll bar 가 비활성화가 됨.
=> 체팅 로그를 삭제 후 다시 받는 식으로 변경.
