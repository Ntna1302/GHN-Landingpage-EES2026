export type SurveyGroup = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  tool: string;
  target: string;
  targetHigh: boolean;
  startDate: string;
  endDate: string;
  requiresPassword: boolean;
  surveyLink: string;
};

export const surveyGroups: SurveyGroup[] = [
  {
    id: "1A",
    badge: "Nhóm 1A",
    title: "NVPTTT (Vùng) & NVGN (Freight)",
    subtitle: "Nhân viên phát triển thị trường tuyến và giao nhận Freight",
    tool: "App Driver + QR Bưu cục",
    target: "≥70%",
    targetHigh: false,
    startDate: "08/05",
    endDate: "20/05",
    requiresPassword: false,
    surveyLink: "#",
  },
  {
    id: "1B",
    badge: "Nhóm 1B",
    title: "Tài xế vận tải GXT & TXXT",
    subtitle: "Tài xế vận tải GXT và tài xế trục xuất trung tâm",
    tool: "App + QR Kho xuất phát",
    target: "≥70%",
    targetHigh: false,
    startDate: "08/05",
    endDate: "20/05",
    requiresPassword: false,
    surveyLink: "#",
  },
  {
    id: "2A",
    badge: "Nhóm 2A",
    title: "NV Vận hành Kho: NVXL, NVPH, Admin KHL",
    subtitle: "Nhân viên xử lý, phân hồng và admin kho hàng lớn",
    tool: "On-site KTC + Google Form",
    target: "≥70%",
    targetHigh: false,
    startDate: "08/05",
    endDate: "20/05",
    requiresPassword: false,
    surveyLink: "#",
  },
  {
    id: "2B",
    badge: "Nhóm 2B",
    title: "Quản lý tuyến đầu: AM/OM, Supervisor, TBC, TL",
    subtitle: "Quản lý tuyến đầu vận hành toàn quốc",
    tool: "Email + Landing Page + GTalk",
    target: "≥85%",
    targetHigh: true,
    startDate: "01/05",
    endDate: "07/05",
    requiresPassword: false,
    surveyLink: "#",
  },
  {
    id: "3A",
    badge: "Nhóm 3A",
    title: "NV Văn phòng & Hỗ trợ: Indirect HO",
    subtitle: "Nhân viên văn phòng và hỗ trợ gián tiếp tại Head Office",
    tool: "Email + GTalk + Mini App",
    target: "≥85%",
    targetHigh: true,
    startDate: "01/05",
    endDate: "07/05",
    requiresPassword: true,
    surveyLink: "#",
  },
  {
    id: "3B",
    badge: "Nhóm 3B",
    title: "Quản lý cấp trung & cao HO: Manager & Director",
    subtitle: "Quản lý cấp trung và cấp cao tại Head Office",
    tool: "Email cá nhân hóa + GTalk",
    target: "≥85%",
    targetHigh: true,
    startDate: "01/05",
    endDate: "07/05",
    requiresPassword: true,
    surveyLink: "#",
  },
];

export const groupPasswords: Record<string, string> = {
  "3A": "EES3A2026",
  "3B": "EES3B2026",
};
