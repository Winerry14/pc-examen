import ProductList from "./components/products/ProductList";
import LeadForm from "./components/form/LeadForm";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import UploadFile from "./components/storage/UploadFile";

export default function App() {
  return (
    <div className="container my-4">
      <h1 className="mb-3">Catálogo</h1>
      <ProductList />
      <LeadForm />
      <Register />
      <Login />
      <UploadFile />
    </div>
  );
}
