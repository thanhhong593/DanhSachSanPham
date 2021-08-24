import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopMenu from "./component/TopMenu";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Product from "./page/Products";
const Home = () => <h2>Home</h2>;
export default function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Route path="/products">
          <Product />
        </Route>
        {/* exact chỉ khi nào bạn vào đúng trang about thì nó mới render ra thôi. tránh tình trạng đằng sau có thêm /j không có nội dung mà nó vẫn render ra trang trước đó.   */}
        <Route path="/" exact>
          <Home />
        </Route>
      </div>
    </Router>
  );
}
