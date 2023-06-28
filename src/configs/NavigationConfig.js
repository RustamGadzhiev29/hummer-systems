import { 
  DashboardOutlined, 
  AppstoreOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  MailOutlined,
  MobileOutlined,
  ShoppingCartOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'sidenav.main',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'main-dashboards',
        path: `${APP_PREFIX_PATH}/main/dashboards`,
        title: 'sidenav.main.dashboard',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-planner',
        path: `${APP_PREFIX_PATH}/main/planner`,
        icon: AppstoreOutlined,
        title: 'sidenav.main.planner',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-catalog',
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: 'sidenav.main.catalog',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-catalog-goods',
            path: `${APP_PREFIX_PATH}/main/catalog/goods`,
            title: 'sidenav.main.catalog.goods',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-catalog-categories',
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: 'sidenav.main.catalog.categories',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-catalog-collections',
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            title: 'sidenav.main.catalog.collections',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-catalog-combo',
            path: `${APP_PREFIX_PATH}/main/catalog/combo`,
            title: 'sidenav.main.catalog.combo',
            breadcrumb: false,
            submenu: []
          },
        ]
      },
      {
        key: 'main-orders',
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: 'sidenav.main.orders',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'main-clients',
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: 'sidenav.main.clients',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-clients-list',
            path: `${APP_PREFIX_PATH}/main/clients/list`,
            title: 'sidenav.main.clients.list',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'main-clients-groups',
            path: `${APP_PREFIX_PATH}/main/clients/groups`,
            title: 'sidenav.main.clients.groups',
            breadcrumb: false,
            submenu: [],
          }
        ],
      },
      {
        key: 'main-banners',
        path: `${APP_PREFIX_PATH}/main/banners`,
        title: 'sidenav.main.banners',
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'main-promocodes',
        path: `${APP_PREFIX_PATH}/main/promocodes`,
        title: 'sidenav.main.promoCodes',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'main-offlines',
        path: `${APP_PREFIX_PATH}/main/offlines`,
        title: 'sidenav.main.offlines',
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-offlines-addresses',
            path: `${APP_PREFIX_PATH}/main/offlines/addresses`,
            title: 'sidenav.main.offlines.addresses',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'main-offlines-geofences',
            path: `${APP_PREFIX_PATH}/main/offlines/geofences`,
            title: 'sidenav.main.offlines.geofences',
            breadcrumb: false,
            submenu: [],
          }
        ],
      },
      {
        key: 'main-employees',
        path: `${APP_PREFIX_PATH}/main/employees`,
        title: 'sidenav.main.employees',
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'main-mailingList',
        path: `${APP_PREFIX_PATH}/main/mailingList`,
        title: 'sidenav.main.mailingList',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      }
    ]
  }
];

const settingsNavTree = [
  {
    key: 'settings',
    path: `${APP_PREFIX_PATH}/settings`,
    title: 'sidenav.settings',
    icon: AppstoreOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'settings-general',
        path: `${APP_PREFIX_PATH}/settings/general`,
        title: 'sidenav.settings.general',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'settings-mobile-app',
        path: `${APP_PREFIX_PATH}/settings/mobile-app`,
        title: 'sidenav.settings.mobile-app',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'settings-logs',
        path: `${APP_PREFIX_PATH}/settings/logs`,
        title: 'sidenav.settings.logs',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  }
];


const navigationConfig = [
  ...mainNavTree,
  ...settingsNavTree,
];

export default navigationConfig;