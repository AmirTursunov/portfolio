import { type Dispatch, type SetStateAction, useState } from 'react';
import {
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '~/components/Card';
import Title from '~/components/Title';
import styles from '~/styles/Portfolio.module.css';
import projects, { type Project } from '~/utils/constants';

import 'swiper/css/autoplay';
import 'swiper/css/navigation';

type PortfolioProps = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setCurrentProject: (value: Project) => void;
};

function Portfolio({ setOpenModal, setCurrentProject }: PortfolioProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.headerSpacer}></div>
      <Title>Portfolio</Title>

      <Swiper
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className={styles.portfolioSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {projects.map((item, index) => (
          <SwiperSlide
            onClick={() => {
              setOpenModal(true);
              setCurrentProject(item);
            }}
            key={item.id}
            className={`${styles.swiperSlide} ${activeIndex === index && styles.activeSlide}`}
          >
            <Card data={item} isSwiperSlide={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Portfolio;
