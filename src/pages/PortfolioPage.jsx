import portfolio from "../data/portfolio.json";
import "../styles/portfolio.css";

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-green-500 flex flex-col justify-center items-center overflow-y-hidden">
      <h1 className="text-6xl font-bold text-white text-center mt-24 sm:mt-12">
        OUR PORTFOLIO
      </h1>
      <div className="mb-2 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {portfolio.map((portfolio, index) => (
          <div key={index} className="card relative w-60 h-60">
            <div className="card_content w-full h-full text-center transition-transform duration-1000 text-white font-bold">
              <div className="card_front rounded-lg absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                <h2 className="absolute text-white text-4xl font-bold">
                  {portfolio.back.title}
                </h2>
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={portfolio.front.src}
                />
              </div>
              <div className="card_back rounded-lg absolute top-0 bottom-0 right-0 left-0 p-8 bg-green-600 flex items-center justify-center">
                <h2>{portfolio.back.description}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PortfolioPage;
