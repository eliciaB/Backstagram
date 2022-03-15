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
function InstaPostPage(props) {

    const [openForm, setOpenForm] = React.useState(false)
    
    const [instaPostList, setInstaPostList] = React.useState([])

    React.useEffect(()=>{
        if (props.userData) {
            const userDataPosts = props.userData.posts
            userDataPosts.forEach(postId => {
                fetch("https://id54gv4pxf.execute-api.us-east-2.amazonaws.com/v1/posts/" + postId, {
                    method: "GET",
                    headers:  {
                        "Content-Type": "application/json"
                    }
                }).then(response => response.json()).then(responsejson => {
                    if (responsejson.statusCode === 200) {
                        const postData = JSON.parse(responsejson.body)
                        // debugger
                        setInstaPostList(currentPosts => [...currentPosts, {
                            id: postData.uuid,
                            caption: postData.caption,
                            imgURL: "https://id54gv4pxf.execute-api.us-east-2.amazonaws.com/v1/s3item/" + postData.imageUuid,
                            liked: false,
                            name: postData.userFullName,
                            time: postData.timePosted
                        }])      
                    }
                })    
            })
        }
    }, [props.userData])

    function addInstaPost(newPostImgUUID, newPostCaption) {
        const newInstaPost = {
            id: "fill me in with something real" + new Date().toString,
            caption: newPostCaption,
            imgURL: "https://id54gv4pxf.execute-api.us-east-2.amazonaws.com/v1/s3item/" + newPostImgUUID,
            liked: false, 
            name: props.userData.firstName + " " + props.userData.lastName,
            time: new Date().toString()
        }
       
        fetch("https://id54gv4pxf.execute-api.us-east-2.amazonaws.com/v1/posts" , {
            method: "POST", 
            body: JSON.stringify({
                caption: newPostCaption,
                imageUuid: newPostImgUUID,
                timePosted: new Date().toString(),
                userUuid: props.userData.userUuid,
                userFullName: props.userData.firstName + " " + props.userData.lastName
            }), 
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(responsejson => {
            if (responsejson.statusCode === 200) {
                setInstaPostList([...instaPostList, newInstaPost])
            }
        })    
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
            <Fab onClick={()=>setOpenForm(true)} style = {{
                right: 40,
                bottom: 40,
                position: 'fixed',
            }}>
                <AddIcon/>
            </Fab>
            <Modal open={openForm} onClose={()=>setOpenForm(false)}>
                <InstaPostForm addInstaPost={addInstaPost}/>
            </Modal>
        </div>
    )
}

export default InstaPostPage
