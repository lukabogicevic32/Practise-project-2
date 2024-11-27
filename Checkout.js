import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  return (
    <form onSubmit={confirmHandler} className="needs-validation" noValidate>
      <div className="overflow-auto" style={{ maxHeight: '15rem' }}>
        <div className={`mb-3 ${!formInputsValidity.name ? 'was-validated' : ''}`}>
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameInputRef}
            className={`form-control ${formInputsValidity.name ? '' : 'is-invalid'}`}
            required
          />
          {!formInputsValidity.name && <div className="invalid-feedback">Please enter a valid name!</div>}
        </div>
        <div className={`mb-3 ${!formInputsValidity.street ? 'was-validated' : ''}`}>
          <label htmlFor="street" className="form-label">
            Street
          </label>
          <input
            type="text"
            id="street"
            ref={streetInputRef}
            className={`form-control ${formInputsValidity.street ? '' : 'is-invalid'}`}
            required
          />
          {!formInputsValidity.street && <div className="invalid-feedback">Please enter a valid street!</div>}
        </div>
        <div className={`mb-3 ${!formInputsValidity.postalCode ? 'was-validated' : ''}`}>
          <label htmlFor="postal" className="form-label">
            Postal Code
          </label>
          <input
            type="text"
            id="postal"
            ref={postalCodeInputRef}
            className={`form-control ${formInputsValidity.postalCode ? '' : 'is-invalid'}`}
            required
          />
          {!formInputsValidity.postalCode && (
            <div className="invalid-feedback">Please enter a valid postal code (5 characters long)!</div>
          )}
        </div>
        <div className={`mb-3 ${!formInputsValidity.city ? 'was-validated' : ''}`}>
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            id="city"
            ref={cityInputRef}
            className={`form-control ${formInputsValidity.city ? '' : 'is-invalid'}`}
            required
          />
          {!formInputsValidity.city && <div className="invalid-feedback">Please enter a valid city!</div>}
        </div>
      </div>
      <div className="d-flex justify-content-end gap-3">
        <button type="button" className="btn btn-outline-secondary" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-success">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
