import { Tabs, Tab } from '@/components/Tabs'; // 根据你的文件路径调整导入

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-400 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Next.js Tab Component Example
        </h1>

        <Tabs initialActiveTabId="profile"> {/* 可以指定初始激活的 Tab */}
          <Tab id="profile" title="个人资料">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-700">编辑你的个人资料</h2>
              <p className="text-gray-600">在这里管理你的姓名、邮箱和联系方式。</p>
              <form className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="你的名字"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="你的邮箱"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  保存更改
                </button>
              </form>
            </div>
          </Tab>

          <Tab id="settings" title="账户设置">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-700">管理你的账户</h2>
              <p className="text-gray-600">修改密码、配置通知等。</p>
              <ul className="list-disc list-inside text-gray-700 mt-6 space-y-2">
                <li>更改密码</li>
                <li>管理通知偏好</li>
                <li>两步验证</li>
              </ul>
            </div>
          </Tab>

          <Tab id="billing" title="账单信息">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-700">查看你的账单</h2>
              <p className="text-gray-600">查看历史账单和付款方式。</p>
              <div className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50">
                <p className="font-semibold">暂无近期账单。</p>
                <p className="text-sm text-gray-500">所有账单都会在此处列出。</p>
              </div>
            </div>
          </Tab>
        </Tabs>

        <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">页面其他内容</h2>
          <p className="text-gray-600">
            你可以在 Tabs 组件下方放置页面的其他内容，它们会正常显示。
            Tabs 组件是完全独立的。
          </p>
        </div>
      </div>
    </main>
  );
}
