import { FC, useEffect, useState } from 'react';
import {
  Panel,
  PanelHeader,
  Group,
  Avatar,
  Header,
  Text,
  Tabbar,
  TabbarItem,
  NavIdProps,
  CardGrid,
  Card,
  HorizontalScroll,
  Image
} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import {
  Icon28UserCircleOutline,
  Icon28ServicesOutline,
  Icon28StorefrontOutline,
} from '@vkontakte/icons';
import bridge from '@vkontakte/vk-bridge';
import Fit from '../assets/be_itmo/be_fit.png';
import Eco from '../assets/be_itmo/be_eco.png';
import Friendly from '../assets/be_itmo/be_friendly.png';
import Healthy from '../assets/be_itmo/be_healthy.png';
import Open from '../assets/be_itmo/be_open.png';
import Pro from '../assets/be_itmo/be_pro.png';

bridge.send('VKWebAppInit');

export const Profile: FC<NavIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const user = await bridge.send('VKWebAppGetUserInfo');
        setPhotoUrl(user.photo_200);
        setUserName(`${user.first_name} ${user.last_name}`);
      } catch (error) {
        console.error('Ошибка при получении информации о пользователе:', error);
      }
    }

    fetchUserInfo();
  }, []);

  // Данные для карточек
  const tasks = [
    { title: 'be fit', progress: '13/20', background: Fit },
    { title: 'be friendly', progress: '8/20', background: Friendly },
    { title: 'be open', progress: '10/20', background: Open },
    { title: 'be pro', progress: '15/20', background: Pro },
    { title: 'be eco', progress: '7/20', background: Eco },
    { title: 'be healthy', progress: '9/20', background: Healthy },
  ];

  return (
    <Panel id={id}>
      <PanelHeader>Профиль</PanelHeader>
      <Group>
        <CardGrid size="l">
          <Card mode="shadow" style={{ display: 'flex', padding: '16px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Avatar size={80} src={photoUrl} style={{ marginRight: '16px' }} />
              <div>
                <Text weight="2" style={{ fontSize: '20px' }}>{userName}</Text>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <Text>Достижения</Text>
              <Text weight="2" style={{ fontSize: '18px' }}>12</Text>
              <Text>Задания</Text>
              <Text weight="2" style={{ fontSize: '18px' }}>5</Text>
            </div>
          </Card>
        </CardGrid>
      </Group>

      <Group>
        <CardGrid size="l">
          <Card mode="shadow" style={{ display: 'flex', padding: '16px', alignItems: 'center' }}>
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>

      <Group>
        <CardGrid size="l">
          <Card mode="shadow" style={{ display: 'flex', padding: '16px', alignItems: 'center' }}>
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>

      <Group header={<Header mode="secondary">Задания</Header>}>
        <HorizontalScroll>
          <div style={{ display: 'flex' }}>
            <Card style={{
                width: 300,
                height: 120,
                marginRight: 8,
            }}>
                <Image src={Fit}></Image>
            </Card >
            <Card style={{
                width: 300,
                height: 120,
                marginRight: 8,
                backgroundImage:tasks[0].background,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative', // Позиционируем текст внутри
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                  color: '#fff',
                  textAlign: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Полупрозрачный фон для контраста
                  padding: '10px',
                  borderRadius: '8px'
                }}>
                  <Text weight="2" style={{ fontSize: '16px' }}>{tasks[0].title}</Text>
                  <Text weight="2" style={{ fontSize: '14px' }}>{tasks[0].progress}</Text>
                </div>
            </Card>
          </div>
        </HorizontalScroll>
      </Group>

      <Group>
        <CardGrid size="l">
          <Card mode="shadow" style={{ display: 'flex', padding: '16px', alignItems: 'center' }}>
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>

      <Tabbar className="fixed-tabbar">
        <TabbarItem onClick={() => routeNavigator.push('../profile')} text="Профиль" style={{ color: '#2688EB' }} >
          <Icon28UserCircleOutline style={{ color: '#2688EB' }} />
        </TabbarItem>
        <TabbarItem onClick={() => routeNavigator.push('../tasks')} text="Задания">
          <Icon28ServicesOutline />
        </TabbarItem>
        <TabbarItem onClick={() => routeNavigator.push('../shop')} text="Магазин">
          <Icon28StorefrontOutline />
        </TabbarItem>
      </Tabbar>
    </Panel>
  );
};
