import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Mail, X, ArrowRight, RefreshCw } from 'lucide-react';
import ButtonWithSpinner from 'components/_DesignWrappers/ButtonWithSpinner';
import styles from './styles.scss';

const VerificationModal = ({
  isOpen,
  onClose,
  setIsLogin,
  validateOtp,
  otpValidationLoading,
  otpValidationSuccess,
  email = 'user@example.com',
}) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  useEffect(() => {
    if (otpValidationSuccess) {
      setIsLogin(true);
    }
  }, [otpValidationSuccess]);

  // 1. Create an array of refs to hold the input elements
  const inputRefs = useRef([]);

  if (!isOpen) return null;

  const handleChange = (value, index) => {
    // Only allow numbers
    if (/[^0-9]/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1); // Take only the last character entered
    setCode(newCode);

    // 2. Auto-focus next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // 3. Handle Backspace: move focus to previous input
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOtpValidation = (formData) => {
    console.log('otpvalidation formdata:', { formData });
    // validateOtp({ ...formData, otp: formData.otp.join('') });
    validateOtp({ otp: code.join('') });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button type="button" className={styles.closeBtn} onClick={onClose}>
          <X size={20} />
        </button>

        <div className={styles.modalHeader}>
          <div className={styles.iconBadge}>
            <Mail size={32} className={styles.iconMail} />
          </div>
          <h2>Verify your email</h2>
          <p>
            {"We've sent a 6-digit code to "}
            <strong>{email}</strong>
            . Please enter it below to confirm your
            identity.
          </p>
        </div>

        <div className={styles.codeInputGroup}>
          {code.map((data, index) => (
            <input
              key={index}
              // 4. Assign the ref to each input
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>

        <ButtonWithSpinner
          spinOn={otpValidationLoading}
          className={styles.verifyBtn}
          onClick={handleOtpValidation}
        >
          Verify Account
          <ArrowRight size={18} />
        </ButtonWithSpinner>

        <div className={styles.modalFooter}>
          <p>{'Didn\'t receive the code?'}</p>
          <button type="button" className={styles.resendLink}>
            <RefreshCw size={14} />
            Resend Code
          </button>
        </div>
      </div>
    </div>
  );
};

VerificationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  validateOtp: PropTypes.func.isRequired,
  setIsLogin: PropTypes.func,
  otpValidationLoading: PropTypes.bool,
  otpValidationSuccess: PropTypes.bool,
  email: PropTypes.string,
};

export default VerificationModal;
