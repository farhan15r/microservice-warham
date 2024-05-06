"use clint";

import axios from "axios";
import { useState } from "react";

export default function FormContact({ getContacs }) {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value,
      };
    });
  };

  const resetForm = () => {
    setForm({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const contactUrl = "/api/contacts";

    try {
      await axios.post(contactUrl, form, {
        headers: {
          Authorization: token,
        },
      });

      resetForm();
      getContacs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card w-fit h-fit bg-base-100 shadow-xl">
      <div className="flex justify-center items-center pt-11">
        <h2 className="card-title">Create new Contact</h2>
      </div>
      <div className="card-body">
        <div className="flex flex-row gap-4">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Fist Name"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Last Name"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="flex flex-row gap-4">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <br />
        <button className="btn btn-info text-white" onClick={handleSubmit}>
          Create
        </button>
      </div>
    </div>
  );
}
