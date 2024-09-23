import { StockListItem } from './StockListItem';
import { useSelector } from 'react-redux';

export const StockList = () => {
  const allStocks = useSelector(state => state.portfolio.allStocks)

  return (
    <div className="flex-column gap-1">
      <h2>Stock List</h2>

      <ul className="flex-column gap-1">
        {allStocks.map((stock) => (
          <StockListItem key={stock.id} stock={stock}>
          </StockListItem>
        ))}
      </ul>
    </div>
  );
};
