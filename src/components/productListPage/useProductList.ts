import { useState, useEffect, useContext } from 'react';
import { getProducts } from '../../common/utils/getProducts';
import { CountryContext } from '../../contexts/CountryContext';

export default (id: string) => {
  const { country } = useContext(CountryContext);
  const [products, setProducts] = useState([]);

  console.log('id', id);
  const getProductList = async () => {
    const { data } = await getProducts({
      filter: `categories.id: subtree("${id}")`,
      priceCurrency: country.currency,
      priceCountry: country.name,
    });
    setProducts(data.results);
  };

  useEffect(() => {
    getProductList();
  }, [id]);

  return {
    products,
  };
};
