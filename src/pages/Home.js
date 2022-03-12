import React from 'react'
import {makeStyles, Grid} from '@material-ui/core';

const useStyles =makeStyles(theme =>({
    root:{
        backgroundColor:"grey",
        width:'100%'
    },
    

}))

const Home = () => {
    const classes =useStyles();
  return (
      <>
    <div className = {classes.root}>Home</div>
    </>
  )
}

export default Home