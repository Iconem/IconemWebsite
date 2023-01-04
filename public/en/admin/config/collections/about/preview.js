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
        const data = this.props.entry.toJS().data;
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log(data);
        const html = `
            <section id="about">
                <section>
                <div class="container">
                    <div class="about-row">
                        <div class="col-lg-10 col-lg-offset-1">
                                <h4 class="text-center text-uppercase text-bolder"> ABOUT ICONEM </h4>
                                <!-- <hr> -->
                            <br>
                            {{ with .Site.Params.about.description }}
                                <p class="text-justify">Founded in 2013, Iconem is an innovative startup that specialises in the digitisation of endangered cultural heritage sites in 3D. We work with international organisations, national governments, local authorities, and world class museums such as UNESCO, the Aga Khan Trust for Culture, the Sultanate of Oman, the City of Paris, and the Louvre. We design site-specific architectural 3D models; large-scale urban and rural 3D models; museum exhibitions; and training for local professionals.</p>
                            {{ end }}
                        </div>
                    </div>
                </div>
                </section>
                <div class="about-row">
                // {{ $baseUrl := .Site.Params.baseUrl}}
                // {{ range sort .Site.Data.about "order"}}
                // <div class="about-item">
                //     {{ if .internal }}
                //     <a href="{{$baseUrl}}{{ .link }}">
                //     {{ else }}
                //     <a href="{{ .link }}" target="_blank">
                //     {{ end }}
                //         <div class="about-content img-responsive">
                //             <div class="about-content-description">
                //                 <br />
                //                 <br />
                //                 <div class="text-uppercase text-center">
                //                 {{ if eq $type "research" }}
                //                 <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="{{ .logo.black }}" />
                //                 {{ else if eq $type "studio" }}
                //                 <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="{{ .logo.white }}" />
                //                 {{ end }}
                //                 </div>
                //                 <br />
                //                 <br />
                //                 <div class="text-justify">
                //                 {{ index .description $lang }}
                //                 </div>
                //             </div>
                //         </div>
                //     </a>
                // </div>
                // {{ end }}
                </div>
            </section>
        `;
        return h("div", {
            dangerouslySetInnerHTML: { __html: html },
        });
    },
});