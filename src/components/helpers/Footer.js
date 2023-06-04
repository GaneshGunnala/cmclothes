const Footer = () => {
    return (
        <div>
            <div class="container">
                <footer class="py-5">
                    <div class="row">
                        <div class="col-6 col-md-2 mb-3">
                            <h5>Information</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Store Locator</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">StockList</a></li>
                                <li class="nav-item mb-2"><a href="/contact" class="nav-link p-0 text-muted">Contact Us</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                            <h5>For Queries</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">xyz@gmail.com</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">+91 89034982748</a></li>
                            </ul>
                        </div>

                        {/* <div class="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div> */}

                        {/* <div class="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                    <button class="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div> */}
                        <div style={{display: "flex"}}>
                            <h6>Follow Us</h6>
                            <div class="icons">
                            <a href="https://instagram.com/cm_clothes_gallery?igshid=ZGUzMzM3NWJiOQ==" target="_blank" title="facebook"><img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-clipart-flat-facebook-logo-png-icon-circle-22.png" width="40" alt="facebook" /></a>
                            </div>
                            <div class="icons">
                            <a href="https://instagram.com/cm_clothes_gallery?igshid=ZGUzMzM3NWJiOQ==" target="_blank" title="pinterest"><img src="https://www.freepnglogos.com/uploads/pinterest-logo-emblem-png-11.png" width="40" alt="pinterest logo emblem png" /></a>
                            </div>
                            <div class="icons">
                            <a href="https://instagram.com/cm_clothes_gallery?igshid=ZGUzMzM3NWJiOQ==" target="_blank" title="insta"><img src="https://www.freepnglogos.com/uploads/instagram-icon-png/instagram-icon-suzem-limited-make-known-20.png" width="40" alt="instagram" /></a>
                            </div>
                            <div class="icons">
                            <a href="https://www.wedmegood.com/profile/Custom-Made-Clothes-Gallery-3269655" target="_blank" title=""><img src={require("../../images/icons/wedmegood.png")} width="40" height="40" alt="wedmegood" /></a>    
                            </div>
                            <div class="icons">
                            <a href="" target="_blank" title=""><img src="https://user-images.githubusercontent.com/42868728/70027410-164cdd00-15c8-11ea-9852-6982408e4ea6.png" width="40" alt="justdial" /></a>    
                            </div>
                            <div class="icons">
                            <a href="https://instagram.com/cm_clothes_gallery?igshid=ZGUzMzM3NWJiOQ==" target="_blank" title=""><img src="https://www.freepnglogos.com/uploads/youtube-circle-icon-png-logo-14.png" width="50" alt="youtube circle icon png logo" /></a>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between border-top">
                        <p>© 2022 CMCG, Inc. All rights reserved.</p>
                        <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                {/* <use xlink:href="#twitter"></use> */}
                                </svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                {/* <use xlink:href="#instagram"></use> */}
                                </svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                {/* <use xlink:href="#facebook"></use> */}
                                </svg></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;