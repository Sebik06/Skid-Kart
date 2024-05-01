import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Preteky() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollThreshold = 200; // Nastavte výšku scrollovania

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
      <div className='video-preteky'>
        <div className="video-overlay"></div>
        <div className="video-wrapper">
          <iframe
            className="video-frame"
            src="https://www.youtube.com/embed/RGWPG21jjrI?autoplay=1&mute=1&loop=1&playlist=RGWPG21jjrI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <motion.div className='obalovac-preteky'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.5 }}>
        <h1 className='nazov-preteky'>PLÁNOVANÉ PRETEKY </h1>
        <motion.div className='flex-preteky'>
          <motion.div className='container-preteky'

            whileTap={{ scale: 0.9 }}>
            <a href='https://www.sodiwseries.com/en-gb/'><div className='obalovac-obrazok'>
              <motion.img className='obrazok-preteky' src='https://5c28f2b7d4.cbaul-cdnwnd.com/8cedf03de1f32a976c055ceebd5d5628/200000019-229ed229ef/Pic4.webp?ph=5c28f2b7d4' alt=''
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }} />
            </div></a>
            <p className='popis-preteky'>SODI WORLD SERIE</p>
          </motion.div>
          <motion.div className='container-preteky'
            
            whileTap={{ scale: 0.9 }}>
            <a href='https://www.sodiwseries.com/en-gb/races/motokry-ijariij/ijariij-endurance-cup-1-83803.html'><div className='obalovac-obrazok'>
              <motion.img className='obrazok-preteky' src='https://5c28f2b7d4.cbaul-cdnwnd.com/8cedf03de1f32a976c055ceebd5d5628/200000011-db5b7db5b9/sws_endurance_cup.webp?ph=5c28f2b7d4' alt=''
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }} />
            </div></a>
            <p className='popis-preteky'>SWS ENDURANCE CUP</p>
          </motion.div>
          <motion.div className='container-preteky'
            
            whileTap={{ scale: 0.9 }}>
            <a href='https://www.sodiwseries.com/en-gb/races/karting-arena-koijice/sws-sprint-true-race-smer-69849.html'><div className='obalovac-obrazok'>
              <motion.img className='obrazok-preteky' src='https://5c28f2b7d4.cbaul-cdnwnd.com/8cedf03de1f32a976c055ceebd5d5628/200000017-e1b12e1b14/sws_sprint_cup%20%281%29.webp?ph=5c28f2b7d4' alt=''
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }} />
            </div></a>
            <p className='popis-preteky'>SWS SPRINT CUP </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className='footer-preteky'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.5 }}>
        <p>©SKID-KART</p>
      </motion.div>
    </div>
  );
}

export default Preteky;
  