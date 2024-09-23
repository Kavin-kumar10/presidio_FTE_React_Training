import { useSelector } from "react-redux";

export const Navbar = () => {
  const Amount = useSelector(state => state.portfolio.amount)
  return (
    <nav className="flex-row flex-space-between">
      <h1 style={{ fontWeight: 'bold' }}>Stock Market</h1>
      <h1>Balance: ${Amount}</h1>
    </nav>
  );
};
