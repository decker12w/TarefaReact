import React from 'react';
import './index.css';

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '15px 30px',
    fontSize: '14px',
  },
  headerLink: {
    color: '#e8eaed',
    textDecoration: 'none',
    marginLeft: '20px',
  },
  main: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: '90px',
    fontWeight: 500,
    color: '#e8eaed',
    marginBottom: '30px',
  },
  searchContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '580px',
  },
  searchBar: {
    width: '100%',
    padding: '13px 45px',
    borderRadius: '24px',
    border: '1px solid #5f6368',
    backgroundColor: '#303134',
    color: '#e8eaed',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  buttonsContainer: {
    marginTop: '30px',
  },
  button: {
    backgroundColor: '#303134',
    border: '1px solid #303134',
    borderRadius: '4px',
    color: '#e8eaed',
    fontSize: '14px',
    margin: '0 5px',
    padding: '10px 16px',
    cursor: 'pointer',
  }
};

function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <a href="#gmail" style={styles.headerLink}>Gmail</a>
        <a href="#imagens" style={styles.headerLink}>Imagens</a>
      </header>

      <main style={styles.main}>
        <div style={styles.logo}>Google</div>
        
        <div style={styles.searchContainer}>
          <input type="text" style={styles.searchBar} />
        </div>

        <div style={styles.buttonsContainer}>
          <button style={styles.button}>Pesquisa Google</button>
          <button style={styles.button}>Estou com sorte</button>
        </div>
      </main>
    </div>
  );
}

export default App;