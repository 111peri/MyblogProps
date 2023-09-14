
import './App.css';
import { BlogHeader } from './Components/Header';
import { BlogEntry } from './Components/BlogEntry';
import MainPage from './pages/MainPage';
import {Footer} from "./Components/Footer";
import {TagList} from "./Components/TagList";
import Avatar from './assets/avatar_g.jpg';
import Bridge from './assets/bridge.jpg';


function App() {
    return (
        <div>
            <div className="w3-light-grey">


                <div className="w3-content" style={{ maxWidth: '1400px' }}>
                    <BlogHeader title="MY BLOG" author="unknown" />
                    <div className="w3-row">
                        <div className="w3-col l8 s12">
                            <BlogEntry
                                imageUrl={Bridge}
                                entryTitle="TITLE HEADING"
                                entryDate="April 7, 2014"
                                entryContent="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl..."
                                commentsCount="0"
                            />
                            <hr />
                            <BlogEntry
                                imageUrl={Avatar}
                                entryTitle="BLOG ENTRY"
                                entryDate="April 2, 2014"
                                entryContent="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl..."
                                commentsCount="2"
                            />
                        </div>
                    </div>
                    <MainPage/>

                    <TagList/>

                    <footer className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
                        <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">
                            Previous
                        </button>
                        <button className="w3-button w3-black w3-padding-large w3-margin-bottom">
                            Next »
                        </button>
                        <p>
                            Powered by{' '}
                            <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
                                w3.css
                            </a>
                        </p>
                    </footer>

                </div>
            </div>
        </div>
    );
}

export default App;
