본격적으로 넥스트를 공부해 보기 위해 간단한 한 주간 간단한 프로젝트를 진행해 보려 한다.

## 구현 TODO

1. learning points

   1. 넥스트의 기본 사용 방법
      → 정적 플젝으로 넥스트 찍먹 + 사용 환경에 익숙해 지기 - sevice - layout - SEO(metadata) - error ui, loading ui 처리
   2. 테일윈드 css 사용
   3. 새로운 라이브러리 사용해 보기

2. 프로젝트 구성
   - home
     - 캐러셀
   - post
     - title, desc, data, cate
     - use markdown
   - contact
     - send email
   - about

<br/>

## 개발환경

```json
  "dependencies": {
    "next": "14.2.3",
    "react": "^18",
    "react-dom": "^18"
    "nodemailer": "^6.9.13",
    "react-icons": "^5.2.1",
    "react-markdown": "^9.0.1",
    "react-multi-carousel": "^2.8.5",
    "react-syntax-highlighter": "^15.5.0"
  }
```

- 최신 버전인 넥스트 14 사용
- 간단한 프로젝트임으로 캐러셀을 직접 만들지 않고 react-multi-carousel 사용
- 메일 보내는 기능을 사용하기 위한 nodemailer

<br/>

## 진행 상황

- github
  https://github.com/ejaman/static-blog
- deploy
  https://static-blog-woad-nine.vercel.app

이거 한 주간 진행하구 다음엔 좀 더 고도화(정적x)할 예정
