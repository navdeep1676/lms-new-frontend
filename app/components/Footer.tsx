"use client";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="container-fluid pt-5 pb-3">
      <div className="row mb-4 align-items-start">
        <div className="col-4">
          <div className="d-flex flex-column gap-3">
            <img src="./logo.png" alt="logo" width={60} height={50} />
            <p className="text-black">
              Stay in the loop and sign up for the <br /> Developer's Corner
              Newsletter:
            </p>
            <div className="w-75 pe-5 me-5">
              <div className="border d-flex align-items-center rounded-pill">
                <input
                  type="text"
                  className="flex-grow-1 rounded-pill py-1 ps-3 fw-normal"
                  value=""
                  onChange={(e: any) => console.log(e)}
                  placeholder="Enter your email ..."
                />
                <button className="rounded-circle p-2 d-flex justify-content-center align-items-center">
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <h4 className="text-black">More Links</h4>
          <div className="d-flex flex-column">
            <Link href={"/"} className="text-black text-decoration-none">
              Refund Policy
            </Link>
            <Link href={"/"} className="text-black text-decoration-none">
              Refund Policy
            </Link>
            <Link href={"/"} className="text-black text-decoration-none">
              Refund Policy
            </Link>
          </div>
        </div>
        <div className="col-3">
          <h4 className="text-black">More Links</h4>
          <div className="d-flex flex-column">
            <Link href={"/"} className="text-black text-decoration-none">
              Refund Policy
            </Link>
            <Link href={"/"} className="text-black text-decoration-none">
              Refund Policy
            </Link>
            <Link href={"/"} className="text-black text-decoration-none">
              Refund Policy
            </Link>
          </div>
        </div>
        <div className="col-2">
          <h4 className="text-black">Main</h4>
          <div className="d-flex flex-column">
            <Link href={"/"} className="text-black text-decoration-none">
              Refund Policy
            </Link>
            <Link href={"/"} className="text-black text-decoration-none">
              Refund Policy
            </Link>
            <Link href={"/"} className="text-black text-decoration-none">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between  align-items-center">
            <p className="text-black">
              &copy; {new Date().getFullYear()} Developer's Corner. All Rights
              Reserved.
            </p>
            <div className="d-flex gap-3 align-items-center">
              <Link href={"/"} className="text-black text-decoration-none">
                Privacy Policy
              </Link>
              <Link href={"/"} className="text-black text-decoration-none">
                Refund Policy
              </Link>
              <Link href={"/"} className="text-black text-decoration-none">
                Term and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
