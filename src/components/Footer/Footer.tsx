import './FooterStyles.scss'
import WorkSpace from '../../assets/workspace.png'
// interface FooterProps {}

function Footer() {
  return (
    <section className="footer">
      <img src={WorkSpace} alt="WorkSpace Photo" />
      <div className='footer-text'>
        <h3>İletişim</h3>
        <p>
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2
          Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        </p>
        <div>
          Email:
          <a href="mailto:bilgi@tesodev.com">bilgi@tesodev.com</a>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.279747378674!2d28.888373176753387!3d41.019135271348965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0!5e0!3m2!1str!2str!4v1702110028698!5m2!1str!2str"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  )
}

export default Footer
