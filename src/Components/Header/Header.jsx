import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-6 border-b-4 max-w-6xl mx-auto'>
            <h1 className="text-5xl font-bold text-[#111]">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;