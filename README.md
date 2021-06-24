# 스무디 한잔 마시며 끝내는 React Native

### 라이브러리 ,모듈들 버전 고정
- npm config set save-exact=true

### 리액트 네이티브 프로젝트 생성
- react-native init AppName

# Ch6 : Context - AsyncStorage
- 앱 종료되거나 디시 실행시 Props와 State, Context 값 사라짐
- 앱 종료 후 다시 실행해도 데이터 사라지지 않게 유지하기 위해 AsyncStorage 사용

<hr/>
###Component

- SafeAreaView : 상태 바와 홈 버튼 영역에는 콘텐츠 표시X
- View : 상태 바 홈버튼 영역 까지 콘텐츠 표시
- Fragment : 사용시 에러 없이 복수 노드의 컴포넌트 반환 가능
- Text : 글자를 표현하기위해서는 반드시 사용
- 
<hr/>

### Styling
* StyleSheet.create
  * 스타일 객체할당
  * <View style={style.container}>
 
+ 직접 스타일 객체를 인라인으로 넣는 방법
  + <VIew style={{backgroundColor:"red">

* StyledComponent
  * npm install --save styled-components
  * npm install --save-dev @types/styled-component (타입스크립트를 위한 styled components)
  * const Views= Styled.View`Background:red`;
  
<hr/>

### Typescript
- reactnative init AppName --template typescript
  
### 절대경로 컴포넌트 추가하는법
- npm install --save-dev babel-plugin-root-import
- babel.config.js 파일 수정
- 타입스크립트의 설정에서도 절대경로 설정위해서 tsconfig.json수정
- import App form '~/App' 와 같은 형식으로 바뀐다.

### 개발자 메뉴
- IOS => Ctrl + D
- Android => Ctrl + M
