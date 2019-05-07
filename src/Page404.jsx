import React from "react";

const Page404 = ({ location }) => (
  <main class="main--container__other">
    <img
      src="./iconfinder_cat_clean_182521.png"
      alt="cat with one leg up in the air"
    />
    <h2>
      No match found for <code>{location.pathname}</code>
    </h2>
    <br />
    <p>
      If you want to search for a city, try
      <br />
      <code>
        <a href={`http://katcodes.com/city-break/city${location.pathname}`}>
          http://katcodes.com/city-break/#/city{location.pathname}
        </a>
      </code>
    </p>
    <hr />
    <p>
      Icon made by <a href="https://www.iconfinder.com/iconka">Denis Sazhin</a>{" "}
      licensed by{" "}
      <a href="http://creativecommons.org/licenses/by/3.0/">CC 3.0 BY</a>
    </p>
  </main>
);

export default Page404;
