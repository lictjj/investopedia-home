import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ProductCardProps {
  title: string
  images: Array<{src: string, alt: string}>
  price: string
  dailyIncome: string
  totalIncome: string
  cycle: string
  investLimit: string
  onBuy: () => void
}

export function ProductCard({
  title,
  images,
  price,
  dailyIncome,
  totalIncome,
  cycle,
  investLimit,
  onBuy
}: ProductCardProps) {
  return (
    <Card className="bg-purple-900/10 backdrop-blur-lg border border-purple-500/20 max-w-sm mx-auto w-full sm:w-auto">
      <CardHeader>
        <CardTitle className="text-xl text-purple-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <div className="space-y-2 text-gray-300">
            <p className="flex justify-between">
              <span>Price:</span>
              <span className="text-purple-400">{price}</span>
            </p>
            <p className="flex justify-between">
              <span>Daily Income:</span>
              <span className="text-purple-400">{dailyIncome}</span>
            </p>
            <p className="flex justify-between">
              <span>Total Income:</span>
              <span className="text-purple-400">{totalIncome}</span>
            </p>
            <p className="flex justify-between">
              <span>Cycle:</span>
              <span className="text-purple-400">{cycle}</span>
            </p>
            <p className="flex justify-between">
              <span>Invest Limit:</span>
              <span className="text-purple-400">{investLimit}</span>
            </p>
          </div>
          <Button 
            onClick={onBuy}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white"
          >
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}