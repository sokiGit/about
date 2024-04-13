import './Home.css'
import TestingModule from './Modules/Testing';
import { GoChevronDown } from "react-icons/go";

export default function Home() {
    return (
        <>
            <section className='mainTopSection'>
                <div className="flyingCards"></div>
                <h1 className='mainTopTitle'>about soki</h1>
                <h2 className='mainTopSoki'>soki</h2>
            </section>
            <main>
                <button className="listContents">
                    <p>
                        List of contents
                    </p>
                    <GoChevronDown />
                </button>
                <TestingModule/>
            </main>
        </>
    );
}