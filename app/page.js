

import React from 'react';
import styles from './page.module.css'; 

const FrontPage = () => {
  return (
    <main className={styles['bg-gradient-to-br']}>
      <div className={styles['max-w-5xl']}>
        <h1 className={`${styles['text-4xl']} md:text-6xl ${styles['font-bold']} ${styles['text-white']} ${styles['mb-8']} ${styles['center-heading']}`}>
          Øving!
        </h1>
        <div className={`${styles['grid']} ${styles['grid-cols-1']} md:${styles['grid-cols-2']} ${styles['gap-6']}`}>
        <a href="https://www.google.com" className={styles['no-underline']}>
            <div className={`${styles['bg-white']} ${styles['rounded-lg']} ${styles['shadow-lg']} ${styles['p-6']}`}>
              <img
                src="https://media.istockphoto.com/id/1128725181/photo/senior-teacher-talking-to-large-group-of-college-students-in-amphitheater.jpg?s=612x612&w=0&k=20&c=Y2GTvvk0Sz8psB2pgUjbSyIoEjsDLIrHbQzXwtPui_Y="
                alt="Photo"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h2 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-norsk']} ${styles['mb-2']}`}>et accusamus</h2>
              <p className={styles['text-norsk']}>
                ero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
              </p>
            </div>
          </a>
          
          <a href="https://www.google.com"className={styles['no-underline']}>
          <div className={`${styles['bg-white']} ${styles['rounded-lg']} ${styles['shadow-lg']} ${styles['p-6']}`}>
            <img
              src="https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q="
              alt="photo"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className={`${styles['text-2xl']} ${styles['font-bold']} ${styles['text-norsk']} ${styles['mb-2']}`}>et accusamus</h2>
            <p className={styles['text-norsk']}>
              ero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
            </p>
          </div>
        </a>

        </div>
      </div>
    </main>
  );
};

export default FrontPage;
