import number1 from "../assets/numbers/chiffre-1.jpg";
import number2 from "../assets/numbers/chiffre-2.jpg";
import number3 from "../assets/numbers/chiffre-3.jpg";
import number6 from "../assets/numbers/chiffre-6.jpg";
import number7 from "../assets/numbers/chiffre-7.jpg";
import number8 from "../assets/numbers/chiffre-8.jpg";
import number9 from "../assets/numbers/chiffre-9.jpg";
import guebwiller from "../assets/exhibitions/guebwiller/guebwiller.png";
import terres_communes from "../assets/exhibitions/terres_communes/terre commune.png";
import brass from "../assets/exhibitions/brass/brass.jpeg";

import brochette from "../assets/exhibitions/terres_communes/brochette.jpg";
import chien_trobo from "../assets/exhibitions/terres_communes/chien_tropbo.jpg";
import elcanasson from "../assets/exhibitions/terres_communes/elcanasson.jpg";
import hall from "../assets/exhibitions/terres_communes/hall.jpg";
import pose from "../assets/exhibitions/terres_communes/pose.jpg";

export const exhibitionlist = [
  {
    name: "Brass museum",
    id: "brass_museum",
    cover: brass,
    images: [number1, number2, number3],
    dates: "15 janvier - 20 fevrier 2023",
    lieu: "Chauffontaine - Belgium",
    descriptions: [
      "Lorem ipsum dolor sit amet. Sed necessitatibus unde et quaerat rerum sed minus iste eos expedita voluptas. Ea veniam esse et tempora nemo ut consequuntur fugiat ut nulla internos rem suscipit nihil ut rerum doloremque non minus vero. Ut illum dolor nam dolor asperiores et sunt nisi et quibusdam perspicia",
      "Vel harum distinctio non cupiditate quae et commodi harum. Aut amet eveniet ea sequi expedita aut illum totam ea fugiat velit. Et ipsa quia non nostrum Quis aut amet aperiam.",
    ],
    date: "2018",
  },
  {
    name: "Terres communes",
    id: "terres_communes",
    cover: terres_communes,
    images: [chien_trobo, brochette, elcanasson, hall, pose],
    dates: "10 mars - 15 avril 2023",
    lieu: "Lyon - France",
    descriptions: [
      "Ex animi voluptas in sequi dolore est voluptatem nobis qui voluptatem omnis. Est delectus dolor et voluptatem aperiam et fugiat libero ut tempora voluptatum. Adipisci libero quo dolorum ullam et sunt voluptate.",
      "Cum officiis distinctio sed rerum dolor. Rerum asperiores et labore necessitatibus eos sint nostrum.",
    ],
    date: "2019",
  },
  {
    name: "Guebwiller",
    id: "guebwiller",
    cover: guebwiller,
    images: [number1, number7],
    dates: "20 avril - 30 mai 2023",
    lieu: "Bruxelles - Belgique",
    descriptions: [
      "Ipsum dolor sit amet consectetur adipisicing elit. Similique, quos vel. Nisi libero incidunt voluptas dolorum, neque mollitia officia eos.",
      "Quas voluptates corrupti doloribus deserunt voluptatum labore. Aliquid cum tempora quasi, officia velit.",
    ],
    date: "2020",
  },
];
