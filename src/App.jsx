import React from 'react'
import { useState } from 'react'
import './App.css'

class ShopItemClass extends React.Component {
  render() {
    return (
      <div className="main-content">
        <h2>{this.props.brand}</h2>
        <h1>{this.props.title}</h1>
        <h3>{this.props.description}</h3>
        <div className="description">{this.props.descriptionFull}</div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{this.props.currency}{this.props.price}.00</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    )
  };
}

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass
        brand={props.value.brand}
        title={props.value.title}
        description={props.value.description}
        currency={props.value.currency}
        price={props.value.price}
        descriptionFull={props.value.descriptionFull}
        />
    </div>
  </div>
  )
}

export default App
