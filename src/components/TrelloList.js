import React from "react";
import TrelloCard from './TrelloCard'; 

export default function TrelloList({title}) {
    return (
        <div style={styles.container}>
      <h3>{title}</h3>
      <TrelloCard/>
      <TrelloCard/>
      <TrelloCard/>
      <TrelloCard/>
    </div>
    )
}

const styles={
    container:{
        backgroundColor:'#ccc',
        borderRadius:3,
        width:300,
        padding:8,
    }
}
