import React,{useState} from 'react';


const Test = () => {
    const [items, setItems] = useState(['kaos kaki pria','kaos kaki wanita','kaos kaki olah raga']);

    const addItem = () => {
        const newItem = `Kaos Kaki ${items.length + 1}`;
        setItems([...items, newItem]);
    }

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}


export default Test;