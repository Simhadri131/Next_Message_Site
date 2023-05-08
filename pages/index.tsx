import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Home() {
  const [pass, setPass] = useState(false);
  const [color, setColor] = useState(false);
  const router = useRouter();
  const passwordToEnter = "Unknown";

  const { register, handleSubmit } = useForm();

  const getData = (data: any) => {
    const EnterPassword = data.ManualPassword;
    console.log(EnterPassword);
    const passwordLength = EnterPassword.length > 5;
    setColor(passwordLength);
    setInterval(() => {
      if (EnterPassword === passwordToEnter) {
        router.push("/message");
      }
    }, 5000);
  };
  return (
    <div className="grid h-screen w-full grid-cols-1 place-content-center place-items-center bg-blue-950">
      <div className="bg-blue-950  grid grid-cols-1 ">
        <form onSubmit={handleSubmit(getData)}>
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <input
                type="text"
                className="w-full rounded-md text-white bg-red-950 py-2 px-10 "
                placeholder="please enter the password"
                {...register("ManualPassword")}
              />
            </div>
            {color ? (
              <div className="rounded-lg flex justify-center py-2 mt-4 bg-green-950 text-white">
                <button type="submit">please Wait </button>
              </div>
            ) : (
              <div className="rounded-md flex justify-center py-2 mt-4 bg-red-950 text-white">
                <button>Enter</button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
