import { useState, useEffect, useContext } from 'react';
import { getProducts } from '../../common/utils/getProducts';
import { LocaleContext } from '../../contexts/LocaleContext';

export default (id: string) => {
  const { country } = useContext(LocaleContext);
  const [products, setProducts] = useState([]);

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
  }, []);

  return {
    products,
  };
};
