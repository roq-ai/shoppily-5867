import { CartItemInterface } from 'interfaces/cart-item';
import { RatingInterface } from 'interfaces/rating';
import { ShopInterface } from 'interfaces/shop';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  shop_id?: string;
  created_at?: any;
  updated_at?: any;
  cart_item?: CartItemInterface[];
  rating?: RatingInterface[];
  shop?: ShopInterface;
  _count?: {
    cart_item?: number;
    rating?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  shop_id?: string;
}
