import React, { useContext } from 'react';
import { InvoiceData } from '../../lib/InvoiceData';
import { FaCaretRight } from 'react-icons/fa';
import styles from './styles/invoicelist.module.css';
import { InvoiceContext } from '../../context/InvoiceContext';

function InvoiceList() {
  const [inputField, setInputField] = useContext(InvoiceContext);
  return (
    <div className={styles.invoicelistcontainer}>
      <div className={styles.invoicelist}>
        <div>
          {/* {inputField.map((data) => ( */}
          <div className={styles.invoicedata}>
            <div className={styles.invoicedatauser}>
              <div className={styles.invoiceno}>
                <span className={styles.sign}>#</span>
                teue
              </div>
              <div className={styles.todane}>Valkc </div>
              <div className={styles.todane}>ddjndk</div>
            </div>
            <div className={styles.price}>sh190.00</div>
            <div className={styles.status}>jdsud</div>
            <div className={styles.caret}>
              <FaCaretRight />
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
}

export default InvoiceList;