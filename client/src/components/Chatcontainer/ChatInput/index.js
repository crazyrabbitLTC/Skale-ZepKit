import React, { Component } from "react";
import { Form, Button } from "rimble-ui";
import styles from "./ChatInput.module.scss";

export default class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { validated: false, value: '' };
    this.instance = this.props.instance.methods;
    this.accounts = this.props.accounts;
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    e.target.parentNode.classList.add("was-validated");
    this.setState({ validated: true,
    value: '' });
    const tx = await this.instance.postMessage(this.state.value).send({from: this.accounts[0]});
    console.log("The Returned Transactions: ", tx);
  };

  handleValidation = e => {
    e.target.parentNode.classList.add("was-validated");
    this.setState({value: e.target.value});

  };

  render() {
    return (
      <div className={styles.chatInput}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field label="Chat Message" width={1} validated={this.state.validated}>
            <Form.Input
              type="text"
              required
              width={1}
              value={this.state.value}
              onChange={this.handleValidation}
            />
          </Form.Field>
          <Button type="submit" width={1}>
            send
          </Button>
        </Form>
      </div>
    );
  }
}
