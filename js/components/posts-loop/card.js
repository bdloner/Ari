class Card extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="post-items -card">
            <div class="featured-img-block">
                <span class="badge -g">NEW</span>
                <span class="badge -r">40%</span>

                <a href="#">
                    <div class="featured-img" style="background: url(../images/ex-shoes-01.png) center center; background-size: cover;"></div>
                </a>
            </div>

            <div class="title-item">
                <h5 class="category">NIKE</h5>
                <a href="#"><h3 class="title">PHANTOM GT ELITE DYNAMIC FIT SCORPION FG</h3></a>
            </div>

            <div class="content-item">
                <div class="price-block">
                    <span class="price">9,400 THB</span>
                </div>
                <div class="fav-block">
                    <a href="#" class="fav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.535" height="18.579" viewBox="0 0 19.535 18.579">
                            <g id="Component_29_7" data-name="Component 29 – 7" transform="translate(0.806 0.847)">
                                <path id="Path_9269" data-name="Path 9269" d="M7.267,6.741l-6.193.9,4.481,4.368L4.5,18.176l5.539-2.912,5.539,2.912-1.058-6.167L19,7.641l-6.193-.9L10.036,1.13Z" transform="translate(-1.074 -1.13)" fill="none" stroke="#5c5c5c" stroke-width="0.75"/>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>

            <div class="compare-block">
                <label class="checkbox compare">เปรียบเทียบสินค้า
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('card-component', Card);