export type NibbleStoreType = {
  currentUser: userType | null;
};

export type categoryType = {
  icon: string;
  color: string;
  title: string;
  options_number: number;
};
export type userType = {
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
  refreshToken: string;
};
