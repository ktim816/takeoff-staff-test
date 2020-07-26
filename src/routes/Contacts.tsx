import React, {useState, useEffect} from 'react';
import {Contact} from '@/types';
import isEmpty from 'lodash/isEmpty';
import {contactsCollection} from '@/api';

import {
  List,
  Typography,
  Button,
  Input,
} from 'antd';

import {
  filterById,
  createContact,
  concatWith,
  updateDataById,
} from '@/helpers';

const {Title, Text, Link} = Typography;

export default () => {

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const newContacts: any[] = [];
      const snapshot = await contactsCollection.get();
      snapshot.forEach((doc) => {
        newContacts.push(doc.data());
      });
      setContacts(newContacts);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      throw new Error(err);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleEdit = (id: string) => (value: string) => {
    const updatedContacts = updateDataById(contacts, {
      id, field: 'name', value,
    });
    setContacts(updatedContacts);
    contactsCollection.updateDocument(id, {
      name: value,
    });
  };

  const handleRemove = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const updatedContacts = contacts.filter(filterById(id));
    contactsCollection.removeDocument(id);
    setContacts(updatedContacts);
  };

  const filterBySearch = (data: any) => {
    return data.filter((item: any) => {
      if (!item?.name) return item;
      return item.name.toLowerCase()
        .includes(searchValue.toLowerCase());
    });
  };

  const addNewContact = () => {
    setIsLoading(true);
    const contact = createContact();
    contactsCollection.addDocument(contact.id, contact);
    setContacts(concatWith(contact));
    setIsLoading(false);
  };

  const renderItem = (item: any) => {
    return (
      <List.Item
        actions={[
          <Link
            href=""
            type="danger"
            onClick={handleRemove(item.id)}
          >remove</Link>,
        ]}
      >
        <Text editable={{
          onChange: handleEdit(item.id),
        }}>
          {item.name}
        </Text>
      </List.Item>
    );
  };

  return (
    <>
      <Title level={2}>Contacts</Title>
      <Input.Search
        size="large"
        placeholder="Search contacts"
        value={searchValue}
        onChange={handleSearch}
        style={{marginBottom: 15}}
      />
      <List
        bordered
        loading={isLoading}
        dataSource={isEmpty(contacts) ? [] : filterBySearch(contacts)}
        renderItem={renderItem}
      />
      <Button
        size="large"
        type="primary"
        style={{marginTop: 15}}
        disabled={isLoading}
        onClick={addNewContact}
      >
        Add new contact
      </Button>
    </>
  );
};
