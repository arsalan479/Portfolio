import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#000] py-6 mt-2 text-center text-gray-400 ">
      <div className="flex items-center justify-center gap-8 capitalize cursor-pointer">
        <a
          href="https://www.linkedin.com/in/arsalan-ali-khan-399436307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <p>
            <span>
              <i className="ri-linkedin-box-fill"></i>
            </span>
            linkdin
          </p>
        </a>
        <a href="https://github.com/arsalan479" target="_blank">
          <p>
            <span>
              <i className="ri-github-fill"></i>
            </span>{" "}
            github
          </p>
        </a>
       <a href="https://x.com/ArsalanAli50024" target="_blank">
         <p>
          <span>
            <i className="ri-twitter-x-line"></i>
          </span>{" "}
          twitter
        </p>
       </a>
      </div>
    </div>
  );
};

export default Footer;
