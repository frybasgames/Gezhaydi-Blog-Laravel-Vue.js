<template>
    <div>
    <!-- ======================= Start Banner ===================== -->
    <div class="main-banner">
        <div class="container-fluid">
            <div v-if="getSliders != 0" class="col-md-12 col-lg-12 col-sm-12">
                    <carousel-3d  :space="700" :autoplay="true"   :width="600" :height="400" :autoplay-timeout="5000" :display="5" :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'"
                                 :clickable="false">
                        <slide v-for="(slide, i) in getSliders" :key="i" :index="i">
                            <figure>
                                <img   :src="'/upload/slider/'+slide.catId+'/'+slide.image">
                            </figure>
                        </slide>
                    </carousel-3d>

            </div>
        </div>
    </div>
    <!-- ======================= End Banner ===================== -->
    <!-- ======================= Search Form ===================== -->
<!--    <section class="banner-form-search radius-0">-->
<!--        <div class="image-cover page-title" style="background:url(/front/assets/img/banner-1.jpg) no-repeat;" data-overlay="6">-->
<!--            <div class="container">-->
<!--                <div class="row">-->
<!--                    <div class="col-lg-12 col-md-12">-->
<!--                        <div class="faq-search">-->
<!--                            <form>-->
<!--                                <input name="search" class="form-control" placeholder="Size Nasıl Yardımcı Olabiliriz?">-->
<!--                                <button type="submit"> <i class="ti-search "></i> </button>-->
<!--                            </form>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </section>-->
    <!-- ======================= Search Form ===================== -->
    <!-- ================= Travel start ========================= -->
    <section class="min">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="sec-heading center">
                        <p>Popular Travel Packages</p>
                        <h2>Featured Travel Packages</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- Single Tour Place -->
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="tour-simple-wrap style-2">
                        <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                        <div class="tour-simple-thumb">
                            <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                        </div>
                        <div class="tour-simple-caption">
                            <div class="ts-caption-left">
                                <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                <div class="ts-caption-rating">
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <span>40 Reviews</span>
                                </div>
                            </div>
                            <div class="ts-caption-right">
                                <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                            </div>
                        </div>
                        <div class="tours-simple-footer">
                            <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                            <div class="pr-big">
                                <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="tour-simple-wrap style-2">
                        <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                        <div class="tour-simple-thumb">
                            <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                        </div>
                        <div class="tour-simple-caption">
                            <div class="ts-caption-left">
                                <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                <div class="ts-caption-rating">
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <span>40 Reviews</span>
                                </div>
                            </div>
                            <div class="ts-caption-right">
                                <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                            </div>
                        </div>
                        <div class="tours-simple-footer">
                            <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                            <div class="pr-big">
                                <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="tour-simple-wrap style-2">
                        <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                        <div class="tour-simple-thumb">
                            <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                        </div>
                        <div class="tour-simple-caption">
                            <div class="ts-caption-left">
                                <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                <div class="ts-caption-rating">
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <span>40 Reviews</span>
                                </div>
                            </div>
                            <div class="ts-caption-right">
                                <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                            </div>
                        </div>
                        <div class="tours-simple-footer">
                            <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                            <div class="pr-big">
                                <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="tour-simple-wrap style-2">
                        <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                        <div class="tour-simple-thumb">
                            <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                        </div>
                        <div class="tour-simple-caption">
                            <div class="ts-caption-left">
                                <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                <div class="ts-caption-rating">
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <span>40 Reviews</span>
                                </div>
                            </div>
                            <div class="ts-caption-right">
                                <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                            </div>
                        </div>
                        <div class="tours-simple-footer">
                            <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                            <div class="pr-big">
                                <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="tour-simple-wrap style-2">
                        <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                        <div class="tour-simple-thumb">
                            <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                        </div>
                        <div class="tour-simple-caption">
                            <div class="ts-caption-left">
                                <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                <div class="ts-caption-rating">
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <span>40 Reviews</span>
                                </div>
                            </div>
                            <div class="ts-caption-right">
                                <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                            </div>
                        </div>
                        <div class="tours-simple-footer">
                            <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                            <div class="pr-big">
                                <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="tour-simple-wrap style-2">
                        <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                        <div class="tour-simple-thumb">
                            <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                        </div>
                        <div class="tour-simple-caption">
                            <div class="ts-caption-left">
                                <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                <div class="ts-caption-rating">
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <i class="ti-star filled"></i>
                                    <span>40 Reviews</span>
                                </div>
                            </div>
                            <div class="ts-caption-right">
                                <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                            </div>
                        </div>
                        <div class="tours-simple-footer">
                            <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                            <div class="pr-big">
                                <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <section class="min">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="sec-heading center">
                            <p>Popular Travel Packages</p>
                            <h2>Featured Travel Packages</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <!-- Single Tour Place -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="tour-simple-wrap style-2">
                            <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                            <div class="tour-simple-thumb">
                                <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                            </div>
                            <div class="tour-simple-caption">
                                <div class="ts-caption-left">
                                    <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                    <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                    <div class="ts-caption-rating">
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <span>40 Reviews</span>
                                    </div>
                                </div>
                                <div class="ts-caption-right">
                                    <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                                </div>
                            </div>
                            <div class="tours-simple-footer">
                                <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                                <div class="pr-big">
                                    <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="tour-simple-wrap style-2">
                            <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                            <div class="tour-simple-thumb">
                                <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                            </div>
                            <div class="tour-simple-caption">
                                <div class="ts-caption-left">
                                    <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                    <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                    <div class="ts-caption-rating">
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <span>40 Reviews</span>
                                    </div>
                                </div>
                                <div class="ts-caption-right">
                                    <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                                </div>
                            </div>
                            <div class="tours-simple-footer">
                                <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                                <div class="pr-big">
                                    <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="tour-simple-wrap style-2">
                            <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                            <div class="tour-simple-thumb">
                                <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                            </div>
                            <div class="tour-simple-caption">
                                <div class="ts-caption-left">
                                    <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                    <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                    <div class="ts-caption-rating">
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <span>40 Reviews</span>
                                    </div>
                                </div>
                                <div class="ts-caption-right">
                                    <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                                </div>
                            </div>
                            <div class="tours-simple-footer">
                                <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                                <div class="pr-big">
                                    <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="tour-simple-wrap style-2">
                            <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                            <div class="tour-simple-thumb">
                                <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                            </div>
                            <div class="tour-simple-caption">
                                <div class="ts-caption-left">
                                    <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                    <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                    <div class="ts-caption-rating">
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <span>40 Reviews</span>
                                    </div>
                                </div>
                                <div class="ts-caption-right">
                                    <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                                </div>
                            </div>
                            <div class="tours-simple-footer">
                                <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                                <div class="pr-big">
                                    <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="tour-simple-wrap style-2">
                            <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                            <div class="tour-simple-thumb">
                                <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                            </div>
                            <div class="tour-simple-caption">
                                <div class="ts-caption-left">
                                    <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                    <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                    <div class="ts-caption-rating">
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <span>40 Reviews</span>
                                    </div>
                                </div>
                                <div class="ts-caption-right">
                                    <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                                </div>
                            </div>
                            <div class="tours-simple-footer">
                                <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                                <div class="pr-big">
                                    <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="tour-simple-wrap style-2">
                            <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                            <div class="tour-simple-thumb">
                                <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                            </div>
                            <div class="tour-simple-caption">
                                <div class="ts-caption-left">
                                    <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                    <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                    <div class="ts-caption-rating">
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <span>40 Reviews</span>
                                    </div>
                                </div>
                                <div class="ts-caption-right">
                                    <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                                </div>
                            </div>
                            <div class="tours-simple-footer">
                                <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                                <div class="pr-big">
                                    <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="min">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="sec-heading center">
                            <p>Popular Travel Packages</p>
                            <h2>Featured Travel Packages</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <!-- Single Tour Place -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="tour-simple-wrap style-2">
                            <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                            <div class="tour-simple-thumb">
                                <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                            </div>
                            <div class="tour-simple-caption">
                                <div class="ts-caption-left">
                                    <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                    <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                    <div class="ts-caption-rating">
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <span>40 Reviews</span>
                                    </div>
                                </div>
                                <div class="ts-caption-right">
                                    <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                                </div>
                            </div>
                            <div class="tours-simple-footer">
                                <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                                <div class="pr-big">
                                    <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="tour-simple-wrap style-2">
                            <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                            <div class="tour-simple-thumb">
                                <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                            </div>
                            <div class="tour-simple-caption">
                                <div class="ts-caption-left">
                                    <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                    <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                    <div class="ts-caption-rating">
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <span>40 Reviews</span>
                                    </div>
                                </div>
                                <div class="ts-caption-right">
                                    <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                                </div>
                            </div>
                            <div class="tours-simple-footer">
                                <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                                <div class="pr-big">
                                    <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="tour-simple-wrap style-2">
                            <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                            <div class="tour-simple-thumb">
                                <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                            </div>
                            <div class="tour-simple-caption">
                                <div class="ts-caption-left">
                                    <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                    <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                    <div class="ts-caption-rating">
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <span>40 Reviews</span>
                                    </div>
                                </div>
                                <div class="ts-caption-right">
                                    <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                                </div>
                            </div>
                            <div class="tours-simple-footer">
                                <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                                <div class="pr-big">
                                    <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="tour-simple-wrap style-2">
                            <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                            <div class="tour-simple-thumb">
                                <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                            </div>
                            <div class="tour-simple-caption">
                                <div class="ts-caption-left">
                                    <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                    <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                    <div class="ts-caption-rating">
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <span>40 Reviews</span>
                                    </div>
                                </div>
                                <div class="ts-caption-right">
                                    <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                                </div>
                            </div>
                            <div class="tours-simple-footer">
                                <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                                <div class="pr-big">
                                    <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="tour-simple-wrap style-2">
                            <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                            <div class="tour-simple-thumb">
                                <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                            </div>
                            <div class="tour-simple-caption">
                                <div class="ts-caption-left">
                                    <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                    <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                    <div class="ts-caption-rating">
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <span>40 Reviews</span>
                                    </div>
                                </div>
                                <div class="ts-caption-right">
                                    <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                                </div>
                            </div>
                            <div class="tours-simple-footer">
                                <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                                <div class="pr-big">
                                    <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="tour-simple-wrap style-2">
                            <span class="onsale-section"><span class="onsale">Save 60%</span></span>
                            <div class="tour-simple-thumb">
                                <a href="tour-detail.html"><img src="front\assets\img\destination\des-2.jpg" class="img-fluid img-responsive" alt=""></a>
                            </div>
                            <div class="tour-simple-caption">
                                <div class="ts-caption-left">
                                    <span class="ts-caption-lation"><i class="ti-location-pin"></i>Sydney, Australia</span>
                                    <h4 class="ts-title"><a href="tour-detail.html">Explore Central Europe</a></h4>
                                    <div class="ts-caption-rating">
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <i class="ti-star filled"></i>
                                        <span>40 Reviews</span>
                                    </div>
                                </div>
                                <div class="ts-caption-right">
                                    <a href="#" class="tt-like"><i class="ti-heart"></i></a>
                                </div>
                            </div>
                            <div class="tours-simple-footer">
                                <div class="tour-time"><i class="ti-timer"></i>5 days</div>
                                <div class="pr-big">
                                    <h5 class="ts-price big"><span class="pr-small"><i class="ti-bolt cl-warning"></i>From</span>$1299.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <!-- ========================= End Travel Section ============================ -->

    <!-- ================= Articles start ========================= -->
    <section class="min">
        <div class="container">

            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="sec-heading center">
                        <p>Recent Articles</p>
                        <h2>Featured Blog & News</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- Single Blog -->
                <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
                    <article class="post-grid-layout">
                        <a href="blog-detail.html">
                            <div class="post-article-header">
                                <img src="assets\img\c-1.jpg" class="img-fluid mx-auto" alt="">
                                <span class="post-article-cat">Sport & Football</span>
                            </div>
                        </a>
                        <div class="post-article box-inner">
                            <div class="post-grid-caption-header">
                                <h4 class="entry-title"><a href="blog-detail.html">Whay Work with Bookly</a></h4>
                                <div class="post-short-des">
                                    simply dummy text of the printing and typesetting industry.
                                </div>
                            </div>
                        </div>
                        <div class="post-article-footer">
                            <div class="post-author">

                                By <img src="assets\img\user-2.jpg" class="img-fluid" alt="">
                                <a href="#">
                                    Admam Kushar
                                </a>
                            </div>
                            <span><i class="ti-eye"></i>320</span>
                        </div>
                    </article>
                </div>

                <!-- Single Blog -->
                <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
                    <article class="post-grid-layout">
                        <a href="blog-detail.html">
                            <div class="post-article-header">
                                <img src="assets\img\c-3.jpg" class="img-fluid mx-auto" alt="">
                                <span class="post-article-cat">Sport & Football</span>
                            </div>
                        </a>
                        <div class="post-article box-inner">
                            <div class="post-grid-caption-header">
                                <h4 class="entry-title"><a href="blog-detail.html">Benifits of Bookly Template</a></h4>
                                <div class="post-short-des">
                                    simply dummy text of the printing and typesetting industry.
                                </div>
                            </div>
                        </div>
                        <div class="post-article-footer">
                            <div class="post-author">

                                By <img src="assets\img\user-3.jpg" class="img-fluid" alt="">
                                <a href="#">
                                    Admam Kushar
                                </a>
                            </div>
                            <span><i class="ti-eye"></i>320</span>
                        </div>
                    </article>
                </div>

                <!-- Single Blog -->
                <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
                    <article class="post-grid-layout">
                        <a href="blog-detail.html">
                            <div class="post-article-header">
                                <img src="assets\img\c-4.jpg" class="img-fluid mx-auto" alt="">
                                <span class="post-article-cat">Sport & Football</span>
                            </div>
                        </a>
                        <div class="post-article box-inner">
                            <div class="post-grid-caption-header">
                                <h4 class="entry-title"><a href="blog-detail.html">Whay Purchage Bookly Template</a></h4>
                                <div class="post-short-des">
                                    simply dummy text of the printing and typesetting industry.
                                </div>
                            </div>
                        </div>
                        <div class="post-article-footer">
                            <div class="post-author">

                                By <img src="assets\img\user-4.jpg" class="img-fluid" alt="">
                                <a href="#">
                                    Admam Kushar
                                </a>
                            </div>
                            <span><i class="ti-eye"></i>320</span>
                        </div>
                    </article>
                </div>
            </div>

        </div>
    </section>
    <!-- ========================= End Articles Section ============================ -->


    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import {mapGetters} from "vuex";

export default {
    name: "Index",
    data(){
        return{
            slides:[],
            show:false,
        }

    },
    components: {
        Carousel3d,
        Slide
    },
    computed:{

        ...mapGetters(["getSliders"]),

    },
    created(){


    },
    mounted(){

    }
}
</script>

<style scoped>

</style>
