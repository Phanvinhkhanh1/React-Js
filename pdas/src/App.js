import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
    return (
        <div>
            <div>Profile Digital Assistants</div>

            <ProfileCard title="Codeforces" user="Khanh161297" image={AlexaImage} />
            <ProfileCard title="Codejam" user="tourist" image={CortanaImage} />
            <ProfileCard title="Atcoder" user="Petrv" image={SiriImage} />
        </div>
    );
}

export default App;