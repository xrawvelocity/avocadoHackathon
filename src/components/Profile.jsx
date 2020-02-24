import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BGvid from './BGvid';
import uuid from 'uuid'

export default class Profile extends Component {

    constructor(props) {
        super(props)
    
       this.input=React.createRef()
       this.state={
           list:[],
          }
    }


    addItem=()=>{
    
    const Items={
            id:uuid.v4(),
            value:this.input.current.value,
        };

        if(localStorage.getItem('list')==null){
            const list=[]
            list.push(Items);
            localStorage.setItem("list",JSON.stringify(list))
        }
        else{
            const list=JSON.parse(localStorage.getItem('list'))
            list.push(Items)
            localStorage.setItem("list",JSON.stringify(list))
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
            <BGvid />
            <div className="profile--heading">
                <h1 className="profile--heading__text">Pick your LiveStyle</h1>
            </div>
            <div className="profile--form">
                <input className="profile--form__input"  ref={this.input} type="text"/>
                <button className="profile--form__button" onClick={this.addItem}>
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
            <div>
            <Link to="/home"><button onClick={this.test} className="profile--button">Country Roads</button></Link>
            
            </div>
            
        </div>
        )
    }
}
