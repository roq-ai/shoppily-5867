const mapping: Record<string, string> = {
  carts: 'cart',
  'cart-items': 'cart_item',
  marketplaces: 'marketplace',
  products: 'product',
  ratings: 'rating',
  shops: 'shop',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
