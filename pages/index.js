import styles from "../styles/Home.module.css"
import Head from "next/head"
import Header from "@/components/Header"
import LotteryEntrance from "@/components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lottery app</title>
                <meta name="description" content="Smart contract lottery app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LotteryEntrance />
        </div>
    )
}
