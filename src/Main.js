import React, { Component } from "react";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 2,
    };
  }
  increment = () => {
    this.setState({ number: this.state.number + 1 });
  };
  decrement = () => {
    this.setState({ number: this.state.number - 1 });
  };
  neutral = () => {
    this.setState({ number: this.state.number - this.state.number });
  };
  render() {
    return (
      <>
        <div className="flex flex-col bg-gradient-to-r from-cyan-500 to-fuchsia-500 justify-center h-screen w-auto items-center text-center">
          <div className="border-8 border-black p-20">
            <div>
              {" "}
              <h1 className="text-5xl font-bold item-center text-center">
                React Counter
              </h1>
            </div>
            <h1 class="text-3xl font-bold mt-10" id="number">
              {this.state.number}
            </h1>
            <div className="flex gap-2 my-10 place-content-center items-centers text-center">
              <div>
                <button
                  className="px-6 text-2xl rounded-full py-2 text-white font-bold bg-green-600"
                  onClick={this.increment}
                >
                  Increment
                </button>
              </div>
              <div>
                <button
                  className="px-6 text-2xl rounded-full py-2 text-white font-bold bg-red-600"
                  onClick={this.decrement}
                >
                  Decremrnt
                </button>
              </div>
              <div>
                <button
                  className="px-6 text-2xl rounded-full py-2 text-white font-bold bg-blue-600"
                  onClick={this.neutral}
                >
                  Neutral
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Main;
