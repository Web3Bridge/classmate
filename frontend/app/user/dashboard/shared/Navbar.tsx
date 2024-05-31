import React from "react";

export default function Navbar() {
  return (
    <div className="">
      <div className="flex align-middle justify-between py-6">
        <div>CLASSMATE+</div>

        <div className="flex gap-2">
          <div className="">
            <button>CN</button>
          </div>
          <div>
            <button>connect</button>
          </div>
        </div>
      </div>
    </div>
  );
}
