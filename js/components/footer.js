class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="main-footer">
        <div class="main-footer-block g-container">
            <div class="grid-block">
                <div class="grid-item">
                    <a href="/">
                        <img src="../images/ari-logo.svg" alt="Ari Logo" />
                    </a>
                    <ul class="m-list">
                        <li>
                            <img src="../images/phone-icon-ft.svg" alt="Phone Icon" />
                            <div class="content-r">
                                <a href="tel:0968458690">096-845-8690</a>
                                <p>MON - SAT : 10:30 AM - 18:00 PM</p>
                            </div>
                        </li>
                    </ul>

                    <ul class="m-list">
                        <li>
                            <img src="../images/email-icon-ft.svg" alt="Email Icon" />
                            <div class="content-r">
                                <a href="mailto:help@arifootballstore.com">help@arifootballstore.com</a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="grid-item">
                    <h5>เกี่ยวกับเรา</h5>
                    <ul class="menu-ft">
                        <li><a href="#">เกี่ยวกับอาริ</a></li>
                        <li><a href="#">ที่ต้ังสาขา</a></li>
                        <li><a href="#">ติดต่อเรา</a></li>
                        <li><a href="#">ร่วมงานกับเรา</a></li>
                    </ul>
                </div>

                <div class="grid-item">
                    <h5>ช่วยเหลือและข้อมูล</h5>
                    <ul class="menu-ft">
                        <li><a href="#">นโยบายความเป็นส่วนตัว</a></li>
                        <li><a href="#">ข้อตกลงและเงื่อนไข</a></li>
                        <li><a href="#">คําถามที่พบบ่อย</a></li>
                        <li><a href="#">วิธีการสั่งซื้อสินค้า</a></li>
                    </ul>
                </div>

                <div class="grid-item">
                    <ul class="menu-ft" style="margin-top: 4.3rem;">
                        <li><a href="#">คำแนะนำการเลือกซื้อสินค้า</a></li>
                        <li><a href="#">การจัดส่งสินค้าและการคืนสินค้า</a></li>
                        <li><a href="#">ตรวจสอบสถานะสินค้า</a></li>
                    </ul>
                </div>

                <div class="grid-item">
                    <h5 style="margin-bottom: 15px;">ชำระบัตรเครดิต / ผ่อนชำระ</h5>
                    <img width="75%" src="../images/credit-icon.svg" alt="Credit Icon">
                    
                    <h5 style="margin-bottom: 15px;">โซเชียลมีเดีย</h5>
                    <ul class="social-icon-block">
                        <li class="social-icon"><a href="#"><img src="../images/fb-icon.svg" alt="FB icon"></a></li>
                        <li class="social-icon"><a href="#"><img src="../images/ig-icon.svg" alt="IG icon"></a></li>
                        <li class="social-icon"><a href="#"><img src="../images/line-icon.svg" alt="Line icon"></a></li>
                        <li class="social-icon"><a href="#"><img src="../images/yt-icon.svg" alt="YT icon"></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom-ft g-container">
            <p>© 2021 ARI FOOTBALL CONCEPT STORE. All Rights Reserved.</p>
        </div>
    </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);