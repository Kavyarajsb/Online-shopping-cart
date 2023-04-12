import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "600px",
  color: "#808080",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
};

function PageContent() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <Carousel
        afterChange={onChange}
        autoplay
        className="carousel"
        style={{ margin: 0, padding: 0, overflowX: "hidden" }}
      >
        <div>
          <img
            src={require("../../Images/carousel/img1.png")}
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src={require("../../Images/carousel/img5.png")}
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src={require("../../Images/carousel/img2.png")}
            style={contentStyle}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default PageContent;
