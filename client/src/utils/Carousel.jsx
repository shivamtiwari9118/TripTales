import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Carousels = () => {
  return (
    <div className="w-full md:h-[400px] lg:h-[500px] px-10 mt-8">
      <Carousel className="w-full h-[100%]">
        <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img
                    className="h-[200px] md:h-[350px] lg:h-[450px] w-full object-cover rounded-lg"
                    src="/slider1.jpeg"
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img
                    className="h-[200px] md:h-[350px] lg:h-[450px] w-full object-cover rounded-lg"
                    src="/slider2.jpg"
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img
                    className="h-[200px] md:h-[350px] lg:h-[450px] w-full object-cover rounded-lg"
                    src="/slider3.jpg"
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img
                    className="h-[200px] md:h-[350px] lg:h-[450px] w-full object-cover rounded-lg"
                    src="/slider4.jpg"
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img
                    className="h-[200px] md:h-[350px] lg:h-[450px] w-full object-cover rounded-lg"
                    src="/slider5.jpeg"
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Carousels;
