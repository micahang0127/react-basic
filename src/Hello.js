import React, { Component } from "react";

// class형 컴포넌트에서는 render() 메서드가 꼭 있어야 하낟.
// render()메서드에서 렌더링 하고 싶은 JSX를 ㅂ나환하면 된다.
class Hello extends Component {
  // static 키워드와 함께 선언 할수도 ㅇㅆ다.
  // static defaultProps = {
  //     name: '이름없음'
  //   };
  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>} 안녕하세요 {name}
      </div>
    );
  }
}

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
