import { ChangeEvent, useState } from 'react';

export default function FormName() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {

    setLastName(e.target.value)
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
