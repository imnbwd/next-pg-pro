'use client'; // 声明为客户端组件，因为使用了 useState

import React, { useState, Children, isValidElement, ReactNode } from 'react';

// 定义 Tab 组件的 Props 接口
interface TabProps {
  id: string; // 唯一标识符，用于激活状态和 key
  title: string; // 显示在 Tab 头部导航的标题
  children: ReactNode; // Tab 对应的内容
}

// Tab 组件本身不直接渲染任何东西，它只是一个数据容器
// 它的 props 会被 Tabs 父组件读取和使用
export function Tab({ children }: TabProps) {
  return <>{children}</>;
}

// 定义 Tabs 组件的 Props 接口
interface TabsProps {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]; // 接收多个 Tab 子组件
  initialActiveTabId?: string; // 可选，指定初始激活的 Tab ID
}

export function Tabs({ children, initialActiveTabId }: TabsProps) {
  // 确保 children 是一个数组，即使只有一个 Tab 组件
  const tabChildren = Children.toArray(children).filter(isValidElement) as React.ReactElement<TabProps>[];

  // 获取第一个 Tab 的 ID 作为默认激活状态
  const defaultTabId = tabChildren[0]?.props.id;

  // 使用 useState 管理当前激活的 Tab
  const [activeTabId, setActiveTabId] = useState<string>(initialActiveTabId || defaultTabId || '');

  // 如果 defaultTabId 改变了，更新 activeTabId，这在动态添加/删除 Tab 时有用
  // 但对于固定 Tab 列表，通常不需要
  // useEffect(() => {
  //   if (!tabChildren.some(tab => tab.props.id === activeTabId)) {
  //     setActiveTabId(defaultTabId || '');
  //   }
  // }, [tabChildren, activeTabId, defaultTabId]);


  return (
    <div className="w-full">
      {/* Tab 头部导航 */}
      <div role="tablist" className="flex border-b border-gray-200 bg-gray-50 rounded-t-lg overflow-hidden">
        {tabChildren.map((child) => {
          const { id, title } = child.props;
          const isActive = activeTabId === id;
          const tabId = `tab-${id}`;
          const panelId = `panel-${id}`;

          return (
            <button
              key={id}
              id={tabId}
              role="tab"
              aria-controls={panelId}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1} // 只有激活的 Tab 才能通过键盘 Tab 键选中
              onClick={() => setActiveTabId(id)}
              className={`
                px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                ${isActive
                  ? 'bg-white text-blue-600 border-b-2 border-blue-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }
              `}
            >
              {title}
            </button>
          );
        })}
      </div>

      {/* Tab 内容区 */}
      <div className="p-6 bg-white border border-t-0 border-gray-200 rounded-b-lg shadow-sm">
        {tabChildren.map((child) => {
          const { id, children: content } = child.props;
          const isActive = activeTabId === id;
          const tabId = `tab-${id}`;
          const panelId = `panel-${id}`;

          return (
            <div
              key={id} // 使用 id 作为 key
              id={panelId}
              role="tabpanel"
              aria-labelledby={tabId}
              hidden={!isActive} // 使用 hidden 属性来隐藏非激活内容，同时保证屏幕阅读器正确处理
              tabIndex={isActive ? 0 : -1} // 只有激活的面板才可通过键盘 Tab 键选中其内容
              className={isActive ? 'block' : 'hidden'} // 可选，为了更明确的视觉隐藏
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
