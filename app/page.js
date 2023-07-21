// page.js

import React from 'react';
import styles from './page.module.css'; // Import the CSS module

const FrontPage = () => {
  return (
    <main className={styles['bg-gradient-to-br']}>
      <div className={styles['max-w-5xl']}>
        <h1 className={`${styles['text-4xl']} md:text-6xl ${styles['font-bold']} ${styles['text-white']} ${styles['mb-8']} ${styles['center-heading']}`}>
          Velkommen til Marcus AI Kurs
        </h1>
        <div className={`${styles['grid']} ${styles['grid-cols-1']} md:${styles['grid-cols-2']} ${styles['gap-6']}`}>
          <div className={`${styles['bg-white']} ${styles['rounded-lg']} ${styles['shadow-lg']} ${styles['p-6']}`}>
            <img
              src="https://media.istockphoto.com/id/1128725181/photo/senior-teacher-talking-to-large-group-of-college-students-in-amphitheater.jpg?s=612x612&w=0&k=20&c=Y2GTvvk0Sz8psB2pgUjbSyIoEjsDLIrHbQzXwtPui_Y="
              alt="AI Illustration 1"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-norsk']} ${styles['mb-2']}`}>Kva me tilbyr!</h2>
            <p className={styles['text-norsk']}>
              Målet vårt er å hjelpa bedrifter og organisasjonar med å få ei betre forståing av AI-teknologiar, og læra korleis dei kan integrera dei i forretningsprosessane og strategiane sine. Me tilbyr skreddarsydde opplæringsprogram og workshops som passar til ulike organisasjonsbehov og kunnskapsnivå. Me tilbyr også rådgivingstenester som hjelper bedrifter med å identifisera og implementera AI-løysingar som kan forbetra effektiviteten og produktiviteten i organisasjonen. Dette kan inkludera alt frå å utvikla AI-baserte verktøy og system til å integrera eksisterande AI-teknologiar for å optimalisera arbeidsflyten.
            </p>
          </div>
          <div className={`${styles['bg-white']} ${styles['rounded-lg']} ${styles['shadow-lg']} ${styles['p-6']}`}>
            <img
              src="https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q="
              alt="AI Illustration 2"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-norsk']} ${styles['mb-2']}`}>Vår visjon</h2>
            <p className={styles['text-norsk']}>
              Me fokuserer på å tilby høgkvalitets opplæring og tenester, og teamet vårt vil bestå av erfarne AI-ekspertar og lærarar som er dedikerte til å gi kundane våre den beste opplevinga. Visjonen vår er å vera leiande innan AI-opplæring og rådgiving, og hjelpa bedrifter og organisasjonar over heila Norge med å realisera det fulle potensialet til denne banebrytande teknologien.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FrontPage;
