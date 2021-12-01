import React from 'react';
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router';

export const BackButton: React.FC = (): React.ReactElement => {
    const history = useHistory();

    const handleClickButton = () => {
        history.goBack();
    }

    return (
      <IconButton onClick={handleClickButton} color="primary" style={{marginRight: 20}}>
        <ArrowBackIcon/>
      </IconButton>
    )
}