import React from 'react'
import InstaPostForm from './InstaPostForm'
import InstaPost from './InstaPost'

/**
 * this is a react component created as a function
 * this component is the page that holds the form for
 * creating instaPosts and all of the instaPosts
 */
function InstaPostPage() {
    const [newPost, setNewPost] = React.useState({
        id: 0,
        caption: "",
        imgURL: "",
        liked: false
    })
    
    function addInstaPost(newPostImgURL, newPostCaption) {
        setNewPost({
            id: 0,
            caption: newPostCaption,
            imgURL: newPostImgURL,
            liked: false
            
        })

    }


    return (
        <div>
            <InstaPostForm addInstaPost={addInstaPost}/>
            <InstaPost instaPostJSON={newPost} />
        </div>
    )
}

export default InstaPostPage
