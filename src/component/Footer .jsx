import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cyan-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Company Name */}
        <h2 className="text-xl font-bold text-black mb-6 text-center sm:text-left">
          KRYSTELLE ROMY GROUP
        </h2>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-black text-center sm:text-left">
          <div>
            <h3 className="font-semibold">KRYSTELLE ROMY</h3>
            <p>DRE#01977487</p>
          </div>
          <div>
            <h3 className="font-semibold">EMAIL</h3>
            <p>krystelle@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold">PHONE</h3>
            <p>(123) 456 7890</p>
          </div>
          <div>
            <h3 className="font-semibold">ADDRESS</h3>
            <p>1123 HERMOSA AVENUE, SUITE #210,</p>
            <p>HERMOSA BEACH, CA 92804</p>
          </div>
        </div>

        {/* Disclaimer Text */}
        <p className="text-black text-sm mt-6 text-center sm:text-left">
          Krystelle Romy is a real estate agent licensed by the state of
          California affiliated with Compass. Krystelle Romy is a real estate
          broker licensed by the state of California and abides by equal housing
          opportunity laws. All material presented herein is intended for
          informational purposes only. Information is compiled from sources
          deemed reliable but is subject to errors, omissions, changes in price,
          condition, sale, or withdrawal without notice. No statement is made as
          to accuracy of any description. All measurements and square footages
          are approximate. This is not intended to solicit property already
          listed. Nothing herein shall be construed as legal, accounting, or
          other professional advice outside the realm of real estate brokerage.
        </p>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-6 pt-4 flex flex-col sm:flex-row justify-between text-sm text-black text-center sm:text-left">
          <p className="font-semibold">
            © 2023, KRYSTELLE. POWERED BY{" "}
            <a href="#" className="text-blue-500 font-semibold underline">
              ROUNDTECHSQUARE
            </a>
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 font-semibold mt-4 sm:mt-0">
            <a href="#" className="hover:underline">
              TERMS OF USE
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
