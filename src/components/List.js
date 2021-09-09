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
            content: "anything",
            liked: false
        }, 
        {
            id: 1,
            content: "hand",
            liked: false
        }, 
        {
            id: 2,
            content: "pretzel",
            liked: false
        },
        {
            id: 3,
            content: "banana",
            liked: false
        },
        {
            id: 4,
            content: "dog",
            liked: false
        },
        {
            id: 5,
            content: "milk",
            liked: false
        }
    ])
    const [formText, setFormText]=React.useState("")

    const addListItem=()=>{
        console.log("Adding new list item: "+formText)
        // creating new ID for the new list item
        const newId = listItems[listItems.length-1].id+1;

        // creating JSON for the new to do item
        const newTodoItem = {
            id: newId,
            content: formText,
            liked: false
        }

        // taking out original list items and adding them to new list with new to do item
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

    const likeFunction=(likeInput)=>{
        console.log(likeInput)
        const newList= listItems.map(
            (todoItem)=>{   
                if ( todoItem.id == likeInput) {
                    return {...todoItem,liked: !todoItem.liked}
                } else {
                    return todoItem
                }
            }
        )
       console.log([...newList]) 
        setListItems([...newList])
    }

    function saveText(inputText) {
        console.log(inputText)
        setFormText(inputText)
    }

    return (
        <div>
            {/* textbox for adding listItems */}
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
                                    <ListItem item={todoItem} deleteListItem={deleteListItem} likeFunction={likeFunction}/>
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
