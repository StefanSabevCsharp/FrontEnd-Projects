import { html, render } from "../utils/lib.js";

let homeTemplate = () => html` <section class="hero">
    <div class="container">
        <div class="hero-box">
            <h1>Welcome to LC Garage</h1>
            <h2>Your Car's Best Friend</h2>
            <p>
                Welcome to LC Garage, where we treasure your vehicle as much as
                you do. Our team is committed to providing top-notch service,
                ensuring that your car receives the best care possible. From
                routine maintenance to more intensive repairs, trust us to
                handle it all with expertise and dedication.
            </p>
            <a href="/about" class="btn"
                ><button class="hero-btn" role="button">Learn More</button></a
            >
        </div>
    </div>
</section>`;

export function showHomeView() {
    render(homeTemplate());
}
