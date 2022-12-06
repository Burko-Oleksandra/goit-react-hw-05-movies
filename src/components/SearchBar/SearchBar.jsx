import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

import NotificationWarning from 'components/NotificationWarning';
import { Form, Button, Icon, Input } from './SearchBar.styled';

export default function SearchBar({ onChange }) {
  const [searchQuery, setSearchQuery] = useState('');

  function handleNameChange(event) {
    onChange(event.currentTarget.value);
    setSearchQuery(event.currentTarget.value.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return NotificationWarning();
    }

    setSearchQuery('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchQuery}
        onChange={handleNameChange}
      />
      <Button type="submit">
        <Icon>
          <BsSearch size="1.7em" color="#483d8b" />
        </Icon>
      </Button>
    </Form>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};
