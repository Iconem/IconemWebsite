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
        const partners = this.props.entry.toJS().data.partners;
        const partnerWidgets = this.props.widgetsFor('partners');
        partnerWidgets.map((el, index) => {
        const iconStudioWidget = el && el.getIn(['widgets', 'icon_studio']);
        const iconStudio = this.props.getAsset(iconStudioWidget && iconStudioWidget.props.children.props.value, iconStudioWidget && iconStudioWidget.props.children.props.field);
        partners[index].icon_studio = iconStudio.url;

        const iconActiveWidget = el && el.getIn(['widgets', 'icon_active']);
        const iconActive = this.props.getAsset(iconActiveWidget && iconActiveWidget.props.children.props.value, iconActiveWidget && iconActiveWidget.props.children.props.field);
        partners[index].icon_active = iconActive.url;
        });
  
        const html = `
        <section id="partners">
          <div class="row text-center">
            <div class="col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
                <h3 class="text-bold text-uppercase section-title">Partners</h3>
                <hr class="light">
                <div class="owl-carousel partners-carousel">
                ${partners
                    .map(
                        (el) => `
                            <div class="item">
                                <a href="${el.link}" target="_blank">
                                    <img src="${el.icon_studio}" onmouseenter="this.src='${el.icon_active}'" onmouseleave="this.src='${el.icon_studio}'" />
                                </a>
                            </div>`
                )
                .join("")}
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