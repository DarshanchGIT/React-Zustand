import "./App.css";
import { FormDiv } from "./components/formdiv";
import { Products } from "./components/products";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center pt-20 gap-6">
      <h2 className="text-4xl font-semibold">Zustand Example</h2>
      <FormDiv />
      <Products />
    </div>
  );
}
