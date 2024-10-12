import { FC } from 'react';
import {
  Panel,
  PanelHeader,
  Button,
  Group,
  Div,
  NavIdProps,
} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import bridge from '@vkontakte/vk-bridge';
import LogoItmoImage from '../assets/logo_itmo.png';
import './Home.css';

bridge.send('VKWebAppInit');

export const Home: FC<NavIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader>Главная</PanelHeader>
      <Group className="centered-container">
        <Div className="centered-content">
          <img 
            src={LogoItmoImage} 
            alt="LOGO" 
            className="responsive-img"
          />
          <p>Сервис-кошелек виртуальных наград с аватаром студента.</p>
          <Button 
            className="auth-button"
            size="l" 
            appearance="accent" 
            onClick={() => routeNavigator.push('profile')}
          >
            Авторизация
          </Button>
        </Div>
      </Group>
    </Panel>
  );
}
