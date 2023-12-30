"use client";

/* Core */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Instruments */
import "../styles/layout.css";
import { FaUser } from "react-icons/fa";
export const Nav = () => {
  const pathname = usePathname();
  const links: any = [
    { id: 1, name: "Home", target: "/home" },
    { id: 2, name: "Videos", target: "/home" },
    { id: 3, name: "Projects", target: "/home" },
    { id: 4, name: "Courses", target: "/home" },
    { id: 5, name: "QNA", target: "/home" },
    { id: 6, name: "Documentations", target: "/home" },
    { id: 7, name: "Work With Us", target: "/home" },
  ];

  return (
    <nav className="nav fixed position-fixed mb-5  w-100">
      <div className="navbar container-fluid ps-3 d-flex flex-grow-1 justify-content-between align-items-center">
        <div className="navbar-logo flex-grow-1">
          <img width={60} height={50} src="./logo.png" alt="" />
        </div>
        <div className="d-flex gap-3 align-items-center">
          <div className="navigation-links d-flex align-items-center gap-4 flex-grow-1 me-4">
            {links &&
              links?.map((item: any, index: any) => {
                return (
                  <Link
                    key={index}
                    className="fw-bold text-black text-decoration-none"
                    href={item?.target}
                  >
                    {item?.name}
                  </Link>
                );
              })}
          </div>
          <div className="auth-btns  ms-3">
            <button className="rounded-start-pill bg-dark p-2 ps-3 fw-bold d-flex justify-content-center align-items-center gap-2">
              <FaUser /> Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
