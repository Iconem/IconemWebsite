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
        const entry = this.props.entry.toJS().data;
        const imgWidget = this.props.widgetFor('img');
        const img = this.props.getAsset(imgWidget && imgWidget.props.value, imgWidget && imgWidget.props.field);

        const html = `
        <section id="team" style="background-color:white; padding:0;">
          <div class="container-fluid">
            <div class="row">
              <div id="about-team-left" class="col-lg-6">
                <div style="display:flex;justify-content: space-around;">
                    <!-- grow shrink basis -->
                    <div style="flex:1 1 100%;min-width:50%;">
                        <div>
                        <h3 class="text-center text-uppercase text-bolder section-title">
                            Our team
                        </h3>
                        <h4 class="text-center text-uppercase"></h4>
                        <br />
                        </div>
                        <p class="text-justify">Based in Paris, Iconem currently brings together a multidisciplinary team of about ten employees: architects, computer scientists, engineers, 3D graphic designers and archeologists whose strength lies in working together to solve the complex issue of safeguarding the historical and archeological heritage.</p>
                    </div>
                    <div class="panel-group team" id="team-accordion" role="tablist" aria-multiselectable="false">
                        <div class="panel team-member-panel">
                                <div id="team-member-${entry.id}" class="panel-collapse collapse in text-justify" role="tabpanel">
                                <h3 class="text-uppercase text-bold">${entry.name}</h3>
                                <br>
                                <h4 class="text-uppercase">${entry.job.en}</h4>
                                <br>
                                <p class="text-justify">${entry.description.en}</p>
                                </div>
                        </div>
                    </div>
                  </div>
              </div>
              <div id="about-team-right" class="col-lg-6">
                <div id="team-img-container">
                    <div class="team-img" id="team-img-${entry.id}">
                    <a role="button" 
                        data-toggle="collapse"
                        href="#team-member-${entry.id}"
                        data-parent='#team-accordion'
                        aria-expanded="false"
                        >
                        <img src="${img.url}" class="img-responsive" />
                    </a>
                    </div>
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