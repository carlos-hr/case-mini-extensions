import { useState } from "react";

const useForm = (initalState: any) => {
  const [form, setForm] = useState(initalState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(e.target.value);
  };

  return [form, onChange];
};

export default useForm;
