"use client";

import FormContact from "@/components/FormContact";
import Logout from "@/components/Logout";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [token, setToken] = useState(null);
  const [contacs, setContacs] = useState([]);

  const router = useRouter();

  const getContacs = async () => {
    const contactUrl = "/api/contacts";

    const response = await axios.get(contactUrl, {
      headers: {
        Authorization: token,
      },
    });

    setContacs(response.data.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    } else {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (token) {
      getContacs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <main className="w-dvw min-h-dvh flex flex-col justify-center items-center">
      <Logout />

      <div className="flex flex-row gap-10">
        <FormContact getContacs={getContacs} />

        <div className="card w-fit h-fit bg-base-100 shadow-xl">
          <div className="flex justify-center items-center pt-11">
            <h2 className="card-title">Your&apos;s Contact</h2>
          </div>
          <div className="card-body">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Fist Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {contacs &&
                  contacs.map((contact, index) => {
                    return (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{contact.first_name}</td>
                        <td>{contact.last_name}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.email}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white"></div>
    </main>
  );
}
