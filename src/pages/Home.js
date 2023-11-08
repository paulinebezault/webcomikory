
import NavColumn from '../components/NavColumn/NavColumn';
import LatestPagesCard from '../components/LatestPagesCard/LatestPagesCard'
import MailingListForm from '../components/MailingListForm/MailingListForm'
import '../style/index.css'


function Home() {
    return (
        <main>
            <section className="about-section">
                <h2 className="about-title">About</h2>
                <p className="summary">After a mix-up with their leases, two lesbians, Jaden and Riley, must learn to share a one-bedroom apartment.
                    Friendship, and eventually romance ensues!</p>
                <p className="summary-addendum">Lease Bound is a slice of life, lesbian love story, that I've been cooking up since 2017.
                    If you're looking for a slowburn romance, heartfelt emotional drama, and 0 tolerance for trans-brand homophobia, you've come to the right place!<br />
                    Happy reading </p>
            </section>
            <nav>
                <NavColumn />
                <div className="menu-image"></div>
            </nav>
            <section className="latest-pages">
                <h2 className="latestPages-title">Latest Pages</h2>
                <LatestPagesCard />
                <p className="updateInfo"> New pages every Sun + 1st Thurs of the month ~8pm (ACST)</p>
                <MailingListForm />
            </section>
        </main >
    )
}

export default Home