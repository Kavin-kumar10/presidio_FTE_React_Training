import { useDispatch,useSelector } from "react-redux";
import { AddStock } from "../Redux/PortfolioSlice";

export const StockListItem = ({ stock }) => {
  const mystock = useSelector(state => state.portfolio.stocks)
  const dispatch = useDispatch();
  
  const handleBuy = () => {
    dispatch(AddStock(stock))
    console.log(mystock);
  }

  return (
    <li className="stock-list-item" key={stock.id}>
      <div className="stock-name">{stock.name}</div>
      <div>${stock.price.toFixed(2)}</div>
      <button className="buy-button" onClick={handleBuy}>Buy</button>
    </li>
  );
}