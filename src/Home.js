import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div>
          <Carousel interval="3000" home__images>
            <Carousel.Item>
              <img
                className=" home__image "
                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MzBiNjIyYjgt/MzBiNjIyYjgt-NWM5ZWJlYTct-w1500._CB669030425_.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" home__image "
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YmM4ZGRiNGQt/YmM4ZGRiNGQt-ZGU1MTFjY2Mt-w1500._CB669562935_.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" home__image "
                src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/Homestead/AHM_Week-1_Gateway_Desktop_1500x600-V4._CB655178950_.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-YzA3MzM4Yjgt-w1500._CB412117312_.jpg"

                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MmY4MTZlYmMt/MmY4MTZlYmMt-MWZjMjc0MzEt-w1500._CB670025017_.jpg"
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg"
                // style={{ height: "100vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-MjZhZDIzYTIt-w1500._CB670370726_.jpg"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}

        <div className="home__row">
          <Product
            id="12321341"
            // title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            title="Artificial Intelligence for Maintenance 4.0 Paperback – August 2, 2020"
            price={24.96}
            rating={5}
            // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            image="https://images-na.ssl-images-amazon.com/images/I/41DnK7oO-jL._SX352_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="G128 Ethiopia Lion of Judah Ethiopian Flag 3x5 FT 150D Printed Flag | 3x5 feet | Printed 150D – Indoor/Outdoor, Vibrant Colors, Brass Grommets, Quality Polyester, Much Thicker More Durable Than 100D"
            price={100.0}
            rating={4}
            // image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            image="https://images-na.ssl-images-amazon.com/images/I/71kHbC48ZIL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="
Ethiopian/Eritrean Traditional Coffee Set Sábá ሳባ Edition. Full Set"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61qscYvyjyL._AC_SL1000_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="
Ethiopian/Eritrean Traditional Coffee Set Sábá ሳባ Edition. Full Set"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61qscYvyjyL._AC_SL1000_.jpg"
          />
          <Product
            id="23445930"
            title="Minibee Women's Ethnic Cotton Linen Short/Long Sleeves Irregular Dress"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61r1x0NIh7L._MCnd_AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Christopher Knight Home Karen Traditional Chesterfield Loveseat Sofa, Beige and Dark Brown, 61.75 x 33.75 x 27.75"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/817-NdSVgmL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
