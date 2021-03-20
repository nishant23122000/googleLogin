import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  user: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  },

  image: {
    width: "250px",
    height: "250px",
    borderRadius: "50px",
    margin: "20px 200px"

  }

}));
export default function App() {
  const classes = useStyles();
  const [user, setUser] = React.useState({});
  return (
    <div className='home'>
      <Navbar
        user={user}
        setUser={setUser}
      />
      {
        !user.email ? (
          <div><h1>Welcome To React Website</h1></div>
        ) : (
          <div className={classes.user}>
            <Typography variant="h4" className={classes.title}>
              Hello , <b>{user.email}</b>
            </Typography>
            <div className={classes.imgSection}>
              <img className={classes.image} src={user.image} alt="user" />
            </div>

          </div>

        )
      }
    </div>
  );
}
