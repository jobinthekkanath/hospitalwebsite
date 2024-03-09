import React from "react";
import logos from '../../assets/img/section-img.png'
import blog1 from '../../assets/img/blog1.jpg'
import blog2 from '../../assets/img/blog2.jpg'
import blog3 from '../../assets/img/blog3.jpg'


function News() {
  return (
    <section className="news">
      <div className="news-div">
        <div className="news-div-heading">
          <p className="news-div-heading-p">
          Keep Up With Our Most Recent Medical News
          </p>
          <div className="news-div-heading-logo">
            <img src={logos} alt="" className="news-div-heading-logo-img" />
          </div>
          <p className="news-div-heading-main-detail">
          Stay informed with our latest updates and breakthroughs in the medical field for optimal health awareness
          </p>
        </div>
        <div className="news-div-details">
          <div className="news-div-details-div1">
            <div className="news-div-details-div1-logo">
              <img src={blog1} alt=""  className="news-div-details-div1-logo-img"  />
            </div>
            <div className="news-div-details-div1-desc">
              <h2 className="news-div-details-div1-desc-h2" >22 Aug, 2022</h2>
              <p className="news-div-details-div1-desc-p1">We have annnocuced our new product</p>
              <p className="news-div-details-div1-desc-p2">We are excited to introduce our latest innovation,
               designed to enhance your healthcare experience and outcomes</p>
            </div>
          </div>
          <div className="news-div-details-div2">
            <div className="news-div-details-div2-logo">
              <img src={blog2} alt=""  className="news-div-details-div2-logo-img"  />
            </div>
            <div className="news-div-details-div2-desc">
              <h2 className="news-div-details-div2-desc-h2" >15 Jul, 2022</h2>
              <p className="news-div-details-div2-desc-p1">Top five way for solving teeth problems</p>
              <p className="news-div-details-div2-desc-p2">Discover the top five effective methods for 
              addressing various dental issues and achieving optimal oral health</p>
            </div>
          </div>
          <div className="news-div-details-div3">
            <div className="news-div-details-div3-logo">
              <img src={blog3} alt=""  className="news-div-details-div3-logo-img"  />
            </div>
            <div className="news-div-details-div3-desc">
              <h2 className="news-div-details-div3-desc-h2" >05 Jan, 2022</h2>
              <p className="news-div-details-div3-desc-p1">Smaller incisions for open heart surgery</p>
              <p className="news-div-details-div3-desc-p2">Surgeries can now be minimally invasive with shorter 
              recovery times due to new technology such as robot-assisted surgery  </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
