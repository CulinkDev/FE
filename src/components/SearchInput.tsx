import React from "react";
import Image from "next/image";

interface SearchInputProps {
  label: string;
  iconSrc: string;
  placeholder: string;
}

export default function SearchInput({
  label,
  iconSrc,
  placeholder,
}: SearchInputProps) {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <p className="font-semibold text-red-500 text-xl">{label}</p>
      <div className="flex items-center gap-3 bg-[#F5F5F5] py-3 px-4 rounded-full w-64">
        <Image src={iconSrc} alt={label} width={24} height={24} />
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 bg-transparent focus:outline-none text-gray-600 placeholder-gray-400"
        />
      </div>
    </div>
  );
}