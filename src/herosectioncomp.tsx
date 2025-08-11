

export default function Banner() {

  return (
    <div className="container-fluid px-2 py-4 position-relative rounded-5">
      <img src="/assets/casino-banner.jpg" alt="Live Casino" className="img-fluid w-100 rounded-5" />
      <div className="position-absolute bottom-0 start-0 w-100 blur-overlay"></div>
    </div>
  );
}