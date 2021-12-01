import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { useStylesSignIn } from "../../pages/SignIn";

interface ModalWindowProps {
  title?: string;
  children: React.ReactNode;
  classes?: ReturnType<typeof useStylesSignIn>;
  visible?: boolean;
  onClose: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  title,
  children,
  classes,
  onClose,
  visible = false,
}: ModalWindowProps): React.ReactElement | null => {

// делаем для того, чтобы не добавлялись лишниие элементы в ДОМ дерево
if (!visible) {
  return null;
}

  return (
    <Dialog
      open={visible}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      // className={classes.windowDialog}
    >
      <DialogTitle id="form-dialog-title">
        {onClose ? (
          <IconButton
            aria-label="close"
            color="primary"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
       {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ModalWindow;
