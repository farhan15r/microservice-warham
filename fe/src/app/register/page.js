"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import ErrorAlert from "@/components/ErrorAlert";
import SuccessAlert from "@/components/SuccessAlert";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginUrl = process.env.NEXT_PUBLIC_API_USERS_SERVICE + "/api/users";
    try {
      const response = await axios.post(loginUrl, form);
      setSuccess("Registration successful!, Please login.")
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
      {success && <SuccessAlert message={success} />}

      <div className="card w-96 h-fit bg-base-100 shadow-xl">
        <div className="flex justify-center items-center pt-11">
          <h2 className="card-title">Register</h2>
        </div>
        <div className="card-body">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input
              type="text"
              name="name"
              className="grow w-8/12"
              placeholder="name"
              onChange={handleChange}
            />
          </label>
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
            Register
          </button>
          <Link href="/login" className="btn btn-outline btn-info">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
