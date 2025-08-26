import { useMantineColorScheme, Button } from "@mantine/core";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { setColorScheme, colorScheme, clearColorScheme } =
    useMantineColorScheme();

  const toggleTheme = () => {
    if (colorScheme === "light") {
      setColorScheme("dark");
    } else if (colorScheme === "dark") {
      setColorScheme("light");
    } else {
      clearColorScheme();
    }
  };

  return (
    <Button size="sm" onClick={() => toggleTheme()} variant="outline">
      {colorScheme === "light" ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
};

export default ThemeToggle;
