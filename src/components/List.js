import React from 'react'
import ListItem from './ListItem'
import {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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
        setListItems(   [...listItems, formText]     )
    }

    const deleteListItem=(deleteListItemName)=>{
        const newList= listItems.filter(
            (itemName)=>{   
                if (itemName==deleteListItemName) {
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
                        (itemName)=>{   
                            return (
                                <Grid item>
                                    <ListItem name= {itemName} deleteListItem={deleteListItem}/>
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
