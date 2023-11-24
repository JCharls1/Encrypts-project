
function BrainFck({text}){

    let tape = [0];
    let cell_index = 0;

    let user_input = [];
    let loop_table = {};

    let loop_stack = [];

    let ip = 0;

    let input = "";
    while(ip < text.length){
        let instruction = text.charAt(ip);
        
        if(instruction == '+'){
            tape[cell_index] += 1;
            if(tape[cell_index] == 256)
                tape[cell_index] = 0;
        }else if(instruction == '-'){
            tape[cell_index] -= 1;
            if(tape[cell_index] == -1)
                tape[cell_index] = 255;
        }else if(instruction == '<'){
            cell_index -= 1;
        }else if(instruction == '>'){
            cell_index += 1;
            if(cell_index == tape.length){
                tape.push(0);
            }
        }else if(instruction == '.'){
            input += String.fromCharCode(('a'.charCodeAt(0)) + tape[cell_index]);
        }

        ip++;
    }

    return(
        <>
            Output: {input}
        </>
    );
}

export default BrainFck;