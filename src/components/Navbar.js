import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Login from "./Login";
import Logout from "./Logout";


const CLIENTcode = "928461249024-ugbiksni2621u5kv6vnq6ikrptdbjaah.apps.googleusercontent.com";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    float: "right",
  },
  title: {
    flexGrow: 1,
  },

}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const { setClasses, user, setUser } = props;

  return (
    <div className={classes.root}>

      <AppBar color="inherit">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            Nishant Patel
            </Typography>
          {auth ? (
            <Logout
              clientId={CLIENTcode}
              user={user}
              setClasses={setClasses}
              setUser={setUser}
              setAuth={setAuth}
            />
          ) : (
            <>
              <Login clientId={CLIENTcode} setUser={setUser} setAuth={setAuth} />

            </>
          )}
        </Toolbar>
      </AppBar>

      <Toolbar />

    </div>
  );
}
