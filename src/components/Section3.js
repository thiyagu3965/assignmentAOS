import React from 'react'
import img1 from '../Images/news/1.jpg'
import img2 from '../Images/news/2.jpeg'
import img3 from '../Images/news/3.jpeg'
export default function Section3() {
    return (
        <section class="news section-padding" id="news">
                <div class="container">
                    <div class="row">

                        <div class="col-12">
                            <h2 class="mb-5 text-center" data-aos="fade-up">News & Events</h2>
                        </div>

                        <div class="col-lg-6 col-12 mb-5 mb-lg-0">
                            <div class="news-thumb" data-aos="fade-up">
                                <a href="news-detail.html" class="news-image-hover news-image-hover-warning">
                                    <img src={img1} class="img-fluid large-news-image news-image" width="100%" alt="" />
                                </a>

                                <div class="news-category bg-warning text-white">News</div>
                                
                                <div class="news-text-info">
                                    <h5 class="news-title">
                                        <a href="news-detail.html" class="news-title-link">The rise of the gig economy spells the end for these workers the old system</a>
                                    </h5>

                                    <span class="text-muted">22 hours ago</span>
                                </div>
                            </div> 
                        </div>

                        <div class="col-lg-6 col-12">
                            <div class="news-thumb news-two-column d-flex flex-column flex-lg-row" data-aos="fade-up">
                                <div class="news-top w-100">
                                    
                                    <a href="news-detail.html" class="news-image-hover news-image-hover-primary">
                                        <img src={img2} class="img-fluid news-image" width="100%" alt="" />
                                    </a>

                                    <div class="news-category bg-primary text-white">Events</div>
                                </div>
                                
                                <div class="news-bottom w-100">
                                    <div class="news-text-info">
                                        <h5 class="news-title">
                                            <a href="news-detail.html" class="news-title-link">Job Opportunities: Digital, Marketing</a>
                                        </h5>

                                        <div class="d-flex flex-wrap">
                                            <span class="text-muted me-2">
                                                <i class="bi-geo-alt-fill me-1 mb-2 mb-lg-0"></i>
                                                Alaska,
                                            </span>

                                            <span class="text-muted">August 6, 2021</span>
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div class="news-thumb news-two-column d-flex flex-column flex-lg-row" data-aos="fade-up">
                                <div class="news-top w-100" data-aos="fade-up">
                                    
                                    <a href="news-detail.html" class="news-image-hover news-image-hover-success">
                                        <img src={img3} class="img-fluid news-image" width="100%" alt="" />
                                    </a>

                                    <div class="news-category bg-success text-white">News</div>
                                </div>
                                
                                <div class="news-bottom w-100">
                                    <div class="news-text-info">
                                        <h5 class="news-title">
                                            <a href="news-detail.html" class="news-title-link">What happened to new viral video?</a>
                                        </h5>

                                        <span class="text-muted">6 days ago</span>
                                    </div>
                                </div>
                            </div> 
                        </div>

                    </div>
                </div>
            </section>

    )
}
