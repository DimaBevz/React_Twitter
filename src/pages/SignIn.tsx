import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import ModalWindow from "../components/ModalWindow/ModalWindow";


export const useStylesSignIn = makeStyles(() => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  blueSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#71C9F8",
    flex: "0 0 50%",
    overflow: "hidden",
    position: "relative",
  },
  blueSideBigIcon: {
    position: "absolute",
    left: "60%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "160%",
    height: "200%",
  },
  blueSideListInfo: {
    position: "relative",
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: 380,
    "& h6": {
      display: "flex",
      alignItems: "center",
      color: "#fff",
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  blueSideListInfoIcon: {
    fontSize: 33,
    marginRight: 15,
  },
  loginSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 50%",
    overflow: "hidden",
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 55,
    marginTop: 20,
  },
  loginSideBtn: {
    marginTop: 20,
  },
  windowDialog: {
    margin: "0 auto",
  },
  loginSideField: {
    marginBottom: 20,
  },
}));

export const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStylesSignIn();
  const [visibleModal, setVisibleModal] = React.useState<"signIn" | "signUp">();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal("signIn");
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal("signUp");
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Читайте о том, что вам интерестно.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleOutlineIcon className={classes.blueSideListInfoIcon} />
              Узнайте о чём говорят в мире.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <ModeCommentOutlinedIcon
                className={classes.blueSideListInfoIcon}
              />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color="primary"
            className={classes.loginSideTwitterIcon}
          />
          <Typography variant="h4" className={classes.loginSideTitle}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.loginSideBtn}
            onClick={handleClickOpenSignUp}
          >
            Зарегистрироваться
          </Button>

          <Button
            variant="outlined"
            color="primary"
            fullWidth
            className={classes.loginSideBtn}
            onClick={handleClickOpenSignIn}
          >
            Войти
          </Button>
          {/* Модальное окно входа */}
          <ModalWindow
            visible={visibleModal === "signIn"}
            onClose={handleCloseModal}
            classes={classes}
            title="Войти в аккаунт"
          >
            <TextField
              className={classes.loginSideField}
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              className={classes.loginSideField}
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />

            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">
                Войти
              </Button>
            </DialogActions>
          </ModalWindow>

          {/* Модальное окно регистрации */}
          <ModalWindow
            visible={visibleModal === "signUp"}
            onClose={handleCloseModal}
            classes={classes}
            title="Создайте учётную запись"
          >
            <TextField
              className={classes.loginSideField}
              autoFocus
              margin="dense"
              id="name"
              label="Имя"
              type="name"
              fullWidth
            />
            <TextField
              className={classes.loginSideField}
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              className={classes.loginSideField}
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />

            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">
                Далее
              </Button>
            </DialogActions>
          </ModalWindow>
        </div>
      </section>
    </div>
  );
};

