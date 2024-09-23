import { useSelector } from "react-redux";
import { PortfolioItem } from "./PortfolioItem";


export const Portfolio = () => {
  const MyStocks = useSelector(state => state.portfolio.stocks)

  return (
    <div className="flex-column gap-1">
      <h2>Portfolio</h2>

      <ul className="flex-column gap-1">
        {
          MyStocks.map((elem)=>
            <PortfolioItem stock={elem}/>
          )
        }
      </ul>
    </div>
  );
};
