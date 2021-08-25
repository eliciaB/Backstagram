import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import CardMedia from '@material-ui/core/CardMedia'
import {useState} from 'react'

/**
 * this is a react component created as a function
 * this component emulates an instagram post
 */
function InstaPost(props) {
    

    return (
        <div>
            <Card className="InstaPostCard"> 
                <CardHeader
                    avatar={
                        <Avatar>
                        </Avatar>
                    }    
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="skljei"
                    subheader="fkljf"
                />
                {/* this image tag will display image at location stored in props.imgURL */}
                <img className="InstaPostMediaStyle"
                    src={props.imgURL}
                    alt=""
                />

                <CardContent>
                    OMGG feeling cuteee might delete later
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton>
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>

        
    )
}

export default InstaPost
