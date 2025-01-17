function Footer() {
  return (
    <footer>
      <div className=" border-t border-zinc-700 my-6"></div>
      <div className=" flex flex-col gap-2.5 items-center">
        <div className=" flex gap-2 items-center">
          <img
            className=" size-6"
            src="https://img.icons8.com/m_sharp/200/FA5252/arch-linux.png"
          />
          <span className=" text-xl font-semibold">Fap-stack</span>
        </div>
        <p className="text-sm ">© 2025 Gruz. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;