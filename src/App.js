import Pages from "./pages/Pages.jsx";
import Category from "./components/Category.jsx";

//On importe le browser router dans app.js parce qu'il faut qu'il englobe tous les éléments pour fonctionner.
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
