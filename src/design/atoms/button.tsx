

interface ButtonProps {
    name: string;
    style?: string;
    onClick?: () => void;
}



export function Button({ name, style }: ButtonProps) {

    return (
        <button className={`bg-yellow-300 border-black rounded-md p-1.5 hover:bg-red-300 ${style}`}>
            {name}
        </button>
    );

}

