import { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadData, remove } from '@/store/actions';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

import styles from '@/styles/Form.module.css';

const Form: FC = () => {
  const pending = useSelector((state: any) => state.pending);
  const [cardNumber, setCardNumber] = useState<string>('');
  const balancesData = useSelector((state: any) => state.balancesData);
  const [cardNumberError, setCardNumberError] = useState<string>('');
  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.error);

  useEffect(() => {
    if (pending) {
      document.documentElement.classList.add('loading');
    } else {
      document.documentElement.classList.remove('loading');
    }

    return () => {
      document.documentElement.classList.remove('loading');
    };
  }, [pending]);

  const handleInputChange = useCallback(
    (event: { target: HTMLInputElement }) => {
      const input = event.target.value;

      setCardNumber(
        input
          .replace(/\W/gi, '')
          .replace(/(.{4})/g, '$1 ')
          .trim()
      );
    },
    [setCardNumber]
  );

  const handleSubmit = useCallback(
    (event: any) => {
      event.preventDefault();

      if (
        balancesData.find(
          (element: any) =>
            element.cardNumber === cardNumber.replaceAll(' ', '')
        )
      ) {
        setCardNumberError('Card already added');

        return;
      }

      dispatch(loadData(cardNumber.replaceAll(' ', '')));
    },
    [balancesData, cardNumber, dispatch, loadData]
  );

  const handleRemove = useCallback(
    (cardNumber: string) => {
      dispatch(remove(cardNumber));
    },
    [dispatch, remove]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.card}>
          <div className={styles.grid}>
            <h1>Balance checker</h1>
            <Icon type="logo" />
          </div>
          <label htmlFor="cardNumber">
            Enter your card number to check it’s balance.
          </label>
        </div>
        <div className={styles['input-wrapper']}>
          <input
            inputMode="numeric"
            maxLength={19}
            name="cardNumber"
            onChange={handleInputChange}
            pattern="[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}"
            placeholder="xxxx xxxx xxxx xxxx"
            required
            type="tel"
            value={cardNumber}
          />
        </div>
        {cardNumberError && <p className={styles.error}>{cardNumberError}</p>}
        {error && <p className={styles.error}>{error.message}</p>}
        <Button ariaLabel="Check balance" disabled={!!pending} type="submit">
          Check
        </Button>
      </form>
      {balancesData && (
        <ul className={styles.list}>
          {balancesData.map((element: any) => (
            <li key={element.cardNumber}>
              <span>Card ending in {element.cardNumber.slice(-4)}</span>
              <span>
                Balance:
                {element.currentBalance.currency === 'USD' ? '$' : null}
                {element.currentBalance.value}
              </span>
              <Button
                ariaLabel="Remove card"
                className={styles.remove}
                onClick={() => handleRemove(element.cardNumber)}
              >
                <Icon type="remove" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Form;
