import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BGvid from './BGvid';

export default function Profile (props) {

    console.log(props)
    
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState(localStorage.getItem('key').split(','));
  
    function handleChange(event) {
      const newValue = event.target.value;
      setInputText(newValue);
    }
  
    function addItem() {
                   
        if (items.length <= 5){
            if(items.length < 5 && inputText){
                setItems(prevItems => {
                    return [...prevItems, inputText];
                  });
                  setInputText("");
            } 
            else {
                console.log('done')
            }
            localStorage.setItem("key", items)
            console.log(localStorage.getItem('key'))
        }
        
      
    }
  
    function deleteItem(id) {
      setItems(prevItems => {
        return prevItems.filter((item, index) => {
          return index !== id;
        });
      });
      localStorage.removeItem('key')
      localStorage.setItem('key', items)
      console.log(localStorage.getItem('key'))

    }

    
    return (
        <div className="profile">
            <BGvid />
            <div className="profile--heading">
                <h1 className="profile--heading__text">Pick your LiveStyle</h1>
            </div>
            <div className="profile--form">
                <input className="profile--form__input" onChange={handleChange} type="text" value={inputText} />
                <button className="profile--form__button" onClick={addItem}>
                <span>ADD</span>
                </button>
            </div>
            <div className="profile--list">
                <ul className="profile--list__ul">
                {items.map((todoItem, index) => (
                    <div className="profile--list__container" key={index} onClick={() => {
                            deleteItem(index);
                        }}>
                        <li className="profile--list__item">{todoItem}</li>
                    </div>
                ))}
                </ul>
            </div>
            
            <Link to="/home" links={props.links} ready={props.ready} ><button className="profile--button">Country Roads</button></Link>
            
        </div>
    )
}
