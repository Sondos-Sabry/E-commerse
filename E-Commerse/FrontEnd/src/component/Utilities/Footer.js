import React from 'react'
import '../Styles//footer.css'

const Footer = () => {

    return (<>
    <div class='footer'>
        <div class=" ">
            <footer class="text-center text-white">
                <div class="">
                    <section class="mt-5 section">
                        <div class="class-text row text-center d-flex justify-content-center pt-5">
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a  class="text-white" href="/">Home</a>
                                </h6>
                            </div>
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a  class="text-white" href="/">Products</a>
                                </h6>
                            </div>
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a  class="text-white"href="/">Login </a>
                                </h6>
                            </div>
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a class="text-white"href="/">Sign up</a>
                                </h6>
                            </div>
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a  class="text-white "href="/">Contact</a>
                                </h6>
                            </div>
                        </div>
                    </section>
                    <hr class="my-5" />
                    <section class="mb-5">
                        <div class="row d-flex justify-content-center class-text">
                            <div class="col-lg-8">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                    distinctio earum repellat quaerat voluptatibus placeat nam,
                                    commodi optio pariatur est quia magnam eum harum corrupti
                                    dicta, aliquam sequi voluptate quas.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section class="text-center mb-5">
                        <a href="" class="text-white me-4">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-github"></i>
                        </a>
                    </section>

                </div>

                <div
                    class="text-center p-3 copy"
                >
                    © 2020 Copyright:
                    <a class="text-white" href="/"
                    >ReactTeam.com</a>
                </div>

            </footer>

        </div>
        </div>
    </>


    )
}

export default Footer;