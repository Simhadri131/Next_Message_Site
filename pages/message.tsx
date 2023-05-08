import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Message() {
  const { register, handleSubmit } = useForm();
  const arrayData = [];

  const [message, setMessage] = useState(arrayData);

  let count = 0;
  const sendMessage = (data: any) => {
    const enteredCount = count + 1;
    localStorage.setItem(enteredCount.toString(), data.message);
    const localStorageData = localStorage.getItem(count.toString());
    arrayData.push(localStorageData);
    setMessage(arrayData);
  };
  console.log(message);

  return (
    <div className="bg-blue-950  w-full h-screen">
      <h1 className="text-white relative">
        This is Simhadri Personal Chatting Application
      </h1>

      <form
        className="absolute bottom-2 w-full"
        onSubmit={handleSubmit(sendMessage)}
      >
        <input
          className="py-2 px-2 w-[85%]"
          placeholder="Enter Your Text"
          {...register("message")}
        />
        <button
          className="bg-white font-bold  text-black px-2 py-2"
          type="submit"
        >
          send
        </button>
      </form>
    </div>
  );
}

export default Message;
