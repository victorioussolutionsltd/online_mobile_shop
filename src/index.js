import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {ProductProvider} from './Context'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();







// const Product = props => {
//   const plus = () => {
//     // Call props.onVote to increase the vote count for this product
//   };
//   const minus = () => {
//     // Call props.onVote to decrease the vote count for this product
   
    
//   };
//   return (
//     <li>
//       <span>{ props.item.name}</span> - <span>votes: { props.item.votes}</span>
//       <button onClick={plus}>+</button>{" "}
//       <button onClick={minus}>-</button>
//     </li>
//   );
// };

// class GroceryApp extends React.Component {

//    // Finish writing the GroceryApp class
 
//   onVote = (dir, index, event) => {
//     // Update the products array accordingly ...
//     this.props.products[index].votes += 1;
//     console.log(index)

//   };

//   render() {

//     return (
//       <ul>
//         {/* Render an array of products, which should call this.onVote when + or - is clicked */}
//         { this.props.products.map((item, index) => <Product key={index} item={item} onVote={this.onVote.bind(this, index)}/>)}
//       </ul>
//     );
//   }
// }

// document.body.innerHTML = "<div id='root'></div>";

// ReactDOM.render(<GroceryApp
//   products={[
//     { name: "Oranges", votes: 0 },
//     { name: "Apples", votes: 0 },
//     { name: "Bananas", votes: 0 }
//   ]}
// />, document.getElementById('root'))