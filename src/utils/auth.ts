export const ADMIN_EMAIL = 'erskinos123@gmail.com';
export const ADMIN_PASSWORD = 'Admin123';

export const isAdminUser = (email: string | null | undefined): boolean => {
  return email === ADMIN_EMAIL;
};