import axios from "axios";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    const logoutUrl = "/api/users/logout";

    try {
      await axios.delete(logoutUrl, {
        headers: {
          Authorization: token,
        },
      });

      localStorage.removeItem("token");
      router.push("/login");
    } catch (error) {}
  };

  return (
    <div className="z-[99] top-5 right-5 fixed">
      <button className="btn btn-warning" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
