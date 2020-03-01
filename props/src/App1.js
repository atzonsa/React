import React from "react";

import ContactCard from "./ContactCard";

function App1() {
  return (
    <div className="contacts">
      <ContactCard
        imageUrl="http://placekitten.com/300/200"
        name="Mr. Whisherson"
        phone="(998) 715-6615"
        email="mr.whisherson@cat.meow"
      />
      <ContactCard
        imageUrl="http://placekitten.com/400/200"
        name="Fluffykins"
        phone="(708) 325-6225"
        email="fluffykins@cat.meow"
      />
      <ContactCard
        imageUrl="http://placekitten.com/400/300"
        name="Mr. Destroyer"
        phone="(652) 424-6432"
        email="mr.destroyer@cat.meow"
      />
      <ContactCard
        imageUrl="http://placekitten.com/200/100"
        name="Mr. Felix"
        phone="(533) 232-0652"
        email="mr.felix@cat.meow"
      />
    </div>
  );
}

export default App1;
