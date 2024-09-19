import React, { useReducer, useContext, useState, useEffect, useRef, useLayoutEffect, createContext } from 'react';
import { ItemContext,ItemProvider } from './Context';
import useFilterSort from './CustomHook/SortHook';



// Main component
const Five = () => {
    const { state, dispatch } = useContext(ItemContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const searchRef = useRef(null);

    const items = useFilterSort(state.items, searchTerm, sortOption);
    console.log(items);
    
    const handleAddItem = (e) => {
        e.preventDefault();
        const newItem = { id: Date.now(), name, description };
        dispatch({ type: 'ADD_ITEM', payload: newItem });
        setName('');
        setDescription('');
    };

    const handleRemoveItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };

    useLayoutEffect(() => {
        searchRef.current.focus();
    }, []);

    return (
        <div className="Five py-24 px-14 bg-slate-700 flex flex-col gap-5 h-screen w-screen">
            <form className="flex flex-col p-4 w-1/2 my-10 gap-5 border rounded border-slate-500">
                <h1 className='text-3xl font-bold text-slate-100'>Add new item</h1>
                <input
                    type="text"
                    className="px-3 py-1  rounded bg-slate-500 outline-none text-slate-50"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    className="px-3 py-1 rounded bg-slate-500 outline-none text-slate-50"
                    placeholder="Item Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={handleAddItem} className="mt-2 bg-slate-900 text-white py-1 px-4 rounded">Add Item</button>
            </form>

            <div className="flex gap-5">
                <input
                    ref={searchRef}
                    type="text"
                    className="px-3 py-1 w-fit rounded bg-slate-500 outline-none text-slate-50"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select className='w-fit px-3 py-1 rounded-md' onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
                    <option value="">Sort by...</option>
                    <option value="name">Name</option>
                    <option value="description">Description</option>
                </select>
            </div>
            <ul className="flex flex-col gap-5">
                {items.map(item => (
                    <li key={item.id} className="flex justify-between items-start p-3 rounded-md border-slate-300 border">
                        <div className='flex gap-2 flex-col text-slate-50'>
                            <h1 className='text-3xl'>{item.name}</h1>
                            <p className='opacity-50'>{item.description}</p> 
                        </div>
                        <button onClick={() => handleRemoveItem(item.id)} className="ml-2 bg-red-500 text-white py-1 px-2 rounded">Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Five