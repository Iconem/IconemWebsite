export default createClass({
    componentDidMount() {
        const { document, window } = this.props;
        const script = document.createElement("script");
        script.src = "/js/vendors.min.js";
        document.head.appendChild(script);
    },
    componentDidUpdate(){
    },
    render: function () {
        this.props.document.body.backgroundColor = 'white';
        const about = this.props.entry.toJS().data;

        let logoWidgets;
        let whiteLogoWidgets;
        let whiteLogoData
        let whiteLogo;
        if(about.order !== 0){
            logoWidgets = this.props.widgetsFor('logo');
            whiteLogoWidgets = logoWidgets.getIn(['widgets', 'white']);
            whiteLogoData = logoWidgets.getIn(['data', 'white']) || [];
            whiteLogo = whiteLogoWidgets.props.getAsset(whiteLogoData, whiteLogoWidgets.props.field)
        }

        const html = about.order === 0 ? `
            <section id="about">
                <section>
                <div class="container">
                    <div class="about-row">
                        <div class="col-lg-10 col-lg-offset-1">
                                <h4 class="text-center text-uppercase text-bolder">${about.title.en}</h4>
                                <!-- <hr> -->
                            <br>
                            <p class="text-justify">${about.description.en}</p>
                        </div>
                    </div>
                </div>
                </section>
            </section>
        ` :
        `
            <section id="about">
                <div class="about-row">
                <div class="about-item">
                    <a href="${about.link}" target="_blank">
                        <div class="about-content img-responsive">
                            <div class="about-content-description">
                                <br />
                                <br />
                                <div class="text-uppercase text-center">
                                <img src="${whiteLogo.url}" />
                                </div>
                                <br />
                                <br />
                                <div class="text-justify">
                                ${about.description.en}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                </div>
            </section>
        `;
        return h("div", {
            dangerouslySetInnerHTML: { __html: html },
        });
    },
});