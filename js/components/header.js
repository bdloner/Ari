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
                        <li id="dd-boots" class="main-dd">
                            <a href="#">รองเท้าฟุตบอล</a>
                            <div class="dropdown-content">
                                    <div class="grid-block">
                                        <div class="grid-item -mega-main-menu">
                                            <ul>
                                                <li class="top-menu">
                                                    <a href="#">สินค้ามาใหม่</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบสินค้ามาใหม่</a></div>
                                                </li>
                                                <li class="top-menu main active">
                                                    <a href="#">ฟุตบอล</a>
                                                    <div class="mega-menu-content main active">
                                                        <div class="sub-grid-block">
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>Nike</h5>
                                                                    <li><a href="#">Mercurial</a></li>
                                                                    <li><a href="#">Phantom GT</a></li>
                                                                    <li><a href="#">Phantom Vision</a></li>
                                                                    <li><a href="#">Phantom Venom</a></li>
                                                                    <li><a href="#">Tiempo</a></li>
                                                                    <li><a href="#">Mercurial</a></li>
                                                                    <li><a href="#">Phantom GT</a></li>
                                                                    <li><a href="#">Phantom Vision</a></li>
                                                                    <li><a href="#">Phantom Venom</a></li>
                                                                    <li><a href="#">Tiempo</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>Adidas</h5>
                                                                    <li><a href="#">Predator x</a></li>
                                                                    <li><a href="#">X</a></li>
                                                                    <li><a href="#">Nemeziz</a></li>
                                                                    <li><a href="#">Nemeziz Messi</a></li>
                                                                    <li><a href="#">Copa</a></li>
                                                                </ul>
                                                                <ul class="sub-football">
                                                                    <h5>New Balance</h5>
                                                                    <li><a href="#">Audazo</a></li>
                                                                    <li><a href="#">Furon</a></li>
                                                                    <li><a href="#">Tekela</a></li>
                                                                    <li><a href="#">Nemeziz Messi</a></li>
                                                                    <li><a href="#">Copa</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>Puma</h5>
                                                                    <li><a href="#">Future</a></li>
                                                                    <li><a href="#">Ultra</a></li>
                                                                    <li><a href="#">One</a></li>
                                                                    <li><a href="#">King</a></li>
                                                                </ul>
                                                                <ul class="sub-football">
                                                                    <h5>Diarora</h5>
                                                                    <li><a href="#">B-Elite</a></li>
                                                                    <li><a href="#">Brasil</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>Mizuno</h5>
                                                                    <li><a href="#">Rebula</a></li>
                                                                    <li><a href="#">Morelia</a></li>
                                                                    <li><a href="#">Morelia Neo</a></li>
                                                                    <li><a href="#">Wave Cup</a></li>
                                                                </ul>
                                                                <ul class="sub-football">
                                                                    <h5>Puma</h5>
                                                                    <li><a href="#">Medusae</a></li>
                                                                    <li><a href="#">Speciali</a></li>
                                                                    <li><a href="#">Tocco</a></li>
                                                                    <li><a href="#">UX</a></li>
                                                                    <li><a href="#">Velocita</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ฟุตซอล</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบฟุตซอล</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ประเภทพื้นสนาม</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบประเภทพื้นสนาม</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">เด็ก</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบเด็ก</a></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="grid-item -mega-sub-menu"></div>
                                        <div class="grid-item -mega-bg-01"></div>
                                    </div>
                                </div>
                        </li>
                        <li id="dd-keepers" class="main-dd">
                            <a href="#">อุปกรณ์ผู้รักษาประตู</a>
                            <div class="dropdown-content">
                                    <div class="grid-block">
                                        <div class="grid-item -mega-main-menu">
                                            <ul>
                                                <li class="top-menu">
                                                    <a href="#">สินค้ามาใหม่</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบสินค้ามาใหม่</a></div>
                                                </li>
                                                <li class="top-menu main active">
                                                    <a href="#">ถุงมือผู้รักษาประตู</a>
                                                    <div class="mega-menu-content main active">
                                                        <div class="sub-grid-block">
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>Nike</h5>
                                                                    <li><a href="#">Day break</a></li>
                                                                    <li><a href="#">GRIP3</a></li>
                                                                    <li><a href="#">Black X Chile Red</a></li>
                                                                    <li><a href="#">Mercurial</a></li>
                                                                    <li><a href="#">Phantom Fire</a></li>
                                                                    <li><a href="#">Neighbourhood</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>Adidas</h5>
                                                                    <li><a href="#">Inflight x</a></li>
                                                                    <li><a href="#">PREDATOR</a></li>
                                                                    <li><a href="#">Dark Motion</a></li>
                                                                    <li><a href="#">Encryption Pack</a></li>
                                                                    <li><a href="#">Glory Hunter</a></li>
                                                                    <li><a href="#">Precision To Blur</a></li>
                                                                    <li><a href="#">Uniforia</a></li>
                                                                    <li><a href="#">Dark Motion</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>ADV</h5>
                                                                    <li><a href="#">SHOCKWAVE</a></li>
                                                                    <li><a href="#">TIGRIS</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">อื่นๆ</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบอื่นๆ</a></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="grid-item -mega-sub-menu"></div>
                                        <div class="grid-item -mega-bg-02"></div>
                                    </div>
                                </div>
                          </li>
                          <li id="dd-jerseys" class="main-dd">
                            <a href="#">ชุดแข่ง</a>
                            <div class="dropdown-content">
                                    <div class="grid-block">
                                        <div class="grid-item -mega-main-menu">
                                            <ul>
                                                <li class="top-menu">
                                                    <a href="#">สินค้ามาใหม่</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบสินค้ามาใหม่</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ไทยลีก</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบไทยลีก</a></div>
                                                </li>
                                                <li class="top-menu main active">
                                                    <a href="#">พรีเมียร์ลีก</a>
                                                    <div class="mega-menu-content main active">
                                                        <div class="sub-grid-block">
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>พรีเมียร์ลีค</h5>
                                                                    <li><a href="#">Liverpool</a></li>
                                                                    <li><a href="#">Manchester City</a></li>
                                                                    <li><a href="#">Manchester United</a></li>
                                                                    <li><a href="#">Chelsea</a></li>
                                                                    <li><a href="#">Arsenal</a></li>
                                                                    <li><a href="#">Tottenham hotspur</a></li>
                                                                    <li><a href="#">Everton</a></li>
                                                                    <li><a href="#">Aston Villa</a></li>
                                                                    <li><a href="#">West Ham United</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="sub-grid-item">
                                                                <div class="spacer"></div>
                                                                <ul class="sub-football">
                                                                    <li><a href="#">Newcastle United</a></li>
                                                                    <li><a href="#">Leed United</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ลีกยุโรป</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบลีกยุโรป</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ทีมชาติไทย</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบทีมชาติไทย</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ทีมชาติ</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบทีมชาติ</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ทีมอื่นๆ</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบทีมอื่นๆ</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">เด็ก</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบเด็ก</a></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="grid-item -mega-sub-menu"></div>
                                        <div class="grid-item -mega-bg-03"></div>
                                    </div>
                                </div>
                            </li>
                            <li id="dd-equipments" class="main-dd">
                                <a href="#">อุปกรณ์ฟุตบอล</a>
                                <div class="dropdown-content">
                                    <div class="grid-block">
                                        <div class="grid-item -mega-main-menu">
                                            <ul>
                                                <li class="top-menu">
                                                    <a href="#">สินค้ามาใหม่</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบสินค้ามาใหม่</a></div>
                                                </li>
                                                <li class="top-menu main active">
                                                    <a href="#">อุปกรณ์ฟุตบอล</a>
                                                    <div class="mega-menu-content main active">
                                                        <div class="sub-grid-block">
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>อุปกรณ์ฟุตบอล</h5>
                                                                    <li><a href="#">สนับแข้ง</a></li>
                                                                    <li><a href="#">ลูกฟุตบอล</a></li>
                                                                    <li><a href="#">กระเป๋า</a></li>
                                                                    <li><a href="#">เชือกรองเท้า</a></li>
                                                                    <li><a href="#">อื่นๆ</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">อุปกรณ์ซัพพอร์ต</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบอุปกรณ์ซัพพอร์ต</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">อุปกรณ์อื่นๆ</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบอุปกรณ์อื่นๆ</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">กระเป๋า</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบกระเป๋า</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">เด็ก</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบเด็ก</a></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="grid-item -mega-sub-menu"></div>
                                        <div class="grid-item -mega-bg-04"></div>
                                    </div>
                                </div>
                            </li>
                            <li id="dd-apperels" class="main-dd">
                                <a href="#">เสื้อผ้า</a>
                                <div class="dropdown-content">
                                    <div class="grid-block">
                                        <div class="grid-item -mega-main-menu">
                                            <ul>
                                                <li class="top-menu">
                                                    <a href="#">สินค้ามาใหม่</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบสินค้ามาใหม่</a></div>
                                                </li>
                                                <li class="top-menu main active">
                                                    <a href="#">เสื้อ</a>
                                                    <div class="mega-menu-content main active">
                                                        <div class="sub-grid-block">
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>เสื้อ</h5>
                                                                    <li><a href="#">เสื้อยืด</a></li>
                                                                    <li><a href="#">เสื้อโปโล</a></li>
                                                                    <li><a href="#">เสื้อฝึกซ้อม</a></li>
                                                                    <li><a href="#">เสื้อฮู้ด</a></li>
                                                                    <li><a href="#">แจ็คเก็ต</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">กางเกง</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบกางเกง</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ถุงเท้า</a>
                                                    <div class="mega-menu-content"><a href="#">ถุงเท้าถุงเท้า</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">กระเป๋า</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบกระเป๋า</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">อื่นๆ</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบอื่นๆ</a></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="grid-item -mega-sub-menu"></div>
                                        <div class="grid-item -mega-bg-05"></div>
                                    </div>
                                </div>
                            </li>
                            <li id="dd-arigear" class="main-dd">
                                <a href="#">อาริเกียร์</a>
                                <div class="dropdown-content">
                                    <div class="grid-block">
                                        <div class="grid-item -mega-main-menu">
                                            <ul>
                                                <li class="top-menu">
                                                    <a href="#">สินค้ามาใหม่</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบสินค้ามาใหม่</a></div>
                                                </li>
                                                <li class="top-menu main active">
                                                    <a href="#">เสื้อ</a>
                                                    <div class="mega-menu-content main active">
                                                        <div class="sub-grid-block">
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>เสื้อ</h5>
                                                                    <li><a href="#">เสื้อยืด</a></li>
                                                                    <li><a href="#">เสื้อโปโล</a></li>
                                                                    <li><a href="#">เสื้อฝึกซ้อม</a></li>
                                                                    <li><a href="#">เสื้อฮู้ด</a></li>
                                                                    <li><a href="#">แจ็คเก็ต</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">กางเกง</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบกางเกง</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ถุงเท้า</a>
                                                    <div class="mega-menu-content"><a href="#">ถุงเท้าถุงเท้า</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">กระเป๋า</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบกระเป๋า</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">อื่นๆ</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบอื่นๆ</a></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="grid-item -mega-sub-menu"></div>
                                        <div class="grid-item -mega-bg-06"></div>
                                    </div>
                                </div>
                            </li>
                            <li id="dd-sales" class="main-dd">
                                <a href="#">ลดราคา</a>
                                <div class="dropdown-content">
                                    <div class="grid-block">
                                        <div class="grid-item -mega-main-menu">
                                            <ul>
                                                <li class="top-menu">
                                                    <a href="#">สินค้ามาใหม่</a>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">12.12 Sale</a>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">BLack Friday</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="grid-item -mega-sub-menu"></div>
                                        <div class="grid-item -mega-bg-07"></div>
                                    </div>
                                </div>
                            </li>
                    </ul>
                </div>
                <div class="dt-col -addon">
                    <ul class="addon-block">
                        <li class="addon-col -search">
                            <a href="#" data-featherlight="#search-popup"><img src="/images/search-icon.svg" alt="Search Icon"></a>
                        </li>
                        <li class="addon-col -acc">
                            <a href="#" class="acc-btn"><img src="/images/acc-icon.svg" alt="Account Icon"></a>
                            <div id="dd-unlogin">
                                <div class="lr-block">
                                    <a href="#" class="btn-global">เข้าสู่ระบบ</a>
                                    <p class="desc-lr">หรือสมัครสมาชิกเพื่อรับ<br/>ส่วนลดและสิทธิพิเศษจากเรา</p>
                                    <a href="#" class="btn-reg">สมัครสมาชิก</a>
                                </div>
                            </div>
                        </li>
                        <li class="addon-col -minic">
                            <img src="/images/minic-icon.svg" alt="Mini Cart Icon">
                        </li>
                    </ul>
                    <div class="dd-lang-block">
                        <a href="#" class="d-btn"><img class="img-flag" src="/images/thai-flag.svg" alt="th" /> ไทย <img class="dd-icon"src="/images/dd-icon.svg" alt="Dropdown Icon"></a>
                        <div class="dd-content-block">
                            <a href="#"><img class="img-flag" src="/images/us-flag.svg" alt="en" /> EN</a>
                        </div>
                    </div>
                </div>

                <div class="action-right">
                    <div class="menu-burger"><b></b></div>
                </div>

                <div class="menu-burger-sidebar">
                    <div class="menu-burger-sidebar-block">
                        <ul class="main-menu-mb">
                            <li>
                                <a href="#">รองเท้าฟุตบอล <img class="chev-right" src="/images/dd-icon.svg" alt="Chevright Icon"></a>
                            </li>
                            <li>
                                <a href="#">อุปกรณ์ผู้รักษาประตู <img class="chev-right" src="/images/dd-icon.svg" alt="Chevright Icon"></a>
                            </li>
                            <li>
                                <a href="#">ชุดแข่ง <img class="chev-right" src="/images/dd-icon.svg" alt="Chevright Icon"></a>
                            </li>
                            <li>
                                <a href="#">อุปกรณ์ฟุตบอล <img class="chev-right" src="/images/dd-icon.svg" alt="Chevright Icon"></a>
                            </li>
                            <li>
                                <a href="#">เสื้อผ้า <img class="chev-right" src="/images/dd-icon.svg" alt="Chevright Icon"></a>
                            </li>
                            <li>
                                <a href="#">อาริเกียร์ <img class="chev-right" src="/images/dd-icon.svg" alt="Chevright Icon"></a>
                            </li>
                            <li>
                                <a href="#">ลดราคา <img class="chev-right" src="/images/dd-icon.svg" alt="Chevright Icon"></a>
                            </li>
                            <li>
                                <a href="#">รองเท้าฟุตบอล <img class="chev-right" src="/images/dd-icon.svg" alt="Chevright Icon"></a>
                            </li>
                        </ul>
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
                          <li class="addon-col -search">
                            <a href="#" data-featherlight="#search-popup"><img src="/images/search-icon.svg" alt="Search Icon"></a>
                        </li>
                          <li class="addon-col -acc">
                            <a href="#"><img src="/images/acc-icon.svg" alt="Account Icon"></a>
                            <div id="dd-unlogin">
                                <div class="lr-block">
                                    <a href="#" class="btn-global">เข้าสู่ระบบ</a>
                                    <p class="desc-lr">หรือสมัครสมาชิกเพื่อรับ<br/>ส่วนลดและสิทธิพิเศษจากเรา</p>
                                    <a href="#" class="btn-reg">สมัครสมาชิก</a>
                                </div>
                            </div>
                        </li>
                        <li class="addon-col -minic">
                            <img src="/images/minic-icon.svg" alt="Mini Cart Icon"></a>
                        </li>
                      </ul>
                  </div>
              </div>
              <div class="half-nav main-menu">
                  <div class="nav-menu-block">
                      <ul class="nav-menu">
                          <li id="dd-boots" class="main-dd">
                            <a href="#">รองเท้าฟุตบอล</a>
                                <div class="dropdown-content">
                                    <div class="grid-block">
                                        <div class="grid-item -mega-main-menu">
                                            <ul>
                                                <li class="top-menu">
                                                    <a href="#">สินค้ามาใหม่</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบสินค้ามาใหม่</a></div>
                                                </li>
                                                <li class="top-menu main active">
                                                    <a href="#">ฟุตบอล</a>
                                                    <div class="mega-menu-content main active">
                                                        <div class="sub-grid-block">
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>Nike</h5>
                                                                    <li><a href="#">Mercurial</a></li>
                                                                    <li><a href="#">Phantom GT</a></li>
                                                                    <li><a href="#">Phantom Vision</a></li>
                                                                    <li><a href="#">Phantom Venom</a></li>
                                                                    <li><a href="#">Tiempo</a></li>
                                                                    <li><a href="#">Mercurial</a></li>
                                                                    <li><a href="#">Phantom GT</a></li>
                                                                    <li><a href="#">Phantom Vision</a></li>
                                                                    <li><a href="#">Phantom Venom</a></li>
                                                                    <li><a href="#">Tiempo</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>Adidas</h5>
                                                                    <li><a href="#">Predator x</a></li>
                                                                    <li><a href="#">X</a></li>
                                                                    <li><a href="#">Nemeziz</a></li>
                                                                    <li><a href="#">Nemeziz Messi</a></li>
                                                                    <li><a href="#">Copa</a></li>
                                                                </ul>
                                                                <ul class="sub-football">
                                                                    <h5>New Balance</h5>
                                                                    <li><a href="#">Audazo</a></li>
                                                                    <li><a href="#">Furon</a></li>
                                                                    <li><a href="#">Tekela</a></li>
                                                                    <li><a href="#">Nemeziz Messi</a></li>
                                                                    <li><a href="#">Copa</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>Puma</h5>
                                                                    <li><a href="#">Future</a></li>
                                                                    <li><a href="#">Ultra</a></li>
                                                                    <li><a href="#">One</a></li>
                                                                    <li><a href="#">King</a></li>
                                                                </ul>
                                                                <ul class="sub-football">
                                                                    <h5>Diarora</h5>
                                                                    <li><a href="#">B-Elite</a></li>
                                                                    <li><a href="#">Brasil</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>Mizuno</h5>
                                                                    <li><a href="#">Rebula</a></li>
                                                                    <li><a href="#">Morelia</a></li>
                                                                    <li><a href="#">Morelia Neo</a></li>
                                                                    <li><a href="#">Wave Cup</a></li>
                                                                </ul>
                                                                <ul class="sub-football">
                                                                    <h5>Puma</h5>
                                                                    <li><a href="#">Medusae</a></li>
                                                                    <li><a href="#">Speciali</a></li>
                                                                    <li><a href="#">Tocco</a></li>
                                                                    <li><a href="#">UX</a></li>
                                                                    <li><a href="#">Velocita</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ฟุตซอล</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบฟุตซอล</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ประเภทพื้นสนาม</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบประเภทพื้นสนาม</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">เด็ก</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบเด็ก</a></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="grid-item -mega-sub-menu"></div>
                                        <div class="grid-item -mega-bg-01"></div>
                                    </div>
                                </div>
                          </li>
                          <li id="dd-keepers" class="main-dd">
                            <a href="#">อุปกรณ์ผู้รักษาประตู</a>
                            <div class="dropdown-content">
                                    <div class="grid-block">
                                        <div class="grid-item -mega-main-menu">
                                            <ul>
                                                <li class="top-menu">
                                                    <a href="#">สินค้ามาใหม่</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบสินค้ามาใหม่</a></div>
                                                </li>
                                                <li class="top-menu main active">
                                                    <a href="#">ถุงมือผู้รักษาประตู</a>
                                                    <div class="mega-menu-content main active">
                                                        <div class="sub-grid-block">
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>Nike</h5>
                                                                    <li><a href="#">Day break</a></li>
                                                                    <li><a href="#">GRIP3</a></li>
                                                                    <li><a href="#">Black X Chile Red</a></li>
                                                                    <li><a href="#">Mercurial</a></li>
                                                                    <li><a href="#">Phantom Fire</a></li>
                                                                    <li><a href="#">Neighbourhood</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>Adidas</h5>
                                                                    <li><a href="#">Inflight x</a></li>
                                                                    <li><a href="#">PREDATOR</a></li>
                                                                    <li><a href="#">Dark Motion</a></li>
                                                                    <li><a href="#">Encryption Pack</a></li>
                                                                    <li><a href="#">Glory Hunter</a></li>
                                                                    <li><a href="#">Precision To Blur</a></li>
                                                                    <li><a href="#">Uniforia</a></li>
                                                                    <li><a href="#">Dark Motion</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>ADV</h5>
                                                                    <li><a href="#">SHOCKWAVE</a></li>
                                                                    <li><a href="#">TIGRIS</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">อื่นๆ</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบอื่นๆ</a></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="grid-item -mega-sub-menu"></div>
                                        <div class="grid-item -mega-bg-02"></div>
                                    </div>
                                </div>
                          </li>
                          <li id="dd-jerseys" class="main-dd">
                            <a href="#">ชุดแข่ง</a>
                            <div class="dropdown-content">
                                    <div class="grid-block">
                                        <div class="grid-item -mega-main-menu">
                                            <ul>
                                                <li class="top-menu">
                                                    <a href="#">สินค้ามาใหม่</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบสินค้ามาใหม่</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ไทยลีก</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบไทยลีก</a></div>
                                                </li>
                                                <li class="top-menu main active">
                                                    <a href="#">พรีเมียร์ลีก</a>
                                                    <div class="mega-menu-content main active">
                                                        <div class="sub-grid-block">
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>พรีเมียร์ลีค</h5>
                                                                    <li><a href="#">Liverpool</a></li>
                                                                    <li><a href="#">Manchester City</a></li>
                                                                    <li><a href="#">Manchester United</a></li>
                                                                    <li><a href="#">Chelsea</a></li>
                                                                    <li><a href="#">Arsenal</a></li>
                                                                    <li><a href="#">Tottenham hotspur</a></li>
                                                                    <li><a href="#">Everton</a></li>
                                                                    <li><a href="#">Aston Villa</a></li>
                                                                    <li><a href="#">West Ham United</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="sub-grid-item">
                                                                <div class="spacer"></div>
                                                                <ul class="sub-football">
                                                                    <li><a href="#">Newcastle United</a></li>
                                                                    <li><a href="#">Leed United</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ลีกยุโรป</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบลีกยุโรป</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ทีมชาติไทย</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบทีมชาติไทย</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ทีมชาติ</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบทีมชาติ</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ทีมอื่นๆ</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบทีมอื่นๆ</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">เด็ก</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบเด็ก</a></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="grid-item -mega-sub-menu"></div>
                                        <div class="grid-item -mega-bg-03"></div>
                                    </div>
                                </div>
                            </li>
                            <li id="dd-equipments" class="main-dd">
                                <a href="#">อุปกรณ์ฟุตบอล</a>
                                <div class="dropdown-content">
                                    <div class="grid-block">
                                        <div class="grid-item -mega-main-menu">
                                            <ul>
                                                <li class="top-menu">
                                                    <a href="#">สินค้ามาใหม่</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบสินค้ามาใหม่</a></div>
                                                </li>
                                                <li class="top-menu main active">
                                                    <a href="#">อุปกรณ์ฟุตบอล</a>
                                                    <div class="mega-menu-content main active">
                                                        <div class="sub-grid-block">
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>อุปกรณ์ฟุตบอล</h5>
                                                                    <li><a href="#">สนับแข้ง</a></li>
                                                                    <li><a href="#">ลูกฟุตบอล</a></li>
                                                                    <li><a href="#">กระเป๋า</a></li>
                                                                    <li><a href="#">เชือกรองเท้า</a></li>
                                                                    <li><a href="#">อื่นๆ</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">อุปกรณ์ซัพพอร์ต</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบอุปกรณ์ซัพพอร์ต</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">อุปกรณ์อื่นๆ</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบอุปกรณ์อื่นๆ</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">กระเป๋า</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบกระเป๋า</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">เด็ก</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบเด็ก</a></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="grid-item -mega-sub-menu"></div>
                                        <div class="grid-item -mega-bg-04"></div>
                                    </div>
                                </div>
                            </li>
                            <li id="dd-apperels" class="main-dd">
                                <a href="#">เสื้อผ้า</a>
                                <div class="dropdown-content">
                                    <div class="grid-block">
                                        <div class="grid-item -mega-main-menu">
                                            <ul>
                                                <li class="top-menu">
                                                    <a href="#">สินค้ามาใหม่</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบสินค้ามาใหม่</a></div>
                                                </li>
                                                <li class="top-menu main active">
                                                    <a href="#">เสื้อ</a>
                                                    <div class="mega-menu-content main active">
                                                        <div class="sub-grid-block">
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>เสื้อ</h5>
                                                                    <li><a href="#">เสื้อยืด</a></li>
                                                                    <li><a href="#">เสื้อโปโล</a></li>
                                                                    <li><a href="#">เสื้อฝึกซ้อม</a></li>
                                                                    <li><a href="#">เสื้อฮู้ด</a></li>
                                                                    <li><a href="#">แจ็คเก็ต</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">กางเกง</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบกางเกง</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ถุงเท้า</a>
                                                    <div class="mega-menu-content"><a href="#">ถุงเท้าถุงเท้า</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">กระเป๋า</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบกระเป๋า</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">อื่นๆ</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบอื่นๆ</a></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="grid-item -mega-sub-menu"></div>
                                        <div class="grid-item -mega-bg-05"></div>
                                    </div>
                                </div>
                            </li>
                            <li id="dd-arigear" class="main-dd">
                                <a href="#">อาริเกียร์</a>
                                <div class="dropdown-content">
                                    <div class="grid-block">
                                        <div class="grid-item -mega-main-menu">
                                            <ul>
                                                <li class="top-menu">
                                                    <a href="#">สินค้ามาใหม่</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบสินค้ามาใหม่</a></div>
                                                </li>
                                                <li class="top-menu main active">
                                                    <a href="#">เสื้อ</a>
                                                    <div class="mega-menu-content main active">
                                                        <div class="sub-grid-block">
                                                            <div class="sub-grid-item">
                                                                <ul class="sub-football">
                                                                    <h5>เสื้อ</h5>
                                                                    <li><a href="#">เสื้อยืด</a></li>
                                                                    <li><a href="#">เสื้อโปโล</a></li>
                                                                    <li><a href="#">เสื้อฝึกซ้อม</a></li>
                                                                    <li><a href="#">เสื้อฮู้ด</a></li>
                                                                    <li><a href="#">แจ็คเก็ต</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">กางเกง</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบกางเกง</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">ถุงเท้า</a>
                                                    <div class="mega-menu-content"><a href="#">ถุงเท้าถุงเท้า</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">กระเป๋า</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบกระเป๋า</a></div>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">อื่นๆ</a>
                                                    <div class="mega-menu-content"><a href="#">ทดสอบอื่นๆ</a></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="grid-item -mega-sub-menu"></div>
                                        <div class="grid-item -mega-bg-06"></div>
                                    </div>
                                </div>
                            </li>
                            <li id="dd-sales" class="main-dd">
                                <a href="#">ลดราคา</a>
                                <div class="dropdown-content">
                                    <div class="grid-block">
                                        <div class="grid-item -mega-main-menu">
                                            <ul>
                                                <li class="top-menu">
                                                    <a href="#">สินค้ามาใหม่</a>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">12.12 Sale</a>
                                                </li>
                                                <li class="top-menu">
                                                    <a href="#">BLack Friday</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="grid-item -mega-sub-menu"></div>
                                        <div class="grid-item -mega-bg-07"></div>
                                    </div>
                                </div>
                            </li>
                      </ul>
                  </div>
              </div>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);