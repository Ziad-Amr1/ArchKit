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
    <section className="w-full bg-[var(--bg-main)]">
      <Slider {...settings}>
        {products.map((item) => (
          <div key={item.id}>
            <div className="h-[60vh] flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-[var(--text-primary)]">
                {item.title}
              </h1>

              <p className="text-[var(--text-secondary)] text-lg mb-6">
                Starting from{" "}
                <span className="font-medium text-[var(--text-primary)]">
                  ${item.price}
                </span>
              </p>

              <button className="border border-[var(--accent-primary)] text-[var(--accent-primary)] px-6 py-2 text-sm uppercase tracking-wide hover:bg-[var(--accent-primary)] hover:text-white transition">
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
