import { useState, useEffect, useContext } from 'react';
import { getProducts } from '../../api/products';
import { CountryInfoContext } from '../../contexts/CountryInfoContext';

export default (id: string) => {
  const { countryInfo } = useContext(CountryInfoContext);
  const [products, setProducts] = useState([]);

  const getProductList = async () => {
    // const { data } = await getProducts({
    //   filter: `categories.id: subtree("${id}")`,
    //   priceCurrency: country.currency,
    //   priceCountry: country.name,
    // });
    // setProducts(data.results);
  };

  useEffect(() => {
    getProductList();
  }, [id]);

  return {
    products,
  };
};
