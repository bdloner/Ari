class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div id="navbar" class="navbar-autoshow">
            <div class="navbar-block g-container">
                <div class="dt-col -logo">
                    <div class="logo-block">
                        <a href="/"><img class="logo-img" src="/images/ari-logo.svg" alt="Ari Logo"></a>
                    </div>
                </div>
                <div class="dt-col -menu">
                    <ul class="nav">
                        <li><a href="#">รองเท้าฟุตบอล</a></li>
                        <li><a href="#">อุปกรณ์ผู้รักษาประตู</a></li>
                        <li><a href="#">ชุดแข่ง</a></li>
                        <li><a href="#">อุปกรณ์ฟุตบอล</a></li>
                        <li><a href="#">เสื้อผ้า</a></li>
                        <li><a href="#">อาริเกียร์</a></li>
                        <li><a href="#">ลดราคา</a></li>
                    </ul>
                </div>
                <div class="dt-col -addon">
                    <ul class="addon-block">
                        <li class="addon-col -search"><a href="#"><img src="/images/search-icon.svg" alt="Search Icon"></a></li>
                        <li class="addon-col -acc"><a href="#"><img src="/images/acc-icon.svg" alt="Account Icon"></a></li>
                        <li class="addon-col -minic"><a href="#"><img src="/images/minic-icon.svg" alt="Mini Cart Icon"></a></li>
                    </ul>
                    <div class="dd-lang-block">
                        <a href="#" class="d-btn"><img class="img-flag" src="/images/thai-flag.svg" alt="th" /> ไทย <img class="dd-icon"src="/images/dd-icon.svg" alt="Dropdown Icon"></a>
                        <div class="dd-content-block">
                            <a href="#"><img class="img-flag" src="/images/us-flag.svg" alt="en" /> EN</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <header class="site-header">
          <nav class="main-nav g-container">
              <div class="half-nav top-menu">
                  <div class="dt-col -lang">
                      <div class="dd-lang-block">
                          <a href="#" class="d-btn"><img class="img-flag" src="/images/thai-flag.svg" alt="th" /> ไทย <img src="/images/dd-icon.svg" alt="Dropdown Icon"></a>
                          <div class="dd-content-block">
                            <a href="#"><img class="img-flag" src="/images/us-flag.svg" alt="en" /> EN</a>
                          </div>
                      </div>
                  </div>
                  <div class="dt-col -logo">
                      <div class="logo-block">
                          <a href="/"><img class="logo-img" src="/images/ari-logo.svg" alt="Ari Logo"></a>
                      </div>
                  </div>
                  <div class="dt-col -addon">
                      <ul class="addon-block">
                          <li class="addon-col -search"><a href="#"><img src="/images/search-icon.svg" alt="Search Icon"></a></li>
                          <li class="addon-col -acc"><a href="#"><img src="/images/acc-icon.svg" alt="Account Icon"></a></li>
                          <li class="addon-col -minic"><a href="#"><img src="/images/minic-icon.svg" alt="Mini Cart Icon"></a></li>
                      </ul>
                  </div>
              </div>
              <div class="half-nav main-menu">
                  <div class="nav-menu-block">
                      <ul class="nav-menu">
                          <li><a href="#">รองเท้าฟุตบอล</a></li>
                          <li><a href="#">อุปกรณ์ผู้รักษาประตู</a></li>
                          <li><a href="#">ชุดแข่ง</a></li>
                          <li><a href="#">อุปกรณ์ฟุตบอล</a></li>
                          <li><a href="#">เสื้อผ้า</a></li>
                          <li><a href="#">อาริเกียร์</a></li>
                          <li><a href="#">ลดราคา</a></li>
                      </ul>
                  </div>
              </div>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);