function calculate (type, value){
    
    if(type === 'action' ){
        if(value === 'c'){
            document.getElementById('result').value = ''
        }

    } else if (type === 'value' ){
        document.getElementById('result').value +=  value 
    }
}