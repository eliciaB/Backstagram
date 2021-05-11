import React from 'react'
import ListItem from './ListItem'
import {useState} from 'react'

const List = () => {
    const [listItems, setListItems]=useState([ 
        "anything", 
        "hand", 
        "pretzel",
        "banana",
        "dog"
    ])
    const [formText, setFormText]=useState("")

    const addListItem=()=>{
        console.log("Adding new list item: "+formText)
        setListItems([...listItems, formText])
    }

    const saveText=(inputText)=>{
        console.log(inputText)
        setFormText(inputText)
    }

    return (
        <div>
            
            <input type='text' onChange={
                    (event)=>{
                        saveText(event.target.value)
                    }
                }
            />
            <button onClick={()=>addListItem()}>click</button>
            {
                listItems.map(
                    (itemName)=>{   
                        return <ListItem name= {itemName}/> 
                    }
                )
            }
        </div>
    )
}

export default List
