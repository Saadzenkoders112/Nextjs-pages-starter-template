/**
 * Live URL that checks if the app is in production or development.
 */
const IS_LIVE = false;

/**
 * Production URL that will be treated as global start-point and is connected to production backend API.
 */
const PRODUCTION_URL = process.env.NEXT_PUBLIC_API_URL as string;

/**
 * Local URL that will be treated as global start-point and is connected to local backend or AWS Elastic API.
 */
const LOCAL_URL = "https://dummyjson.com" as string;

/**
 * Base URL that will be treated as global start-point.
 */
// export const BASE_URL = IS_LIVE ? PRODUCTION_URL : LOCAL_URL;

export const URL = {
  // ======================== User Authentication ========================

  USER_LOGIN: 'https://dummyjson.com/auth/login',

  GET_USER: 'https://dummyjson.com/auth/getUser',

   // ======================== Fetch Products ========================
  FETCH_PRODUCTS: (limit: number, category: string ) => category ? `https://dummyjson.com/products/category/${category}`:`https://dummyjson.com/products?limit=${limit}`,
  FETCH_PRODUCT_BY_ID: (id: string ) => `https://dummyjson.com/products/${id}`,
  FETCH_PRODUCT_CATEGORIES: 'https://dummyjson.com/products/categories',
  // FETCH_PRODUCT_BY_CATEGORY: (category: string) => `https://dummyjson.com/products/category/${category}`,

  // ======================== File Upload ========================

  UPLOAD_PDF: (uid: string | string[]) => `https://dummyjson.com/S3/fileUpload/${uid}`,
} as const;

