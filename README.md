# 여긴군대지(여긴 군 대민지원) - 온라인 군 대민지원 연결 플랫폼
<center>
![여긴 군대지 로고](https://user-images.githubusercontent.com/78669550/193375765-98e1234b-9095-4ca7-b136-b71c0fb4ea59.png)
  ![logo](./logo.png)

"여긴 군대지" 서비스를 통해 재난에 맞서
  군과 사회가 함께 어우러 살아갈 수 있는 기회가 되었으면 합니다.
</center>

## 기획 의도 | Service Needs
뉴스기사1) "이종섭 국방부장관, 태풍 피해지역 찾아 대민지원 총력 지시" / 국방일보
     내용) 우리 군 육해공군 장병 1만 7000여명 이상이 대민지원에 나섰다. 
뉴스기사2) "해군 7전단, 제주 힌남노 피해 대민지원" / 뉴시스
     내용) 7전단 장병 및 군무원 여명이 함께 대민지원에 나서고 있다. 

 최근 침수 혹은 태풍과 같은 자연재해, 혹은 재난으로 인해 피해를 받는 민간지역이 많아지고 있습니다.
 
 이종섭 국방부 장관은 "국민의 생명과 재산 보호는 우리 군의 기본 임무임을 명심하고 태풍 피해를 하루 빨리 복구할 수 있도록 최선을 다해 달라"라는 지시를 내리시기도 하였습니다.

 누군가는 "대민지원은 군의 역할이 아니다"라고 하기도 합니다. 하지만 민간의 인원으로는 도저히 해결할 수 없고, 더욱 더 피해를 입은 주민들의 고통이 심해지기 전 도울 수 있는 것은 우리 군밖에 없다고 생각합니다. 

뉴스기사3) "20년간 재난 현장 찾아가 내 일처럼... '외진 곳일수록 도움이 절실' / 경향신문

 위 뉴스 칼럼과 같이 외진 지역같은 곳은 복구 지원에 소외되기도 합니다. "여긴 군대지" 서비스를 통해 재난에 맞서 군과 사회가 함께 어우러 살아갈 수 있는 기회가 되었으면 합니다.
 
## 기능 | Features
"여긴 군대지" 서비스는 웹으로 구현될 예정입니다.
민간 페이지와 군 페이지가 분리되어 구현될 예정입니다.

1. 민간페이지 
 "여긴 군대지" 서비스를 통해 지역적으로 대민지원을 신청할 수 있습니다. 지역적으로 라는 단어는 대한민국의 행정 구역을 나누어 "시군구"와 "읍면동"으로 나누어 대민지원을 신청합니다. 신청을 할 때, 피해지역, 피해수준( 사진과 동영상 그리고 텍스트를 근거로 합니다. ), 그리고 얼만큼의 인원이 필요할지 등 현재 상황에 대하여 구체적으로 작성합니다. 

 신청을 조회하는 페이지는 지도로 구현되어 행정 구역별로 도움이 필요한 수준을 짐작할 수 있습니다.  

2. 군페이지
 대민지원을 나갈 수 있는 부대는 인근 부대(5km 이내 혹은 10km 이내 등과 같이 거리로 제한됩니다.) 인근 부대의 관리자는 해당 요청에 대하여 승인을 하거나 반려를 할 수 있습니다.

 해당 지역의 대민지원 요청이 승인이 나게 되면 최적의 동선을 세워 피해가 적은 곳부터 순서대로 지원 계획서를 작성해줍니다.

 장병 혹은 군 간부는 온라인으로 해당 작업에 자진하여 지원할 수 있습니다. 만일 작업이 끝나고 난 뒤에는 해당 인원들에게 봉사시간과 상점을 부여받을 수 있도록 개발합니다. 이를 위해 봉사기관과 협업할 수 있도록 서비스를 기획하여야 합니다. 

 대민지원을 나간 부대는 페이지에 영구히 기록됩니다. 추후에 부대에 기부할 수 있는 기능을 추가하여 대민지원을 통해 군과 사회가 함께 국방력을 증진시킬 수 있는 기회가 되었으면 합니다. 

 개발은 프론트엔드 개발자 2, 백엔드 개발자1, PM 및 디자이너로 구성될 예정입니다.
프론트엔드 개발자는 각각 군과 민간페이지를 맡아 개발할 계획입니다. (React로 서비스를 구성할 것이며, Typescript, Javascript 상관없습니다.)
백엔드 개발자는 서비스의 서버를 구축합니다. (Node, Python, Spring 상관없으며, 배포 경험이 있는 개발자면 더욱 좋습니다. 없다면 함께 배포하여도 무방합니다.)
PM 및 디자이너는 서비스의 원활한 개발을 위해 협업툴(Git, Slack, Notion)을 통해 개발을 조율합니다. 기획서와 발표자료를 준비합니다. 그리고 Figma와 같은 디자인툴을 통해 웹페이지를 디자인합니다.

매칭이 끝나는 9월 22일 전까지 디자인과 개발 계획을 마무리하고 1달이내에 서비스를 완성할 예정입니다. 

## 권장 사양 | Prerequisities
* ECMAScript 6 지원 브라우저 사용
* 권장: Google Chrome 버젼 77 이상
* 
## 설치 방법 | How to Install

## 튜토리얼 | Getting Started
```bash
$ git clone https://github.com/osamhack2022/WEB_WeAreInTheArmy_ArmyWorkNavy.git
$ yarn or npm install
$ yarn start or npm run start
```
## 기술 스택 | Technique Used
### 기획, UI/UX
- `Notion`
- `Figma`
### Front-end
 -  react.js, vue.js 등 사용한 front-end 프레임워크 
 -  UI framework
### Back-end
- `Azure`
- `NextJS`
- DB
> 더 자세한 내용은 세부 폴더의 `READ.md` 확인 바랍니다.
### 팀 정보 | Team Information
| 이름 | 역할 | 이메일 | Github ID |
|---|---|---|---|
| 공민제 | 팀장, 프론트엔드 | minje621@gmail.com | minai621 |
| 이혜성 | 백엔드 | mireflare@gmail.com | mireflare |
| 황준하 | PM 및 웹 퍼블리셔 | juneha2002@gmail.com | ecrire06 |

- 소스코드 관리 : `Github`
- 회의 및 일정관리 : `Slack`
- 문서, 회의 내용 기록 : `Notion`

## 저작권 및 사용권 | License
 * [MIT](https://github.com/osam2020-WEB/Sample-ProjectName-TeamName/blob/master/license.md)

This project is licensed under the terms of the MIT license.

※ [라이선스 비교표(클릭)](https://olis.or.kr/license/compareGuide.do)

※ [Github 내 라이선스 키워드(클릭)](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository)

※ [\[참조\] Github license의 종류와 나에게 맞는 라이선스 선택하기(클릭)](https://flyingsquirrel.medium.com/github-license%EC%9D%98-%EC%A2%85%EB%A5%98%EC%99%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4-%EC%84%A0%ED%83%9D%ED%95%98%EA%B8%B0-ae29925e8ff4)

