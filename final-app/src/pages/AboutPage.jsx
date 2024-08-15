import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AboutPage = () => {
  return  (
    <div className="container mt-4">
      {/* Cover Photo */}
      <div className="mb-4" style={{ height: '300px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
        <img
          src="https://mir-s3-cdn-cf.behance.net/user/276/0a2c8d163282077.5cff8d353a85f.jpg"
          alt="Cover"
          className="img-fluid"
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      

      {/* About Information */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title mb-3">About</h2>
          <p className="lead mb-4">
            Welcome to The Chennai Mobiles store! We offer a wide range of products to meet your needs. Our mission is to provide high-quality products and excellent customer service.
          </p>
          <p>
            Our team is dedicated to ensuring that you have the best shopping experience possible. If you have any questions or need assistance, feel free to contact us.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="card mb-4">
        <div className="card-body text-center">
          <h3 className="card-subtitle mb-3 text-muted">Contact Information</h3>
          <p className="card-text">
            <strong>Contact Number:</strong> <a href="tel:+15489881234" className="text-decoration-none">+1 548-988-1234</a>
          </p>
          <p className="card-text">
            <strong>Email Us:</strong> <a href="mailto:thechennaimobiles@email.com" className="text-decoration-none">thechennaimobiles@email.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
