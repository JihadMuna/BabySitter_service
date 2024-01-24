import React from "react";

export default function Email({ cardUser }) {
  return (
    <div>
      <a href={`mailto:mayoush89k@gmail.com?subject=role}&body=body`}>
        {" "}
        Mail Me !{" "}
      </a>
    </div>
  );
}
