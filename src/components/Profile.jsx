import React from 'react'

export default function Profile () {

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
  
    function handleChange(event) {
      const newValue = event.target.value;
      setInputText(newValue);
    }
  
    function addItem() {
      setItems(prevItems => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  
    function deleteItem(id) {
      setItems(prevItems => {
        return prevItems.filter((item, index) => {
          return index !== id;
        });
      });
    }
    
    render() {
        return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={handleChange} type="text" value={stateinputText} />
                <button onClick={addItem}>
                <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                {items.map((todoItem, index) => (
                    <div key={index} onClick={() => {
                            deleteItem(index);
                        }}>
                        <li>{todoItem}</li>
                    </div>
                ))}
                </ul>
            </div>
        </div>
        )
    }
}
