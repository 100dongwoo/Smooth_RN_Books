# 스무디 한잔 마시며 끝내는 React Native

### 라이브러리 ,모듈들 버전 고정
- npm config set save-exact=true

### 리액트 네이티브 프로젝트 생성
- react-native init AppName

### Ch6 : Context - AsyncStorage
- 앱 종료되거나 디시 실행시 Props와 State, Context 값 사라짐
- 앱 종료 후 다시 실행해도 데이터 사라지지 않게 유지하기 위해 AsyncStorage 사용
- npm install --save @react-native-community/async-storage  (0.60 이후 버전)
- AsyncStorage의 setItem을 사용하면 키 값 형태로 데이터를 관리 JSON.stringfy 함수를 사용하여 문자열로 변경하여 저장해야함

<hr/>

### ch7 : 영화 소개 앱 - 내비게이션과 앱
#### generator-rn-toolbox는 Deprecated 되었고, 새롭게 react-native-make을 만들어 제공
* 앱 아이콘과 스플래시 스크린 이미지 적용 generator-rn-toolbox
  * npm install -g yo generator-rn-toolbox
  * choco install imagemagick
  * yo rn-toolbox:assets --icon ./src/Assets/Images/app_icon.png

<hr/>

###  react-native-make 설치  (앱 아이콘) 1024x1024 px 필요
  * npm install --save-dev @bam.tech/react-native-make
  * react-native set-icon --path ./src/Assets/images/app_icon.png --background "#FFFFFF"

###  react-native-make 설치  (스플래시 스크린 이미지) 3000*3000 이상 필요
* psd파일 생성
  * [psd생성사이트] (https://www.photopea.com)
  * react-native set-splash --path [path-to-image] --resize [contain|cover|center] --background ["background-color"]
  * react-native set-splash --path ./src/Assets/images/app_splash.png --resize center --background "#FFFFFF"
  
* 순서 (react-native-splash-screen)
  * npm install --save react-native-splash-screen
  * choco install imagemagick
  * react-native set-icon --path ./src/Assets/images/app_icon.jpg --background "#FFFFFF"
  
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

<hr/>

- npm install --save styled-components
- npm install --save-dev typescript @types/react @types/react-native @types/styled-components babel-plugin-root-import
