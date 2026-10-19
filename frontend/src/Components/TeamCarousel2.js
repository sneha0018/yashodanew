import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  { role: "Founder & President", name: "Dr Vani N Shetty", img: "/assets/yect/1000835010.jpg" },
  { role: "General Secretary", name: "Ananya Shetty", img: "/assets/yect/1000835011.jpg" },
  { role: "Treasurer", name: "Tapasya", img: "/assets/yect/1000835012.jpg" },
];

const TeamCarousel2 = () => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center" className="mt-5">
      {/* Heading */}
      <Grid item xs={12}>
        <h1 className="text-center" style={{ color: "#0c0c89" }}>Our Team</h1>
      </Grid>

      {/* Swiper Carousel */}
      <Grid item xs={12}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}   // 1 member per slide on small screens
          breakpoints={{
            768: { slidesPerView: 3 },  // 3 members per slide on medium+ screens
          }}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  border: "1px solid rgb(12, 92, 12)",
                  backgroundColor: "rgb(12, 92, 12)",
                  padding: "20px",
                  textAlign: "center",
                  borderRadius: "10px",
                }}
              >
                <img src={member.img} className="img-fluid" style={{ width: "100%", borderRadius: "10px" }} />
                <h5 className="mt-3" style={{ color: "#0c0c89" }}>{member.role}</h5>
                <h6 className="text-center" style={{ color: "#0c0c89" }}>{member.name}</h6>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default TeamCarousel2;
