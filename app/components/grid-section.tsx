'use client'
import React from "react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { myDetails } from "@/data/data";

export function GridSection() {
    return (
        <BentoGrid className="mt-26">
            {myDetails.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                    id={item.id}
                    imgClassName={item.imgClassName}
                    titleClassName={item.titleClassName}
                    img={item.img}
                    spareImg={item.spareImg}
                />
            ))}
        </BentoGrid>
    );
}