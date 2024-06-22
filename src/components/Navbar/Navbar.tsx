import Switch, { SwitchProps } from "@mui/material/Switch";
import { BsMoonStars, BsMoonStarsFill } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [themeSwitchChecked, setThemeSwitchChecked] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    } else {
      localStorage.setItem("theme", theme);
    }

    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
    setThemeSwitchChecked(currentTheme === "dark");
  }, []);

  const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
    setThemeSwitchChecked(!themeSwitchChecked);
  };

  console.log(theme);

  return (
    <nav className="flex flex-row items-center justify-between h-16 bg-gray-100 shadow-md p-9 dark:bg-blue-950">
      <h1 className="text-2xl dark:text-white">Periodic Table</h1>
      <div className="flex flex-row items-center">
        <CiLight className="text-3xl" />
        <Switch
          onChange={changeTheme}
          checked={themeSwitchChecked}
          className="transform scale-[80%]"
        />
        {theme === "dark" ? (
          <BsMoonStarsFill className="text-xl text-yellow-500" />
        ) : (
          <BsMoonStars className="text-xl text-gray-500" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
