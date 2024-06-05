import Footer from "@/components/shared/Footer";
import OnboardingHeader from "@/components/shared/OnboardingHeader";


export default function OnboardingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="w-full">
            <OnboardingHeader />
            <main className="w-full">{children}</main>
            <Footer />
        </section>
    );
}