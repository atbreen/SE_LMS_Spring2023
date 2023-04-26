import React from "react";
import { media } from "./media.json";

export const RenderMedia = () => {
  return (
    <>
      <div className="media-table">
        {media.map((media, key) => {
          return (
            <div key={key}>
              {media.category +
                " , " +
                media.title +
                " ," +
                media.author +
                ", " +
                media.isbn +
                ", " +
                media.genre +
                ", " +
                media.copies}
            </div>
          );
        })}
      </div>
    </>
  );
};
