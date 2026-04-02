import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import ProfileBanner from './Banner';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import ProfileDetails from './Details';
import ProfileEditForm from './EditForm';

const UserProfile = ({
  userProfile,
  updateProfile,
  toggleTheme,
  currentMode,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: userProfile?.name || '',
    phone: userProfile?.phone || '',
    gender: userProfile?.gender || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateProfile({ ...formData, email: userProfile.email });
    setIsEditing(false);
  };

  return (
    <div className={styles.profilePageContainer}>
      <div className={styles.profileCard}>
        <ProfileBanner avatarUrl={userProfile?.avatarUrl} />
        <div className={styles.profileContent}>
          <ProfileHeader
            name={userProfile?.name}
            avatarUrl={userProfile?.avatarUrl}
            isEditing={isEditing}
            onEditClick={() => setIsEditing(true)}
          />
          <ProfileStats
            email={userProfile?.email}
            currentMode={currentMode}
            toggleTheme={toggleTheme}
          />
          <div className={styles.formContainer}>
            {!isEditing ? (
              <ProfileDetails
                phone={userProfile?.phone}
                gender={userProfile.gender}
              />
            ) : (
              <ProfileEditForm
                formData={formData}
                onChange={handleChange}
                onSave={handleSave}
                onCancel={() => setIsEditing(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  userProfile: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    gender: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
  updateProfile: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  currentMode: PropTypes.oneOf(['light', 'dark']).isRequired,
};

export default UserProfile;
