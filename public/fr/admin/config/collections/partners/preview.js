export default createClass({
  componentDidMount() {
      const { document, window } = this.props;
      const script = document.createElement("script");
      script.src = "/js/vendors.min.js";
      document.head.appendChild(script);
  },
  componentDidUpdate(){
    if (typeof this.props.window.$ != "undefined") {
      typeof this.props.window.$("#partners .owl-carousel").owlCarousel({
        nav: false,
        dots: false,
        autoplay: true,
        autoWidth: true,
        autoplayHoverPause: false,
        autoplayTimeout: 5000,
        rewind: true
      });
    };
  },
  render: function () {
      this.props.document.body.backgroundColor = 'white';
      const entry = this.props.entry.toJS().data;
      const iconStudioWidget = this.props.widgetFor('icon_studio');
      const iconStudio = this.props.getAsset(iconStudioWidget && iconStudioWidget.props.value, iconStudioWidget && iconStudioWidget.props.field);
      const iconActiveWidget = this.props.widgetFor('icon_active');
      const iconActive = this.props.getAsset(iconActiveWidget && iconActiveWidget.props.value, iconActiveWidget && iconActiveWidget.props.field);
      console.log(iconActive.url);

      const html = `
      <section id="partners">
        <div class="row text-center">
          <div class="col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
              <h3 class="text-bold text-uppercase section-title">Partners</h3>
              <hr class="light">
              <div class="owl-carousel partners-carousel">
                <div class="item">
                    <a href="${entry.link}" target="_blank">
                        <img src="${iconStudio.url}" onmouseenter="this.src='${iconActive.url}'" onmouseleave="this.src='${iconStudio.url}'" />
                    </a>
                </div>
              </div>
          </div>
        </div>
      </section>
      `;
      return h("div", {
          dangerouslySetInnerHTML: { __html: html },
      });
  },
});