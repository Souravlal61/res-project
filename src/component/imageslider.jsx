import { Carousel } from "flowbite-react"

export default function Flowimage(){
    return(


<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={5000}>
    <img
      src="image4.jpg"
      alt="..."
    />
    <img
      src="image2.jpg"
      alt="..."
    />
    <img
      src="image3.jpg"
      alt="..."
    />
    <img
      src="image5.webp"
      alt="..."
    />
    <img
      src="image1.jpg"
      alt="..."
    />
  </Carousel>
</div>
    )
}