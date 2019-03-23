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

class App extends Component {
  state = {
    input: "",
    vie: "Bản dịch",
    meaning: [
      {
        wordtype: "Danh từ",
        meaning:
          "an electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.",
        example:
          '"The laws were designed to prosecute people who hack into computers and steal information."',
        syms: [
          "personal computer",
          "PC",
          "laptop",
          "netbook",
          "ultraportable",
          "desktop",
          "terminal",
          "mainframe",
          "Internet appliance",
          "puter"
        ]
      },
      {
        wordtype: "Động từ",
        meaning:
          "an electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.",
        example:
          '"The laws were designed to prosecute people who hack into computers and steal information.",',
        syms: [
          "personal computer",
          "PC",
          "laptop",
          "netbook",
          "ultraportable",
          "desktop",
          "terminal",
          "mainframe",
          "Internet appliance",
          "puter"
        ]
      }
    ],
    trans: [
      {
        wordtype: "Danh từ",
        translate: [
          {
            name: "máy điện toán",
            meaning: ["computer", "microcomputer"]
          },
          {
            name: "máy tính",
            meaning: [
              "computer",
              "calculator",
              "counter",
              "comptometer",
              "totalizator"
            ]
          },
          {
            name: "người tính toán",
            meaning: ["computer", "counter"]
          }
        ]
      },
      {
        wordtype: "Động từ",
        translate: [
          {
            name: "máy điện toán",
            meaning: ["computer", "microcomputer"]
          },
          {
            name: "máy tính",
            meaning: [
              "computer",
              "calculator",
              "counter",
              "comptometer",
              "totalizator"
            ]
          }
        ]
      }
    ],
    example: [
      "there's something wrong with my computer",
      "computer network",
      "she shut down her computer",
      "Since then, the craft appears to have rebooted its own on-board computer more than 60 times."
    ],
    smallsyms: [
      {
        wordtype: "Danh từ",
        sym: ["personal computer", "PC", "laptop"]
      },
      {
        wordtype: "Động từ",
        sym: ["netbook", "ultraportable"]
      }
    ],
    syms: [
      {
        wordtype: "Danh từ",
        sym: [
          "personal computer",
          "PC",
          "laptop",
          "netbook",
          "ultraportable",
          "desktop",
          "terminal",
          "mainframe",
          "Internet appliance",
          "puter"
        ]
      },
      {
        wordtype: "Động từ",
        sym: ["personal computer", "PC", "laptop", "netbook", "ultraportable"]
      }
    ]
  };

  handleChange(event) {
    event.target.value === ""
      ? this.setState({
          input: "",
          vie: "Bản dịch"
        })
      : this.setState({
          input: event.target.value,
          vie: "máy vi tính"
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
        {this.state.input.length !== 0 ? (
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
