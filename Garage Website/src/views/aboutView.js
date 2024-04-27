import { html, render } from "../utils/lib.js";

const aboutTemplate = html`<section id="about">
    <h2>Bienvenue chez [Nom de Votre Garage] – Soin Expert, Service Fiable</h2>
    <p>
        Chez [Nom de Votre Garage], nous sommes passionnés par les voitures et
        engagés à fournir le meilleur service de qualité à notre communauté.
        Fondé en [Année], notre garage est devenu un prestataire de services
        automobiles de premier plan dans [Emplacement]. Notre équipe de
        techniciens certifiés et expérimentés est dévouée à garantir les
        meilleures performances de votre véhicule, assurant ainsi votre sécurité
        et votre satisfaction sur la route.
    </p>

    <h3>Notre Mission</h3>
    <p>
        Notre mission est de fournir des services automobiles de première
        qualité dans un environnement convivial pour les clients. Nous croyons
        que l'entretien automobile doit être accessible, transparent et simple.
        Nous nous efforçons de dépasser les attentes de nos clients en offrant
        des solutions fiables et économiques pour tous types de véhicules.
    </p>

    <h3>Notre Vision</h3>
    <p>
        Être le prestataire de services automobiles de référence dans
        [Emplacement], reconnu pour notre intégrité, notre expertise et notre
        dévouement inébranlable envers nos clients. Nous envisageons un garage
        où chaque client part satisfait, sachant que son véhicule est entre les
        meilleures mains.
    </p>

    <h3>Pourquoi Nous Choisir ?</h3>
    <ul>
        <li>
            Techniciens Experts : Nos mécaniciens sont certifiés ASE et suivent
            une formation continue pour rester à jour avec les dernières
            technologies automobiles.
        </li>
        <li>
            Service de Qualité : Nous n'utilisons que des pièces et des
            équipements de la plus haute qualité pour garantir que votre voiture
            reçoive les meilleurs soins possibles.
        </li>
        <li>
            Transparence des Prix : Nous croyons en la transparence et vous
            fournirons des prix clairs et sans frais cachés.
        </li>
        <li>
            Soins Personnalisés : Nous écoutons vos besoins et fournissons des
            services sur mesure pour répondre à vos exigences spécifiques.
        </li>
        <li>
            Services Pratiques : Nous offrons une gamme de services pour rendre
            votre expérience aussi fluide que possible, y compris une navette de
            courtoisie, la réservation en ligne et une salle d'attente
            confortable avec Wi-Fi.
        </li>
    </ul>

    <h3>Notre Engagement Communautaire</h3>
    <p>
        Nous croyons à donner en retour à la communauté qui nous soutient. [Nom
        de Votre Garage] est fier de participer aux événements et initiatives
        locaux, de soutenir les œuvres de bienfaisance locales et de parrainer
        des équipes sportives de jeunes. Pour nous, il s'agit de construire des
        relations durables, sur la route comme en dehors.
    </p>

    <h3>Rencontrez Notre Équipe</h3>
    <p>
        Notre équipe est composée d'enthousiastes automobiles qui sont non
        seulement hautement qualifiés, mais aussi profondément passionnés par ce
        qu'ils font. Chaque membre de notre équipe apporte un ensemble unique de
        compétences et une attitude amicale, rendant vos visites à la fois
        agréables et productives.
    </p>
</section>`;


export function showAboutView() {
    render(aboutTemplate);
}