import {
  NavigationHelpersContext,
  useNavigation,
} from "@react-navigation/native";
import React, { useState, useContext, useRef } from "react";
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

  const sheetRef = useRef(null);

  const onChangeText = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };
  const toggleValueChange = () => {
    setForm({ ...form, isFavorite: !form.isFavorite });
  };

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      onSubmit={onSubmit}
      setForm={setForm}
      loading={loading}
      error={error}
      toggleValueChange={toggleValueChange}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
    />
  );
};

export default CreateContact;
