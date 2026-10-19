import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const programs = [
  { id: "old-age", title: "OLD AGE CARE", img: "/assets/yect/IMG20240805173415_01.jpg" },
  { id: "blood-donation", title: "BLOOD DONATION", img: "/assets/yect/1000834628(1).jpg" },
  { id: "students-hostel", title: "STUDENTS HOSTEL", img: "/assets/yect/IMG_20240810_211610(3).jpg" },
  { id: "hygiene", title: "HYGIENE AWARENESS PROGRAM", img: "/assets/yect/1000834616(1).jpg" },
  { id: "nutrition", title: "NUTRITION SUPPORT PROGRAM", img: "/assets/yect/1000695158(4).jpg" },
  { id: "farmers", title: "FARMERS SUPPORT PROGRAM", img: "/assets/yect/1000835000(3).jpg" },
  { id: "mask", title: "MASK DISTRIBUTION DRIVE", img: "/assets/yect/1000834534.jpg" },
  { id: "asha", title: "SUPPORT FOR ASHA WORKERS", img: "/assets/yect/1000695885(3).jpg" },
  { id: "covid", title: "COVID-19 VACCINATION DRIVE", img: "/assets/yect/1000834509(1).jpg" },
  { id: "food", title: "FOOD DRIVE", img: "/assets/yect/1000834570(3).jpg" },
  { id: "specially-abled", title: "SUPPORT FOR SPECIALLY ABLED", img: "/assets/yect/1000834541(3).jpg" },
  { id: "trees", title: "SAVE TREES", img: "/assets/yect/1000778542(3).jpg" }
];

const ProgramsCarousel = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-5">
      <h2 className="text-center" style={{ color: "#0c0c89", fontWeight: "700" }}>
        Programs We Conducted
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // Default for mobile
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 3 } // Show 3 slides on desktop
        }}
        className="mt-4"
      >
        {programs.map((program, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                border: "1px solid rgb(12, 92, 12)",
                backgroundColor: "rgb(12, 92, 12)",
                padding: "10px",
                cursor: "pointer"
              }}
              onClick={() => navigate(`/program#${program.id}`)}
            >
              <img src={program.img} className="img-fluid" alt={program.title} />
              <h4 className="text-center mt-4" style={{ fontWeight: "700", color: "#0c0c89" }}>
                {program.title}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProgramsCarousel;
