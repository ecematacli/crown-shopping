export interface Product {
  id: string;
  categories: { id: string; typeId: string }[];
  createdAt: Date;
  lastModifiedAt: Date;
  masterVariant: {
    id: number;
    images: { url: string; dimensions: { w: number; h: number } }[];
  };
}

export interface ProductsAPIResponse {
  results: Product[];
  limit: number;
  total: number;
  count: number;
  offset: number;
}
