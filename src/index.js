// 引入包
import React from 'react';
import ReactDOM from 'react-dom';

// // 创建元素
// const title = React.createElement('h1', null, 'hello react 脚手架!')
// // 渲染
// ReactDOM.render(title,document.getElementById('root'))
// // 使用JSX语法创键结构
// // 优点  更加简洁 不复杂
// // 记住:用单大括号
// const name='徐静'
// const H1 = (
// <div>
//     <h1>你好JSX 这是一个JSX语法创键的元素</h1>
//     <span>这是一个span标签</span>
//     <span>名字是:{name}</span>
// </div>)
// ReactDOM.render(H1,document.getElementById('root'))


// JSX列表循环渲染
const songs = [
    {id:1,name:"痴心绝对"},
    {id:2,name:"南山南"},
    {id:3,name:"工资呀"},
    {id:4,name:"加油,武汉"},
    {id:5,name:"红日"},
]
const list = (
    <ul>
    {songs.map(item=>(
    <li key={item.id}>{item.name}</li>
    ))}
</ul>
)
ReactDOM.render(list,document.getElementById('root'))
