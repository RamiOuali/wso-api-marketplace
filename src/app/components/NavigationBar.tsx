
import { Navbar } from '@/components/layout/navbar'
import { getNavbarData } from '@/lib/getNavbar'

export async function NavigationBar() {
  // Fetch navbar data from the database
  const navbarData = await getNavbarData()
  
  // Pass the fetched data to your client component
  return <Navbar {...navbarData} />
}
