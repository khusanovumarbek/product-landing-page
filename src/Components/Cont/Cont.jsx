import './Cont.css'
import immg1 from '../../img/image1.png'
import immg2 from '../../img/image2.png'
import immg3 from '../../img/image3.png'
import immg4 from '../../img/image4.png'
import immg5 from '../../img/image5.png'
import immg6 from '../../img/image6.png'
import immg7 from '../../img/image7.png'
import immg8 from '../../img/image8.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


const Cont = () => {
  return (
    <div className="Cont">
      <div className="container">
      <div className="Content">
      <h1>Contents Strategies</h1>
      <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
      <div className="sliderr">
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          loop: true,
        }}
        breakpoints={{
          1236: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          }
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        style={{paddingBottom: '60px'}}
      >
        <SwiperSlide>
          <img src={immg1} alt="" />
          <p>By <span>Wahid Ari</span> |  03 March 2019</p>
          <h3>Increasing Prosperity <br /> With Positive Thinking</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={immg2} alt="" />
          <p>By <span>Wahid Ari</span> |  03 March 2019</p>
          <h3>Motivation Is The First <br /> Step To Success</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={immg3} alt="" />
          <p>By <span>Wahid</span> |  03 March 2019</p>
          <h3>Success Steps For Your <br /> Personal Or Business</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={immg4} alt="" />
          <p>By <span>Wahid Ari</span> |  03 March 2019</p>
          <h3>Increasing Prosperity <br /> With Positive Thinking</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={immg5} alt="" />
          <p>By <span>Wahid Ari</span> |  03 March 2019</p>
          <h3>Motivation Is The First <br /> Step To Success</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={immg6} alt="" />
          <p>By <span>Wahid Ari</span> |  03 March 2019</p>
          <h3>Success Steps For Your <br /> Personal Or Business</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={immg7} alt="" />
          <p>By <span>Wahid Ari</span> |  03 March 2019</p>
          <h3>Success Steps For Your <br /> Personal Or Business</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={immg8} alt="" />
          <p>By <span>Wahid Ari</span> |  03 March 2019</p>
          <h3>Success Steps For Your <br /> Personal Or Business</h3>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Cont
