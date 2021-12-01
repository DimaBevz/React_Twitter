import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Container, Typography } from "@material-ui/core";
import Tweet from "../../components/Tweet/Tweet";
import { SideMenu } from "../../components/SideMenu";
import {
  ListItem,
  ListItemAvatar,
  List,
  Button,
  Divider,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";

import { InputAdornment } from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";
import CircularProgress from "@mui/material/CircularProgress";

import { useHomeStyles } from "./theme";
import AddTweetForm from "../../components/Tweet/AddTweetForm";
import { SearchTextField } from "../../components/SearchTextField";
import { fetchTweets } from "./../../store/ducks/tweets/actionCreators";
import { fetchTags } from "./../../store/ducks/tags/actionCreators";
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from "../../store/ducks/tweets/selectors";
import { Tags } from "../../components/Tags";
import { Route } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { FullTweet } from "./FullTweet";

const Home = (): React.ReactElement => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();

  // таким способом будем получать все твиты, а не
  // const tweets = useSelector(state => state.tweets.items) ...
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu classes={classes} />
        </Grid>
        <Grid xs={6} md={6} item>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Route path="/home/:any">
                <BackButton/>
              </Route>
              <Route path={["/home", "/home/search"]} exact>
                <Typography variant="h6">Твиты</Typography>
              </Route>
              <Route path="/home/tweet">
                <Typography variant="h6">Твитнуть</Typography>
              </Route>
            </Paper>

            <Route path={["/home", "/home/search"]} exact>
              <Paper>
                <div className={classes.addForm}>
                  <AddTweetForm classes={classes} />
                </div>
                <div className={classes.addFormBottomLine} />
              </Paper>
            </Route>

            <Route path="/home" exact>
              {isLoading ? (
                <div className={classes.tweetsCentered}>
                  <CircularProgress />
                </div>
              ) : (
                tweets.map((tweet) => (
                  // color for loading (#57718A)
                  <Tweet key={tweet._id} classes={classes} {...tweet} />
                ))
              )}
            </Route>

            <Route path="/home/tweet/:id" component={FullTweet} exact />
          </Paper>
        </Grid>
        <Grid sm={3} md={3} item>
          <div className={classes.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Поиск по Твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Tags classes={classes} />
            <Paper className={classes.rightSideBlock}>
              <Paper
                className={classes.rightSideBlockHeader}
                variant="outlined"
              >
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://images.unsplash.com/photo-1474031317822-f51f48735ddd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock of Same"
                    secondary={
                      <Typography component="span" variant="body2">
                        @FavDockOfSame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAdd />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
