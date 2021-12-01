import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useHomeStyles } from "./theme";
import { fetchTweetData } from "./../../store/ducks/tweet/actionCreators";
import {
  selectTweetDataItems,
  selectIsTweetDataLoading,
} from "./../../store/ducks/tweet/selectors";
import Tweet from "../../components/Tweet/Tweet";
import { CircularProgress } from "@material-ui/core";

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweetData = useSelector(selectTweetDataItems);
  const isLoading = useSelector(selectIsTweetDataLoading);
  const params: { id?: string } = useParams();
  const id = params.id;

  console.log(tweetData);

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className={classes.tweetsCentered}>
        <CircularProgress />
      </div>
    );
  }

  if (tweetData) {
    return <Tweet classes={classes} {...tweetData} />;
  }

  return null;
};
