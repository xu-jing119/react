// 引入包
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

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


// // JSX列表循环渲染
// const songs = [
//     {id:1,name:"痴心绝对"},
//     {id:2,name:"南山南"},
//     {id:3,name:"工资呀"},
//     {id:4,name:"加油,武汉"},
//     {id:5,name:"红日"},
// ]
// const list = (
//     <ul>
//     {songs.map(item=>(
//     <li key={item.id}>{item.name}</li>
//     ))}
// </ul>
// )
// ReactDOM.render(list,document.getElementById('root'))


// // JSX条件渲染
// const isLoading = false
// const fn = function(){
//     if(isLoading){
//         return <span>这是一个条件为真渲染语句</span>
//     }else{
//         return <span>这是一个条件为假的</span>
//     }
// }
// const v1 = <div>{fn()}</div>
// ReactDOM.render(v1,document.getElementById('root'))


// // 函数组件
// function Hello(){
//     return <h1>这是一个函数组件</h1>
// }
// ReactDOM.render(<Hello />,document.getElementById('root'))

// 类组件
//  注意:1.类名称必须以大写字母开头Hello
//         2.类组件应该继承React.Component父类,从而可以使用父类中提供的方法或属性
//         3.类组件必须提供render()方法
//         4.render()方法必须有返回值,表示该组件的结构
// class Hello extends React.Component{
//     render(){
//         return <h1>这是一个类组件</h1>
//     }
// }
// ReactDOM.render(<Hello />,document.getElementById('root'))


// // 综合案例1 条件渲染 循环渲染 类组件
// const songs = [
//         {id:1,name:"痴心绝对"},
//         {id:2,name:"南山南"},
//         {id:3,name:"工资呀"},
//         {id:4,name:"加油,武汉"},
//         {id:5,name:"红日"},
//     ]
// const isLoading= true
// const fn = function(){
//     if(isLoading){
//         return <td>备注号111</td>
//     }else{
//         return null
//     }
// }
//     class Hello extends React.Component{
//         render(){
//             return (
//                 <table className="container">
//                 <thead>
//                     <tr>
//                         <td>id号</td>
//                         <td>名字</td>
//                         {fn()}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {songs.map(item=>(
//                         <tr key={item.id}>
//                             <td>{item.id}</td>
//                             <td>{item.name}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//                 </table>
//             )
//         }
//     }
//  ReactDOM.render(<Hello />,document.getElementById('root'))


// // 受控组件 实现属性绑定+事件绑定
// class Hello extends React.Component{
//     state={
//         txt:'文本框'
//     }
//     onIncream=(e)=>{
//         this.setState({
//             txt:e.target.value
//         })
//     }
//     render(){
//         return (<div>
//             <div>这是一个受控组件:{this.state.txt}</div>
//             <input type='value' value={this.state.txt} onChange={this.onIncream} />
//         </div>)
//     }
// }
// ReactDOM.render(<Hello />,document.getElementById('root'))


// // this指向
// class Hello extends React.Component{
//     state={
//         count:1
//     }
//     // 方法1:用箭头函数改变this指向 推荐使用这种 箭头函数没有this指向 会去找父级
//     isClick=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }

//     // // 方法2 通过构造函数来继承父类放入一些属性和方法 改变this指向
//     // isClick(){
//     //     this.setState({
//     //         count:this.state.count+1
//     //     })
//     // }
//     // constructor(){
//     //     super()
//     //     this.isClick=this.isClick.bind(this)
//     // }
//     render(){
//         return(
//             <div>
//                 <div>点击自增加1:{this.state.count}</div>
//                 <button onClick={this.isClick}>点击</button>
//                 {/* 方法3 直接在标签里面写箭头函数 缺点:导致jsx文件过长 结构不清晰 不推荐使用
//                 <button onClick={()=>{
//                     this.setState({
//                         count:this.state.count+1
//                     })
//                 }}>点击</button> */}
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Hello />,document.getElementById('root'))


// // 综合案例2
// class Addr extends React.Component{
//     state={
//         txt:'你',
//         isChecked:true
//     }
//     isChange=(e)=>{
//         console.log(e.target);
//         console.log(e.target.value);
//         this.setState({
//             txt:e.target.value
//         })
//     }
//     isChecked=(e)=>{
//         console.log(e.target.checked);
//         this.setState({
//             isChecked:e.target.checked
//         })
//     }
//     render(){
//         return(<div>
//             <div>数据视图一起变化:{this.state.txt}</div>
//             <input type='value' value={this.state.txt} onChange={this.isChange}/>
//             <input type="checkbox" value={this.state.isChecked} onChange={this.isChecked}/>
//         </div>)
//     }
// }
// ReactDOM.render(<Addr />,document.getElementById('root'))


// // 案例2优化
// class Addr extends React.Component{
//     state={
//         txt:'你',
//         isChecked:true
//     }
//     isChange=(e)=>{
//         console.log(e.target);
//     const val= e.target.type==='checkbox'? e.target.checked:e.target.value
//         this.setState({
//             [e.target.name]:val
//         })
//     }
//     render(){
//         return(<div>
//             <div>数据视图一起变化:{this.state.txt}</div>
//             <input type='value' value={this.state.txt} name='txt' onChange={this.isChange}/>
//             <input type="checkbox" value={this.state.isChecked} name='isChecked' onChange={this.isChange}/>
//         </div>)
//     }
// }
// ReactDOM.render(<Addr />,document.getElementById('root'))


// 非受控组件  用得很少
class Hello extends React.Component{
    constructor(){
        super()
        this.txtRef=React.createRef()
    }
    isClick=()=>{
        console.log('文本框的值是:',this.txtRef.current.value);
        
    }
    render(){
        return (
            <div>
                <input type='text' ref={this.txtRef} />
                <button onClick={this.isClick}>点击获取文本框的值</button>
            </div>
        )
    }
}
ReactDOM.render(<Hello />,document.getElementById('root'))
