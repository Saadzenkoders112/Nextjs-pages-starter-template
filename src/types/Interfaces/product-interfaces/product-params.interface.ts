export interface Params {
  /**
   * token: User token
   */
  token: string;

  /**
   * limit: Products Limit
   */
  limit?: number;

  /**
   * category: Products category
   */
  category?: string | null;
}
