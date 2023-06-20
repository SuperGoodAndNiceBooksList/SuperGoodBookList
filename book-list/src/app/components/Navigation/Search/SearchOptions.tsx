import React,{useState,useContext} from "react";
import {OptionContext} from "@/context/Context";
import { usePathname } from "next/navigation";

export function SearchOptions () {
    const [option, setOption] = useContext(OptionContext);

    function SearchButton ( props: {name:string} ):JSX.Element{
        const {name} = props;
        if( !(name === "Title" || name==="Author" || name==="Genre") ){
            throw new Error("Dev error: name must be Title, Author, or Genre");
        };
        const [active, setActive] = useState(option && option.selection ? name === option.selection : false);
        const handleClick = () => {
            if(active){
                setOption({selection: ""})
            }else{
                setOption({selection: name})
            };
            setActive(!active);
        };
        const sharedBG = "hover:bg-dogWood-light active:dogWood-dark"
        const sharedPadding = "py-2 px-4"
        return(
            <button
                onClick={() => handleClick()}
                className={active ?
                    `bg-dogWood-default ${sharedBG} font-semibold text-white ${sharedPadding}`
                    :
                    `bg-transparent ${sharedBG} text-eerieBlack font-semibold hover:text-white ${sharedPadding} border border-dogWood-dark hover:border-transparent rounded`
                }
            >
               {name}
            </button>
        );
    }

    function ShouldRenderButtons(){
        if(usePathname() === "/favorites"){
            return;
        }
        return (
            <>
                <SearchButton name='Title' />
                <SearchButton name='Author' />
                <SearchButton name='Genre' />
            </>
        );
    }
    
    return (
        <div>
            {ShouldRenderButtons()}
        </div>
    )
}