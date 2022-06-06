import React from 'react'
import getStartedIMage from '../../images/Investment-data-img.png'
import welcomeImage from '../../images/welcome_img.png'
import './homepage.css'
import featureImage from '../../images/features_img.png'
import productOfferedImage from '../../images/product_offered_img.png'

const Homepage = () => {
  return (
    <>
      <div className='get_started'>

        <div className='get_started_img'>
          <img src={getStartedIMage} alt="" />
        </div>

        <div className='get-started-btn'>
          <div>
            <h1>Invest in Mutual Funds</h1>

            <p>Trusted by many peoples. <br />
              Start investing Today </p>

            <button>Get Started</button>
          </div>

        </div>


      </div>

      {/* welcome to kalpataru div*/}

      <div className='welcome_kalpataru'>

        <div className='welcome_kalpataru_des'>

          <div>

            <h2>Welcome To Kalpataru
              Multiplier Ltd.</h2>
            <div className='welcome_kalpataru_des_card'>
              <p>Kalpataru is a wishful Devine Tree and in present context a
                widely Trusted, Time tested and Transparent Share Broker,
                Investment Advisor and D.P. of this region. Kalpataru offers
                a complete solution to all your Investment problems, needs
                and requirements since 1992. Our field of operation is Share
                Trading, Commodity, Derivative (F&O) Trading, Currency, IPO,
                Demat, Mutual Fund and Pan Card Services.</p>
              <button>Read More</button>
            </div>

          </div>

        </div>

        <div className='welcome_kalpataru_img'>

          <img src={welcomeImage} alt="" />

        </div>

      </div>

      {/* features */}

      <div className='feature'>
        <div className='feature_img'>
          <img src={featureImage} alt="" />
        </div>

        <div className='feature_features'>

          <h1>Features</h1>

          <div className='feature_features_boxes'>

            <div className='feature_features_box'>Expert
              <br /> Advidsory</div>

            <div className='feature_features_box'>Transparent
              <br /> Pricing</div>

            <div className='feature_features_box'>Flexible <br />
              Brokerage Plans</div>

            <div className='feature_features_box'>Offers Both <br />
              Online and Offline</div>

          </div>

        </div>

      </div>

      {/* product offered */}

      <div className='product_offered'>

        <div className='product_offered_headline'>
            <h1>Products Offered Within Exchanges</h1>
        </div>

        <div className='product_offered_div'>

          <img src={productOfferedImage} alt="" />

          <div className='product_offered_types'>

          </div>

        </div>

      </div>

    </>
  )
}

export default Homepage