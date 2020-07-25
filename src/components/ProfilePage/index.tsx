import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar></Avatar>
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Gabriel Gasparino</h1>
        <h2>@gabsgasps</h2>

        <p>
          Developer at <a href="https://fabapp.com">@FabApp</a>{' '}
        </p>

        <ul>
          <li>
            <LocationIcon />
            Sâo Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            12 dezembro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>0</strong>
          </span>
          <span>
            <strong>0</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed/>
    </Container>
  );
};

export default ProfilePage;
