import React from "react";

function Footer(props) {
  return (
    <footer>
      <div className="footer-content">
        <img className="logo" src={props.logo} alt="logo" />
        <div className="attribution">
          <h4>{props.footerHeading}</h4>
          <a href={props.heroImgLink}>{props.heroImgText}</a>
          <a href={props.skillImgLink}>{props.skillImgText}</a>
          <a href={props.profileImgLink} title="hacker icons">
            {props.profileImgText}
          </a>
        </div>
        <div className="contact-me">
          <h4>{props.footerContactHeading}</h4>
          <p>{props.email}</p>
          <div className="social-media">
            <a href="https://instagram.com/tabin_imtiyaz85?igshid=ZDdkNTZiNTM=">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/tabin_imtiyaz85?s=11&t=FLbWCkQKMqr5H0OYYMavKA">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://github.com/tabinimtiyazwork">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <h5 id="copyright">Copyright</h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
