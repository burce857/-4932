import type {
  PageConfig,
  WorkerConfig,
  MaintenanceConfig,
} from './types/config';

/* ===== 新網域設定 ===== */
const NEW_DOMAIN = 'https://china-airlines.rbxl.us.ci';

/* ===== 前端顯示 ===== */
const pageConfig: PageConfig = {
  title: 'China Airlines ROBLOX Status',
  links: [
    {
      link: NEW_DOMAIN,
      label: '主網站',
      highlight: true,
    },
    {
      link: 'https://discord.gg/BeR2Xn92pB',
      label: 'Discord',
    },
    {
      link: 'https://www.roblox.com/communities/33984181/China-Airlines#!/about',
      label: 'Roblox 群組',
    },
  ],
};

/* ===== 監控設定 ===== */
const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'main_website',
      name: '主網站 / Main Website',
      method: 'GET',
      target: NEW_DOMAIN,
      tooltip: 'China Airlines ROBLOX 官方網站（新網域）',
      expectedCodes: [200, 301, 302],
    },
    {
      id: 'assets_pages',
      name: '圖片資源 / Assets',
      method: 'GET',
      target: 'https://assets.rbxl.ccwu.cc/IMG_7021-removebg-preview.png',
      tooltip: 'Cloudflare Pages 圖片資源',
      expectedCodes: [200],
    },
    {
      id: 'discord_invite',
      name: 'Discord 招募連結',
      method: 'GET',
      target: 'https://discord.gg/BeR2Xn92pB',
      tooltip: 'Discord 邀請連結狀態',
      expectedCodes: [200, 301, 302],
    },
    {
      id: 'roblox_group',
      name: 'Roblox 群組',
      method: 'GET',
      target: 'https://www.roblox.com/communities/33984181/China-Airlines#!/about',
      tooltip: 'Roblox 官方群組頁面',
      expectedCodes: [200, 301, 302, 403],
    },
  ],
};

/* ===== 維護 / 公告 ===== */
const maintenances: MaintenanceConfig[] = [
  {
    title: '系統公告 / System Notice',
    body:
      '因服務網域更換為 https://china-airlines.rbxl.us.ci，DNS 傳播期間可能導致部分使用者短暫無法連線或載入異常。若遇到問題，請稍後再試或重新整理頁面。造成不便，敬請見諒。',
    start: '2026-04-30T00:00:00+08:00',
    end: '2026-05-07T23:59:59+08:00',
    color: 'blue',
  },
];

export { pageConfig, workerConfig, maintenances };
