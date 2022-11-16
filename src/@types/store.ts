export type NibbleStoreType = {
  currentUser: userType | null;
};

export type categoryType = {
  id:number;
  icon: string;
  color: string;
  title: string;
  options_number: number;
};
export type foodType = {
  id: number;
  title: string;
  badge: string;
  img: string;
  review: number;
  nbrLike: number;
  duration: string;
  idCategory: number;
};
export type userType = {
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
  refreshToken: string;
};
