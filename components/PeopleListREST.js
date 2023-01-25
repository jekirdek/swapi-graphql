import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import HeightIcon from "@mui/icons-material/Height";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CakeIcon from "@mui/icons-material/Cake";

const PeopleListREST = ({ data }) => {
  return (
    <Grid container spacing={5}>
      {data.results.map((result, i) => (
        <Grid key={i} item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea href="/detail-page/rest">
              <CardMedia
                component="img"
                height="170"
                image={
                  result.gender === "male"
                    ? "/male.jpeg"
                    : result.gender === "female"
                    ? "/female.jpg"
                    : "/yoda.webp"
                }
                alt="card image"
                sx={{ objectFit: "cover", aspectRatio: "1/1" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {result.name}
                </Typography>
                <List sx={{ p: 0 }}>
                  <ListItem sx={{ p: 0 }}>
                    <ListItemAvatar>
                      <Avatar>
                        <HeightIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Height" secondary={result.height} />
                  </ListItem>
                  <ListItem sx={{ p: 0 }}>
                    <ListItemAvatar>
                      <Avatar>
                        <FitnessCenterIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Mass" secondary={result.mass} />
                  </ListItem>
                  <ListItem sx={{ p: 0 }}>
                    <ListItemAvatar>
                      <Avatar>
                        <CakeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Birth Year"
                      secondary={result.birth_year}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PeopleListREST;
