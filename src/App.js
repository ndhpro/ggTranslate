import React, { Component } from "react";
import "./App.css";
import HeaderBar from "./components/HeaderBar.jsx";
import TwoBtns from "./components/TwoBtns.jsx";
import Tabs from "./components/Tabs.jsx";
import TxtArea from "./components/BottomTxtArea.jsx";
import FooterBar from "./components/FooterBar.jsx";
import MeaningCard from "./components/MeaningCard.jsx";
import TransCard from "./components/TransCard.jsx";
import ExampleCard from "./components/ExampleCard.jsx";
import SymsCard from "./components/SymsCard.jsx";
import "./request"
import { PostApi } from "./request";

class App extends Component {
  state = {
    find: false,
    input: "",
    vie: "Bản dịch",
    example: '',
    meaning: '',
    smallsyms: '',
    syms: '',
  };

  componentDidUpdate() {
    console.log(PostApi('http://localhost:3001/getData',{"text": this.state.input})
    .then(response => {
      if (Object.keys(response).length !== 0 && !this.state.find){
        this.setState(response);
        this.setState({find: true});
      }
    })
    );
  }

  handleChange(event) {
    this.setState({find: false})
    event.target.value === ""
      ? this.setState({
          input: "",
          vie: "Bản dịch"
        })
      : this.setState({
          input: event.target.value,
          vie: "Đang dịch..."
        });
  }

  render() {
    return (
      <div>
        <HeaderBar />
        <TwoBtns />
        <Tabs />
        <div className="flex">
          <textarea
            id="leftArea"
            value={this.state.input}
            onChange={this.handleChange.bind(this)}
          />
          <textarea id="rightArea" disabled value={this.state.vie} />
        </div>
        <TxtArea count={this.state.input.length} />
        {this.state.find ? (
          <div>
            <div className="root flex">
              <MeaningCard
                input={this.state.input}
                meaning={this.state.meaning}
                className="grow"
              />
              <span style={{ marginLeft: 10 }} />
              <TransCard
                input={this.state.input}
                trans={this.state.trans}
                className="grow"
              />
            </div>
            <ExampleCard
              input={this.state.input}
              example={this.state.example}
            />
            <SymsCard
              input={this.state.input}
              syms={this.state.syms}
              smallsyms={this.state.smallsyms}
            />
          </div>
        ) : (
          <div />
        )}
        <a href="localhost:3000">
          <p id="feedback">Gửi phản hồi</p>
        </a>
        <FooterBar />
      </div>
    );
  }
}

export default App;
