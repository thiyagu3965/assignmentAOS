import React from 'react'
import img1 from '../Images/portfolio/1.jpeg'
import img2 from '../Images/portfolio/2.jpeg'
import img3 from '../Images/portfolio/3.jpeg'
import img4 from '../Images/portfolio/4.jpeg'
export default function Section2() {
    return (
        <section class="section-padding" id="portfolio">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">
                    <h2 class="mb-5 text-center" data-aos="fade-up">Portfolio</h2>
                </div>

                <div class="col-lg-6 col-12">
                    <div class="portfolio-thumb mb-5" data-aos="fade-up">
                        <a href="images/portfolio/visuals-Y4qzW3AsvqI-unsplash.jpeg" class="image-popup">
                            <img src={img1}class="img-fluid portfolio-image" alt="" />
                        </a>

                        <div class="portfolio-info">                     
                            <h4 class="portfolio-title mb-0">Effortless</h4>

                            <p class="text-danger">Branding</p>
                        </div>
                    </div> 

                    <div class="portfolio-thumb" data-aos="fade-up">
                        <a href="images/portfolio/severin-candrian-nn3uIZqmUtE-unsplash.jpeg" class="image-popup">
                            <img src={img2} class="img-fluid portfolio-image" alt="" />
                        </a>

                        <div class="portfolio-info">                     
                            <h4 class="portfolio-title mb-0">Health technology</h4>

                            <p class="text-success">Art Direction</p>
                        </div>
                    </div> 
                </div>

                <div class="col-lg-6 col-12">
                    <div class="portfolio-thumb mt-5 mt-lg-0 mb-5" data-aos="fade-up">
                        <a href="images/portfolio/tyler-nix-Y1drF0Y3Oe0-unsplash.jpeg" class="image-popup">
                            <img src={img3} class="img-fluid portfolio-image" alt="" />
                        </a>

                        <div class="portfolio-info">                     
                            <h4 class="portfolio-title mb-0">Maki</h4>

                            <p class="text-warning">Website</p>
                        </div>
                    </div> 

                    <div class="portfolio-thumb" data-aos="fade-up">
                        <a href="images/portfolio/thought-catalog-gv-T-OjLe4c-unsplash.jpeg" class="image-popup">
                            <img src={img4} class="img-fluid portfolio-image" alt="" />
                        </a>

                        <div class="portfolio-info">                     
                            <h4 class="portfolio-title mb-0">The gig economy</h4>

                            <p class="text-info">Graphic</p>
                        </div>
                    </div> 
                </div>

            </div>
        </div>
    </section>
    )
}
