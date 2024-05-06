"use client";

import ErrorAlert from "@/components/ErrorAlert";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleChange = (e) => {
    setForm((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginUrl = "/api/users/login";
    try {
      const response = await axios.post(loginUrl, form);
      const token = response.data.data.token;

      localStorage.setItem("token", token);

      router.push("/");
    } catch (error) {
      setError(error.response.data.errors);
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <main className="w-dvw h-dvh flex flex-col justify-center items-center">
      {error && <ErrorAlert message={error} />}
      <div className="card w-96 h-fit bg-base-100 shadow-xl">
        <div className="flex justify-center items-center pt-11">
          <h2 className="card-title">Login</h2>
        </div>
        <div className="card-body">
          <label className="input input-bordered flex items-center gap-2">
            Username
            <input
              type="text"
              name="username"
              className="grow w-8/12"
              placeholder="username"
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Password
            <input
              type="password"
              name="password"
              className="grow w-8/12"
              placeholder="*******"
              onChange={handleChange}
            />
          </label>
          <br />
          <button className="btn btn-info text-white" onClick={handleSubmit}>
            Login
          </button>
          <Link href="/register" className="btn btn-outline btn-info">
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
