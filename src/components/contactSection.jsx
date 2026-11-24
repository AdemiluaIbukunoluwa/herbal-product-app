const ContactSection = () => {
  return (
    <section className="justify-center text-center p-20 border-t-2 border-white text-white" id="contact">
      <h2 className="text-5xl mb-4">Contact Us</h2>
      <p>
        Feel free to reach out to us for any inquiries or support regarding our herbal products.
      </p>
      <span id="contact-info">
        Email: support@herbalproducts.com | Phone: +123 456 7890
      </span>
      <span>
        Address: 123 Herbal Street, Wellness City, Country
      </span>
      <span>
        Business Hours: Mon-Fri 9:00 AM - 6:00 PM
      </span>
      <div>
        Follow Us: <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </section>
  );
};

export default ContactSection;