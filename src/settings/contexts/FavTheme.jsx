import { useEffect, useState } from "react";

const selectTheme = "selectTheme";

function FavTheme() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem(selectTheme) === null
      ? "light"
      : window.localStorage.getItem(selectTheme) === "light"
      ? "light"
      : "dark"
  );

  const handleChange = (valor) => {
    window.localStorage.setItem(selectTheme, valor);
    setTheme(valor);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, handleChange];
}

export default FavTheme;
