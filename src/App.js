import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeDealer from "./pages/Home-Dealer/Home-Dealer";
import HomeOutlet from "./pages/Home-Outlet/Home-Outlet";
import Produk from "./pages/XL7/XL7";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <HomeDealer />} />
          <Route path="/outlet" exact render={() => <HomeOutlet />} />
          <Route path="/produk" exact render={() => <Produk />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
