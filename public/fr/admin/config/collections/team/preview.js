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
        const members = this.props.entry.toJS().data.members;
        const memberWidgets = this.props.widgetsFor('members');
        memberWidgets.map((el, index) => {
          const imgWidget = el && el.getIn(['widgets', 'img']);
            const img = this.props.getAsset(imgWidget && imgWidget.props.children.props.value, imgWidget && imgWidget.props.children.props.field);
            members[index].url = img.url;
        });

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
                      ${members
                        .map(
                            (el) => `
                            <div class="panel team-member-panel">
                                <div id="team-member-${el.id}" class="panel-collapse collapse text-justify" role="tabpanel">
                                <h3 class="text-uppercase text-bold">${el.name}</h3>
                                <br>
                                <h4 class="text-uppercase">${el.job.en}</h4>
                                <br>
                                <p class="text-justify">${el.description.en}</p>
                                </div>
                            </div>`
                        )
                        .join("")}
                    </div>
                  </div>
              </div>
              <div id="about-team-right" class="col-lg-6">
                <div id="team-img-container">
                ${members
                  .map(
                      (el, index) => `  
                        <div class="team-img" id="team-img-${el.id}">
                        <a role="button" 
                            data-toggle="collapse"
                            href="#team-member-${el.id}"
                            data-parent='#team-accordion'
                            aria-expanded="false"
                            >
                            <img src="${el.url}" class="img-responsive" />
                        </a>
                        </div>`
                  )
                  .join("")}
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