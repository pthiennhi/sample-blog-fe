import React from "react";

export default function EditIcon({
  className = "",
  width = 24,
  height = 24,
}: Readonly<{
  className?: string;
  width?: number;
  height?: number;
}>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="Iconly/Light/Edit Square">
        <g id="Edit Square">
          <path
            id="Stroke 1"
            d="M11.4923 2.789H7.7533C4.6783 2.789 2.75031 4.966 2.75031 8.048V16.362C2.75031 19.444 4.6693 21.621 7.7533 21.621H16.5773C19.6623 21.621 21.5813 19.444 21.5813 16.362V12.334"
            stroke="#212121"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Stroke 3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.8278 10.9209L16.3008 3.44793C17.2318 2.51793 18.7408 2.51793 19.6718 3.44793L20.8888 4.66493C21.8198 5.59593 21.8198 7.10593 20.8888 8.03593L13.3798 15.5449C12.9728 15.9519 12.4208 16.1809 11.8448 16.1809H8.0988L8.1928 12.4009C8.2068 11.8449 8.4338 11.3149 8.8278 10.9209Z"
            stroke="#212121"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Stroke 5"
            d="M15.1652 4.60254L19.7312 9.16854"
            stroke="#212121"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
