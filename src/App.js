import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Enquiries from './pages/Enquiries';
import BlogList from './pages/BlogList';
import Blogcatlist from './pages/Blogcatlist';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import ColorList from './pages/Colorlist';
import Categorylist from './pages/Categorylist';
import BrandList from './pages/Brandlist';
import Productlist from './pages/Productlist';
import Addblog from './pages/Addblog';
import Addblogcat from './pages/Addblogcat';
import Addcolor from './pages/Addcolor';
import Addcat from './pages/Addcat';
import Addbrand from './pages/Addbrand';
import Addproduct from './pages/Addproduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        <Route path='/reset-password' element={<ResetPassword />}></Route>
        <Route path="/admin" element={<MainLayout/>}>
          <Route index element={< Dashboard/>}/>
          <Route path="enquiries" element={< Enquiries/>}/>
          <Route path="bloglist" element={< BlogList/>}/>
          <Route path="blog-category-list" element={< Blogcatlist/>}/>
          <Route path="orders" element={< Orders/>}/>
          <Route path="customers" element={< Customers/>}/>
          <Route path="color" element={< Addcolor/>}/>
          <Route path="color-list" element={< ColorList/>}/>
          <Route path="category" element={< Addcat/>}/>
          <Route path="category-list" element={< Categorylist/>}/>
          <Route path="brand-list" element={< BrandList/>}/>
          <Route path="product-list" element={< Productlist/>}/>
          <Route path="blog" element={< Addblog/>}/>
          <Route path="blog-category" element={< Addblogcat/>}/>
          <Route path="brand" element={< Addbrand/>}/>
          <Route path="product" element={< Addproduct/>}/>


        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
