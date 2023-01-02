import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 77672,
};

export const sampleWithPartialData: IProduct = {
  id: 96307,
  url: 'https://fannie.org',
};

export const sampleWithFullData: IProduct = {
  id: 7747,
  title: 'Programmable Networked deliver',
  description: 'Administrator Health',
  rating: 76905,
  url: 'https://rubie.net',
};

export const sampleWithNewData: NewProduct = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
