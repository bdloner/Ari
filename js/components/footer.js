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
                        <li><a href="/about-ari.html#tab-about-ari">เกี่ยวกับอาริ</a></li>
                        <li><a href="/about-ari.html#tab-location">ที่ต้ังสาขา</a></li>
                        <li><a href="/about-ari.html#tab-contact-us">ติดต่อเรา</a></li>
                        <li><a href="/about-ari.html#tab-join-us">ร่วมงานกับเรา</a></li>
                    </ul>
                </div>

                <div class="grid-item">
                    <h5>ช่วยเหลือและข้อมูล</h5>
                    <ul class="menu-ft">
                        <li><a href="/help-information.html#tab-policy">นโยบายความเป็นส่วนตัว</a></li>
                        <li><a href="/help-information.html#tab-term-condition">ข้อตกลงและเงื่อนไข</a></li>
                        <li><a href="/help-information.html#tab-faq">คําถามที่พบบ่อย</a></li>
                        <li><a href="/help-information.html#tab-how-to-buy">วิธีการสั่งซื้อสินค้า</a></li>
                    </ul>
                </div>

                <div class="grid-item">
                    <ul class="menu-ft" style="margin-top: 4.3rem;">
                        <li><a href="/help-information.html#tab-suggest">คำแนะนำการเลือกซื้อสินค้า</a></li>
                        <li><a href="/help-information.html#tab-shipping">การจัดส่งสินค้าและการคืนสินค้า</a></li>
                        <li><a href="/help-information.html#tab-status">ตรวจสอบสถานะสินค้า</a></li>
                    </ul>
                </div>

                <div class="acc -mb">
                    <div class="acc__card">
                        <div class="acc__title">เกี่ยวกับเรา</div>
                            <div class="acc__panel">
                                <ul>
                                    <li><a href="/about-ari.html#tab-about-ari">เกี่ยวกับอาริ</a></li>
                                    <li><a href="/about-ari.html#tab-location">ที่ต้ังสาขา</a></li>
                                    <li><a href="/about-ari.html#tab-contact-us">ติดต่อเรา</a></li>
                                    <li><a href="/about-ari.html#tab-join-us">ร่วมงานกับเรา</a></li>
                                </ul>
                            </div>
                        </div>
                    <div class="acc__card">
                        <div class="acc__title">ช่วยเหลือและข้อมูล</div>
                            <div class="acc__panel">
                                <ul>
                                    <li><a href="/help-information.html#tab-policy">นโยบายความเป็นส่วนตัว</a></li>
                                    <li><a href="/help-information.html#tab-term-condition">ข้อตกลงและเงื่อนไข</a></li>
                                    <li><a href="/help-information.html#tab-faq">คําถามที่พบบ่อย</a></li>
                                    <li><a href="/help-information.html#tab-how-to-buy">วิธีการสั่งซื้อสินค้า</a></li>
                                    <li><a href="/help-information.html#tab-suggest">คำแนะนำการเลือกซื้อสินค้า</a></li>
                                    <li><a href="/help-information.html#tab-shipping">การจัดส่งสินค้าและการคืนสินค้า</a></li>
                                    <li><a href="/help-information.html#tab-status">ตรวจสอบสถานะสินค้า</a></li>
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

    <div id="bottom-compare" style="display: none;">
        <div class="g-container">
            <div class="bottom-compare-block">
                <ul class="product-compare-block">
                    <li class="compare-line"><span>เปรียบเทียบสินค้า</span></li>
                    <li class="compare-line">
                        <ul class="product-compare-list">
                            <li class="grid-block -item-compare -c2">
                                <div class="img-compare">
                                    <img src="images/ex-shoes-01.png" alt="">
                                </div>
                                <div class="desc-compare">
                                    <h4>PHANTOM GT ELITE DYNAMIC FIT
                                    SCORPION FG</h4>
                                    <p class="price">9,400 THB</p>
                                </div>
                                <a href="#" class="del-btn"><img src="images/x-icon.svg" alt=""></a>
                            </li>
                            <li class="grid-block -item-compare -c2">
                                <div class="img-compare">
                                    <img src="images/ex-shoes-01.png" alt="">
                                </div>
                                <div class="desc-compare">
                                    <h4>PHANTOM GT ELITE DYNAMIC FIT
                                    SCORPION FG</h4>
                                    <p class="price">9,400 THB</p>
                                </div>
                                <a href="#" class="del-btn"><img src="images/x-icon.svg" alt=""></a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="compare-btn-block">
                    <li class="clear-btn-block"><a href="#" class="clear-btn">ล้างทั้งหมด</a></li>
                    <li class="compare-btn-block"><a href="/compare-product.html" class="compare-btn">เปรียบเทียบ</a></li>
                </ul>
            </div>
        </div>
    </div>

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
                            <a href="/cart.html" class="btn-border">ดูตะกร้าสินค้า</a>
                        </div>
                        <div class="grid-item">
                            <a href="#" class="btn-global" id="checkout-btn" data-featherlight='
                            
                            <div id="term-condition">
                                <form action="#" class="term-condition-form">
                                    <h3>ข้อตกลงและเงื่อนไข*</h3>
                                    <div class="condition-content">
                                        <p>
                                            การทำ Personalize Your Gear
                                            แสดงความเป็นเอกลักษณ์ในตัวคุณด้วยการใช้บริการทำชื่อบนสินค้า ที่แรกของเมืองไทย อาริมีความภูมิใจนำเสนอ การบริการทำชื่อบนสินค้าด้วยการปักชื่อและสกรีนชื่อที่สามารถช่วยบ่งบอกความเป็นตัวคุณขณะสวมใส่อุปกรณ์กีฬาฟุตบอลต่างๆในสนาม อักษรที่ใช้ในการทำชื่อจะเป็นแบบเดียวกันกับตัวอย่างที่แสดงให้คุณเห็นบนหน้าจอ ในแบบที่คุณเลือกโปรดทำการตรวจสอบการพิมพ์อักษรรวมไปถึงการเว้นวรรคให้ถูกต้อง การทำชื่อดังกล่าวไม่สามารถแก้ไขปรับเปลี่ยนได้หลังจากที่คุณได้ทำการสั่งซื้อสินค้า จำนวนตัวอักษรและตัวเลขของการทำชื่อนั้นขึ้นอยู่กับพื้นที่ของสินค้าในแต่ละแบรนด์แต่ละรุ่น อาจจะมีความคลาดเคลื่อนของตำแหน่งจากตัวอย่างเล็กน้อยโปรดเข้าใจว่าการทำชื่อบนรองเท้าอาจต้องใช้เวลาในการทำ ซึ่งอาจส่งผลต่อการจัดส่งสินค้าที่ล่าช้าและในช่วงเวลาที่มีการสั่งซื้อสินค้าเป็นจำนวนมาก สินค้าที่ได้รับการทำชื่อ ไม่สามารถเปลี่ยนหรือคืนได้ในทุกกรณี
                                            <br><br>
                                            การจัดส่ง
                                            กรุณากรอกที่อยู่จัดส่งให้ครบถ้วนและถูกต้อง เพื่อป้องกันการผิดพลาดในการจัดส่งสินค้า
                                            ช่วงเวลาการจัดส่งที่กำหนดไว้เป็นการประมาณเบื้องต้น คุณอาจได้รับสินค้าก่อนเวลา หรือ อาจจะล่าช้ากว่ากำหนด โดยเฉพาะช่วงเวลาที่มีลูกค้าสั่งซื้อเป็นจำนวนมาก ถ้าหากว่าคุณไม่ได้รับสินค้าหลังจากวันที่กำหนดเกิน 2วัน กรุณาแจ้งให้เราทราบ เราจะทำการติดตามแก้ไขให้อย่างเร็วที่สุด
                                        </p>
                                    </div>

                                    <label for="accept" class="checkbox">
                                        <input id="accept" type="checkbox" required/>
                                        <span class="txt">เข้าใจและยอมรับในข้อตกลงและเงื่อนไขว่า สินค้าที่ได้รับการทำชื่อไม่สามารถเปลี่ยนหรือคืนได้ทุกกรณี </span>
                                        <span class="checkmark -tg"></span>
                                    </label>
                                    
                                    <a href="checkout.html" class="accept-btn btn-global">ยอมรับและดำเนินการชำระเงิน</a>
                                </form>
                            </div>
                            
                            '>ดำเนินการชำระเงิน</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);