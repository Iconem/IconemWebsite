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
        
        const clientWidgets = this.props.widgetsFor('logo');
        console.log('uuuuuuuu');
        clientWidgets.map((el, index) => {
            console.log(el);
            const iconStudioWidget = el && el.getIn(['widgets', 'black']);
            console.log(iconStudioWidget);
            // const iconStudioWidget = el && el.widgetsFor('black');
        });

        const html = `
            <section id="about">
                <section>
                <div class="container">
                    <div class="about-row">
                        <div class="col-lg-10 col-lg-offset-1">
                                <h4 class="text-center text-uppercase text-bolder"> ABOUT ICONEM </h4>
                                <!-- <hr> -->
                            <br>
                            <p class="text-justify">Founded in 2013, Iconem is an innovative startup that specialises in the digitisation of endangered cultural heritage sites in 3D. We work with international organisations, national governments, local authorities, and world class museums such as UNESCO, the Aga Khan Trust for Culture, the Sultanate of Oman, the City of Paris, and the Louvre. We design site-specific architectural 3D models; large-scale urban and rural 3D models; museum exhibitions; and training for local professionals.</p>
                        </div>
                    </div>
                </div>
                </section>
                <div class="about-row">
                <div class="about-item">
                    <a href="${about.link}" target="_blank">
                        <div class="about-content img-responsive">
                            <div class="about-content-description">
                                <br />
                                <br />
                                <div class="text-uppercase text-center">
                                <img src="${about.logo.black}" />
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