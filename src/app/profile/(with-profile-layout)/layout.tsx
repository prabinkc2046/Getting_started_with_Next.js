const ProfileLayOut = ({children}: {
    children: React.ReactNode,
}) => {
    return(
        <>
        <h1> Profile Spefic layout only to appear for display login and ssh key</h1>
        {children}
        </>
    )
};

export default ProfileLayOut;