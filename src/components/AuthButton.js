export default function AuthButton({buttonName, onClick, children}){
    return (
        <button onClick={onClick} className="text-lg w-full flex items-center justify-center space-x-2 border border-black rounded px-4 py-2">
                    {children}
                    <span>{buttonName}</span>
                  </button>
    )
}