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
                        <img src="images/ari-logo.svg" alt="Ari Logo" />
                    </a>
                    <ul class="m-list">
                        <li>
                            <img src="images/phone-icon-ft.svg" alt="Phone Icon" />
                            <div class="content-r">
                                <a href="tel:0968458690">096-845-8690</a>
                                <p>MON - SAT : 10:30 AM - 18:00 PM</p>
                            </div>
                        </li>
                    </ul>

                    <ul class="m-list">
                        <li>
                            <img src="images/email-icon-ft.svg" alt="Email Icon" />
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

                <div class="acc -mb">
                    <div class="acc__card">
                        <div class="acc__title">เกี่ยวกับเรา</div>
                            <div class="acc__panel">
                                <ul>
                                    <li><a href="#">เกี่ยวกับอาริ</a></li>
                                    <li><a href="#">ที่ต้ังสาขา</a></li>
                                    <li><a href="#">ติดต่อเรา</a></li>
                                    <li><a href="#">ร่วมงานกับเรา</a></li>
                                </ul>
                            </div>
                        </div>
                    <div class="acc__card">
                        <div class="acc__title">ช่วยเหลือและข้อมูล</div>
                            <div class="acc__panel">
                                <ul>
                                    <li><a href="#">นโยบายความเป็นส่วนตัว</a></li>
                                    <li><a href="#">ข้อตกลงและเงื่อนไข</a></li>
                                    <li><a href="#">คําถามที่พบบ่อย</a></li>
                                    <li><a href="#">วิธีการสั่งซื้อสินค้า</a></li>
                                    <li><a href="#">คำแนะนำการเลือกซื้อสินค้า</a></li>
                                    <li><a href="#">การจัดส่งสินค้าและการคืนสินค้า</a></li>
                                    <li><a href="#">ตรวจสอบสถานะสินค้า</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                <div class="grid-item">
                    <h5 style="margin-bottom: 15px;">ชำระบัตรเครดิต / ผ่อนชำระ</h5>
                    <img width="75%" src="images/credit-icon.svg" alt="Credit Icon">
                    
                    <h5 style="margin-bottom: 15px;">โซเชียลมีเดีย</h5>
                    <ul class="social-icon-block">
                        <li class="social-icon"><a href="#"><img src="images/fb-icon.svg" alt="FB icon"></a></li>
                        <li class="social-icon"><a href="#"><img src="images/ig-icon.svg" alt="IG icon"></a></li>
                        <li class="social-icon"><a href="#"><img src="images/line-icon.svg" alt="Line icon"></a></li>
                        <li class="social-icon"><a href="#"><img src="images/yt-icon.svg" alt="YT icon"></a></li>
                    </ul>
                </div>
            </div>
        <div class="bottom-ft g-container">
            <p>© 2021 ARI FOOTBALL CONCEPT STORE. All Rights Reserved.</p>
        </div>
    </footer>

    <div id="search-popup">
            <form action="#" class="search-block">
                <input type="text" name="focus" required class="search-box" placeholder="Search for" />
		        <button class="close-icon" type="reset"></button>
            </form>
        </div>

        <div id="mini-cart-sidebar">
            <div class="mini-cart-block">
                <div class="close-block">
                    <div class="close-btn"><img src="images/x-icon.svg" alt="X"></div>
                </div>

                <div class="minic-title-block">
                    <h5><img style="margin-right: 10px;" src="images/minic-icon.svg" alt=""> ตะกร้าสินค้า</h5>
                </div>

                <div class="head-table-block">
                    <div class="grid-block">
                        <div class="grid-item">
                            <h5>รายการ (3 รายการ)</h5>
                        </div>
                        <div class="grid-item">
                            <h5>จำนวน</h5>
                        </div>
                    </div>
                </div>

                <div class="products-block">
                    <div class="grid-block -item">
                        <div class="grid-item">
                            <a href="#">
                                <img width="120" height="120" src="images/ex-shoes-01.png" alt="Ex Product" />
                            </a>
                        </div>

                        <div class="grid-item">
                            <h5 class="cate">NIKE</h5>
                            <h3 class="title-product">NIKE PHANTOM GT ELITE DYNAMIC FIT SCORPION FG</h3>
                            <h4 class="sub-product">PURE PLATINUM/METALLIC SILVER-BLACK</h4>
                            <p class="sku">รหัสสินค้า: CZ3844-001</p>
                            <p class="size">ไซส์ : 42EU</p>
                            <h5 class="title-personalize">PERSONALIZE</h5>
                            <ul class="personalize-block">
                                <li>ฉลากขวา: NNOON</li>
                                <li>ฉลากซ้าย: NNOON</li>
                                <li>สีด้าย: น้ำเงิน</li>
                            </ul>
                            <p class="price">9,400 THB</p>
                            <div class="del-block">
                                <a href="#"><img src="images/bin.svg" alt="Delete"></a>
                            </div>
                        </div>

                        <div class="grid-item -amount">
                            <div class="number">
                                <span class="minus">-</span>
                                <input type="text" value="1"/>
                                <span class="plus">+</span>
                            </div>
                        </div>
                    </div>
                    <div class="grid-block -item">
                        <div class="grid-item">
                            <a href="#">
                                <img width="120" height="120" src="images/ex-shoes-01.png" alt="Ex Product" />
                            </a>
                        </div>

                        <div class="grid-item">
                            <h5 class="cate">NIKE</h5>
                            <h3 class="title-product">NIKE PHANTOM GT ELITE DYNAMIC FIT SCORPION FG</h3>
                            <h4 class="sub-product">PURE PLATINUM/METALLIC SILVER-BLACK</h4>
                            <p class="sku">รหัสสินค้า: CZ3844-001</p>
                            <p class="size">ไซส์ : 42EU</p>
                            <h5 class="title-personalize">PERSONALIZE</h5>
                            <ul class="personalize-block">
                                <li>ฉลากขวา: NNOON</li>
                                <li>ฉลากซ้าย: NNOON</li>
                                <li>สีด้าย: น้ำเงิน</li>
                            </ul>
                            <p class="price">9,400 THB</p>
                            <div class="del-block">
                                <a href="#"><img src="images/bin.svg" alt="Delete"></a>
                            </div>
                        </div>

                        <div class="grid-item -amount">
                            <div class="number">
                                <span class="minus">-</span>
                                <input type="text" value="1"/>
                                <span class="plus">+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="minic-bottom-block">
                <div class="summary-price-block">
                    <div class="grid-block">
                        <div class="grid-item">
                            <p>รวมทั้งหมด</p>
                        </div>
                        <div class="grid-item -item-total-price">
                            <p>24,480 THB</p>
                        </div>
                    </div>

                    <div class="grid-block -b-btn">
                        <div class="grid-item">
                            <a href="#" class="btn-border">ดูตะกร้าสินค้า</a>
                        </div>
                        <div class="grid-item">
                            <a href="#" class="btn-global">ดำเนินการชำระเงิน</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);