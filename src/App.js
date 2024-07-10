import React from "react";

import {
  Typography,
  AppBar,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="realtive">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary">
              Hello everyone. This is a photo album and I'm trying to make so we
              can see how screen looks like. so we can see how sentence as long
              as possible.
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Second action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1597248881519-db089d3744a5"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Zeynep Tuba Acat
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Deneme sürümü
        </Typography>
      </footer>
    </>
  );
};

export default App;
