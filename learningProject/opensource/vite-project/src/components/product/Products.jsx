import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import AccessRole from "../../utils/Access";
import { cartContext } from "../../context/CartProvider";
import { useContext } from "react";
const Products = () => {
const [cartData , setcartData] = useContext(cartContext);







  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 10;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const skip = pageNo * limit;
        const response = await axios.get(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        setData(response.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [pageNo]);

  function previousBtn() {
    if (pageNo > 0) {
      setPageNo(prev => prev - 1);
    }
  }

  function nextBtn() {
    setPageNo(prev => prev + 1);
  }


  AccessRole('/items/products')

  return (
    <div>
      <h2 className="text-5xl m-10 text-center">Products Listing</h2>
      
{/* <Skeleton />  */}
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <>
            {[...Array(data.length)].map((_, i) => (
              <div key={i} className=" w-40 m-2 p-2">
                <Skeleton height={128} width={160} />
                <Skeleton height={20} width={120} style={{ marginTop: 8 }} />
              </div>
            ))}
          </>
        ) : (
          data.map(product => (
            <div key={product.id} className="bg-blue-200 w-40 m-2 p-2">
              <img src={Array.isArray(product.images) ? product.images[0] : product.images} alt="" className="w-full h-32 object-cover" />
              <div>{product.title}</div>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center m-10">      <button onClick={previousBtn} disabled={(pageNo==1)?true:false} className="bg-green-300 px-10 py-4 m-4" >Prev</button>
      <button onClick={nextBtn} disabled={(data.length<limit)?true:false}  className="bg-green-300 px-10 py-4 m-4">Next</button>
    </div>

    </div>
  );
};

export default Products;