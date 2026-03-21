
import React from 'react';
import { ShoppingCart, RefreshCw, Wrench, Settings } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "點將家電腦伴唱機 北區維修服務/展示中心",
  phone: "0932 916 726",
  phoneDisplay: "0932-916-726",
  address: "108 臺北市萬華區萬大路 277 巷 3 號",
  addressShort: "台北市萬華區萬大路277巷3號",
  mapUrl: "https://www.google.com/maps?q=108台北市萬華區萬大路277巷3號",
  // Added empty 'note' property to satisfy TypeScript inference for the UI components that access it.
  openingHours: [
    { day: "星期一", time: "11:00–21:00", note: "" },
    { day: "星期二", time: "11:00–21:00", note: "" },
    { day: "星期三", time: "11:30–21:00", note: "" },
    { day: "星期四", time: "12:00–21:30", note: "" },
    { day: "星期五", time: "11:30–21:00", note: "" },
    { day: "星期六", time: "13:00–18:00", note: "" },
    { day: "星期日", time: "休息", note: "" }
  ]
};

export const SERVICES = [
  {
    id: 'planning',
    title: '伴唱機買賣 / 整套規劃',
    desc: '家用客廳KTV、店家包廂規劃，設備搭配建議＋安裝設定＋操作教學。',
    longDesc: '不論是家用客廳想打造 KTV、或店家需要包廂/商用規劃，我們可依預算與空間提供建議，協助挑選伴唱機、擴大機、喇叭、麥克風等搭配。',
    features: ['家用 KTV 整套規劃', '店家/商用規劃', '安裝設定、音效調整'],
    icon: <ShoppingCart className="w-8 h-8" />,
    ctaText: '我要詢價',
    // 專業家庭影音規劃圖
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'update',
    title: '音響設備銷售',
    desc: '擴大機、喇叭、無線麥克風、效果器、混音器。電視/投影/點歌螢幕。線材、壁掛架、音源切換器等周邊。',
    longDesc: '專業音響設備銷售，提供擴大機、喇叭、無線麥克風、效果器、混音器；電視、投影機、點歌螢幕；以及線材、壁掛架、音源切換器等周邊配件，滿足家用與商用需求。',
    features: ['擴大機、喇叭、無線麥克風、效果器、混音器', '電視 / 投影 / 點歌螢幕', '線材、壁掛架、音源切換器等周邊'],
    icon: <RefreshCw className="w-8 h-8" />,
    ctaText: '我要詢價音響設備',
    // 音響設備
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'repair',
    title: '維修保養 / 故障排除',
    desc: '沒聲音、破音雜音、當機、點歌失靈、讀不到歌…可到店/到府諮詢。',
    longDesc: '伴唱機突然沒聲音、讀不到歌、唱到一半當機？我們具備專業技術，能快速診斷並解決各項音響與主機疑難雜症。',
    features: ['沒聲音、破音、雜音', '讀不到歌、點歌失靈', '麥克風回授調整'],
    icon: <Wrench className="w-8 h-8" />,
    ctaText: '我要報修',
    // 專業維修師工作環境
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'accessories',
    title: '周邊配件 / 升級',
    desc: '麥克風、音響、擴大機等配件升級，提升音質。',
    longDesc: '想提升音效或改善收音，我們提供專業麥克風、抗回授處理器等周邊配件，讓您的演唱體驗更上一層樓。',
    features: ['高階無線麥克風', '音響喇叭升級', '線材與音場優化'],
    icon: <Settings className="w-8 h-8" />,
    ctaText: '我要升級',
    // 專業麥克風特寫
    imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1200"
  }
];


export const FAQS = [
  { q: "音響設備購買/安裝需要多久？", a: "依設備種類與安裝複雜度不同，請先說明需求與空間狀況，我們評估後告知報價與工期。" },
  { q: "音響設備安裝一定要到店嗎？", a: "不一定。可先詢問是否能安排到府安裝（依地區與設備評估）。" },
  { q: "我不知道型號怎麼辦？", a: "拍機器外觀、背面貼紙或系統畫面來電或傳給我們，我們可協助辨識。" },
  { q: "維修會先報價嗎？", a: "會。先了解狀況後評估處理方式與費用，確認再進行。" },
  { q: "常見維修問題有哪些？", a: "沒聲音、破音雜音、當機、讀不到歌、點歌失靈、硬碟問題等都可諮詢。" },
  { q: "服務範圍到哪裡？", a: "以大台北地區（萬華為主）為核心，其他地區可先詢問。" },
  { q: "怎麼聯絡最快？", a: "直接來電並提供型號與照片，回覆最快。" }
];
