export default createClass({
    componentDidMount() {
        const { document, window } = this.props;
        const script = document.createElement("script");
        script.src = "/js/vendors.min.js";
        document.head.appendChild(script);
    },
    componentDidUpdate() {
        if (typeof this.props.window.$ != "undefined") {
            typeof this.props.window.$("#medias .owl-carousel").owlCarousel({
              nav: false,
              dots: false,
              autoplay: true,
              autoWidth: false,
              autoplayHoverPause: false,
              autoplayTimeout: 5000,
              rewind: true
            });
        }
    },
    render: function () {
        this.props.document.body.backgroundColor = "white";
        const medias = this.props.entry.toJS().data.medias;
        const partnerWidgets = this.props.widgetsFor("medias");
        partnerWidgets.map((el, index) => {
            const iconStudioWidget = el && el.getIn(["widgets", "icon_studio"]);
            const iconStudio = this.props.getAsset(
                iconStudioWidget && iconStudioWidget.props.children.props.value,
                iconStudioWidget && iconStudioWidget.props.children.props.field
            );
            medias[index].icon_studio = iconStudio.url;

            const iconActiveWidget = el && el.getIn(["widgets", "icon_active"]);
            const iconActive = this.props.getAsset(
                iconActiveWidget && iconActiveWidget.props.children.props.value,
                iconActiveWidget && iconActiveWidget.props.children.props.field
            );
            medias[index].icon_active = iconActive.url;
        });

        const html = `
        <section id="medias">
          <div class="row text-center">
              <div class="owl-carousel medias-carousel">
                ${medias
                    .map(
                        (el) => `
                      <div class="item">
                        <a href="${el.link}" target="_blank">
                            <img src="${el.icon_studio}">
                                <div class="quote-container">
                                    <span class="quote">${el.quote}</span>
                                    <cite class="article-title">${el.title}</cite>
                                </div>
                            </img>
                        </a>
                      </div>`
                    )
                    .join("")}    
              </div>
          </div>
        </section>`;
        return h("div", {
            dangerouslySetInnerHTML: { __html: html },
        });
    },
});