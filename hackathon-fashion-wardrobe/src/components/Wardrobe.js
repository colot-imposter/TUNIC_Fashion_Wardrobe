import React, { Component } from "react";
import WardrobeDisplay from "../containers/WardrobeDisplay.js";
import users from "../data/userData.js";
import GetAllWardrobe from "./GetAllWardrobe";

export default class Wardrobe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clothingItem: []
    };

    this.LengthFilter = this.LengthFilter.bind(this);
    this.WeightFilter = this.WeightFilter.bind(this);
    this.ColorFilter = this.ColorFilter.bind(this);
  }

  LengthFilter(e) {
    this.setState({
      sleeves: e.target.value
    });
    console.log("clothingItem", e.target.value);
  }
  WeightFilter(e) {
    this.setState({
      weight: e.target.value
    });
  }

  ColorFilter(e) {
    this.setState({
      color: e.target.value
    });
  }

  render() {
    // users.map(clothingItem) => {
    //    if (clothingItem === "short")
    //    console.log('hit1');
    //   return( <WardrobeDisplay key={clothingItem.image} clothingItem={clothingItem.sleeves.short}/>
    // })

    return (
      <div className="container">
        <div className="filters card">
          <h3>Filter</h3>
          <form>
            <select
              onChange={this.LengthFilter}
              id="sleevelength"
              value={this.state.value}
              className="wardrobeSelect"
            >
              <option value="">Sleeve Length</option>
              <option value="short">Short</option>
              <option value="long">Long</option>
              <option value="none">None</option>
            </select>
            <br />
            <select
              onChange={this.WeightFilter}
              id="WeightFilter"
              value={this.state.value}
              className="wardrobeSelect"
            >
              <option value="">Fabric Weight</option>
              <option value="light">Light</option>
              <option value="medium">Medium</option>
              <option value="heavy">Heavy</option>
            </select>
            <br />
            <select
              onChange={this.ColorFilter}
              id="color"
              value={this.state.value}
              className="wardrobeSelect"
            >
              <option value="">Color</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
              <option value="gray">Gray</option>
              <option value="white">White</option>
              <option value="red">Red</option>
            </select>
            <br />
            <select
              onChange={this.MoodFilter}
              id="mood"
              value={this.state.value}
              className="wardrobeSelect"
            >
              <option value="">Mood</option>
              <option value="Happy">Blue</option>
              <option value="Angry">Black</option>
              <option value="Shy">Gray</option>
              <option value="Sexy">White</option>
              <option value="Gloomy">Red</option>
            </select>
            <br />
          </form>
          <div className="viewWardrobe">
            <button className="addButtonWardrobe">
              <a href="/newItem">Add Item</a>
            </button>
          </div>
        </div>

        {/* HERE we are bringing in the wardrobe items */}
        <div className="allWardrobe card">
          <h2>Wardrobe</h2>
          <GetAllWardrobe />
        </div>
      </div>
    );
  }
}

// export default class Wardrobe extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           images: []
//       }
//   }
//
//
//
//   componentWillMount = () => {
//     this.setState({images: [this.props.images]}, function () {
//       this.props.updatedWardrobe(this.state.images);
//     })
//   }

//   render() {
//     return (
//     <div>
//       <div className="steps">
//         <h1>Wardrobe</h1>
//       </div>
//       <div className= 'previewbody' style= {styles.previewbody}>
//         <div>
//           <h3>Filter</h3>
//             <a to="/" onClick={this.handleClickForLengthFilter}>Sleeve Length</a>
//             <br></br>
//             <a to="/" onClick={this.handleClickForLengthWeight}>Item Weight</a>
//             <br></br>
//             <a onClick={this.handleClickForColorFilter}>Color</a>
//           </div>
//           <div>
//             <ImageDisplay />
// />          </div>
//         <div className="todaypreview" style={styles.clothingpreview}>
//           <img
//           src="http://i3.cpcache.com/product/606802989/unicorn_kids_dark_tshirt.jpg?color=Navy&height=460&width=460&qv=90&Filters="
//           alt="unicorn shirt"
//         />
//         </div>
//       </div>
//     </div>
//     );
//   }
// }
