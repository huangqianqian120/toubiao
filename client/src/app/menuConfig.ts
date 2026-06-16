import type { AppMenuItem, SectionId } from '../shared/types/navigation';

export const appMenuItems: AppMenuItem[] = [
  {
    id: 'technical-plan',
    label: '技术方案',
    description: '生成标书',
  },
  {
    id: 'existing-plan-expansion',
    label: '方案扩写',
    description: '优化扩充方案',
  },
  {
    id: 'document-knowledge-base',
    label: '知识库',
    description: '素材与模板',
  },
  {
    id: 'duplicate-check',
    label: '查重',
    description: '相似度检测',
  },
  {
    id: 'rejection-check',
    label: '废标检查',
    description: '响应完整性',
  },
  {
    id: 'export-format',
    label: '导出',
    description: 'Word 排版',
  },
  {
    id: 'resources',
    label: '资源',
    description: '工具下载',
  },
];

const developerMenuItems: AppMenuItem[] = [];

export function getAppMenuItems(developerMode: boolean): AppMenuItem[] {
  return developerMode ? [...appMenuItems, ...developerMenuItems] : appMenuItems;
}

export function getSectionOrder(developerMode: boolean): SectionId[] {
  return getAppMenuItems(developerMode).flatMap((item) => [item.id, ...(item.children?.map((child) => child.id) ?? [])]);
}

export function getAppMenuItemById(id: SectionId, developerMode: boolean): AppMenuItem | undefined {
  return getAppMenuItems(developerMode).find((item) => item.id === id);
}

export function getParentMenuItemBySection(section: SectionId, developerMode: boolean): AppMenuItem | undefined {
  return getAppMenuItems(developerMode).find((item) => item.id === section || item.children?.some((child) => child.id === section));
}
