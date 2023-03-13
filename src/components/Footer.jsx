import React from "react";
import logo from "../assets/Design/logo.png";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <img src={logo} className="w-auto h-[25px]  cursor-default" />
        <p className="py-4 cursor-default">
          © 2023 Maturedi. All rights reserved.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 cursor-pointer">
          <a
            href="https://www.instagram.com/moskujh_/?hl=id"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/dimas-julio-cessar-b66424222"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/Punitomoe"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">About Us</h6>
          <ul>
            <Link to="/about">
              <li className="py-3 text-sm hover:text-[#00df9a] cursor-pointer">
                Me
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Asuransi</h6>
          <ul>
            <Link to="/ketenagakerjaan">
              <li className="py-3  text-sm hover:text-[#00df9a] cursor-pointer">
                Ketenagakerjaan
              </li>
            </Link>
            <Link to="/kesehatan">
              <li className="py-3  text-sm hover:text-[#00df9a] cursor-pointer">
                Kesehatan
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal Dokumen</h6>
          <ul>
            <Link to="/ktp">
              <li className="py-3  text-sm hover:text-[#00df9a] cursor-pointer">
                KTP
              </li>
            </Link>
            <Link to="/sim">
              <li className="py-3  text-sm hover:text-[#00df9a] cursor-pointer">
                SIM
              </li>
            </Link>
            <Link to="/skck">
              <li className="py-3  text-sm hover:text-[#00df9a] cursor-pointer">
                SKCK
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Perpajakan</h6>
          <ul>
            <Link to="/penghasilan">
              <li className="py-3  text-sm hover:text-[#00df9a] cursor-pointer">
                Penghasilan
              </li>
            </Link>
            <Link to="/kendaraan">
              <li className="py-3  text-sm hover:text-[#00df9a] cursor-pointer">
                Kendaraan
              </li>
            </Link>
            <Link to="/umkm">
              <li className="py-3  text-sm hover:text-[#00df9a] cursor-pointer">
                UMKM
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
