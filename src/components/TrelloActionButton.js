import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import TextareaAutosize from "react-textarea-autosize";
import { Card, Button } from "@material-ui/core";

export default class TrelloActionButton extends Component {
  state = {
    formOpen: false,
    text: "",
  };

  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeForm = (e) => {
    this.setState({
      formOpen: false,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;

    const placeHolder = list
      ? "Enter list title..."
      : "Enter a title for this card";
    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card
          style={{
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px",
          }}
        >
          <TextareaAutosize
            placeHolder={placeHolder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
              overflow: "hidden",
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "#5aac44",
            }}
          >
            {buttonTitle}{" "}
          </Button>
          <Icon style={{cursor:'pointer',  marginLeft:8}}>close</Icon>
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openFormButtonGroup: {
    display: "flex",
    alignItems: "center",
    borderRedius: 3,
    cursor: "pointer",
    height: 37,
    width: 272,
    paddingLeft: 10,
  },
  formButtonGroup:{
    display: "flex",
    alignItems: "center",
    marginTop:8,
  }
};
