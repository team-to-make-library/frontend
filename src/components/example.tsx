type ButtonProps = { children: React.ReactNode };

const Example = ({ children }: ButtonProps) => {
    return (
        <button className="border py-2 px-4 text-sm rounded-full">
            {children}
        </button>
    );
};

export default Example;
