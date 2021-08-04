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


const InstaPost = () => {
    return (
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
            {/* ToDo: put card media here */}

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


        
    )
}

export default InstaPost
