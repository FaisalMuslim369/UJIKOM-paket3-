import { Link } from "react-router-dom";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Measure from "react-measure";

export default function CobaMasonry() {
  const items = Array.from({ length: 100 }).map((_, index) => (
      <div className="p-2 space-x-4 space-y-4">
        <Measure
          key={index}
          bounds
          onResize={contentRect => {
            // Update the item's height based on contentRect.bounds.height
          }}
        >
          {({ measureRef }) => (
            <div className="bg-zinc-300 items-center justify-center text-center">
              <Link to={`/gambar/${index + 1}`}> {/* Menambahkan Link di sini */}
                <img
                  ref={measureRef}
                  src={`https://picsum.photos/200/${Math.floor(
                    Math.random() * (300 - 200 + 1) + 200
                  )}`}
                  style={{ width: "100%" }}
                  className="pt-5 pl-5 pr-5"
                />
              </Link>
              <p className="py-5">Judul Gambar {index + 1}</p>
            </div>
          )}
        </Measure>
      </div>
    ));
    return (
      <div className="App" style={{ padding: "0 60px" }}>
        <Masonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} 
        >
          {items}
        </Masonry>
      </div>
    );
}
