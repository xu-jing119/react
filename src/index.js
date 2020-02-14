// 引入包
import React from 'react';
import ReactDOM from 'react-dom';

// 创建元素
const title = React.createElement('h1', null, 'hello react 脚手架!')
// 渲染
ReactDOM.render(title,document.getElementById('root'))
// 使用JSX语法创键结构
// 优点  更加简洁 不复杂
const H1 = <h1>你好JSX <span>这是一个span标签</span></h1>
ReactDOM.render(H1,document.getElementById('root'))
