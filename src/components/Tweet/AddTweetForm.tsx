import React from "react";

import classNames from "classnames";

import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import EmojiIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import {
  TextareaAutosize,
  Button,
  Avatar,
  CircularProgress,
} from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { useHomeStyles } from "../../pages/Home/theme";
import { useDispatch } from 'react-redux';
import { fetchAddTweet } from './../../store/ducks/tweets/actionCreators';


interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
}

const MAX_LENGHT = 280;

const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
  maxRows
}: AddTweetFormProps): React.ReactElement => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState<string>("");
  const textLimitPercent = Math.round((text.length / 280) * 100); // переменная для прогресса круга заполнения текстового поля
  const textCount = MAX_LENGHT - text.length;

  const handleChangeTextarea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    dispatch(fetchAddTweet(text));
    setText("");
  };

  return (
    <div>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
        <TextareaAutosize
          onChange={handleChangeTextarea}
          className={classes.addFormTextArea}
          placeholder="Что происходит?"
          value={text}
          maxRows={maxRows}
        />
      </div>
      <div className={classes.addFormBody}>
        <div className={classNames(classes.addFormBottomActions)}>
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGHT ? 100 : textLimitPercent}
                  style={
                    text.length >= MAX_LENGHT ? { color: "red" } : undefined
                  }
                  className={classes.mainCircular}
                />
                <CircularProgress
                  style={{ color: "rgba(0, 0, 0, 0.1)", position: "absolute" }}
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            disabled={textLimitPercent >= 100}
            color="primary"
            variant="contained"
          >
            Твитнуть
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTweetForm;
