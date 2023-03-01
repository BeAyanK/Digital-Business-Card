import React from 'react'



export default function Main() {
    const linkedIn = () => {
        window.open("https://www.linkedin.com/in/ayan-khan-work/", "_blank");
    }
    const sendEmail = () => {
        window.location.href = "mailto:beaayank@gmail.com";
    }
    return (
        <main>
            <h1>
                Ayan Khan
            </h1>
            <h5>
                Software Developer
            </h5>
            <h6>
                ayankhan.website
            </h6>
            <div className="button">
                {/* <a href="mailto:beaayank@gmail.com" target="_blank"> */}
                    <button className="email" onClick={sendEmail}>
                        <img src="/images/Mail.png" alt="" />
                        Email
                    </button>
                {/* </a> */}
                <a href="https://www.linkedin.com/in/ayan-khan-work/" target="_blank" >
                    <button className="linkedin">
                        <img src="/images/linkedin.png" alt="" />
                        LinkedIn
                    </button>
                </a>
            </div>
            <div className="info">
                <h2>
                    About
                </h2>
                <p>
                    I am a Software Developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h2>
                    Interest
                </h2>
                <p>
                    Food expert. Music scholar. Reader. Internet fanatic. Travel geek. Manga geek. Anime weeb. Tech enthusiast. 
                </p>
            </div>
        </main>
    )
}
