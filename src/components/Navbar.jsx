const Navbar = ({ onProfileClick }) => (
  <div className="flex justify-between items-center px-10 py-5 bg-[#B19470] text-white">
    <div className="text-2xl font-bold">FlatmateX</div>
    <div className="cursor-pointer" onClick={onProfileClick}>
      <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" fill="white" viewBox="0 0 24 24">
        <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </svg>
    </div>
  </div>
);
export default Navbar;
