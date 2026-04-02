import React from 'react';
import { Save, X } from 'lucide-react';
import PropTypes from 'prop-types';
import { LocalForm } from 'components/_DesignWrappers';
import styles from '../styles.scss';

// Edit Form view
export const ProfileEditForm = ({ formData, onChange, onSave, onCancel }) => (
  <LocalForm form="profileUpdateForm" onSubmit={onSave}>
    <div className={styles.editingFields}>
      <div className={styles.inputField}>
        <label>Full Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className={styles.inputField}>
        <label>Phone Number</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={onChange}
          placeholder="e.g. +91 98765..."
        />
      </div>
      <div className={styles.inputField}>
        <label>Gender</label>
        <div className={styles.selectContainer}>
          <select name="gender" value={formData.gender} onChange={onChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.saveBtn}>
          <Save size={18} />
          Save Changes
        </button>
        <button type="button" className={styles.cancelBtn} onClick={onCancel}>
          <X size={18} />
          Cancel
        </button>
      </div>
    </div>
  </LocalForm>
);

ProfileEditForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    gender: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ProfileEditForm;
