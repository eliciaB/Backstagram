import { Paper, TextField, Button, Grid } from '@material-ui/core'
import React, { useState } from 'react'

/**
 * this is a react component created as a function
 *  this is a form for creating new instaPosts
 */
function InstaPostForm(props) {
    const [formText, setFormText] = React.useState("")
    const [formImgURL, setFormImgURL] = React.useState(null)
    const [formUUIDImg, setFormUUIDImg] = React.useState("")
    
    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);

    function uploadImage(imgFile) {
        // console.log("uploadingImage")
        // console.log(imgFile)
        // // creating location address for image file
        // const tempImgSrc=URL.createObjectURL(imgFile)
        // // saving the location address of the image file to formImgURL
        // setFormImgURL(tempImgSrc)
        // console.log(tempImgSrc)

        let formData = new FormData()
        formData.append("file", imgFile)
        fetch("https://id54gv4pxf.execute-api.us-east-2.amazonaws.com/v1/s3item", {
            method: "POST",
            body: formData, 
            headers: {
                "file-ext": ".jpg",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => response.json()).then(responsejson => {
            if (responsejson.statusCode === 200) {
                const imageData = JSON.parse(responsejson.body)
                const imageUUID = imageData.item_s3_id
                setFormUUIDImg(imageUUID)
                const imgURL = "https://id54gv4pxf.execute-api.us-east-2.amazonaws.com/v1/s3item/" + imageUUID
                setFormImgURL(imgURL)
            }
        })    


    }    

    return (
        <div>
            <Paper className="InstaPostFormStyle">
                <img className="InstaPostMediaStyle"
                    src={formImgURL}
                    alt=""
                />
                <Grid container 
                    alignItems="center" 
                    direction="row"
                    justify="center"
                >
                    <Grid item xs>
                        <TextField variant="outlined"
                            value={formText} 
                            onChange={
                                (event)=>{
                                    // the text inside the TextField is stored in event.target.value
                                    setFormText(event.target.value)
                                }
                            }
                        />
                    </Grid>
                    <Grid item container xs
                        alignItems="center" 
                        direction="column"
                        justify="center"
                    >
                        {/* When add image button is pressed, it will click the input for files */}
                        <Button onClick={()=>hiddenFileInput.current.click()}>
                            Add image
                        </Button>
                        <input type="file" name = "file"
                            // reference to this input element
                            ref={hiddenFileInput}
                            className="HiddenStyle"
                            // the image file is inside e.target.files[0]
                            onChange={(e)=>uploadImage(e.target.files[0])}
                        />

                        <Button onClick={()=>{
                            setFormImgURL(null)
                            setFormText("")
                            props.addInstaPost(formUUIDImg, formText)
                        }}>
                             Post 
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default InstaPostForm
