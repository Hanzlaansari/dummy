import React, { useState } from 'react';
// material
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddFriend from '../addFriend/addFriend'
import { AddFrnd, UnFriend } from '../actions/action'
import "./friendsStyle.css"
import { connect } from "react-redux";
let DispayFriends = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [error, setError] = useState(false);
  const openModal = () => {
    setCollapse(true)
  }
  const closeModal = () => {
    setCollapse(false)
  }
  let save = (value) => {

    if (value) {
      props.dispatch(AddFrnd({ id: Math.random().toString(), name: value }))
      closeModal();
    }
    else
      setError(true);

  }
  let closeError = () => {
    setError(false);
  }
  let unfriend = (id) => {
    props.dispatch(UnFriend({ id: id }));
  }
  return (
    <div className="display-friends">

      <Container>
        <AddFriend close={closeModal} open={collapse} error={error} closeError={closeError} addFriend={save} />
        <Grid container spacing={3}>
          {props.allFriends.map((friend, index) => {
            return <Grid key={index} className="col1" item xs={9} sm={4} lg={3} md={4}>
              <div className="friend-card">
                <div className="friend-card-img">
                  <img src="images/IMG_5590.JPG" alt={friend.name} />
                </div>
                <h3 className="friend-Name">{friend.name}</h3>
                <p className="mutual-f">1 mutual Friend</p>
                <Button variant="outlined" onClick={() => { unfriend(friend.id) }} className="unf-btn"><i className="fas fa-check"></i>Unfriend</Button>
              </div>
            </Grid>
          })}
          {/* add item grid */}
          <Grid className="col1 add-col" onClick={openModal} item xs={9} sm={4} lg={3} md={4}>
            <div className="friend-card">
              <div className="add-friend-card">
                <i className="fas fa-plus add-friend-font"></i>
              </div>
            </div>
          </Grid>



        </Grid>

      </Container>
    </div>
  )
}
const mapStateToProps = function (store) {
  return {
    allFriends: store.friendsReducer
  }
}
export default connect(mapStateToProps)(DispayFriends);