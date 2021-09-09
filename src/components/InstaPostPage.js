import React from 'react'
import InstaPostForm from './InstaPostForm'
import InstaPost from './InstaPost'
import Grid from '@material-ui/core/Grid'

/**
 * this is a react component created as a function
 * this component is the page that holds the form for
 * creating instaPosts and all of the instaPosts
 */
function InstaPostPage() {

    
    const [instaPostList, setInstaPostList] = React.useState([
       { 
            id: 0,
            caption: "iefjkjdsd",
            imgURL: "",
            liked: false,
            name: "Elicia Back",
            time: new Date().toString()
        },
        { 
            id: 1,
            caption: "jfojlak",
            imgURL: "",
            liked: false,
            name: "Elicia Back",
            time: new Date().toString()
        },    
    ])

    function addInstaPost(newPostImgURL, newPostCaption) {
        // creating new ID for new insta post
        const newId = instaPostList[instaPostList.length-1].id+1;
        const newInstaPost = {
            id: newId,
            caption: newPostCaption,
            imgURL: newPostImgURL,
            liked: false, 
            name: "Elicia Back",
            time: new Date().toString()
        }
        
        setInstaPostList(   [...instaPostList, newInstaPost])
    }


    return (
        <div>
            <InstaPostForm addInstaPost={addInstaPost}/>
            <Grid container alignItems="center" direction="column"  justify="flex-start" spacing={3}>
                {
                    instaPostList.map(
                        (instaPostJSONFromList)=>{   
                            return (
                                <Grid item>
                                    <InstaPost instaPostJSON={instaPostJSONFromList}/>
                                </Grid>
                            ) 
                        }
                    )
                }
            </Grid>
        </div>
    )
}

export default InstaPostPage
