import React from "react";
import "./social.css"
import linkedinIcon from "../../images/LinkedIn.svg"
import githubIcon from "../../images/GitHub.svg"
import mailIcon from "../../images/Gmail.svg"

export default function Social() {
    return (
        <div className="footerSocial">
            <div className="footerContainer">
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/danielopzm/" className="socialLinks">
                        <img src={linkedinIcon} alt="Not Found" id="linkedinIcon" />
                        <text>danielopzm</text>
                    </a>
                </div>
                <div className="github">
                    <a href="https://github.com/johaolopz" className="socialLinks">
                        <img src={githubIcon} alt="Not Found" id="githubIcon" />
                        <text>johaolopz</text>
                    </a>
                </div>
                <div className="mail">
                    <a href="mailto:johao.lopz.m@gmail.com" className="socialLinks">
                        <img src={mailIcon} alt="Not Found" id="mailIcon" />
                        <text>johao.lopz.m@gmail.com</text>
                    </a>
                </div>
            </div>
        </div>
    );
}