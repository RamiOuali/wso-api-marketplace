import { getNavbarSettings } from "@/lib/getNavbarSettings";
import { Navbar } from "./navbar";

export async function NavbarContainer() {
  const settings = await getNavbarSettings();

  return <Navbar {...settings} />;
} 