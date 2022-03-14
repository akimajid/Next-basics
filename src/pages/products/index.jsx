import Head from "next/head";
import { useSelector } from "react-redux"
import axios from "axios";
import { useEffect, useState } from "react"
import { Box } from "@chakra-ui/react"

const ProductsPage = () => {

  const [productList, setProductList] = useState([])
  const authSelector = useSelector((state) => state.auth)

  const fetchProduct = async () => {
    try {
      const res = await axios.get("http://localhost:2000/products")

      setProductList(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const renderProduct = () => {
    return productList.map((product) => {
      return (
        <div>
          {product.product_name}
          <ul>
            <li>id: {product.id}</li>
            <li>price: {product.price}</li>
          </ul>
        </div>
      )
    })
  }

  useEffect (() => {
    fetchProduct()
  }, [])

  return (
    <Box padding="10">
      <Head>
        <title>My Product Page</title>
      </Head>
      <h1>product Page</h1>
      {renderProduct()}
    </Box>
  );
};

export default ProductsPage;
