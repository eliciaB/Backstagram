import React from 'react'
import InstaPostForm from './InstaPostForm'
import InstaPost from './InstaPost'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';

/**
 * this is a react component created as a function
 * this component is the page that holds the form for
 * creating instaPosts and all of the instaPosts
 */
function InstaPostPage() {

    const [openForm, setOpenForm] = React.useState(false)
    
    const [instaPostList, setInstaPostList] = React.useState([
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

    /**
     * likeFunction sorts through all the instaPost JSON objects 
     * in the instaPost list and toggle like attribute for the 
     * instaPost with ID=likeInput
     * 
     * @param {*} likeInput the ID of the instaPost to be liked/unliked
     */
    function likeFunction(likeInput) {
        const newList= instaPostList.map(
            (instaPost)=>{   
                if ( instaPost.id == likeInput) {
                    return {...instaPost,liked: !instaPost.liked}
                } else {
                    return instaPost
                }
            }
        )
        setInstaPostList(newList)
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
                                    <InstaPost instaPostJSON={instaPostJSONFromList}
                                        likeFunction={likeFunction}
                                    />
                                </Grid>
                            ) 
                        }
                    )
                }
            </Grid>
            <Fab onClick={()=>setOpenForm(true)}>
                <AddIcon/>
            </Fab>
            <Modal open={openForm} onClose={()=>setOpenForm(false)}>
                <InstaPostForm addInstaPost={addInstaPost}/>
            </Modal>
        </div>
    )
}

export default InstaPostPage
