interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Site Administrator'],
  customerRoles: [],
  tenantRoles: ['Shop Owner', 'Shop Manager', 'Product Lister', 'Site Administrator'],
  tenantName: 'Marketplace',
  applicationName: 'Shoppily',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
