import React from "react";
import Clothes from "./Clothes";

class Home extends React.Component {

    constructor(props) {
        super(props);
        //Chỉ định một state
        this.state = { website: "codecomplete", index: 1 };
    }

    countDown() {
        this.setState({
          index: this.state.index - 1
        });
      }
      countUp(){
        this.setState((prevState, props) => {
          return {
            index: prevState.index + 1
          }
        });
      }

    render() {
        return (
            <div>
                <h2>Welcome to the Home Page!</h2>
                <Clothes name="Quần jean" type="Skinny" color="Đen" size="L">Clothes 1</Clothes>
                <Clothes name="Váy" type="váy công chúa" color="Trắng" size="M">Clothes 2</Clothes>
                <hr></hr>
                <h1>Training reactjs {this.state.website} </h1>
                <hr></hr>
                <p>Giá trị {this.state.index}</p>
                <button className="btn btn-primary"
                    onClick={() => {
                        this.countUp()
                    }}
                >
                    Tăng
                </button>
                <button className="btn btn-danger"
                    onClick={() => {
                        this.countDown()
                    }}
                >
                    Giảm
                </button>
            </div>
        );
    }
}

export default Home;