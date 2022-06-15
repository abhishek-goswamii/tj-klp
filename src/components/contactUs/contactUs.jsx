import React from "react";
import newAcc from "../../assets/images/contactUs/multiUser.png";

import ellipseRight from "../../assets/images/contactUs/ellipse_left.png";
import ellipseLeft from "../../assets/images/contactUs/ellipse_right.png";
import chartImg from "../../assets/images/contactUs/chart.png";
import connectingPeopleImg from "../../assets/images/contactUs/connectingPeople.png";
import contactCardImg from "../../assets/images/contactUs/contactCard.png";
import fileImg from "../../assets/images/contactUs/file.png";
import gearImg from "../../assets/images/contactUs/gear.png";
import userImg from "../../assets/images/contactUs/user.png";
import supportImg from "../../assets/images/contactUs/support.png";
import mapImg from "../../assets/images/contactUs/mapImg.png";

import "./contactUs.css";
import SmallCard from "./smallCard";

const ContactUs = () => {
  return (
    <>
      {/* Contact Us Section */}
      <div className="contact-us-block">
        <div className="header-block">
          <img src={ellipseLeft} alt="multi_user_logo" />
          <h1>Contact Us</h1>
          <img src={ellipseRight} alt="multi_user_logo" />
        </div>

        <div className="contact-us-card">

          <div className="contact-us-card_child" >

            <div className="contact-us-card_child_1">

              <SmallCard
                name={"New Account Opening"}
                imgSrc={newAcc}
                mobNo={"254512152323"}
                emailId={"sale@huufgjfhj"}
              />

              <SmallCard
                name={"Support"}
                imgSrc={supportImg}
                mobNo={"254512152323"}
              />
              <SmallCard
                name={"Funds Deposit/Withdrawal"}
                imgSrc={contactCardImg}
                mobNo={"254512152323"}
                emailId={"sale@huufgjfhj"}
              />
              <SmallCard
                name={"Admin/RMS"}
                imgSrc={userImg}
                mobNo={"254512152323"}
                emailId={"sale@huufgjfhj"}
              />

            </div>
            <div className="contact-us-card_child_2">
              <SmallCard
                name={"Trading/Dealing"}
                imgSrc={chartImg}
                mobNo={"254512152323"}
              />
              <SmallCard
                name={"Partnership"}
                imgSrc={connectingPeopleImg}
                mobNo={"254512152323"}
              />
              <SmallCard
                name={"Modification/Reactivation"}
                imgSrc={gearImg}
                mobNo={"254512152323"}
              />
              <SmallCard
                name={"Department"}
                imgSrc={fileImg}
                mobNo={"254512152323"}
              />
            </div>

          </div>

        </div>

      </div>

      {/* Location Section */}

      <div className="location">
        <div className="location-heading">
          <h1>Locations</h1>
        </div>

        <div className="location-main-div">

          <div className="location-main-div-child">

            <div className="location-card">

              <div className="location-card-top">
                <h2>CORPORATE OFFICE</h2>
                <p>
                  Hall No. 2, 1st Floor Western Block,
                  Above Central Bank, GTB Complex,
                  T. T. Nagar, Bhopal-462003</p>
              </div>
              <div className="location-card-bottom">
                <div className="location-card-bottom-img">
                  <img src={mapImg} alt="" />
                </div>
                <div className="location-card-bottom-right">
                  <div className="location-card-bottom-right-box">
                    <h4>
                      CALL US @
                    </h4>
                    <p>
                      0755-4223778,
                    </p>
                    <p>
                      4350141-143,
                    </p>
                    <p>
                      0755-4283016
                    </p>
                  </div>
                  <div className="location-card-bottom-right-box">

                    <h4>
                      EMAIL US @
                    </h4>

                    <p>
                      kmlho@kalpatarumulti.com
                    </p>

                    <p>
                      NAME OF CONTACT PERSON

                    </p>
                    <p>
                      Amitabh Manya Jain (M.D.)
                    </p>

                  </div>
                  <div className="location-card-bottom-right-box">
                    <h4>
                      CONTACT NO
                    </h4>
                    <p>
                      09425008895
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="location-card">

              <div className="location-card-top">
                <h2>CORPORATE OFFICE</h2>
                <p>
                  Hall No. 2, 1st Floor Western Block,
                  Above Central Bank, GTB Complex,
                  T. T. Nagar, Bhopal-462003</p>
              </div>
              <div className="location-card-bottom">
                <div className="location-card-bottom-img">
                  <img src={mapImg} alt="" />
                </div>
                <div className="location-card-bottom-right">
                  <div className="location-card-bottom-right-box">
                    <h4>
                      CALL US @
                    </h4>
                    <p>
                      0755-4223778,
                    </p>
                    <p>
                      4350141-143,
                    </p>
                    <p>
                      0755-4283016
                    </p>
                  </div>
                  <div className="location-card-bottom-right-box">

                    <h4>
                      EMAIL US @
                    </h4>

                    <p>
                      kmlho@kalpatarumulti.com
                    </p>

                    <p>
                      NAME OF CONTACT PERSON

                    </p>
                    <p>
                      Amitabh Manya Jain (M.D.)
                    </p>

                  </div>
                  <div className="location-card-bottom-right-box">
                    <h4>
                      CONTACT NO
                    </h4>
                    <p>
                      09425008895
                    </p>
                  </div>
                </div>
              </div>

            </div>




          </div>



        </div>
      </div>

    </>
  );
};

export default ContactUs;
