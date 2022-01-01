import React, { Component } from "react";

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log(
      "===> TOC render shouldComponentUpdate",
      newProps,
      this.props.data
    );
    // newProps 는 바뀐 새로운 props, this.props는 기존의 props
    // App.js 의 else if (this.state.mode === "create") 에서 contents 변경 시
    // cpush를 사용하여 직접 데이터를 변경할 경우 newProps 와 this.props는 동일하다.
    // 따라서 데이터 변경 시 원본을 직접 바꾸지 않는 것을 권장한다. concat 이나 Arra.from 등 권장

    // this.props.data에 변경이 있을경우에만 render 함수 호출
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
  render() {
    console.log("===> TOC render ");
    var data = this.props.data;
    var lists = [];
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
