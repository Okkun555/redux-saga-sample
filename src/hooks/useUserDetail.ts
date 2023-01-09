import React, { useState } from 'react';

const useUserDetail = (preName = '', preEmail = '', preAge = 20) => {
  const [name, setName] = useState(preName);
  const [email, setEmail] = useState(preEmail);
  const [age, setAge] = useState(preAge);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAge(Number(e.target.value));

  const resetUserDetail = () => {
    setName('');
    setEmail('');
    setAge(20);
  };

  return {
    name,
    email,
    age,
    handleChangeName,
    handleChangeEmail,
    handleChangeAge,
    resetUserDetail,
  };
};

export default useUserDetail;
