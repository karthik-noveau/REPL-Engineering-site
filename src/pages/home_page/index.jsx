import React from "react";

import { Slider } from "../../components/slider";
import { CORE_VALUES, CLIENTS_DATA } from "./constant";
import { ScrollToTop } from "../../components/scrollto_top";
import { GradiantAnimatedText } from "../../components/text/gradiant_animated";

import styles from "./home.module.css";

import HomeBgBanner from "./images/HomeBgBanner.svg";
import Img1989 from "./images/Img1989.jpeg";
import DoubleQuotesStartIcon from "../../components/icons/doubleQuotesStartIcon.png";
import DoubleQuotesEndIcon from "../../components/icons/doubleQuotesEndIcon.png";

export const Home = () => {
  ScrollToTop();
  return (
    <>
      {/* ------home-banner----- */}
      <div
        className={styles.homeBannerContainer}
        style={{
          backgroundImage: `url(${HomeBgBanner})`,
          backgroundSize: "cover",
        }}
      >
        <div className={styles.HomebannerTitleContainer}>
          <div className={styles.title1}>Beyond Earth, Toward the Stars</div>
          <div className={styles.title2}>
            Shaping Aerospace and Space Innovation
          </div>
        </div>
      </div>

      {/* ------who-we-are------ */}
      <div className={styles.whoWeAreContainer}>
        <div className={styles.whoWeAreSubContainer}>
          <GradiantAnimatedText
            text="Who We Are"
            className={styles.title}
            type="h1"
          />

          <div className={styles.contentContainer}>
            <div className={styles.content1}>
              We make, so the world can fly!
            </div>
            <div className={styles.content2}>
              We are manufacturers, innovators and creators of the some of the
              most precise components, assemblies and sub assemblies that go
              into aircrafts and aerospace vehicles and carriers. And we love
              what we do.
            </div>
          </div>
        </div>
      </div>

      {/* ------slider------ */}
      <Slider />

      {/* ------our journey------ */}
      <div className={styles.ourJourneyContainer}>
        <div className={styles.ourJourneySubContainer}>
          <GradiantAnimatedText
            text="OUR JOURNEY"
            className={styles.title}
            type="h1"
          />
          <table>
            <tr>
              <td>
                <div className={styles.yearText}>1982</div>
              </td>
              <td>
                <span>Established in 1982 in Balanagar as SSI Unit.</span>
                <img src={Img1989} alt="Img1989" />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.yearText}>1996</div>
              </td>
              <td>
                <span>
                  Registered as Ancillary Unit to BDL, Ministry of defence in
                  1996.
                </span>
                <img src={Img1989} alt="Img1989" />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.yearText}>1997</div>
              </td>
              <td>
                <span> Best Vendor award obtained from BHEL in 1997.</span>
                <img src={Img1989} alt="Img1989" />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.yearText}>1998 1999 2000</div>
              </td>
              <td>
                <span>
                  {" "}
                  Best import substitution award for the Products developed in
                  1998, 1999 & 2000 from Ministry of Defence.
                </span>
                <img src={Img1989} alt="Img1989" />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.yearText}>2001 2002</div>
              </td>
              <td>
                <span>Best key Vendor award obtained from HAL in 2001-02.</span>
                <img src={Img1989} alt="Img1989" />{" "}
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.yearText}>2008</div>
              </td>
              <td>
                <span>Prime vendor award obtained from GTRE in 2008.</span>
                <img src={Img1989} alt="Img1989" />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.yearText}>2015</div>
              </td>
              <td>
                <span>
                  ISO 9001:2015 Quality Management Systems implemented.
                  Expansion in 2008 with additional facilities at Balanagar ,
                  Hyderabad.
                </span>
                <img src={Img1989} alt="Img1989" />
              </td>
            </tr>
          </table>
        </div>
      </div>

      {/* ------our vision------ */}
      <div className={styles.ourVisionContainer}>
        <div className={styles.ourVisionSubContainer}>
          <h1 className={styles.title}>OUR VISION</h1>
          <p className={styles.content1}>
            <img
              src={DoubleQuotesStartIcon}
              alt="double quotes"
              className={styles.doubleQuotesIcon}
            />
            To become the first choice of major PSUs, Aero Space and defense
            establishments in India for manufacture of components and sub
            assemblies. Top most priority to Customer satisfaction. Focus on
            continual improvement, innovation and creativity.{" "}
            <img
              src={DoubleQuotesEndIcon}
              alt="double quotes"
              className={styles.doubleQuotesIcon}
            />
          </p>
        </div>
      </div>

      {/* ------core values------ */}
      <div className={styles.coreValuesWrapper}>
        <div className={styles.coreValuesSubWrapper}>
          <GradiantAnimatedText
            text="CORE VALUES"
            className={styles.title}
            type="h1"
          />
          <div className={styles.coreValuesContainer}>
            {CORE_VALUES.map((item) => {
              return (
                <div className={styles.dataInfo} key="core values">
                  <div className={styles.circleContainer}>
                    <div className={styles.circle1}>
                      <div className={styles.circle2}></div>
                    </div>
                    <img src={item.icon} alt="customerSuccessIcon" />
                  </div>
                  <div className={styles.infoContent}>
                    <div className={styles.content}>{item.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ------clients------ */}
      <div className={styles.clientsWrapper}>
        <GradiantAnimatedText
          text="OUR CLIENTS"
          className={styles.title}
          type="h1"
        />
        <div className={styles.clientsContainer}>
          {CLIENTS_DATA.map((item) => {
            return (
              <div className={styles.cardInfoContainer} key="text">
                <img src={item.img} alt={item.name} />
                <div className={styles.textInfo}>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};