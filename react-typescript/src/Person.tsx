import { useState } from "react";

interface PersonProps {
    name: string,
    age: number,
    hasFamily: boolean,
}

const Person = (props: PersonProps): JSX.Element => {

    const [isShowinfo, setShowInfo] = useState<boolean>(false);

    const [isShownBio, setShowBio] = useState<boolean>(false);

    const [bioinfo, setBioInfo] = useState<string | null>(null);

    const toggleInfo = (): void => {
        setShowInfo((prev) => !prev);
    };

    const toggleBio = (): void => {
        setShowBio((prev) => !prev);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBioInfo(event.target.value);
    }

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    // };

    return (
        <div>
            {isShowinfo && (
                <>
                    <p>Name: {props.name}</p>
                    <p>Age: {props.age}</p>
                    <p>Has Family: {props.hasFamily ? "YES" : "NO" }</p>
                </>
            )}
            <button 
                type="button"
                onClick={toggleInfo}>{isShowinfo ? "Скрий" : "Покажи"}</button>
            {isShownBio && (
                <>
                    <p>{props.name} {"Биография:"}</p>
                    <label htmlFor="person">{bioinfo}</label><br />
                    <input type="text" name="person" id="person" onChange={handleChange}/><br />
                </>
            )}
            <button // style sheet showld be created
                // style={{marginLeft: "30px"}} 
                type="button"
                onClick={toggleBio}>{isShownBio ? "Скрий Биография" : "Покажи Биография"}</button>
        </div>
    )
}

export default Person;