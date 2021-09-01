import { Paper, TextField, Button, Grid } from '@material-ui/core'
import React from 'react'

/**
 * this is a react component created as a function
 *  this is a form for creating new instaPosts
 */
function InstaPostForm(props) {
    const [formText, setFormText] = React.useState("")
    const [formImgURL, setFormImgURL] = React.useState(null)
    
    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);

    function uploadImage(imgFile) {
        console.log("uploadingImage")
        console.log(imgFile)
        // creating location address for image file
        const tempImgSrc=URL.createObjectURL(imgFile)
        // saving the location address of the image file to formImgURL
        setFormImgURL(tempImgSrc)
        console.log(tempImgSrc)
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
                        <input type="file" 
                            // reference to this input element
                            ref={hiddenFileInput}
                            className="HiddenStyle"
                            // the image file is inside e.target.files[0]
                            onChange={(e)=>uploadImage(e.target.files[0])}
                        />

                        <Button onClick={()=>props.addInstaPost(formImgURL, formText)}>
                             Post 
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default InstaPostForm
