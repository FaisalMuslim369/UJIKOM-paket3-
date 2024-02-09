export default function Input(props) {
    return (
        <div className="flex flex-col">
            <label htmlFor={props.name} className="font-bold mb-2">
                {props.name.substring(0,1).toUpperCase() + props.name.substring(1)}
            </label>
            <input 
                type={props.type || "text"} 
                defaultValue={props.value} 
                required={props.required || false}  
                id={props.name} 
                name={props.name} 
                className="border p-2 rounded" 
                placeholder={`Masukkan ${props.name}`} 
            />
        </div>
    );
}
