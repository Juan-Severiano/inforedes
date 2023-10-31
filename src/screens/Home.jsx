
export default function Home() {

  return (
    <>
      <section className="container d-flex home">
        <aside id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/1.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/img/3.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/img/2.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </aside>
        <aside className='container-half'>
          <h1><p>consertar seu computador </p><strong>nunca</strong><p className="easy"><span>foi tão fácil</span></p></h1>
        </aside>
      </section>
    </>
  )
}
