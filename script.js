class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="headerAndMobileSearch">
         <div id="header">
            <a href="homepage.html" id="logoDiv" class="headerSection">
               <img src="images/logo.png" alt="site-logo">
            </a>
            <div id="searchDiv" class="headerSection">
                <div id="backgroundDiv">
                  <input type="text" id="searchBox" placeholder="Search for products..." >
                  <button id="submitButton" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
               </div>
            </div>
            <div id="otherButtons">
               <div id="accountDiv" onclick=showAccount() class="headerSection">
                  <i class="fa-solid fa-user" style="color: #000000;"></i>
               </div>
               <div id="cartDiv" class="headerSection">
                  <a href="cart-page.html"><i class="fa-solid fa-cart-shopping" style="color: #000000;"></i></a>
               
               </div>
               <div id="menuDiv" onclick=showMenu() class="headerSection">
                  <i class="fa-solid fa-bars" style="color: #000000;"></i>
               </div>
            </div>
         </div>
         <div id="mobileSearchBarDiv">
            <div id="backgroundDiv">
                  <input type="text" id="searchBox" placeholder="Search for products..." >
                  <button id="submitButton" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
               </div>
            </div>
         </div>
      </div>
      <menu id="menu">
         <ul>
            <li  onclick=hideMenu()><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
            <li>Store</li>
            <li>Categories</li>
            <li>Track Order</li>
            <li>Help</li>
            <li>Sign In</li>
         </ul>
      </menu>
      <div id="account">
         <div id="closeIcon" onclick=hideAccount()><svg xmlns="http://www.w3.org/2000/svg" height="43px" viewBox="0 -960 960 960" width="43px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
         <h2>Register / Sign in</h2>
         <p id="protection">Your information is protected</p>
         <input id="sign-in-input" placeholder="Email or Mobile phone number">
         <button id="continueButton">Continue</button>
         <a class="accLink" href="">Trouble signing in?</a>
         <p id="agreeText" >By continuing, you agree to Amazon's <a class="accLink" href="">Conditions of Use</a> and <a class="accLink" href="">Privacy Notice</a>.</p>
      </div>
    `;
  }
}

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="footer">
         <div id="infoDiv">
            <div class="subFooterDivs" id="aboutDiv">
                <p class="title">About</p>
                <p><a href="" class="links">Company info</a></p>
                <p><a href="" class="links">News</p>
                <p><a href="" class="links">Government relations</a></p>
                <p><a href="" class="links">Policies</a></p>
                <p><a href="" class="links">Advertise with us</a></p>
            </div>

            <div class="subFooterDivs" id="payDiv">
               <p class="title">Buy</p>
               <p><a href="" class="links">Registration</a></p>
               <p><a href="" class="links">eBay Money Back Guarantee</a></p>
               <p><a href="" class="links">Bidding & buying help</a></p>
               <p><a href="" class="links">Stores</a></p>
            </div>
            <div class="subFooterDivs" id="socailDiv">
               <p class="title">Social Media</p>
               <p><a href="" class="links">Facebook</a></p>
               <p><a href="" class="links">Twitter</a></p>
               <p><a href="" class="links">Instagram</a></p>
               <p><a href="" class="links">Tiktok</a></p>
            </div>
            <div class="subFooterDivs" id="helpDiv">
               <p class="title">Help & Contact</p>
               <p><a href="" class="links">Seller Information Center</a></p>
               <p><a href="" class="links">Contact us</a></p>
            </div>
      
         </div>

         <div id="copyrightDiv">
            Copyright© 1995-2024 E-Store All Rights Reserved.
         </div>
      </div>
    `;
  }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);


let menu = document.getElementById("menu")
let account = document.getElementById("account")

function showMenu(){
   menu.style.display = "flex"
}

function hideMenu(){
   menu.style.display = "none"
}

function showAccount(){
  account.style.display = "flex"
}

function hideAccount(){
  account.style.display = "none"
}

