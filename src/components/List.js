import React from 'react'
import ListItem from './ListItem'
import {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const tempPlace = () => {
    const exampleTodoJsonObject = {
        id: 5,
        content: "cookies"
    }
}

const List = () => {
    const [listItems, setListItems]=useState([ 
        {
            id: 0,
            content: "anything"
        }, 
        {
            id: 1,
            content: "hand"
        }, 
        {
            id: 2,
            content: "pretzel"
        },
        {
            id: 3,
            content: "banana"
        },
        {
            id: 4,
            content: "dog"
        },
        {
            id: 5,
            content: "milk"
        }
    ])
    const [formText, setFormText]=useState("")

    const addListItem=()=>{
        console.log("Adding new list item: "+formText)
        const newId = listItems[listItems.length-1].id+1;
        const newTodoItem = {
            id: newId,
            content: formText
        }
        setListItems(   [...listItems, newTodoItem]     )
    }

    const deleteListItem=(deletedListItemId)=>{
        const newList= listItems.filter(
            (todoItem)=>{   
                if ( todoItem.id == deletedListItemId) {
                    return false
                } else {
                    return true
                }
            }
        )
        
        setListItems([...newList])
    }


    const saveText=(inputText)=>{
        console.log(inputText)
        setFormText(inputText)
    }

    return (
        <div>
            <TextField variant="outlined" onChange={
                    (event)=>{
                        saveText(event.target.value)
                    }
                }
            />
           
            <Button onClick={()=>addListItem()}>click</Button>
            <div className="Space"/>
            <Grid container alignItems="center" direction="column"  justify="flex-start" spacing={3}>
                {
                    listItems.map(
                        (todoItem)=>{   
                            return (
                                <Grid item>
                                    <ListItem item={todoItem} deleteListItem={deleteListItem}/>
                                </Grid>
                            ) 
                        }
                    )
                }
            </Grid>
        </div>
    )
}

export default List
