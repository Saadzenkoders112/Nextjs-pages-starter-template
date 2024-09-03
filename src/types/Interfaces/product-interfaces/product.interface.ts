export interface Products {
  /**
   * id: Product's ID.
   */
  id: string;

  /**
   * title: Product's title
   */
  title: string;

    /**
   * brand: Product's brand
   */
    brand: string;

  /**
   *  description: Product's description
   */
  description: string;

  /**
   *  price: Product's price
   */
  price: number;

  
  /**
   *  discount: Product's discount
   */
  discount: number;

  
  /**
   *  rating: Product's rating
   */
  rating: number;

  /**
   *  images: Product's images
   */
  images: string[];

  
  /**
   *  thumbnail: Product's image
   */
  thumbnail: string

    /**
   *  discount: Product's discount
   */
    discountPercentage: string

}
