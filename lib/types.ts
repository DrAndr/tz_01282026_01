import { CURRENCIES } from "./constants";

/**
 * Currency type definition
 */
export type Currency = (typeof CURRENCIES)[number];

/**
 * Advert type definition
 */
export type Advert = {
  id: number;
  title: string;
  area: number;
  price: number;
  location: string;
  image: string;
};
