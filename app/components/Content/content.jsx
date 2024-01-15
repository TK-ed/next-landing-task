"use client";
import Picture from "./Picture";
import Type from "./Type";

export default function Content() {
  return (
    <>
      <div className="relative z-10 flex h-72 min-h-[34rem]">
        <div className="flex-1 text-7xl background">
          <pre>The Future</pre>
          <pre>     of Tomorrow</pre>
        <div className="text-[#FFFFFF] text-3xl text-500 mb-2 mt-[10px]">
          <h2>
            <pre className="text-xl">
              There is something mysterious about the Life of a DEVELOPER!!
            </pre>
          </h2>
        </div>
          <Type />
        </div>
        <div className="flex-1">
          <Picture />
        </div>
      </div>
    </>
  );
}
