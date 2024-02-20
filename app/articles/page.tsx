import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import Link from "next/link";

export default function Articles() {
    const posts = allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
    const items = posts.map((post) => ({
      title: post.title,
      description: post.description,
      header: <img src={post.image} className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"/>,
      slug: post.slug
    }));

  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <Link href={item.slug}>
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
        </Link>
      ))}
    </BentoGrid>
  );
}
