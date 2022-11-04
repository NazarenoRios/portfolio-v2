import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'nazareno-rios',
    href: 'https://nrios.vercel.app/',
  },
  {
    social: 'email',
    link: 'nazarenolrios@gmail.com',
    href: 'mailto:nazarenolrios@gmail.com',
  },
  {
    social: 'github',
    link: 'Nazarenorios',
    href: 'https://github.com/Nazarenorios',
  },
  {
    social: 'linkedin',
    link: 'nazareno-rios',
    href: 'https://www.linkedin.com/in/nazareno-rios/',
  },
  // {
  //   social: 'twitter',
  //   link: 'iamnitinr',
  //   href: 'https://www.twitter.com/iamnitinr',
  // },
  // {
  //   social: 'instagram',
  //   link: 'nazarenorios1',
  //   href: 'https://www.instagram.com/nazarenorios1',
  // },
  {
    social: 'telegram',
    link: 'Nazareno',
    href: 'https://t.me/+542216567792',
  },
  {
    social: 'whatssap',
    link: 'Nazareno Rios',
    href: 'https://wa.me/+542216567792'
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
