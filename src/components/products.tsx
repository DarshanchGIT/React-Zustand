import { Minus, Plus, Trash } from "lucide-react";
import { useProducts } from "../store/store";

export const Products = () => {
  const { products, decreaseQuantity, deleteProduct, increaseQuantity } =
    useProducts();

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <h3 className="text-2xl font-bold text-center mb-6">Product List</h3>
      <div className="flex flex-col space-y-4 w-[440px] mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border border-gray-600 rounded-lg bg-white text-gray-800 shadow-lg w-full flex item-center justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 font-medium">{product.price} ₹</p>
            </div>
            <div className="flex item-center justify-center gap-4">
              <div className=" flex item-center justify-center bg-gray-800 text-white font-semibold py-3 rounded-lg transition-all">
                <button>
                  <Minus className="font-bold mx-3 text-red-600 hover:scale-110 transition-transform"></Minus>
                </button>
                <div className="flex justify-center items-center ">
                  {product.quantity}
                </div>
                <button>
                  <Plus className="font-bold mx-3 text-indigo-400 hover:scale-110 transition-transform"></Plus>
                </button>
              </div>
              <button
                type="submit"
                className="bg-gray-800 text-white font-semibold py-3 rounded-lg transition-all"
              >
                <Trash className="mx-3 text-red-600 hover:scale-110 transition-transform"></Trash>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
