export default createClass({
    componentDidMount() {
        const { document, window } = this.props;
        const script = document.createElement("script");
        script.src = "/js/vendors.min.js";
        document.head.appendChild(script);

        var waitForJQuery = setInterval(() => {
            if (typeof window.$ != "undefined") {
                window.$(document).keyup(function (e) {
                  if (e.keyCode === 27) {

                    var closeButton = window.$('.iconem-modal.fade.in').first().find('.close-modal')[0];
                    if(closeButton) {
                      closeButton.click();
                    }
                  }
                  if (e.keyCode === 37) {

                    var currentlyOpenCarousel = window.$('.iconem-modal.modal.fade.in .owl-carousel').first();
                    currentlyOpenCarousel.trigger('prev.owl.carousel');
                  }
                  if (e.keyCode === 39) {

                    var currentlyOpenCarousel = window.$('.iconem-modal.modal.fade.in .owl-carousel').first();
                    currentlyOpenCarousel.trigger('next.owl.carousel');
                  }
                });

                window.toggleContent = () => {
                    var modal_content =
                        document.getElementsByClassName(
                            "modal-content"
                        );
                    var modal_hide_button =
                        document.getElementsByClassName(
                            "hide-modal-content"
                        );
                    var close_modal_button =
                        document.getElementsByClassName(
                            "close-modal"
                        );
                    for (var i = 0; i < modal_content.length; i++) {
                        modal_content[i].classList.toggle(
                            "modal-content-hidden"
                        );
                    }
                    for (
                        var i = 0;
                        i < modal_hide_button.length;
                        i++
                    ) {
                        modal_hide_button[i].classList.toggle(
                            "modal-content-hidden"
                        );
                    }
                    for (
                        var i = 0;
                        i < close_modal_button.length;
                        i++
                    ) {
                        close_modal_button[i].classList.toggle(
                            "modal-content-hidden"
                        );
                    }
                };

                window.goToFirstVideo = (project) => {
                    const projectModalCarousel = window
                        .$(
                            `#project-${project.modalID}-img-carousel`
                        )
                        .find(".owl-carousel");
                    const firstVideoIndex = project.img.length;
                    projectModalCarousel.trigger(
                        "to.owl.carousel",
                        [firstVideoIndex]
                    );
                };

                window.goToFirstModel = (project) => {
                    const projectModalCarousel = window
                        .$(
                            `#project-${project.modalID}-img-carousel`
                        )
                        .find(".owl-carousel");
                    let firstModelIndex = project.img.length;
                    if (project.video) {
                        firstModelIndex += project.video.length;
                    }
                    projectModalCarousel.trigger(
                        "to.owl.carousel",
                        [firstModelIndex]
                    );
                };

                window.goToFirstImage = (project) => {
                    const projectModalCarousel = window
                        .$(
                            `#project-${project.modalID}-img-carousel`
                        )
                        .find(".owl-carousel");
                    projectModalCarousel.trigger(
                        "to.owl.carousel",
                        [0]
                    );
                };
                clearInterval(waitForJQuery);
            }
        }, 100);
    },
    componentDidUpdate(){
        if (typeof this.props.window.$ != "undefined") {
            const { window } = this.props;
            var entry = this.props.entry.toJS();
            
            const video = this.props.widgetsFor('video').map((el, index) => {
                const videoFullWidget = el && el.getIn(['widgets', 'preview']);
                return this.props.getAsset(videoFullWidget && videoFullWidget.props.children.props.value, videoFullWidget && videoFullWidget.props.children.props.field);
            }).toJS();

            var projects = { [entry.slug]: entry.data };

            var modalCarouselConfig = {
                items: 1,
                loop: false,
                dots: true,
                video: true,
                lazyLoad: true,
                nav: false,
                onInitialized: function () {
                    var carousel = this.$element;
                    var carouselId = carousel
                        .parent()
                        .attr("id");
                    var projectId = carouselId.split("-")[1];
                    var project = projects[projectId];

                    carousel
                        .find(".owl-video-wrapper")
                        .each(function (index) {
                            var i =
                                (index +
                                    Math.floor(
                                        video.length +
                                            1 / 2
                                    )) %
                                video.length;
                            var previewContainer =
                                document.createElement("div");
                            previewContainer.classList.add(
                                "project-video-preview"
                            );
                            var img =
                                document.createElement("img");
                                img.src = video[i].url;
                            previewContainer.appendChild(img);
                            if (video[i].url)
                                this.appendChild(
                                    previewContainer
                                );
                        });

                    carousel.on(
                        "changed.owl.carousel",
                        (event) => {
                            const pageIndex = event.page.index;
                            const nbPageImg = project && project.img
                                ? project.img.length
                                : 0;
                            const nbPageVideo = project && project.video 
                                ? project.video.length
                                : 0;
                            const nbPageModels = project && project.models
                                ? project.models.length
                                : 0;
                            const pageStartImg = 0;
                            const pageStartVideo =
                                pageStartImg + nbPageImg;
                            const pageStartModels =
                                pageStartVideo + nbPageVideo;

                            const imgToggler = window.$(
                                `#project-${projectId}-img-carousel-toggler`
                            );
                            const videoToggler = window.$(
                                `#project-${projectId}-video-carousel-toggler`
                            );
                            const modelsToggler = window.$(
                                `#project-${projectId}-models-carousel-toggler`
                            );

                            if (pageIndex < pageStartVideo) {
                                imgToggler.removeClass(
                                    "collapsed"
                                );
                                videoToggler.addClass(
                                    "collapsed"
                                );
                                modelsToggler.addClass(
                                    "collapsed"
                                );
                            } else if (
                                pageIndex < pageStartModels
                            ) {
                                imgToggler.addClass(
                                    "collapsed"
                                );
                                videoToggler.removeClass(
                                    "collapsed"
                                );
                                modelsToggler.addClass(
                                    "collapsed"
                                );
                            } else {
                                imgToggler.addClass(
                                    "collapsed"
                                );
                                videoToggler.addClass(
                                    "collapsed"
                                );
                                modelsToggler.removeClass(
                                    "collapsed"
                                );
                            }
                        }
                    );
                },
            };

            const carousel = this.props.window.$(".owl-carousel");
            carousel.trigger("destroy.owl.carousel"); 
            carousel.owlCarousel(modalCarouselConfig);
        }
    },
    render: function () {
        const entry = this.props.entry.toJS().data;
        const modalID = entry.modalID;
        let img = this.props.widgetsFor('img').map((el, index) => {
            const imgSrcWidget = el && el.getIn(['widgets', 'src']);
            return this.props.getAsset(imgSrcWidget && imgSrcWidget.props.children.props.value, imgSrcWidget && imgSrcWidget.props.children.props.field);
        });

        const video = entry.video || [];
        const models = entry.models || [];
        const articleTitle = entry.articleTitle.en;
        const articleLocation = entry.articleLocation.en;
        const articleDate = entry.articleDate.en;
        const text = entry.text.en;
        const actors = entry.actors.en;

        const actorsWidgets = this.props.widgetsFor('actors');
        const logosWidgets = actorsWidgets.getIn(['widgets', 'logos']);
        const logosData = actorsWidgets.getIn(['data', 'logos']) || [];
        const logos = logosData.map(el => {
            return this.props.getAsset(el, logosWidgets.props.field);
        });

        const html = `
            <div class="iconem-modal modal in fade" id="portfolioModal" tabindex="-1" role="dialog" aria-hidden="false" style="display:block">
                <div class="modal-content col-sm-12 col-sm-offset">
                <div class="project-media-container">
                    <div class="project-media" id="project-${modalID}-img-carousel">
                        <div class="owl-carousel owl-theme preview-img-carousel">
                                ${img
                                    .map(
                                        (el) => `
                                    <div>
                                    <img src=${el.url} class="cover"> <div class="img-toolbar"> <div class="img-caption"> ©Iconem </div> </div> 
                                    </div>`
                                    )
                                    .join("")}
                                ${video
                                    .map(
                                        (el) => `
                                    <a class="owl-video" href="${el.src}"></a>
                                `
                                    ).join("")}
                                ${models
                                    .map(
                                        (el) => `
                                    <iframe width="100%" height="100%" src='${el}' frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="">
                                    </iframe>
                                    `
                                    )
                                    .join("")}
                        </div>
                    </div>
                </div>
                <div class="project-media-icons-container">
                    ${
                        video.length || models.length
                            ? `
                        <a role="button"
                            id="project-${modalID}-img-carousel-toggler"
                            data-parent='#project-${modalID}-media'
                            aria-expanded="true"
                            onclick="(function () { this.goToFirstImage({modalID: '${modalID}'}) })();">
                            <img src="/img/icons/img_black.webp" 
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Pictures" 
                            />
                        </a>
                        ${
                            video.length
                                ? `
                        <a role="button"
                            id="project-${modalID}-video-carousel-toggler"
                            data-toggle="collapse"
                            class="collapsed"
                            data-parent='#project-${modalID}-media'
                            aria-expanded="false"
                            onclick="(function () { this.goToFirstVideo({modalID: '${modalID}', img: {length: ${img.length}}}) })();">
                            <img src="/img/icons/video_black.webp"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Videos" 
                            />
                        </a>
                        `
                                : ``
                        }
                        ${
                            models.length
                                ? `
                        <a role="button"
                            id="project-${modalID}-models-carousel-toggler"
                            data-toggle="collapse"
                            class="collapsed"
                            data-parent='#project-${modalID}-media'
                            aria-expanded="false"
                            onclick="(function () { this.goToFirstModel({modalID: '${modalID}', img: {length: ${img.length}}, video: {length: ${video.length}}}) })();">
                            <img src="/img/icons/3ds_black.webp"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="{{ Models }}"
                            />
                        </a>
                        `
                                : ``
                        }
                    `
                            : ""
                    }    
                </div>
                </div>
                <div id="project-media-description" class="modal-content"> 
                
                <img src="/img/home/cross_white.webp" class="close-modal" data-dismiss="modal">
                <img src="/img/home/hide_white.webp" alt="" class="hide-modal-content" onclick='(function () { this.toggleContent() })();'>
                        
                <div class="col-sm-10 col-sm-offset-1 modal-body">
                    <div class="modal-fixed">
                        <h3 class="text-uppercase">${articleTitle}</h3>
                        
                            <div class="text-uppercase">${articleLocation}</div>
                        
                        
                            <div class="">${articleDate}</div>
                        
                        </div>
                    <div class="modal-scrollable text-center">
                        <div class="text-justify">${text}</div>
                        <hr />
                        
                        <div class="text-justify text-sm">
                            <strong></strong>
                            <span>${actors}</span>
                        </div>
                        <hr />
                        <div id="project-media-description-logos">
                            ${logos
                                .map(
                                    (el) => `
                                <img src="${el}" />
                            `
                                )
                                .join("")} 
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        `;
        return h("div", {
            dangerouslySetInnerHTML: { __html: html },
        });
    },
});