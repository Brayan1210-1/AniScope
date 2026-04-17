
interface InputProps {
    type: string;
    label: string;
    placeHolder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputProps) {
    return (
        <div>
            <label className="" > {props.label}</label>
            <input className={`bg-white border-2 border-black `}
                id={props.label}
                placeholder={props.placeHolder}
                onChange={props.onChange}
                value={props.value}
                type={props.type}
            >
            </input>
        </div>
    )
}
