import React from "react";

import Paper from "@material-ui/core/Paper";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SharedIcon from "@material-ui/icons/ReplyOutlined";
import { IconButton, Typography, Avatar } from "@material-ui/core";
import classNames from "classnames";
import { useHomeStyles } from "../../pages/Home/theme";
import { Link } from "react-router-dom";


interface TweetProps {
  _id: string;
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullName: string;
    userName: string;
    avatarUrl: string;
  };
}

const Tweet: React.FC<TweetProps> = ({
  _id,
  text,
  user,
  classes,
}: TweetProps): React.ReactElement => {
  return (
    <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
    <Paper
      className={classNames(classes.tweet, classes.tweetsHeader, classes.tweetContent)}
      variant="outlined"
    >
      <Avatar
        className={classes.tweetAvatar}
        alt={`Аватарка пользователя ${user.fullName}`}
        src={user.avatarUrl}
      />

      <div className={classes.tweetContentText}>
        <Typography>
          <b>{user.fullName}</b>&nbsp;
          <span className={classes.tweetUserName}>@{user.userName}</span>
          &nbsp;
          <span className={classes.tweetUserName}>&middot;</span>&nbsp;
          <span className={classes.tweetUserName}>1 ч.</span>
        </Typography>
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>
        <div className={classes.tweetFooter}>
          <div>
            <IconButton>
              <CommentIcon style={{ fontSize: 20 }} />
            </IconButton>
            <span>1</span>
          </div>
          <div>
            <IconButton>
              <RepostIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <LikeIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <SharedIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
        </div>
      </div>
    </Paper>
    </Link>
  );
};

export default Tweet;
