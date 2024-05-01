import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Onas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollThreshold = 350; // Nastavte výšku scrollovania

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
      <div className='container-bg'>
        <h1 className='nadpis-onas' >NÁŠ PRÍBEH</h1>
        <div className='container-text'>
          <p className='nas-pribeh-text' >
            Matokarový tím Skid-Kart sa začal ako sen. Nadšenci motoršportu a zavodov mali jedno spoločné - ich vášeň pre rýchlosť a súťaživosť.
          </p>
          <p className='nas-pribeh-text' >
            Všetko sa začalo v kartingovom centre zo sýdlom vo Veľkom Šariši, kde sa stretávali každý víkend.
          </p>
          <p className='nas-pribeh-text' >
            Po niekoľkých rokoch tvrdej práce, jazdenia a účasti na rôznych závodoch sa sen konečne stal skutočnosťou. Matokarový tím Skid-Kart vstúpil na kartovú scénu a začal súťažiť vo viacerých ligách a šampionátoch učestnených pod SWS.
          </p>
          <p className='nas-pribeh-text'>
            Ich príbeh je príkladom toho, ako tvrdá práca, oddanosť a vášeň môžu premeniť sen na realitu a ako zážitky z rýchlosti a súťaže môžu spojiť ľudí a vytvoriť trvalé priateľstvá. Matokarov tím Skid-Kart sa stal symbolem úspechu a jednoty vo svete motorsportu.
          </p>
        </div>
      </div>
      <div className='container-onas'>
        <motion.h1 className='nadpis-jazdci'>SPOZNAJTE NÁŠ TÍM</motion.h1>
        <h2 className='nadpis-pretekary'>NAŠI PRETEKÁRI</h2>
        <motion.div className='container-flex' animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }} transition={{ duration: 2 }}>
          <div className='container-pretekar'>
            <img className='foto' src='https://5c28f2b7d4.cbaul-cdnwnd.com/8cedf03de1f32a976c055ceebd5d5628/200000021-7e63e7e640/700/366167814_1049814183092942_7951358282331849700_n.webp?ph=5c28f2b7d4' alt='kiko'></img>
            <p className='meno-jazdca'>KRISITIÁN</p>
            <p className='priezvisko-jazdca'>DUBOVSKÝ</p>
            <p className='popis-jazdca'>Krisitián Dubovský, talentovaný pretekár tímu Skid-Kart, je známy svojou rýchlosťou a precíznym ovládaním karta.

              Jeho schopnosť adaptovať sa na rôzne trate a podmienky ho robí silným súperom na závodných okruhoch.

              Okrem svojich jazdeckých schopností je Krisitián aj skvelý taktik a tímový hráč.

              Je schopný rýchlo čítať situácie na trati a reagovať na ne, aby dosiahol najlepší výkon.

              Jeho vášeň a odhodlanie prekonať každú prekážku ho robia obľúbeným medzi fanúšikmi a súpermi.</p>
          </div>
          <div className='container-pretekar'>
            <img className='foto' src='https://5c28f2b7d4.cbaul-cdnwnd.com/8cedf03de1f32a976c055ceebd5d5628/200000025-0588405887/280383935_5045064992238738_3042260572115002211_n.webp?ph=5c28f2b7d4' alt=''></img>
            <p className='meno-jazdca'>JÁN</p>
            <p className='priezvisko-jazdca'>ŠIMKO</p>
            <p className='popis-jazdca'>Ján Šimko, talentovaný pretekár tímu Skid-Kart, je známy svojou rýchlosťou a precíznym ovládaním karta.

              Jeho schopnosť adaptovať sa na rôzne trate a podmienky ho robí silným súperom na závodných okruhoch.

              Okrem svojich jazdeckých schopností je Ján aj skvelý taktik a tímový hráč.

              Je schopný rýchlo čítať situácie na trati a reagovať na ne, aby dosiahol najlepší výkon.

              Jeho vášeň a odhodlanie prekonať každú prekážku ho robia obľúbeným medzi fanúšikmi a súpermi.</p>
          </div>
          <div className='container-pretekar'>
            <img className='foto' src='https://5c28f2b7d4.cbaul-cdnwnd.com/8cedf03de1f32a976c055ceebd5d5628/200000023-881688816a/393451816_6986597138058208_4894586330339984625_n.webp?ph=5c28f2b7d4' alt=''></img>
            <p className='meno-jazdca'>ŠIMON</p>
            <p className='priezvisko-jazdca'>PIVOVARNIČEK</p>
            <p className='popis-jazdca'>Šimon Pivovarniček, talentovaný pretekár tímu Skid-Kart, je známy svojou rýchlosťou a precíznym ovládaním karta.

              Jeho schopnosť adaptovať sa na rôzne trate a podmienky ho robí silným súperom na závodných okruhoch.

              Okrem svojich jazdeckých schopností je Šimon aj skvelý taktik a tímový hráč.

              Je schopný rýchlo čítať situácie na trati a reagovať na ne, aby dosiahol najlepší výkon.

              Jeho vášeň a odhodlanie prekonať každú prekážku ho robia obľúbeným medzi fanúšikmi a súpermi.</p>
          </div>
        </motion.div>
      </div>
      <div className='footer-onas'>
        <p>©SKID-KART</p>
      </div>
    </div>
  );
};

export default Onas;
