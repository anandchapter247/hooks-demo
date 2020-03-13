import { IReactSelectInterface } from './Constant';

export interface ILoginInterface {
  firstName?: string;
  lastName?: string;
  userName: string;
  password?: string;
}

export interface ISignupInterface {
  title?: string;
  firstName?: string;
  lastName?: string;
  street?: string;
  city?: string;
  zipCode?: string;
  country?: IReactSelectInterface;
  countryId?: number;
  dateOfBirth?: string;
  phoneNumber: string;
  mobileNumber?: String;
  email: String;
  userName: string;
}
