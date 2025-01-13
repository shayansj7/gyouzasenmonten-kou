import { useRouter } from "next/router";
import Image from "next/image";

export function About() {

    const router = useRouter();
    const isEnglish = router.pathname.startsWith('/en');

    return (
        <>
            <Image
                src="/images/gyoza-senmonten-kou.png"
                alt="Gyoza-senmonten-kou"
                className="img-fluid"
                width={400}
                height={300}
            />
            <h5>
                {
                    isEnglish ? `餃(KOU) is a gyoza specialty shop located in Tokorozawa City, Saitama Prefecture.
                    Our staff, passionate about gyoza, handle daily sourcing and preparation with care. Please give them a try!
                    餃(KOU) offers gyoza for takeout and nationwide shipping.
                    They are perfect as gifts!`
                    : `餃（KOU）は、埼玉県所沢市の餃子専門店です。
                    餃子愛溢れるスタッフが、毎日の仕入れ、仕込みを行っています。是非ご賞味ください。
                    餃（KOU）の餃子はお持ち帰り・全国発送も承っています。
                    お土産にも最適です。`
                }
            </h5>
        </>
    );
}