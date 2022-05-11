import { useState } from "react";

const useForm = (initalState: string) => {
  const [form, setForm] = useState<String>(initalState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(e.target.value);
  };

  const clear = () => {
      setForm(initalState)
  }

  return [form, onChange, clear]
};

export default useForm