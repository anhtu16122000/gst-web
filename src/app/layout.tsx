import ClientProvider from "@/layouts/ClientProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import moment from "moment";
import "moment/locale/vi";
import "./globals.css";
moment.locale("vi");

type RootLayoutProps = {
  children: React.ReactNode;
  session: any;
};

export default async function RootLayout(props: RootLayoutProps) {
  const { children, session } = props;

  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="bg-[#ecf0f3]">
        <AntdRegistry>
          <ConfigProvider locale={viVN}>
            <ClientProvider session={session}>{children}</ClientProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
