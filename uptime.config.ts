import type { PageConfig, WorkerConfig } from './types/config';

/* ===== 前端顯示（升級版） ===== */
const pageConfig: PageConfig = {
  title: '✈️ China Airlines ROBLOX Status',
  description: '即時服務狀態監控 / Real-time Service Status',

  theme: {
    primary: '#1a73e8',
    background: '#0f172a',
    card: '#111827',
    text: '#e5e7eb',
  },

  header: {
    logo: 'https://assets.rbxl.ccwu.cc/IMG_7021-removebg-preview.png',
    title: 'China Airlines ROBLOX',
    subtitle: 'Service Status Dashboard',
  },

  links: [
    {
      link: 'https://china-airlines.rbxl.ccwu.cc/',
      label: '🌐 主網站',
      highlight: true,
    },
    {
      link: 'https://discord.gg/BeR2Xn92pB',
      label: '💬 Discord',
    },
    {
      link: 'https://www.roblox.com/communities/33984181/China-Airlines#!/about',
      label: '🎮 Roblox 群組',
    },
  ],
};

/* ===== 監控設定（分類+顏色） ===== */
const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'main_website',
      name: '🌐 主網站',
      category: 'Website',
      method: 'GET',
      target: 'https://china-airlines.rbxl.ccwu.cc/',
      tooltip: '官方網站',
      expectedCodes: [200, 301, 302],
    },
    {
      id: 'assets_pages',
      name: '🖼️ 圖片資源',
      category: 'Assets',
      method: 'GET',
      target: 'https://assets.rbxl.ccwu.cc/IMG_7021-removebg-preview.png',
      tooltip: 'Cloudflare Pages',
      expectedCodes: [200],
    },
    {
      id: 'discord_invite',
      name: '💬 Discord',
      category: 'Social',
      method: 'GET',
      target: 'https://discord.gg/BeR2Xn92pB',
      tooltip: '邀請連結',
      expectedCodes: [200, 301, 302],
    },
    {
      id: 'roblox_group',
      name: '🎮 Roblox 群組',
      category: 'Social',
      method: 'GET',
      target: 'https://www.roblox.com/communities/33984181/China-Airlines#!/about',
      tooltip: '官方群組',
      expectedCodes: [200, 301, 302],
    },
  ],
};

/* ===== 維護 ===== */
const maintenances = [
  // 範例（可以之後用）
  /*
  {
    title: "系統維護",
    message: "主網站正在升級 V2",
    start: "2026-05-01T00:00:00Z",
    end: "2026-05-01T03:00:00Z"
  }
  */
];

export { pageConfig, workerConfig, maintenances };
