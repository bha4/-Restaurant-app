import {createContext} from 'react'

const Context = createContext({
    items:[],
    addItem:(item)=>{},
    removeItem:(id)=>{}
});
export default Context