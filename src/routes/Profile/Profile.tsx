import React, { FunctionComponent } from 'react';

import Card from '../../components/Card';

import './Profile.css';
import ProfileForm from './ProfileForm';

const Profile: FunctionComponent = () => (
  <div className="flex-container profile-page">
    <Card header={<h3 className="form-title">Edit Profile</h3>} style={{ maxWidth: '484px' }}>
      <ProfileForm />
    </Card>
  </div>
);

export default Profile;
