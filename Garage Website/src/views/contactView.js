import { html, render } from "../utils/lib.js";

let contactTemplate = () => html` <section class="contact-section">
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
    </div>
    <div class="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.0010059499346!2d6.6234554762629685!3d46.78458454437944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478dcf7c7b090969%3A0x8e75231784188d37!2sRue%20des%20Uttins%2030b%2C%201400%20Yverdon-les-Bains!5e0!3m2!1sen!2sch!4v1713552942604!5m2!1sen!2sch"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
</section>`;

export function showContactView() {
    render(contactTemplate());
}
