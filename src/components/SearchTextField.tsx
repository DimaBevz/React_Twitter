import { TextField, Theme, withStyles } from "@material-ui/core";


export const SearchTextField = withStyles((theme: Theme) => ({
    root: {
      "& .MuiOutlinedInput-root": {
        borderRadius: 30,
        backgroundColor: "#E6ECF0",
        padding: 0,
        paddingLeft: 15,
  
        "& .Mui-focused": {
          backgroundColor: "#fff",
          "& fieldset": {
            borderWidth: 1,
            // borderColor: theme.palette.primary.light,
            borderColor: "red",
          },
          "& svg path": {
            fill: theme.palette.primary.main,
          },
        },
        "&:hover": {
          "& fieldse": { borderColor: "transparent" },
        },
        "& fieldset": {
          borderColor: "transparent",
          borderWidth: 1,
        },
      },
      "& .MuiOutlinedInput-input": {
        padding: "12px 14px 14px 5px",
      },
    },
  }))(TextField);