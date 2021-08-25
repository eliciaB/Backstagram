import React from 'react'
import InstaPostForm from './InstaPostForm'
import InstaPost from './InstaPost'

/**
 * this is a react component created as a function
 * this component is the page that holds the form for
 * creating instaPosts and all of the instaPosts
 */
function InstaPostPage() {
    const [newPostImgURL, setNewPostImgURL] = React.useState(null)
    
    return (
        <div>
            <InstaPostForm setNewPostImgURL={setNewPostImgURL}/>
            <InstaPost imgURL={newPostImgURL}/>
        </div>
    )
}

export default InstaPostPage
