import { Plus } from "lucide-react";
import { useState } from "react";
import { useProducts } from "../store/store";

export const FormDiv = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const { addProduct } = useProducts();

  const handleForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newProduct = {
      id: Math.random().toString(36).slice(2, 11),
      name: productName,
      price: productPrice,
      quantity: 1,
    };

    addProduct(newProduct);
    console.log(newProduct.id);
    setProductName("");
    setProductPrice("");
  };

  return (
    <div className="w-full h-50 text-white rounded-3xl p-8 flex justify-center">
      <form
        onSubmit={handleForm}
        className="flex flex-col gap-6 w-[90%] max-w-md"
        id="productForm"
      >
        <div className="flex flex-col">
          <label htmlFor="productName" className="mb-2 text-lg font-semibold">
            Enter Product Name
          </label>
          <input
            id="productName"
            className="p-3 border border-gray-300 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-500"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Product Name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="productPrice" className="mb-2 text-lg font-semibold">
            Enter Product Price
          </label>
          <input
            id="productPrice"
            type="number"
            className="p-3 border border-gray-300 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-500"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Product Price"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all"
        >
          <div className="flex justify-center items-center ">
            Add Product
            <Plus className="mx-3"></Plus>
          </div>
        </button>
      </form>
    </div>
  );
};
