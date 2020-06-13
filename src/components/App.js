import React, { Component } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from './TrelloActionButton';
import {DragDropContext} from 'react-beautiful-dnd';

class App extends Component {

  onDragEnd=()=>{
    //todo
  }


  render() {
    const {lists} = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div className="App">
        <h2>Task Companion</h2>
        <div style={styles.listsContainer}>
        {lists.map((list) => (
          <TrelloList listID={list.id} title={list.title} key={list.id} cards={list.cards} />
        ))}
        <TrelloActionButton list/>
        </div>
      </div>
      </DragDropContext>
    );
  }
}

const styles={
  listsContainer:{
    display:'flex',
    flexDirection: 'row',
    //margin: 10,
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
