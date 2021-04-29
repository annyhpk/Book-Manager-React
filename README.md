### DEMO : https://annyhpk.github.io/Book-Manager-React/build/

# Book Manager (React version)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 프로젝트 설명

---

기존 제작하였던 [PHP기반으로 제작하였던 도서관리 웹앱](https://github.com/annyhpk/Book-Manager-WebApp)을 react version으로 리뉴얼한 프로젝트

react와 redux를 이용하여 도서를 검색하고 추가하여 도서 데이터를 관리하는 웹앱입니다.

---

## 실행 설명

---

### `[API KEY 설정하기]`

두가지 방법

1. package.json 파일안 scripts-start 명령어 구문(NODE_ENV={API_KEY})에 직접 키를 입력한다.
2. dotenv 모듈을 이용하여 셋팅한다.

### `[실행하기]`

1. 실행: npm run start OR yarn start
2. 빌드: npm run build OR yarn build

---

## 기능 설명

---

### `[도서 검색]`

Kakao API 를 이용하여 도서를 검색하는 기능

### `[CRUD]`

1. 검색후 검색결과 모달창에서 도서를 클릭하여 도서정보를 추가하는 기능
2. 저장된 도서정보들을 메인페이지에 출력하는 기능
3. 도서정보중 도서수량을 수정할 수 있는 기능
4. 도서정보를 삭제할 수 있는 기능
