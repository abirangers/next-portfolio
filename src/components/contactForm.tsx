"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import clsx from "clsx";
type InputMode = "text" | "email" | "numeric" | "search" | "tel" | "url";
type contactInputProps = {
  title: string;
  type: string;
  change: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  inputMode?: InputMode;
  pattern?: string;
  value: string | undefined;
  error?: any;
};
type newErrorType = {
  inputName?: string;
  inputEmail?: string;
  inputNoHp?: string;
  inputMessage?: string;
};

const InputContact = ({
  type,
  title,
  change,
  inputMode,
  pattern,
  value,
  error,
  name,
}: contactInputProps) => (
  <div className="relative">
    <input
      type={type}
      className={clsx(
        "peer focus:outline-none focus:ring-1 focus:ring-blue-500 invalid:focus:ring-pink-500",
        "border-2 w-full p-2 py-3 rounded-lg b-white",
        "text-lg font-normal",
        "transition-all duration-300 ease-in-out"
      )}
      onChange={change}
      placeholder=" "
      inputMode={inputMode}
      pattern={pattern}
      value={value}
    />
    <span
      className={clsx(
        "peer-focus:-top-3 peer-placeholder-shown:top-[14px]",
        "transition-all duration-300 ease-in-out",
        "text-base font-semibold bg-white pointer-events-none",
        "absolute left-[10px] -top-3"
      )}
    >
      {title}
    </span>
    <h1
      className={`-translate-y-6 opacity-0${
        error[name] ? "block -translate-y-[1px] opacity-100" : ""
      } text-red-400 transition-all duration-1000 mt-1 ml-1 -z-20`}
    >
      {name ? error[name] : undefined}
    </h1>
  </div>
);

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const ContactForm = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNoHp, setInputNoHp] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [error, setError] = useState<newErrorType>({
    inputName: "",
    inputEmail: "",
    inputNoHp: "",
    inputMessage: "",
  });

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
    e.target.value === ""
      ? setError({ ...error, inputName: "Masukan Nama" })
      : setError({ ...error, inputName: "" });
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
    e.target.value === ""
      ? setError({ ...error, inputEmail: "Masukan Email" })
      : setError({ ...error, inputEmail: "" });
  };

  const noHpHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputNoHp(e.target.value);
    e.target.value === ""
      ? setError({ ...error, inputNoHp: "Masukan NoHp" })
      : setError({ ...error, inputNoHp: "" });
  };
  const messageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value);
    e.target.value === ""
      ? setError({ ...error, inputMessage: "Masukan Message" })
      : setError({ ...error, inputMessage: "" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let isError: boolean = false;
    let newError: newErrorType = {};

    if (!inputName) {
      newError.inputName = "Masukan Nama";
      isError = true;
    }
    if (!inputEmail) {
      newError.inputEmail = "Masukan Email";
      isError = true;
    }
    if (!validateEmail(inputEmail || "")) {
      newError.inputEmail = "Email anda tidak valid!";
      isError = true;
    }
    if (!inputNoHp) {
      newError.inputNoHp = "Masukan Nomor Hp Anda!";
      isError = true;
    }
    if (!inputMessage) {
      newError.inputMessage = "Masukan Pesan!";
      isError = true;
    }
    if (isError) {
      setError(newError);
    }
    if (!isError) {
      setInputName("");
      setInputEmail("");
      setInputNoHp("");
      setInputMessage("");
    }
  };

  const inputContacts: contactInputProps[] = [
    {
      title: "Name",
      type: "text",
      change: nameHandler,
      name: "inputName",
      value: inputName,
    },
    {
      title: "Email",
      type: "email",
      change: emailHandler,
      name: "inputEmail",
      value: inputEmail,
    },
    {
      title: "No.HP",
      type: "tel",
      change: noHpHandler,
      name: "inputNoHp",
      value: inputNoHp,
    },
  ];

  return (
    <div>
      <form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
        {inputContacts.map((item, index) => (
          <InputContact
            key={index}
            type={item.type}
            title={item.title}
            change={item.change}
            inputMode={item.type === "tel" ? "numeric" : undefined}
            pattern={item.type === "tel" ? "[0-9]*" : undefined}
            value={item.value}
            error={error}
            name={item.name}
          />
        ))}
        <div className="relative">
          <textarea
            className={clsx(
              "peer focus:outline-none focus:ring-1 focus:ring-blue-500 invalid:focus:ring-pink-500",
              "border-2 w-full p-2 py-3 rounded-lg",
              "text-lg font-normal",
              "transition-all duration-300 ease-in-out"
            )}
            rows={6}
            placeholder=" "
            onChange={messageHandler}
            value={inputMessage}
          />
          <span
            className={clsx(
              "peer-focus:-top-3 peer-placeholder-shown:top-[14px]",
              "transition-all duration-300 ease-in-out",
              "text-base font-semibold bg-white",
              "absolute left-[10px] -top-3"
            )}
          >
            Message
          </span>
        </div>
        <button
          type="submit"
          className="px-3 py-3 w-full transition-all hover:bg-blue-600 active:bg-blue-700 text-white font-semibold bg-blue-500 rounded-lg"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
