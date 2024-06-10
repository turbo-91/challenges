import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Link href={`/volumes`}>
        One Ring to rule them all, One Ring to find them, One Ring to bring them
        all and in the darkness bind them
      </Link>
    </>
  );
}
