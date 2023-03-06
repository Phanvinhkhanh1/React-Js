function ProfileCard({ title, user, image }) {
    return (
        <div>
            <img src={image} alt="" />
            <div>ProfileCard !!! + {title} +" " + {user} </div>
        </div>
    );
}

export default ProfileCard;