Inter = require('next/font/google')

const inter = Inter({subsets: ['latin']})

const Home = () => {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            DNA Engineering Full-Stack Internship Home Assignment
        </main>
    );
}
