import { useDispatch } from "react-redux";
import { RemoveStock } from "../Redux/PortfolioSlice";

export const PortfolioItem = ({ stock }) => {
  const dispatch = useDispatch();
  const handleSell = () => {   
    dispatch(RemoveStock(stock))
  }

  return (
    <li className="stock-list-item" key={stock.id}>
      <div className="flex-row gap-0-5 stock-name">
        <span>{stock.name}</span>
        <span>({stock.count})</span>
      </div>
      <div>{ (stock.count * stock.price).toFixed(2) }</div>
      <button className="sell-button" onClick={handleSell}>Sell</button>
    </li>
  );
};
