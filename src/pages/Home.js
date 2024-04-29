import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollThreshold = 300; // Nastavte výšku scrollovania

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='main_video'>
        <video src='https://www.sodikart.com/content/files/home/sodikart-home-v2.mp4' autoPlay loop muted></video>
      </div>
      
      <motion.div className='bg'>
        <motion.div className='container2'>
          <motion.div className='content'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <h1 className='title1'>KTO SME A V ČOM PRETEKÁME?</h1>
            <motion.div className='flex1'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.6 }}>
              <div className='container1'>
                <img className='obrazok1' src='https://5c28f2b7d4.cbaul-cdnwnd.com/8cedf03de1f32a976c055ceebd5d5628/200000001-c4a04c4a06/skid%20kart.webp?ph=5c28f2b7d4' alt='obrazok'></img>
                <p className='text1'>Sme amatérsky kartingový tím, ktorý preteká v sérií SODI WORLD SERIES konkrétne vytrvalostné tímové preteky ENDURANCE.</p>
              </div>
              <motion.div className='container1'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.8 }}>
                <img className='obrazok2' src='https://5c28f2b7d4.cbaul-cdnwnd.com/8cedf03de1f32a976c055ceebd5d5628/200000003-6c6386c63a/logo-sws.webp?ph=5c28f2b7d4' alt='obrazok'></img>
                <p className='text1'>SODI WORLD SERIES- svetová séria sodi- amatérska séria pre každého jazdca, rozdelená do viacerých kategórii v ktorých sa môžete prebojovať až do samotného FINÁLE a stať sa tak majstrom sveta v danej kategórii  </p>
              </motion.div>
              <motion.div className='container1'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 1 }}>
                <img className='obrazok1' src='https://5c28f2b7d4.cbaul-cdnwnd.com/8cedf03de1f32a976c055ceebd5d5628/200000011-db5b7db5b9/sws_endurance_cup.webp?ph=5c28f2b7d4' alt='obrazok'></img>
                <p className='text1'>SWS ENDURANCE - vytrvalostné preteky - jazdia sa minimálne od 1 hodiny až po 32 hodín. Sú to tímové preteky, v ktorých záleží na počtu kôl zájdených v daných pretekoch, súboje o pozície a s povinnými striedaňami jazdcov počas ktorého je dovažovanie jazdca minimálne 85 kg</p>
              </motion.div>
            </motion.div>
            
          </motion.div>
        </motion.div>
      </motion.div>
      <div className='footer'>
        <p>©SKID-KART</p>
      </div>
    </div>
    
  );
}

export default Home;
