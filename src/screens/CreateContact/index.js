import React, { useState, useContext } from "react";
import CreateContactComponent from "../../components/CreateContactComp";
import createContact from "../../context/actions/contacts/createContact";
import { GlobalContext } from "../../context/Provider";

const CreateContact = () => {
  const [form, setForm] = useState({});
  const { contactsDispatch } = useContext(GlobalContext);
  const onChangeText = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    createContact(form)(contactsDispatch);
  };
  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      onSubmit={onSubmit}
      setForm={setForm}
    />
  );
};

export default CreateContact;
