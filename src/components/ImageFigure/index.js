import styles from './styles.module.css';

export default function ImageFigure({ src, alt, artist, copyright, rights, children }) {
  const metadata = [];
  if (artist) metadata.push(`Foto: ${artist}`);
  if (copyright) metadata.push(copyright);

  const caption = metadata.join(' | ');

  return (
    <figure className={styles.imageWithCaption}>
      {children ? children : <img src={src} alt={alt} loading="lazy" decoding="async" />}
      <figcaption className={styles.imageCaption}>
        {caption}
        {rights && (
          <>
            {' '}(<a href={rights} target="_blank" rel="noopener noreferrer">Lizenz</a>)
          </>
        )}
      </figcaption>
    </figure>
  );
}
