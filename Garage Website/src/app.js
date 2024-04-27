import page from "../node_modules/page/page.mjs";
import { showAboutView } from "./views/aboutView.js";
import { showContactView } from "./views/contactView.js";
import { showHomeView } from "./views/homeView.js";


page("/",showHomeView);
page("/contact",showContactView)
page("/about",showAboutView)

page.start();