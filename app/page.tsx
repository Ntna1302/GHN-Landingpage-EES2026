       "use client";

       import { useCallback, useState } from "react";
       import { AnimatePresence, motion } from "framer-motion";
       import { useHistoryStep } from "@/hooks/useHistoryStep";

       import SplashScreen from "@/components/sections/SplashScreen";
        //import RoleGate from "@/components/sections/RoleGate";
       import Navbar from "@/components/layout/Navbar";
       import TickerStrip from "@/components/layout/TickerStrip";
       import Footer from "@/components/layout/Footer";
       import Hero from "@/components/sections/Hero";
       import WhySection from "@/components/sections/WhySection";
        import GroupsSection from "@/components/sections/GroupsSection";
       import RaceSection from "@/components/sections/RaceSection";
       import AnonymitySection from "@/components/sections/AnonymitySection";
       import Timeline from "@/components/sections/Timeline";
       import CtaFinal from "@/components/sections/CtaFinal";
       import GroupSchedulePopup from "@/components/sections/GroupSchedulePopup";
       import UrgencyBar from "@/components/layout/UrgencyBar";
       import QuoteSection from "@/components/sections/QuoteSection";
       import GroupFinder from "@/components/sections/GroupFinder";
       import HowSection from "@/components/sections/HowSection";
       import FaqSection from "@/components/sections/FaqSection";

      export default function Page() {
  const [scheduleOpen, setScheduleOpen] = useState(false);

      
         return (
       
               <motion.div
                 key="main"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.5 }}
               >
                 {/* <UrgencyBar onScheduleClick={() => setScheduleOpen(true)} />    */}

                 <Navbar />
                 <TickerStrip />
                 <main>
                   <Hero />
                   <WhySection />
                   <QuoteSection />
                   <AnonymitySection />
                   {/* <GroupsSection /> */}
                   <GroupFinder /> 
                   <HowSection />
                   <RaceSection />

                   <Timeline />
                   <FaqSection />
                   <CtaFinal />
                 </main>
                 <Footer />
                   <GroupSchedulePopup
                     open={scheduleOpen}
                     onClose={() => setScheduleOpen(false)}
                   />
               </motion.div>
         );
       }
      