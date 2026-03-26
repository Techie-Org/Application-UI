import React, { useState } from 'react';
import { Music, Mail, Lock, User as UserIcon } from 'lucide-react';
// import { supabase } from '../lib/supabase';
// import {
//   Button,
//   LocalForm,
//   TextField,
// } from 'components/_DesignWrappers';
// import {
//   isBlankValidator,
//   emailValidator,
//   lengthCheckValidator,
// } from 'components/Form/Validators';
import VerificationModal from './OTPModal';
import styles from './styles.scss';
// import messages from '../SignIn/messages';

const Auth = ({ onSuccess, signInUser, intl }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin) {
      setOtpModalOpen(true);
    }
    // setLoading(true);

    // try {
    //   if (isLogin) {
    //     const { error } = await supabase.auth.signInWithPassword({
    //       email: formData.email,
    //       password: formData.password,
    //     });

    //     if (error) throw error;
    //     onSuccess();
    //   } else {
    //     const { data, error } = await supabase.auth.signUp({
    //       email: formData.email,
    //       password: formData.password,
    //     });

    //     if (error) throw error;

    //     if (data.user) {
    //       const { error: profileError } = await supabase
    //         .from('user_profiles')
    //         .insert({
    //           id: data.user.id,
    //           full_name: formData.fullName,
    //           phone: '',
    //         });

    //       if (profileError) throw profileError;
    //     }

    //     onSuccess();
    //   }
    // } catch (error) {
    //   alert(error.message || 'An error occurred');
    // } finally {
    //   setLoading(false);
    // }
  };


  // const handleSignInSubmit = (formDataSubmitted) => {
  //   console.log('signinsubmit formdata', formDataSubmitted);
  //   signInUser(formDataSubmitted);
  // };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBox}>
        <div className={styles.authCard}>
          <div className={styles.logoWrapper}>
            <div className={styles.iconCircle}>
              <Music className={styles.logoIcon} />
            </div>
          </div>

          <h2 className={styles.title}>
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className={styles.subtitle}>
            {isLogin
              ? 'Sign in to manage your bookings'
              : 'Sign up to start booking amazing artists'}
          </p>

          <form onSubmit={handleSubmit} className={styles.authForm}>
            {/* <LocalForm
              form="SignInForm"
              onSubmit={handleSignInSubmit}
              data-test-id="signInForm"
            >
              <div className={styles.inputWrapper}>
                <Mail className={styles.fieldIcon} />
                <TextField
                  model="email"
                  className={styles.inputField}
                  label={intl.formatMessage(messages.emailLabel)}
                  placeholder={intl.formatMessage(messages.emailPlaceholder)}
                  validators={[
                    isBlankValidator(intl.formatMessage(messages.emailError)),
                    emailValidator(intl.formatMessage(messages.invalidEmailError)),
                  ]}
                  fullWidth
                />
              </div> */}
            {!isLogin && (
              <div>
                <label className={styles.label}>Full Name</label>
                <div className={styles.inputWrapper}>
                  <UserIcon className={styles.fieldIcon} />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={styles.inputField}
                  />
                </div>
              </div>
            )}

            <div>
              <label className={styles.label}>Email Address</label>
              <div className={styles.inputWrapper}>
                <Mail className={styles.fieldIcon} />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={styles.inputField}
                />
              </div>
            </div>

            <div>
              <label className={styles.label}>Password</label>
              <div className={styles.inputWrapper}>
                <Lock className={styles.fieldIcon} />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  minLength={6}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={styles.inputField}
                />
              </div>
              {!isLogin && (
                <p className={styles.hintText}>Must be at least 6 characters</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={styles.submitBtn}
            >
              {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>
          {/* </LocalForm> */}

          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className={styles.toggleBtn}
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
      <div>
        {otpModalOpen && (
          <VerificationModal
            isOpen={otpModalOpen}
            onClose={() => setOtpModalOpen(false)}
            email={formData.email}
          />
        )}
      </div>
    </div>
  );
};

export default Auth;
