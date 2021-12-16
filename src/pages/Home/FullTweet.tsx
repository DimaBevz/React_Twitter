import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useHomeStyles } from "./theme";
import { fetchTweetData, setTweetData } from "./../../store/ducks/tweet/actionCreators";
import {

  selectIsTweetDataLoading, selectTweetDataItem,
} from "./../../store/ducks/tweet/selectors";
import Tweet from "../../components/Tweet/Tweet";
import { CircularProgress } from "@material-ui/core";

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweetData = useSelector(selectTweetDataItem);
  const isLoading = useSelector(selectIsTweetDataLoading);
  const params: { id?: string } = useParams();
  const id = params.id;

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }

    return () => {
      dispatch(setTweetData(undefined));
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
