import React from 'react';
import {useRef, useEffect} from 'react';
import { brandName } from '../../constants/constants';

import './style.css';

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
      const test = () => {
          const tabsNewAnim = navbarRef.current.querySelector('#navbarSupportedContent');
          const activeItemNewAnim = tabsNewAnim.querySelector('.active');
          const activeWidthNewAnimHeight = activeItemNewAnim.clientHeight;
          const activeWidthNewAnimWidth = activeItemNewAnim.clientWidth;
          const itemPosNewAnimTop = activeItemNewAnim.offsetTop;
          const itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;
          
          document.querySelector(".hori-selector").style.cssText = `
              top: ${itemPosNewAnimTop}px;
              left: ${itemPosNewAnimLeft}px;
              height: ${activeWidthNewAnimHeight}px;
              width: ${activeWidthNewAnimWidth}px;
          `;

          tabsNewAnim.addEventListener("click", (e) => {
              if (e.target.tagName === 'A') {
                  tabsNewAnim.querySelectorAll('li').forEach(li => li.classList.remove("active"));
                  e.target.parentNode.classList.add('active');
                  const activeWidthNewAnimHeight = e.target.clientHeight;
                  const activeWidthNewAnimWidth = e.target.clientWidth;
                  const itemPosNewAnimTop = e.target.offsetTop;
                  const itemPosNewAnimLeft = e.target.offsetLeft;
                  document.querySelector(".hori-selector").style.cssText = `
                      top: ${itemPosNewAnimTop}px;
                      left: ${itemPosNewAnimLeft}px;
                      height: ${activeWidthNewAnimHeight}px;
                      width: ${activeWidthNewAnimWidth}px;
                  `;
              }
          });
      };

      setTimeout(test, 0);
      window.addEventListener('resize', () => setTimeout(test, 500));

      const toggler = navbarRef.current.querySelector(".navbar-toggler");
      toggler.addEventListener('click', () => {
          const collapse = navbarRef.current.querySelector(".navbar-collapse");
          const display = getComputedStyle(collapse).display;
          if (display === "none") {
              collapse.style.display = "block";
          } else {
              collapse.style.display = "none";
          }
          setTimeout(test, 0);
      });

      return () => {
          window.removeEventListener('resize', test);
      };
  }, []);

  return (
    <nav class="navbar navbar-expand-custom navbar-mainbg" ref={navbarRef}>
        <a class="navbar-brand navbar-logo" href="#">Bharathanjali</a>
        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);">Gallery</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
                
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
