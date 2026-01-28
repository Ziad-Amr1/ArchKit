import Slider from "react-slick"
import products from "../../data/Products"

function Hero() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className="w-full bg-gray-100">
      <Slider {...settings}>
        {products.map((item) => (
          <div key={item.id}>
            <div className="h-[60vh] flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                {item.title}
              </h1>

              <p className="text-gray-600 text-lg mb-6">
                Starting from <span className="font-medium">${item.price}</span>
              </p>

              <button className="border border-gray-800 text-gray-800 px-6 py-2 text-sm uppercase tracking-wide hover:bg-gray-800 hover:text-white transition">
                View Kit
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default Hero
