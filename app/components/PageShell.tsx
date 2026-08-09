import ContactButton from "@/app/components/ContactButton";
import Nav from "@/app/components/Nav";
import ProfileSidebar from "@/app/components/ProfileSidebar";

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <div className="container relative mx-auto px-4 md:mt-8 md:grid md:grid-cols-12 md:gap-8">
        <ProfileSidebar />
        <div className="mt-4 md:col-span-9 md:mt-0">
          <Nav />
          {children}
        </div>
      </div>
      <ContactButton variant="mobile" />
    </>
  );
}
