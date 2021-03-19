class LocationCard extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="location-post-items -card">
            <div class="featured-img-block">
                <a href="#">
                    <div class="featured-img" style="background: url(images/ex-banner-location-02.png) center center; background-size: cover;"></div>
                </a>
            </div>

            <div class="title-item">
                <h5 class="title">สยามสแควร์</h5>
                <p class="desc">ชั้น 2 โซนสปอตมอลล์ เดอะมอลล์ ดีพาร์ทเม้นท์สโตร์ และ ชั้น 1 ศูนย์การค้า เดอะมอลล์บางกะปิ</p>
            </div>

            <div class="content-item">
                <div class="tel-block">
                    <a href="tel:022506969" class="tel">02-250-6969</a>
                </div>

                <div class="btn-block">
                    <a href="#" class="map-btn">แผนที่ / รายละเอียดเพิ่มเติม</a>
                </div>
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('location-card-component', LocationCard);