import { dataheader, datacomment } from '../data/data'
import Atribution from './Atribution'
import CardComment from './CardComment'
import Cardheader from './Cardheader'

const Header = () => {
    return (
        <main className='mt-5 md:min-h-[600px] border-gray-300 relative'>
            <section className="flex flex-col md:flex-row md:h-[300px] md:place-items-center">
                <article className="text-center flex flex-col gap-4 mb-5 md:w-1/2 md:text-start ">
                    <h1 className='text-4xl text-VeryDarkMagenta font-bold px-11 leading-7 md:text-5xl md:px-0'>10,000+ of our users love our products.</h1>
                    <p className='text-DarkGrayishMagenta font-bold text-[0.8rem] md:text-xl'>We only provide great products combined with excellent customer service.
                        See what our satisfied customers are saying about our services.</p>
                </article>
                <article className="flex flex-col gap-2 md:w-1/2">
                    {
                        dataheader.map((item, index) => <Cardheader title={item.title}  index={index} key={item.title}/>)
                    }
                </article>
            </section>
            <section className="flex flex-col gap-2 mt-8 md:flex-row md:h-[300px] md:relative md:grid md:grid-cols-3">
                    {
                        datacomment.map ( (item, index) => <CardComment data={item} index={index}  key={item.name} />)
                    }
            </section>
            <Atribution />
        </main>
    )
}

export default Header