import { html, render } from "../utils/lib.js";

let contactTemplate = () => html` 
<section class="contact-section">
    <div class="container">
        <h1>Contact Us</h1>
        <p>
            Feel free to reach out to us through any of the following channels:
        </p>
        <div class="contact-info">
            <div class="contact-item">
                <h2>Address</h2>
                <p>1234 Street Rd,<br />Suite 567,<br />City, State, 89012</p>
            </div>
            <div class="contact-item">
                <h2>Phone</h2>
                <p>+1 234-567-8901</p>
            </div>
            <div class="contact-item">
                <h2>Email</h2>
                <p>support@lcgarage.com</p>
            </div>
        </div>
        <div class="map">
    </div>
</section>`;

export function showContactView() {
    render(contactTemplate());
}
