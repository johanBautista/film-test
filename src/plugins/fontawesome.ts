import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faCoffee,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUser,
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faCoffee,
  faMagnifyingGlass
);

export { FontAwesomeIcon };
