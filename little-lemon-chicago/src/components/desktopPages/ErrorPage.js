import React from 'react';
import styles from '../../styles/components_styles/errorPage.module.scss';

const ErrorPage = () => {
  document.title = 'ERROR';

  return (
    <div className={styles.error_page} role="alert" aria-live="assertive">
      <iframe
        title="Error Animation"
        style={{ height: '40rem', width: '100%' }}
        src="https://lottie.host/embed/86242ca1-59fb-4e47-a211-8b63ea5538de/v2a9nLDwF4.json"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p role="status" aria-live="polite">
        Oops! Something went wrong. Please try again later.
      </p>
    </div>
  );
};

export default ErrorPage;
