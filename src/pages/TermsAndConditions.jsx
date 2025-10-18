import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const TermsAndConditions = () => {
  return (
    <div className="relative w-full min-h-screen bg-black px-4 py-8">
      {/* Gradient overlays to match card aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-purple-500/15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />
      
      {/* Vercel-style background patterns */}
      <div className="absolute inset-0 opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjQiLz48L3N2Zz4=')]" />
      
      {/* Subtle grain texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:4px_4px] opacity-20" />
      
      {/* Vercel-style border elements */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20 border-l border-t border-white/20" />
      <div className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 border-r border-t border-white/20" />
      <div className="absolute bottom-0 left-0 w-12 h-12 md:w-20 md:h-20 border-l border-b border-white/20" />
      <div className="absolute bottom-0 right-0 w-12 h-12 md:w-20 md:h-20 border-r border-b border-white/20" />

      {/* Floating elements for Vercel aesthetic */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse delay-500" />

      <div className="container mx-auto py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} // Faster animation
          className="flex justify-center"
        >
          <Card className="w-full max-w-4xl shadow-xl border border-white/10 bg-black/40 backdrop-blur-md rounded-xl relative overflow-hidden">
            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-purple-500/15" />
            {/* Card texture overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:3px_3px] opacity-30" />
            
            <CardHeader className="space-y-4 p-10 pb-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }} // Faster animation
                className="text-start"
              >
                <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                  Terms & Conditions
                </CardTitle>
                {/* --- CHANGED --- Updated styling for metadata */}
                <p className="text-start text-gray-500 mt-2 text-xs md:text-sm">
                  Last updated on 24-09-2025 09:34:13
                </p>
              </motion.div>
            </CardHeader>
            
            {/* --- CHANGED --- Added px-10 for consistent horizontal padding */}
            <CardContent className="space-y-6 relative z-10 px-10 pb-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }} // Faster animation
                // --- CHANGED --- Increased spacing to space-y-6
                className="space-y-6 text-gray-300 leading-relaxed"
              >
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.4 }} // Faster animation
                >
                  These Terms and Conditions, along with privacy policy or other terms ("Terms") constitute a binding 
                  agreement by and between SUJIN CHERUVATHOOR CHERIAN, ( "Website Owner" or "we" or "us" 
                  or "our") and you ("you" or "your") and relate to your use of our website, goods (as applicable) or 
                  services (as applicable) (collectively, "Services").
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }} // Faster animation
                >
                  By using our website and availing the Services, you agree that you have read and accepted these Terms 
                  (including the Privacy Policy). We reserve the right to modify these Terms at any time and without 
                  assigning any reason. It is your responsibility to periodically review these Terms to stay informed of 
                  updates.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }} // Faster animation
                >
                  The use of this website or availing of our Services is subject to the following terms of use:
                </motion.p>
                
                <motion.ul 
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }} // Faster animation
                >
                  {[
                    "To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.",
                    "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.",
                    "Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.",
                    "The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents.",
                    "You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.",
                    "You agree to pay us the charges associated with availing the Services.",
                    "You agree not to use the website and/ or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.",
                    "You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.",
                    "You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with the us for the Services.",
                    "You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service. The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided in our policies (as applicable). In case you do not raise a refund claim within the stipulated time, than this would make you ineligible for a refund.",
                    "Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.",
                    "These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.",
                    "All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Kochi, Kerala",
                    "All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website."
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 + (index * 0.03), duration: 0.3 }} // Faster animation
                      className="flex items-start space-x-3"
                    >
                      {/* --- CHANGED --- Adjusted margin-top for better alignment */}
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }} // Faster animation
                  className="pt-4 border-t border-white/10"
                >
                  <p className="text-center text-gray-400 text-sm">
                    By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
                  </p>
                </motion.div>
              </motion.div>

              {/* Cancellation & Refund Policy Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }} // Faster animation
                className="space-y-6 mt-12 pt-8 border-t border-white/10"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }} // Faster animation
                  className="text-start"
                >
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                    Cancellation & Refund Policy
                  </h2>
                  {/* --- CHANGED --- Updated styling for metadata */}
                  <p className="text-start text-gray-500 mt-2 text-xs md:text-sm mb-20">
                    Last updated on 24-09-2025 09:34:50
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.85, duration: 0.4 }} // Faster animation
                  className="text-gray-300"
                >
                  SUJIN CHERUVATHOOR CHERIAN believes in helping its customers as far as possible, and has 
                  therefore a liberal cancellation policy. Under this policy:
                </motion.p>

                <motion.ul 
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }} // Faster animation
                >
                  {[
                    "Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.",
                    "SUJIN CHERUVATHOOR CHERIAN does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.",
                    "In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within Only same day days of receipt of the products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within Only same day days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.",
                    "In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them. In case of any Refunds approved by the SUJIN CHERUVATHOOR CHERIAN, it'll take 16-30 Days days for the refund to be processed to the end customer."
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.95 + (index * 0.05), duration: 0.3 }} // Faster animation
                      className="flex items-start space-x-3"
                    >
                      {/* --- CHANGED --- Adjusted margin-top for better alignment */}
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }} // Faster animation
                className="pt-6 mt-6 border-t border-white/10"
              >
                <p className="text-center text-gray-400 text-sm">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by both our Terms & Conditions and Cancellation & Refund Policy.
                </p>
              </motion.div>

              {/* Contact Us Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }} // Faster animation
                className="space-y-6 mt-12 pt-8 border-t border-white/10"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }} // Faster animation
                  className="text-start"
                >
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                    Contact Us
                  </h2>
                   {/* --- CHANGED --- Updated styling for metadata */}
                  <p className="text-start text-gray-500 mt-2 text-xs md:text-sm mb-20">
                    Last updated on 22-09-2025 17:36:07
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.35, duration: 0.4 }} // Faster animation
                  className="space-y-4 text-gray-300"
                >
                 
                  
                  {/* --- CHANGED --- Reworked grid for better label/value hierarchy */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4, duration: 0.3 }} // Faster animation
                      className="space-y-1"
                    >
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Merchant Legal Entity Name</h3>
                      <p className="text-gray-200">SUJIN CHERUVATHOOR CHERIAN</p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.45, duration: 0.3 }} // Faster animation
                      className="space-y-1"
                    >
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Registered Address</h3>
                      <p className="text-gray-200">St. Josephs Syro-Malabar Church campus near metro station North Kalamassery, Kochi, Kerala, PIN: 683104</p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.3 }} // Faster animation
                      className="space-y-1"
                    >
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Operational Address</h3>
                      <p className="text-gray-200">St. Josephs Syro-Malabar Church campus near metro station North Kalamassery, Kochi, Kerala, PIN: 683104</p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.55, duration: 0.3 }} // Faster animation
                      className="space-y-1"
                    >
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Contact Information</h3>
                      <p className="text-gray-200">Telephone No: 9946232437</p>
                      <p className="text-gray-200">E-Mail ID: info.filmaatic@gmail.com</p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }} // Faster animation
                className="pt-6 mt-6 border-t border-white/10"
              >
                <p className="text-center text-gray-400 text-sm">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by our Terms & Conditions, Cancellation & Refund Policy, and Contact Information.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;