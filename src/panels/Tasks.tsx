import { FC } from 'react';
import { Card, CardGrid, Group, NavIdProps, Panel, PanelHeader, PanelHeaderBack, 
  Tabbar,
  TabbarItem,
} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Icon28UserCircleOutline, Icon28ServicesOutline, Icon28StorefrontOutline } from '@vkontakte/icons';

export const Tasks: FC<NavIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
        Задания
      </PanelHeader>
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
      <Group>
        <CardGrid size="l">
          <Card mode="shadow" style={{ display: 'flex', padding: '16px', alignItems: 'center' }}>
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>
      <Tabbar style={{ marginTop: 0 }}>
        <TabbarItem onClick={() => routeNavigator.push('../profile')} text="Профиль">
          <Icon28UserCircleOutline />
        </TabbarItem>
        <TabbarItem onClick={() => routeNavigator.push('../tasks')} text="Задания" style={{ color: '#2688EB' }} >
            <Icon28ServicesOutline style={{ color: '#2688EB' }} />
        </TabbarItem>
        <TabbarItem onClick={() => routeNavigator.push('../shop')} text="Магазин">
            <Icon28StorefrontOutline />
        </TabbarItem>
    </Tabbar>
    </Panel>
  );
};