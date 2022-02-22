import {
  NavigationHelpersContext,
  useNavigation,
} from "@react-navigation/native";
import React, { useState, useContext } from "react";
import CreateContactComponent from "../../components/CreateContactComp";
import { CONTACT_LIST } from "../../constants/routeNames";
import createContact from "../../context/actions/contacts/createContact";
import { GlobalContext } from "../../context/Provider";

const CreateContact = () => {
  const [form, setForm] = useState({});
  const {
    contactsDispatch,
    contactsState: {
      createContact: { loading, error },
    },
  } = useContext(GlobalContext);
  const { navigate } = useNavigation();

  const onChangeText = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };
  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      onSubmit={onSubmit}
      setForm={setForm}
      loading={loading}
      error={error}
    />
  );
};

export default CreateContact;
