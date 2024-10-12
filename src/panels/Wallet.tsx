import { FC } from 'react';
import { NavIdProps, Panel, PanelHeader, PanelHeaderBack, 
  Placeholder,
  Tabbar,
  TabbarItem,
} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PersikImage from '../assets/persik.png';
import { Icon28UserCircleOutline, Icon28ServicesOutline, Icon28MoneyCircleOutline, Icon28StorefrontOutline } from '@vkontakte/icons';

export const Wallet: FC<NavIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
        Кошелёк
      </PanelHeader>
      <Placeholder>
        <img width={230} src={PersikImage} alt="Persik The Cat" />
      </Placeholder>
    
      <Tabbar style={{ marginTop: 0 }}>
        <TabbarItem onClick={() => routeNavigator.push('../profile')} text="Профиль">
          <Icon28UserCircleOutline />
        </TabbarItem>
        <TabbarItem onClick={() => routeNavigator.push('../tasks')} text="Задания">
            <Icon28ServicesOutline />
        </TabbarItem>
        <TabbarItem onClick={() => routeNavigator.push('../wallet')} text="Кошелёк">
            <Icon28MoneyCircleOutline />
        </TabbarItem>
        <TabbarItem onClick={() => routeNavigator.push('../shop')} text="Магазин">
            <Icon28StorefrontOutline />
        </TabbarItem>
    </Tabbar>
    </Panel>
  );
};
