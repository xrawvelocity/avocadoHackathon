import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BGvid from './BGvid';
import Nav from './Nav';
import uuid from 'uuid'

export default class Profile extends Component {

    constructor(props) {
        super(props)
    
       this.input=React.createRef()
       this.state={
           list:[],
          }
    }

    componentDidMount(){
        document.addEventListener("keyup", e => {
            if(e.keyCode === 13) {
                this.addItem();
                this.input.current.value = '';
            }
        })
        if(localStorage.getItem('list')){
            this.setState({
                list:JSON.parse(localStorage.getItem('list'))
            });
        }
        else {
            this.setState({
                list: []
            })
        }
    }

    addItem=()=>{
    
        const Items={
            id:uuid.v4(),
            value:this.input.current.value,
        };

        if(localStorage.getItem('list')==null) {
            const list=[]
            list.push(Items);
            localStorage.setItem("list",JSON.stringify(list))
        }

        else if(JSON.parse(localStorage.getItem('list')).length < 5) {
            console.log(JSON.parse(localStorage.getItem('list')).length)
            const list=JSON.parse(localStorage.getItem('list'))
            list.push(Items)
            localStorage.setItem("list",JSON.stringify(list))
            this.input.current.value = '';
        }

        else if(localStorage.getItem('list').length > 6){
            alert("You can only have 5 categories at once.")
        }

        this.setState({
            list:JSON.parse(localStorage.getItem('list'))
        });

        
    }


    deleteItem=(event)=> {
        
        let index = event.target.getAttribute('data-key')
        let listValue=JSON.parse(localStorage.getItem('list'));
        listValue.splice(index,1)
        this.setState({list:listValue});
        localStorage.setItem('list',JSON.stringify(listValue))
    }


    test = () => {
        const list = window.localStorage.getItem('list');
        const parsedList = JSON.parse(list);
        if(list == null){
            return false
        }
        else{
            this.setState({
                list: parsedList,
            })
            console.log(this.state.list);
        }
    }

    render(){
        return (
        <div className="profile">
            <div className="header__logo-box">
                <Link to="/"><div className="header__logo"></div></Link>
            </div> 
            <Nav main={false} />
            <BGvid />
            <div className="profile--heading">
                <h1 className="profile--heading__text">Pick your LiveStyle</h1>
            </div>
            <div className="profile--form">
                <input className="profile--form__input"  ref={this.input} placeholder="ex. gym, coding, etc." type="text"/>
                <button className="btn-profile__btn-add" onClick={this.addItem}>
                <span>ADD</span>
                </button>
            </div>
            <div className="profile--list">
                <ul className="profile--list__ul">
                {this.state.list.map((item, index) => (
                    <div className="profile--list__container" key={item.id} >
                        <li className="profile--list__item">{item.value}</li>

                        <i data-key={index} onClick={this.deleteItem} alt="delete" className="fas fa-trash profile--list__icon"></i>
                    </div>
                ))}
                </ul>
            </div>
            
            <Link to="/home"><button onClick={this.test} className="btn-profile__btn-home">VIEW YOUR LIVESTYLE</button></Link>
            
            
            
        </div>
        )
    }
}
