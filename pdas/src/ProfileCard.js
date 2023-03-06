function ProfileCard(props) {
    const { title, user } = props;
    return (
        <div>
            <div>ProfileCard !!! + {title} +" " + {user} </div>
        </div>
    );
}

export default ProfileCard;