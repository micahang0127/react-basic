### React Typescript ESLint Prettier

- react  
   리액트에서는 Virtual DOM 이라는 것을 사용  
   Virtual DOM 은 가상의 DOM 인데요, 브라우저에 실제로 보여지는 DOM 이 아니라 그냥 메모리에 가상으로 존재하는 DOM 으로서 그냥 JavaScript 객체이기 때문에 작동 성능이 실제로 브라우저에서 DOM 을 보여주는 것 보다 속도가 훨씬 빠릅니다. 리액트는 상태가 업데이트 되면, 업데이트가 필요한 곳의 UI 를 Virtual DOM 을 통해서 렌더링합니다. 그리고 나서 리액트 개발팀이 만든 매우 효율적인 비교 알고리즘을 통하여 실제 브라우저에 보여지고 있는 DOM 과 비교를 한 후, 차이가 있는 곳을 감지하여 이를 실제 DOM 에 패치시켜줍니다. 이를 통하여, "업데이트를 어떻게 할 지" 에 대한 고민을 하지 않으면서, 빠른 성능도 지켜낼 수 있게 되었습니다.

  -- 작업환경
  [Node.js:]
  Webpack 과 Babel 같은 도구들이 자바스크립트 런타임인 Node.js 를 기반으로 만들어져있습니다. 그렇기에 해당 도구들을 사용하기 위해서 Node.js 를 설치합니다.

  [Yarn]
  Yarn 은 조금 개선된 버전의 npm 이라고 생각하시면 됩니다. npm 은 Node.js 를 설치하게 될 때 같이 딸려오는 패키지 매니저 도구입니다. 프로젝트에서 사용되는 라이브러리를 설치하고 해당 라이브러리들의 버전 관리를 하게 될 때 사용하죠. 우리가 Yarn 을 사용하는 이유는, 더 나은 속도, 더 나은 캐싱 시스템을 사용하기 위함입니다

  [Webpack, Babel]
  여러가지의 파일을 한개로 결합하기 위해서 우리는 Webpack 이라는 도구를 사용하고, JSX 를 비롯한 새로운 자바스크립트 문법들을 사용하기 위해서 우리는 Babel 이라는 도구를 사용합니다.

  Babel 은 자바스크립트의 문법을 확장해주는 도구입니다. 아직 지원되지 않는 최신 문법이나, 편의상 사용하거나 실험적인 자바스크립트 문법들을 정식 자바스크립트 형태로 변환해줌으로서 구형 브라우저같은 환경에서도 제대로 실행 할 수 있게 해주는 역할을 합니다.

  -- 개념
  [props] : properties의 줄임말

  -- Code
  [JSX]
  JSX 는 리액트에서 생김새를 정의할 때, 사용하는 JavaScript 문법입니다.
  리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 babel 이 JSX 를 JavaScript 로 변환을 해줍니다. JSX 가 JavaScript 로 제대로 변환이 되려면 지켜주어야 하는 몇가지 규칙이 있습니다

  [ReactDOM.render]
  ReactDOM.render(<App />, document.getElementById('root'));

  ReactDOM.render 의 역할은 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링하겠다는 것을 의미합니다. id 가 root 인 DOM 을 선택하고 있는데, 이 DOM은 public/index.html 파일에 있습니다. 리액트 컴포넌트가 렌더링 될 때에는, 렌더링된 결과물이 위 div 내부에 렌더링되는 것 입니다

  public/index.html
  <div id="root"></div>

  [규칙]

  - 꼭 감싸져야하는 태그
  두가 이상의 태그는 무조건 하나의 태그로 감싸져있어야 합니다
  function App() {
  return (
  <div>
  <Hello />
  <div>안녕히계세요</div>
  </div>
  );
  }
  이렇게 단순히 감싸기 위하여 불필요한 div 로 감싸는게 별로 좋지 않은 상황도 있습니다. 그럴 땐, 리액트의 Fragment 라는 것을 사용하면 됩니다.
  function App() {
    return (
      <>
        <Hello />
        <div>안녕히계세요</div>
      </>
    );
  }

  - 주석
    return (
    <>
    {/_ 주석은 화면에 보이지 않습니다 _/}
    /_ 중괄호로 감싸지 않으면 화면에 보입니다 _/
    <Hello
    // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
    />
    <div style={style}>{name}</div>
    <div className="gray-box"></div>
    </>
    );

    [defaultProps]
    props 를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶다면 컴포넌트에 defaultProps 라는 값을 설정
    function Hello({ color, name }) {
    return <div style={{ color }}>안녕하세{name}</div>
    }
    Hello.defaultProps = {
    name: '이름없음'
    }

        [javascript &&]
        {isSpecial && <b>_</b>}
        isSpecial 이 false 일땐 false 이고, isSpecial이 true 일 땐 <b>_</b> 가 됩니다.

        [props 값 설정을 생략하면 ={true}]
          <Hello name="react" color="red" isSpecial />
        isSpecial 이름만 넣어주면 isSpecial={true} 와 동일한 의미

    [참고]  
    https://react.vlpt.us/basic/01-concept.html
