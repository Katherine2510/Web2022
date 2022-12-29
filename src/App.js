import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Slide from "./component/Slide";
import ServiceHome from "./component/ServiceHome";
import GalleryHome from "./component/GalleryHome";
import OfferBlock from "./component/OfferBlock";
import Review from "./component/Review";
import BlogHome from "./component/BlogHome";
import Blog from "./component/Blog";
import Footer from "./component/Footer";
import Cars from "./component/Cars";
import Store from "./component/Store";
import { Routes, Route } from "react-router-dom";
import ThisStore from "./component/ThisStore";
import Warranty from "./component/Warranty";
import News from "./component/News";
import Contact from "./component/Contact";
import Cars1 from "./component/Cars1";
import Admin from "./component/Admin";
import ThisFactory from "./component/ThisFactory";
import ThisWarranty from "./component/ThisWarranty";
import Products from "./component/Products";
import AdminDo from "./component/AdminDo";
import Factories from "./component/Factories";
import Warranty_centers from "./component/Warranty_centers";
import Stores from "./component/Stores";
import Login from "./component/Login/Login";
import StoreProduct from "./component/StoreProduct/StoreProduct";
import FactoryProduct from "./component/FactoryProduct/FactoryProduct";
import WarrantyProduct from "./component/WarrantyProduct/WarrantyProduct";

import ViewProductByFactory from './component/AdminStatistic/ViewProductByFactory';
import ViewProductByStore from './component/AdminStatistic/ViewProductByStore';
import ViewProductByWarranty from './component/AdminStatistic/ViewProductByWarranty';
import FactoryStatisticByYear from "./component/FactoryProduct/FactoryStatisticByYear";
import FactoryStatistic from "./component/FactoryProduct/FactoryStatistic";
import StoreStatisticByYear from "./component/StoreProduct/StoreStatisticByYear"



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Slide />
              <ServiceHome />
              <GalleryHome />
              <OfferBlock />
              <Review />
              <BlogHome />
              <Blog />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/admin/view_products_by_factory"
          element={
            <div>
              <ViewProductByFactory />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/thisfactory/view_product_by_year"
          element={
            <div>
              <FactoryStatisticByYear />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/admin/view_products_by_store"
          element={
            <div>
              <ViewProductByStore />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/admin/view_products_by_warranty"
          element={
            <div>
              <ViewProductByWarranty />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/cars"
          element={
            <div>
              <Cars />
              <Cars1 />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/store"
          element={
            <div>
              <Store />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/warranty"
          element={
            <div>
              <Warranty />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/thisstore/view_product_by_year"
          element={
            <div>
              <StoreStatisticByYear />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/news"
          element={
            <div>
              <News />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/contact"
          element={
            <div>
              <Contact />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/thisstore"
          element={
            <div>
              <ThisStore />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/admin"
          element={
            <div>
              <Admin />
            </div>
          }
        ></Route>
      </Routes>
      

      <Routes>
        <Route
          path="/admin/products"
          element={
            <div>
              <Admin />
              <Products />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/admin/factories"
          element={
            <div>
              <Admin />
              <Factories />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/admin/warranty_centers"
          element={
            <div>
              <Admin />
              <Warranty_centers />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/admin/stores"
          element={
            <div>
              <Admin />
              <Stores />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/thisfactory"
          element={
            <div>
              <ThisFactory />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/thisstore/view_products"
          element={
            <div>
            <ThisStore />
              <StoreProduct />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/thisfactory/view_products"
          element={
            <div>
            <ThisFactory />
              <FactoryProduct />
            </div>
          }
        ></Route>
      </Routes>
      

      <Routes>
        <Route
          path="/thiswarranty/view_products"
          element={
            <div>
            <ThisWarranty />
              <WarrantyProduct />
            </div>
          }
        ></Route>
      </Routes>
      
      
      <Routes>
        <Route
          path="/thiswarranty"
          element={
            <div>
              <ThisWarranty />
            </div>
          }
        ></Route>
      </Routes>

     

      <Routes>
        <Route
          path="/thisfactory/statistic_failed_by_product_lines"
          element={
            <div>
              
              <FactoryStatistic />
            </div>
          }
        ></Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
