import ClientProvider from "@/layouts/ClientProvider";
import { TinyColor } from "@ctrl/tinycolor";
import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import "./globals.css";

const colors1 = ["#6253E1", "#04BEFE"];
const colors2 = ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"];
const colors3 = ["#40e495", "#30dd8a", "#2bb673"];
const getHoverColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

type RootLayoutProps = {
  children: React.ReactNode;
  session: any;
};

export default function RootLayout(props: RootLayoutProps) {
  const { children, session } = props;
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* <link
          id="theme-css"
          href={`/themes/lara-light-blue/theme.css`}
          rel="stylesheet"
        ></link> */}
      </head>
      <body className="bg-gray-100">
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
                colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                  colors1,
                ).join(", ")})`,
                colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                  colors1,
                ).join(", ")})`,
                lineWidth: 0,
              },
            },
          }}
          locale={viVN}
        >
          <ClientProvider session={session}>{children}</ClientProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
