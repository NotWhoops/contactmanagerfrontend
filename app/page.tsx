import Image from "next/image";
import { Navbar, TextInput } from "flowbite-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Navbar fluid rounded>
          <Navbar.Brand href="#">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Logo
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <form>
              <TextInput
                // icon={}
                placeholder="Search..."
                type="search"
              />
            </form>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </main>
    </div>
  );
}
