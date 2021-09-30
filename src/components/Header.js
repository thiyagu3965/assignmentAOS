import React from 'react'
import video from '../video/NavVdo.mp4'

export default function Header() {
    return (
        <section class="hero" id="hero">
        <div class="heroText">
            <h1 class=" mt-5 mb-lg-4" data-aos="zoom-in" data-aos-delay="800">
                Nomad Force
            </h1>

            <p class="text-secondary-white-color" data-aos="fade-up" data-aos-delay="1000">
                create a great video for your <strong class="custom-underline">website</strong>
            </p>
        </div>

        <div class="videoWrapper">
            <video autoplay="" loop="" muted="" class="custom-video" >
                <source src={video} type="video/mp4" />

                Your browser does not support the video tag.
            </video>
        </div>

        <div class="overlay"></div>
    </section>
    )
}
