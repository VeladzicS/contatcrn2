import { useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import LoginComponent from "../../components/Login";
import loginUser from "../../context/actions/auth/loginUser";
import { GlobalContext } from "../../context/Provider";

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const [errors, setErrors] = useState({});

  const { params } = useRoute();

  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({ ...form, userName: params.data.username });
    }
  }, [params]);

  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  const onChange = ({ name, value }) => {
    setJustSignedUp(false);
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };
  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      errors={errors}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
