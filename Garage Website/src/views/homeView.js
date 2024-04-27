import { html, render } from "../utils/lib.js";

let homeTemplate = () => html` <section class="hero">
        <div class="container">
            <div class="hero-box">
                <h1>Welcome to LC Garage</h1>
                <h2>Your Car's Best Friend</h2>
                <p>
                    Welcome to LC Garage, where we treasure your vehicle as much
                    as you do. Our team is committed to providing top-notch
                    service, ensuring that your car receives the best care
                    possible. From routine maintenance to more intensive
                    repairs, trust us to handle it all with expertise and
                    dedication.
                </p>
                <a href="/contact" class="btn"
                    ><button class="hero-btn" role="button">
                        Nous Trouver
                    </button></a
                >
            </div>
        </div>
    </section>
    <section class="section-cards">
        <div class="card">
            <a href="/services">
                <i class="fas fa-tools"></i>
                <!-- Icon for services -->
                <h2>Services</h3>
                <p>
                    Expert car maintenance and repair services to keep your vehicle
                    running smoothly.
                </p>
            </a>
        </div>
        <div class="card">
            <a href="/about">
                <i class="fas fa-info-circle"></i>
                <!-- Icon for about us -->
                <h2>About Us</h3>
                <p>
                    Learn about our passion for cars and commitment to providing
                    top-notch automotive services.
                </p>
            </a>
        </div>
        <div class="card">
            <a href="/contact">
                <i class="fas fa-phone-alt"></i>
                <!-- Icon for contact us -->
                <h2>Contact Us</h3>
                <p>
                    Get in touch with our friendly team for any inquiries or to
                    schedule your next service appointment.
                </p>
            </a>
        </div>
        <div class="card">
            <a href="/contact">
                <i class="fas fa-map-marker-alt"></i>
                <!-- Icon for location -->
                <h2>Location</h3>
                <p>
                    Visit us at our convenient location to experience expert
                    automotive care firsthand.
                </p>
            </a>
        </div>
    </section>`;

export function showHomeView() {
    render(homeTemplate());
}
