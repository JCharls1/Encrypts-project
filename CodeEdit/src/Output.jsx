const Output = ({output}) =>{

    if(output == "")
        output = "no input yet.";
    return(
        <>
            <div>
                <h1 className="font-Arial flex justify-around text-white m-2">
                    <div className="bg-gray-500 px-20 py-10">{output}</div>
                </h1>
            </div>

            
        </>
    );
}

export default Output;