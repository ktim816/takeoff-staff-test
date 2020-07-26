import {Contact} from '@/types';
import faker from 'faker';
import uniqid from 'uniqid';

export const createContact = (): Contact => ({
  id: uniqid(),
  name: faker.name.findName(),
});
