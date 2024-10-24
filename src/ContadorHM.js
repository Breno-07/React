import React, { useState } from 'react';

const ContadorHM = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [manCount, setManCount] = useState(0);
  const [womanCount, setWomanCount] = useState(0);

  const resetCounters = () => {
    setTotalCount(0);
    setManCount(0);
    setWomanCount(0);
  };

  return (
    <div style={styles.container}>
      <div style={styles.totalSection}>
        <h3 style={styles.title}>Total</h3>
        <button style={styles.resetButton} onClick={resetCounters}>
          &#x21bb;
        </button>
      </div>
      <input type="text" value={totalCount} readOnly style={styles.display} />

      <div style={styles.peopleSection}>
        {/* Seção de Homens */}
        <div style={styles.section}>
          <img src={`${process.env.PUBLIC_URL}/homem.png`} alt="Homem" style={styles.image} />
          <div style={styles.buttonsContainer}>
            <button style={styles.addButton} onClick={() => {
              setManCount(manCount + 1);
              setTotalCount(totalCount + 1);
            }}>+</button>
            <button style={styles.removeButton} onClick={() => {
              if (manCount > 0) {
                setManCount(manCount - 1);
                setTotalCount(totalCount - 1);
              }
            }}>-</button>
          </div>
          <h3>Homens</h3>
          <input type="text" value={manCount} readOnly style={styles.display} />
        </div>

        <div style={styles.section}>
          <img src={`${process.env.PUBLIC_URL}/mulher.png`} alt="Mulher" style={styles.image} />
          <div style={styles.buttonsContainer}>
            <button style={styles.addButton} onClick={() => {
              setWomanCount(womanCount + 1);
              setTotalCount(totalCount + 1);
            }}>+</button>
            <button style={styles.removeButton} onClick={() => {
              if (womanCount > 0) {
                setWomanCount(womanCount - 1);
                setTotalCount(totalCount - 1);
              }
            }}>-</button>
          </div>
          <h3>Mulheres</h3>
          <input type="text" value={womanCount} readOnly style={styles.display} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  totalSection: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '20px',
  },
  title: {
    fontSize: '26px',
    margin: '0',
    fontFamily: 'Arial, sans-serif',
  },
  resetButton: {
    fontSize: '24px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  display: {
    textAlign: 'center',
    fontSize: '24px',
    margin: '10px 0',
    width: '80px',
    height: '40px',
    border: '2px solid #000',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  peopleSection: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  image: {
    width: '80px',
    height: '80px',
  },
  buttonsContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  addButton: {
    fontSize: '24px',
    width: '50px',
    height: '50px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  removeButton: {
    fontSize: '24px',
    width: '40px',
    height: '40px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
  },
};

export default ContadorHM;
