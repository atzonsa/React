import React from "react";

import ContactCard from "./ContactCard";

function App() {
  return (
    <div className="contacts">
      <ContactCard
        contact={{
          name: "Mr. Whisherson",
          imageUrl: "http://placekitten.com/300/200",
          phone: "(998) 715-6615",
          email: "mr.whisherson@cat.meow"
        }}
      />
      <ContactCard
        contact={{
          name: "Fluffykins",
          imageUrl: "http://placekitten.com/400/200",
          phone: "(708) 325-6225",
          email: "fluffykins@cat.meow"
        }}
      />
      <ContactCard
        contact={{
          name: "Mr. Destroyer",
          imageUrl: "http://placekitten.com/400/300",
          phone: "(652) 424-6432",
          email: "mr.destroyer@cat.meow"
        }}
      />
      <ContactCard
        contact={{
          name: "Mr. Felix",
          imageUrl: "http://placekitten.com/200/200",
          phone: "(533) 232-0652",
          email: "mr.felix@cat.meow"
        }}
      />
    </div>
  );
}

export default App;
