import React,{useState} from 'react';


const Test = () => {
    const [items, setItems] = useState(['kaos kaki pria','kaos kaki wanita','kaos kaki olah raga']);

    const addItem = () => {
        const newItem = `Kaos Kaki ${items.length + 1}`;
        setItems([...items, newItem]);
    }

    
    const addItem2 = () => {
        const newItem2 = ['Naruto','Sasuke','Sakura'];
        setItems([...items, newItem2]);
    }

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
            <button onClick={addItem2}>Add Ninja</button>
        </div>
    );
}


export default Test;