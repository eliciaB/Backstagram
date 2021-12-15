import React from 'react'
import ListItem from './ListItem'
import {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


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
            id: 9,
            content: "pretzel",
            liked: false
        },
        {
            id: 40,
            content: "banana",
            liked: false
        },
        {
            id: 44,
            content: "dog",
            liked: false
        },
        {
            id: 100,
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
        const newListItem = {
            id: newId,
            content: formText,
            liked: false
        }

        // taking out original list items and adding them to new list with new to do item
        setListItems(   [...listItems, newListItem]     )
    }

    const deleteListItem=(deletedListItemId)=>{
        const newList= listItems.filter(
            listItem => listItem.id != deletedListItemId
        )
        
        setListItems(newList)
    }
    /**
     * likeFunction sorts through all the listItem JSON objects 
     * in the listItens list and toggle like attribute for the 
     * listItem with ID=likeInput
     * 
     * @param {*} likeInput the ID of the listItem to be liked/unliked
     */
    const likeListItem=(likedListItemId)=>{
        const newList= listItems.map(
            (listItem)=>{   
                if ( listItem.id == likedListItemId) {
                    // return {...listItem, liked: !listItem.liked}
                    return {
                        id: listItem.id,
                        content: listItem.content,
                        liked: !listItem.liked
                    }
                } else {
                    return listItem
                }
            }
        )
        setListItems(newList)
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
                        (listItem)=>{   
                            return (
                                <Grid item>
                                    <ListItem item={listItem} deleteListItem={deleteListItem} likeListItem={likeListItem}/>
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
