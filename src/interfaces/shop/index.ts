import { ProductInterface } from 'interfaces/product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ShopInterface {
  id?: string;
  name: string;
  description?: string;
  owner_id?: string;
  created_at?: any;
  updated_at?: any;
  product?: ProductInterface[];
  user?: UserInterface;
  _count?: {
    product?: number;
  };
}

export interface ShopGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  owner_id?: string;
}
