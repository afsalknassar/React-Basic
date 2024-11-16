

export default function Footer() {
    return (
        <>
          <div className="d-flex flex-column min-vh-100">
            {/* Rest of the content */}
            <div className="flex-grow-1">
              {/* Your main content goes here */}
            </div>
            <footer className="bg-dark text-center text-white">
              <div className="container p-4">
                {/* Section: Social media */}
                <section className="mb-4">
                  {/* Facebook */}
                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fab fa-facebook-f"></i>
                  </a>
      
                  {/* Twitter */}
                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fab fa-twitter"></i>
                  </a>
     
                  {/* Google */}
                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fab fa-google"></i>
                  </a>
      
                  {/* Instagram */}
                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fab fa-instagram"></i>
                  </a>
      
                  {/* Linkedin */}
                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
      
                  {/* Github */}
                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fab fa-github"></i>
                  </a>
                </section>
                {/* Section: Social media */}
      
                {/* Copyright */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  © 2020 Copyright:
                  <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
                {/* Copyright */}
              </div>
            </footer>
          </div>
        </>
      );
      
}
