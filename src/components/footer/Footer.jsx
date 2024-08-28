import './footer.scss'
import instagram from '../../assets/instagram.svg';
import twitch from '../../assets/twitch.svg';
import facebook from '../../assets/facebook.svg';
import tiktok from '../../assets/tiktok.svg';
import youtube from '../../assets/youtube.svg';
import discord from '../../assets/dicord.svg';
import twitter from '../../assets/twitter.svg';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-logo">
        <div className="sub-heading">New Era of Card Battles</div>
        <div className="site-name">CyberJungles</div>
      </div>
      <div className="site-rights">
        <div className="rights">All rights reserved</div>
        <div className="published-year">2023</div>
      </div>
      <ul className="social-icons">
        <li className="social-icon">
          <a className="link" href="#">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li className="social-icon">
          <a className="link" href="#">
            <img src={twitch} alt="" />
          </a>
        </li>
        <li className="social-icon">
          <a className="link" href="#">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li className="social-icon">
          <a className="link" href="#">
            <img src={tiktok} alt="" />
          </a>
        </li>
        <li className="social-icon">
          <a className="link" href="#">
            <img src={twitter} alt="" />
          </a>
        </li>
        <li className="social-icon">
          <a className="link" href="#">
            <img src={youtube} alt="" />
          </a>
        </li>
        <li className="social-icon">
          <a className="link" href="#">
            <img src={discord} alt="" />
          </a>
        </li>
      </ul>
    </footer>
  )
}