function Encrypt({text}){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let ip = 0;
    let accumulator = 0;
    let input = "";
    while(ip < text.length){
        let instruction = text.charAt(ip);
        
        if(instruction == 'i'){
            if(accumulator > 26)
                accumulator = 26;
            accumulator++;
        }else if(instruction == 'o'){
            if(accumulator < 0)
                accumulator = 0;
            accumulator--;
        }else if(instruction == 'r'){
            if(accumulator > 26)
                accumulator = 26;
            accumulator = accumulator * 2;
        }else if(instruction == 'd'){
            if(accumulator > 26)
                accumulator = 26;
            input += alphabet[accumulator-1];
        }

        ip++;
    }

    return(
        <>
            Output: {input}
        </>
    );
}

export default Encrypt;