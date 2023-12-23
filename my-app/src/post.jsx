import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

export default function ActionAreaCard({imgSrc}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={imgSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            <br /><br />
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div style={{display:'flex',alignItems: 'flex-end', justifyContent: 'space-between'}}>
                <ThumbUpIcon style={{paddingRight:'10px'}}/>like
              </div> 
              <div style={{display:'flex',alignItems: 'flex-end', justifyContent: 'space-between'}}>
                <CommentIcon style={{paddingRight:'10px'}}/>comment
              </div>
              <div style={{display:'flex',alignItems: 'flex-end', justifyContent: 'space-between'}}>
                <ShareIcon style={{paddingRight:'10px'}}/>share
              </div>
             </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
