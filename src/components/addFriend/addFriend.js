import React from 'react';
// import material
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './addFriendStyle.css';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
let AddFriend =(props)=>{


    const [name, setName] = React.useState("");
    const classes = useStyles();  
    const handleChange = event => {
        setName(event.target.value);
        props.closeError();
      };
    
    return (
        <div >
          <Modal 
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={props.open}
            onClose={props.handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade  in={props.open}>
              <div className={"add-f-modal "+classes.paper}>
                <h2 id="transition-modal-title">Add Friend</h2>
                {/* <TextField id="standard-basic" label="Standard" onChange={e=>console.log(e)}/> */}
                <FormControl fullWidth className={classes.formControl}  >
        <InputLabel htmlFor="component-error">Enter Friend's Name</InputLabel>
        <Input
          id="component-error"
          value={name}
          onChange={handleChange}
          placeholder="Enter Friend's Name"
          aria-describedby="component-error-text"
        />
        {props.error?
       <FormHelperText style={{color:"red"}} id="component-error-text">Please Enter a Name First</FormHelperText>
        :""
    }
      </FormControl>
                <div className="btn-div">
                <Button variant="contained" onClick={()=>{props.addFriend(name); setName("")}} color="primary">Add</Button>
                <Button variant="contained" onClick={props.close}>Cancel</Button>
                </div>
              </div>
            </Fade>

          </Modal>
        </div>
      );
}
export default AddFriend;