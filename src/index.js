// 引入包
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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

// // 非受控组件  用得很少
// class Hello extends React.Component{
//     constructor(){
//         super()
//         this.txtRef=React.createRef()
//     }
//     isClick=()=>{
//         console.log('文本框的值是:',this.txtRef.current.value);

//     }
//     render(){
//         return (
//             <div>
//                 <input type='text' ref={this.txtRef} />
//                 <button onClick={this.isClick}>点击获取文本框的值</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Hello />,document.getElementById('root'))

// // 评论案例
// class App extends React.Component {
//     state={
//         comments: [
//             { id: 1, name: 'jack', content: '沙发！！！' },
//             { id: 2, name: 'rose', content: '板凳~' },
//             { id: 3, name: 'tom', content: '楼主好人' }
//           ],
//           userName:'',
//           userContent:''
//     }
//     // 渲染评论列表
//     commentsList=()=>{
//         return(
//             this.state.comments.length===0?(<div className="no-comment">暂无评论，快去评论吧~</div>):(
//                 <ul>
//                 {this.state.comments.map(item=>(
//                       <li key={item.id}>
//                       <h3>评论人：{item.name}</h3>
//                       <p>评论内容：{item.content}</p>
//                     </li>
//                 ))}
//                 </ul>
//         )
//         )
//     }
//     // 当输入框发生改变时
//     isChange=(e)=>{
//         const {name,value}=e.target
//         this.setState({
//             [name]:value
//         })
//     }
//     // 当点击发表评论时
//     isClick=()=>{
//         const {comments,userName,userContent}=this.state
//         if(userName.trim()===''||userContent.trim()===''){
//             alert('列表不能为空!')
//             return
//         }
//         const newComment=[{
//             id:Math.random(),
//             name:userName,
//             content:userContent
//         },...comments]
//         this.setState({
//             comments:newComment,
//             // 评论完成后清空输入框内容
//             userName:'',
//             userContent:''
//         })

//     }
//   render() {
//     return (
//       <div className="app">
//         <div>
//           <input className="user" type="text" value={this.state.userName} name='userName' placeholder="请输入评论人" onChange={this.isChange}/>
//           <br />
//           <textarea
//            value={this.state.userContent}
//            name="userContent"
//            onChange={this.isChange}
//             className="content"
//             cols="30"
//             rows="10"
//             placeholder="请输入评论内容"
//           />
//           <br />
//           <button onClick={this.isClick}>发表评论</button>
//         </div>
//     {this.commentsList()}
//       </div>
//     )}
//   }

// // 渲染组件
// ReactDOM.render(<App />, document.getElementById('root'))

// // 组件之间相互传值 父向子传值
// class Parents extends React.Component{
//     state={
//         count:0
//     }
//     parClick=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//     render(){
//         return(
//             <div className="parents">
//                 <div>这是父组件的内容:{this.state.count}</div>
//                 <button onClick={this.parClick}>点击+1</button>
//                 <Child countChild={this.state.count} />
//             </div>
//         )
//     }
// }
// class Child extends React.Component{
//     render(){
//         return(
//             <div className="son">
//                 <div>这是子组件的内容:{this.props.countChild}</div>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Parents />,document.getElementById('root'))



// // 组件之间相互传值 子向父传值
// class Parents extends React.Component {
//   state = {
//     count: 0
//   };
//   getSonCount = param => {
//     console.log(param);
//     this.setState({
//       count: param
//     });
//   };
//   render() {
//     return (
//       <div className="parents">
//         <div>这是父组件的内容:{this.state.count}</div>
//         <Child myFn={this.getSonCount} />
//       </div>
//     );
//   }
// }
// class Child extends React.Component {
//   state = {
//     sonCount: 0
//   };
//   sonClick = () => {
//       this.setState({
//         sonCount:this.state.sonCount+1
//       })
//     this.props.myFn(this.state.sonCount)
//   };
//   render() {
//     return (
//       <div className="son">
//         <div>这是子组件的内容:{this.state.sonCount}</div>
//         <button onClick={this.sonClick}>儿子点击+1</button>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Parents />, document.getElementById("root"));



// // 组件之间相互传值 兄弟传值
// class Parents extends React.Component{
//     state={
//         count:0
//     }
//     isChild=(data)=>{
//         this.setState({
//             count:data
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <Child1 isCount={this.state.count} />
//                 <Child2 getChild={this.isChild}/>
//             </div>
//         )
//     }
// }
// class Child1 extends React.Component{
//     render(){
//         return(
//             <div>
//                <h2>当前的值是:{this.props.isCount}</h2>
//             </div>
//         )
//     }
// }
// class Child2 extends React.Component{
//     state={
//         sonCount:1
//     }
//     isClick=()=>{
//         this.setState({
//             sonCount:this.state.sonCount+1
//         })
//         this.props.getChild(this.state.sonCount)
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.isClick}>点击+1</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Parents />, document.getElementById("root"));


// context用法  可以拿到多重嵌套的后代中的数据
const  {Provider,Consumer} = React.createContext()
class Parents extends React.Component{
    render(){
        return (
            <Provider value="我是父亲的内容">
            <div>
                <Son1 />  
            </div>
            </Provider>
        )
    }
}
const Son1 = function(){
    return(
        <div>
            <Son2 />
        </div>
    )
}
const Son2 = function(){
    return(
        <div>
            <Son3 />
        </div>
    )
}
const Son3 = function(){
    return(
        <div>
           <Consumer>
               {
                 data=> <p>data接收到的参数是----{data}</p>
               }
           </Consumer>
        </div>
    )
}

ReactDOM.render(<Parents />, document.getElementById("root"));
