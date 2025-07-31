import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

const UserMenu = () => {
  const [isUser, setIsUser] = useState(false);
  const router = useRouter();

  // Check for token or session to determine if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsUser(!!token);
  }, []);

  const getFilteredOptions = (): string[] => {
    const allOptions = ["Profile", "LogOut", "LogIn", "SignUp"];
    return isUser
      ? allOptions.filter((opt) => !["SignUp", "LogIn"].includes(opt))
      : allOptions.filter((opt) => !["LogOut", "Profile"].includes(opt));
  };

  const openOption = async (option: string) => {
    try {
      switch (option) {
        case "Profile":
          router.push("/user/profile");
          break;
        case "LogIn":
          router.push("/user/login");
          break;
        case "SignUp":
          router.push("/user/register");
          break;
        case "LogOut":
          localStorage.removeItem("token");
          sessionStorage.clear();
          setIsUser(false);
          router.push("/user/login");
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Action failed:", error);
    }
  };

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <IoChevronDown className="ml-1 w-4 h-4 text-gray-500" />
        </Menu.Button>

        <Menu.Items className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          {getFilteredOptions().map((option, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <button
                  onClick={() => openOption(option)}
                  className={`block w-full px-4 py-2 text-sm rounded-md text-center text-gray-500 ${
                    active ? "bg-[#F4F6F8]" : ""
                  }`}
                >
                  {option}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default UserMenu;
