import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col">
    <Header role="public" />
    <main>{children}</main>
    <Footer />
  </div>
}
