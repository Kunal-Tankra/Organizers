import React from 'react'
import "./MoreCompanies.css"

// img logos
import act from "./logo/act.png"
import dream11 from "./logo/dream11.png"
import Fittogether from "./logo/Fittogether-169x93-05.png"
import goldsgym from "./logo/goldsgym.png"
import parimatch from "./logo/parimatch.png"
import popeyes from "./logo/popeyes.png"
import radiocity from "./logo/radiocity.png"
import Rangers from "./logo/Rangers-Ready-Crest-RGB-1.png"
import RF from "./logo/RF-Logo-01.png"
import sponsorB2 from "./logo/sponsor-b2.png"
import sponsorB4 from "./logo/sponsor-b4.png"
import sponsorC6 from "./logo/sponsor-c6.png"
import toit from "./logo/toit.png"
import WebsiteLogos from "./logo/Website-logos-10.png"

const MoreCompanies = () => {
  return (
    <div className='moreCompanies'>
      {/* PRINCIPAL SPONSORS */}
      <div className="companiesLogo_container">
        <h5>PRINCIPAL SPONSORS</h5>
        <div className="companiesLogo_imgs">

          <a href="https://www.jsw.in/" target='blank'>
            <img src={sponsorB2} alt="https://www.jsw.in/" />
          </a>
          <a href="https://parimatchnews.com/" target='blank'>
            <img src={parimatch} alt="https://parimatchnews.com/" />
          </a>
        </div>
      </div>

      {/* ASSOCIATE PARTNERS */}
      <div className="companiesLogo_container">
        <h5>ASSOCIATE PARTNERS</h5>
        <div className="companiesLogo_imgs">

          <a href="https://www.dream11.com/fantasy-cricket" target='blank'>
            <img src={dream11} alt="" />
          </a>
          <a href="https://eshop.bengalurufc.com/" target='blank'>
            <img src={sponsorB4} alt="" />
          </a>
          <a href="https://www.popeyes.in/" target='blank'>
            <img src={popeyes} alt="" />
          </a>
          <a href="https://www.bengalurufc.com/#" target='blank'>
            <img src={toit} alt="" />
          </a>
          <a href="https://bbh.org.in/" target='blank'>
            <img src={sponsorC6} alt="" />
          </a>
          <a href="https://www.actcorp.in/" target='blank'>
            <img src={act} alt="" />
          </a>
          <a href="https://goldsgym.in/" target='blank'>
            <img src={goldsgym} alt="" />
          </a>
          <a href="https://www.fastandup.in/" target='blank'>
            <img src={WebsiteLogos} alt="" />
          </a>
          <a href="https://www.bengalurufc.com/#" target='blank'>
            <img src={radiocity} alt="" />
          </a>
          <a href="https://www.fitogether.com/" target='blank'>
            <img src={Fittogether} alt="" />
          </a>
        </div>

      </div>

      {/* GRASSROOTS DEVELOPMENT PARTNER */}
      <div className="companiesLogo_container">
        <h5>GRASSROOTS DEVELOPMENT PARTNER</h5>
        <div className="companiesLogo_imgs">

          <a href="https://www.reliancefoundation.org/" target='blank'>
            <img src={RF} alt="" />
          </a>
        </div>


      </div>

      {/* CLUB PARTNER */}
      <div className="companiesLogo_container">
        <h5>CLUB PARTNER</h5>
        <div className="companiesLogo_imgs">

          <a href="https://www.rangers.co.uk/" target='blank'>
            <img src={Rangers} alt="" />
          </a>
        </div>


      </div>
    </div>
  )
}

export default MoreCompanies
