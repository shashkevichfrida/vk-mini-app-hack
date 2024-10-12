import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';
export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  PROFILE: 'profile',
  TASKS: 'tasks',
  WALLET: 'wallet',
  SHOP: 'shop'
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.PROFILE, `/${DEFAULT_VIEW_PANELS.PROFILE}`, []),
      createPanel(DEFAULT_VIEW_PANELS.TASKS, `/${DEFAULT_VIEW_PANELS.TASKS}`, []),
      createPanel(DEFAULT_VIEW_PANELS.WALLET, `/${DEFAULT_VIEW_PANELS.WALLET}`, []),
      createPanel(DEFAULT_VIEW_PANELS.SHOP, `/${DEFAULT_VIEW_PANELS.SHOP}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
