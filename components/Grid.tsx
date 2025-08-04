import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="">
        {gridItems.map(
          (
            {
              title,
              description,
              id,
              className,
              img,
              imgClassName,
              titleClassName,
              spareImg,
            },
            i
          ) => (
            <BentoGridItem
              key={i}
              title={title}
              description={description}
              id={id}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
