import * as React from "react";
import { Link } from "gatsby";

//import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
//import twitter from "../img/social/twitter.svg";
//import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Noticias
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" target="_blank" rel="noopener" href="https://web.facebook.com/profile.php?id=100089640021920">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                {/*<a title="twitter" target="_blank" rel="noopener" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>*/}
                <a title="instagram" target="_blank" rel="noopener" href="https://www.instagram.com/tuguitarra.peru/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                {/*<a title="vimeo" target="_blank" rel="noopener" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>*/}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
