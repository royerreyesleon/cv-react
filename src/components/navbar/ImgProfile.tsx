import profile from './../../assets/img/profile.jpg';

export const ImgProfile = () => {
  return (
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-none d-lg-block">
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src={profile}
          alt="Profile"
        />
      </span>
    </a>
  );
};
