import React, { useState } from 'react';
import down_arrow from '../images/down_arrow.png';
import arrow from '../images/right_arrow.svg';
import { motion } from 'motion/react';

// Fake data
let array1 = [
    {
        id: 0,
        head: true,
        value: 1,
    },
    {
        id: 1,
        head: false,
        value: 2,
    },
];


// function AddToArray() {
//     array1.push({id: 3, value: 7, });
//     alert("hey")
// }

function LinkedList() {
    const [items, setItems] = React.useState(array1);

    const addItem = (newItem) => {
        // array1.push({id: 3, value: 7, });
        setItems([...items, newItem]);
    }

    const removeHead = () => {
        // array1.push({id: 3, value: 7, });
        items[1].head = true;
        setItems(items.slice(1));
    }

    // const listNodes = items.map((item) =>
    //     <li className={"border-blue-500 border-4 p-6 px-8 rounded-full text-xl font-bold"} key={item.id}>{item.value}</li>);

    const listNodes = items.map((item) =>
        (
            <React.Fragment key={item.id}>
                <div className="flex flex-col items-center justify-end">
                    {item.head && (
                        <>
                            <h2 className={"text-xl font-bold pb-4"}>Head</h2>
                            <img className={"w-6 pb-4"} src={down_arrow} alt=""/>
                        </>
                    )}
                    <motion.li
                        initial={{ opacity: 0, scale: 0.6}}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.8 }
                        }}
                        className={"border-blue-500 border-4 p-6 px-8 rounded-full text-xl font-bold"} key={item.id}>{item.value}</motion.li>
                </div>
                {<img className={"w-10 mt-24"} src={arrow} alt=""/>}
            </React.Fragment>
        ))


    return (
        <>
            <div className={"flex flex-col justify-center items-center"}>
                <div className={"flex flex-row self-start justify-center items-center"}>
                    <ul className={"flex gap-4"}>{listNodes}</ul>
                </div>
                <div className={"flex flex-row justify-center items-center gap-4"}>
                    <button className={"w-[200px] mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl"}
                            onClick={() => addItem({id: items[items.length-1].id+1, value: items[items.length-1].value+1})}>Add Node</button>
                    <button className={"w-[200px] mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl"}
                            onClick={() => removeHead()}>Remove Head</button>
                </div>
            </div>
        </>
    );
}

export default LinkedList;
