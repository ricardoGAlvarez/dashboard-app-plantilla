import {
  ChatBubbleOvalLeftEllipsisIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="flex items-center md:justify-between justify-end p-4">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300">
        <div className="">
          <MagnifyingGlassIcon className="w-6 h-6 ms-2" />
        </div>
        <input
          placeholder="Buscar..."
          className="w-[200px] p-2 bg-transparent rounded-xl"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="bg-white relative rounded-full w-9 h-9 flex items-center justify-center cursor-pointer p-2">
          <ChatBubbleOvalLeftEllipsisIcon />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Ricardo Alvarez</span>
          <span className="text-[14px] text-gray-500 text-right">Admin</span>
        </div>
        <div className="border-gray-500 border p-1 bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer">
          <UserIcon className="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
